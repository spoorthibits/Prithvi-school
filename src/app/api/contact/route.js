import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const url = process.env.GOOGLE_SCRIPT_URL;
    if (!url) throw new Error("GOOGLE_SCRIPT_URL is not set (check .env.local and restart the server)");

    const body = await request.json();
    const { parentName, grade, mobile, email } = body;
    if (!parentName || !grade || !mobile || !email) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(body),
      redirect: "follow",
      cache: "no-store",
    });

    const text = await res.text();
    let result;
    try {
      result = JSON.parse(text);
    } catch {
      throw new Error("Script did not return JSON: " + text.slice(0, 200));
    }
    if (!result.ok) throw new Error(result.error || "Sheet write failed");

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { ok: false, error: process.env.NODE_ENV !== "production" ? String(err.message) : undefined },
      { status: 500 }
    );
  }
}