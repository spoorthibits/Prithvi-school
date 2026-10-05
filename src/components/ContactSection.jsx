"use client";

import { useState } from "react";
import Image from "next/image";

// Shared field styling — lifted out so every input/select/textarea stays
// in sync and we're not repeating the same style object five times.
const FIELD_STYLE = {
  background: "var(--white)",
  color: "var(--dark)",
  "--tw-ring-color": "var(--orange)",
};
const FIELD_CLASS =
  "w-full rounded-md border-0 px-4 py-3 text-sm outline-none focus:ring-2";

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
    <section className="w-full">
      <div className="container-custom py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="flex flex-col overflow-hidden rounded-2xl shadow-lg lg:flex-row">
          {/* LEFT: photo */}
          <div className="relative h-56 w-full sm:h-72 md:h-96 lg:h-auto lg:w-1/2 lg:min-h-[560px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
              priority
            />
          </div>

          {/* RIGHT: form panel */}
          <div
            className="w-full p-6 sm:p-8 md:p-9 lg:w-1/2 lg:p-10"
            style={{ background: "#196191" }}
          >
            <h2 style={{ color: "var(--white)" }}>Contact us</h2>
            <p className="mt-2 text-sm sm:text-base" style={{ color: "rgba(255,255,255,0.75)" }}>
              Admissions enquiries for {schoolName} — we usually reply within a day.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:gap-4">
              <input
                type="text"
                name="parentName"
                value={form.parentName}
                onChange={handleChange}
                placeholder="Parent name"
                required
                className={FIELD_CLASS}
                style={FIELD_STYLE}
              />

              <select
                name="grade"
                value={form.grade}
                onChange={handleChange}
                required
                className={FIELD_CLASS}
                style={FIELD_STYLE}
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

              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <input
                  type="tel"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="Mobile number"
                  required
                  className={FIELD_CLASS}
                  style={FIELD_STYLE}
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  required
                  className={FIELD_CLASS}
                  style={FIELD_STYLE}
                />
              </div>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows={4}
                className={`${FIELD_CLASS} resize-none`}
                style={FIELD_STYLE}
              />

              <button
                type="submit"
                disabled={status === "submitting"}
                className="text-cta mt-2 w-full rounded-md bg-[#ffffff] py-3 uppercase text-[var(--dark-green)] transition-colors duration-300 hover:bg-[var(--white)] disabled:opacity-60 disabled:hover:bg-[var(--orange)]"
              >
                {status === "submitting" ? "Submitting..." : "Submit"}
              </button>

              {status === "success" && (
                <p className="text-small" style={{ color: "var(--orange)" }}>
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