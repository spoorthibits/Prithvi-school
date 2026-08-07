"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactSection({
  imageSrc = "/student.png",
  imageAlt = "Student writing in notebook",
  schoolName = "Prithvi School",
}) {
  const [form, setForm] = useState({
    parentName: "",
    grade: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      // Replace with your actual submit endpoint / API route or n8n webhook
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus("success");
      setForm({ parentName: "", grade: "", mobile: "", email: "", message: "" });
    } catch (err) {
      console.error("Contact form submit failed:", err);
      setStatus("idle");
    }
  };

  return (
    <section className="w-full" style={{ background: "var(--cream)" }}>
      <div className="container-custom py-10 md:py-16">
        <div className="flex flex-col overflow-hidden rounded-2xl shadow-xl md:flex-row">
          {/* LEFT: photo */}
          <div className="relative h-64 w-full md:h-auto md:w-1/2 md:min-h-[560px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          {/* RIGHT: form panel */}
          <div
            className="w-full p-6 sm:p-10 md:w-1/2"
            style={{ background: "var(--dark-green)" }}
          >
            <h2 style={{ color: "var(--white)" }}>Contact us</h2>
            <p className="mt-2" style={{ color: "var(--blue)" }}>
              Admissions enquiries for {schoolName} — we usually reply within a day.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <input
                type="text"
                name="parentName"
                value={form.parentName}
                onChange={handleChange}
                placeholder="Parent name"
                required
                className="w-full rounded-md border-0 px-4 py-3 text-sm outline-none focus:ring-2"
                style={{
                  background: "var(--white)",
                  color: "var(--dark)",
                  "--tw-ring-color": "var(--orange)",
                }}
              />

              <select
                name="grade"
                value={form.grade}
                onChange={handleChange}
                required
                className="w-full rounded-md border-0 px-4 py-3 text-sm outline-none focus:ring-2"
                style={{
                  background: "var(--white)",
                  color: "var(--dark)",
                  "--tw-ring-color": "var(--orange)",
                }}
              >
                <option value="" disabled>
                  Grade
                </option>
                <option value="grade-1">Grade 1</option>
                <option value="grade-2">Grade 2</option>
                <option value="grade-3">Grade 3</option>
                <option value="grade-4">Grade 4</option>
                <option value="grade-5">Grade 5</option>

              </select>

              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Mobile number"
                required
                className="w-full rounded-md border-0 px-4 py-3 text-sm outline-none focus:ring-2"
                style={{
                  background: "var(--white)",
                  color: "var(--dark)",
                  "--tw-ring-color": "var(--orange)",
                }}
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email address"
                required
                className="w-full rounded-md border-0 px-4 py-3 text-sm outline-none focus:ring-2"
                style={{
                  background: "var(--white)",
                  color: "var(--dark)",
                  "--tw-ring-color": "var(--orange)",
                }}
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows={4}
                className="w-full resize-none rounded-md border-0 px-4 py-3 text-sm outline-none focus:ring-2"
                style={{
                  background: "var(--white)",
                  color: "var(--dark)",
                  "--tw-ring-color": "var(--orange)",
                }}
              />

              <button
                type="submit"
                disabled={status === "submitting"}
                className="text-cta mt-2 w-full rounded-md py-3 uppercase transition disabled:opacity-60"
                style={{ background: "var(--orange)", color: "var(--white)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--dark-green)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--orange)")}
              >
                {status === "submitting" ? "Submitting..." : "Submit"}
              </button>

              {status === "success" && (
                <p className="text-small" style={{ color: "var(--blue)" }}>
                  Thanks! We&apos;ll get back to you shortly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}