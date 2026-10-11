import { NextResponse, after } from "next/server";

export const maxDuration = 30; // seconds the background work may run

async function postToScript(url, body) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(body),
      redirect: "follow",
      cache: "no-store",
      signal: controller.signal,
    });
    const text = await res.text();
    try {
      return JSON.parse(text);
    } catch {
      const title = text.match(/<title>([\s\S]*?)<\/title>/i)?.[1];
      return { ok: false, error: `Not JSON. Status ${res.status}. Title: ${title}` };
    }
  } catch (err) {
    return { ok: false, error: `Fetch failed: ${err.message}` };
  } finally {
    clearTimeout(timer);
  }
}

export async function POST(request) {
  try {
    const url = process.env.GOOGLE_SCRIPT_URL;
    if (!url) throw new Error("GOOGLE_SCRIPT_URL is not set");

    const body = await request.json();
    const { parentName, grade, mobile, email } = body;
    if (!parentName || !grade || !mobile || !email) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    // Runs AFTER the response is sent, so the visitor never waits for Google
    after(async () => {
      let result = await postToScript(url, body);
      if (!result?.ok) {
        console.error("Sheet attempt 1 failed:", result?.error);
        result = await postToScript(url, body);
      }
      if (!result?.ok) {
        // Last resort: the lead is saved in the Vercel logs so it isn't lost
        console.error("SHEET WRITE FAILED. LEAD DATA:", JSON.stringify(body), result?.error);
      }
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err.message);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}