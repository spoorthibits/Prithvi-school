"use client";

import { useState } from "react";
import Image from "next/image";

const FIELD_CLASS =
  "w-full rounded-md border-0 bg-[#e5e5e5] px-4 py-3 text-sm text-[#4b5563] " +
  "placeholder:text-[#6b7280] outline-none focus:ring-2 focus:ring-white/70";

export default function ContactSection({
  imageSrc = "/student.png",
  imageAlt = "Student writing in notebook",
}) {
  const [form, setForm] = useState({
    parentName: "",
    grade: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || `Request failed (${res.status})`);
    }
      setStatus("success");
      setForm({ parentName: "", grade: "", mobile: "", email: "", message: "" });
    } catch (err) {
      console.error("Contact form submit failed:", err);
      setStatus("error");
    }
  };
  const GRADES = [
  { value: "nursery", label: "Nursery" },
  { value: "pre-primary-1", label: "Pre-Primary 1" },
  { value: "pre-primary-2", label: "Pre-Primary 2" },
  { value: "grade-1", label: "Grade 1" },
  { value: "grade-2", label: "Grade 2" },
  { value: "grade-3", label: "Grade 3" },
  { value: "grade-4", label: "Grade 4" },
  { value: "grade-5", label: "Grade 5" },
];

  return (
    <section className="w-full">
      <div className="container-custom py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="flex flex-col overflow-hidden lg:flex-row">
          {/* LEFT / TOP: photo */}
          <div className="relative aspect-[1/1] w-full sm:aspect-[4/3] lg:aspect-auto lg:min-h-[560px] lg:w-1/2">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
              priority
            />
          </div>

          {/* RIGHT / BOTTOM: form panel */}
          <div className="w-full bg-[#196191] px-6 py-10 sm:px-10 lg:w-1/2 lg:px-12 lg:py-12">
            <div className="mx-auto w-full max-w-md lg:mx-0">
              <h2
                className="text-4xl font-bold !text-white"
                style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
              >
                Contact us
              </h2>

              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                <input
                  type="text"
                  name="parentName"
                  value={form.parentName}
                  onChange={handleChange}
                  placeholder="Parent name"
                  required
                  className={FIELD_CLASS}
                />

                {/* Select with custom chevron */}
                <div className="relative">
                  <select
  name="grade"
  value={form.grade}
  onChange={handleChange}
  required
  className={`${FIELD_CLASS} appearance-none pr-10 ${
    form.grade === "" ? "text-[#9ca3af]" : ""
  }`}
>
  <option value="" disabled className="bg-[#e5e5e5] text-[#9ca3af]">
    Grade
  </option>
  {GRADES.map((g) => (
    <option
      key={g.value}
      value={g.value}
      className="bg-[#e5e5e5] text-[#9ca3af]"
    >
      {g.label}
    </option>
  ))}
</select>
                  <svg
                    className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4b5563]"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 8l5 5 5-5" />
                  </svg>
                </div>

                <input
                  type="tel"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="Mobile number"
                  required
                  className={FIELD_CLASS}
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  required
                  className={FIELD_CLASS}
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={4}
                  className={`${FIELD_CLASS} min-h-[110px] resize-none`}
                />

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-2 w-full rounded-sm bg-[#ffffff] py-3.5 text-sm font-bold uppercase tracking-wide text-[#196191] hover:text-[#ffffff] transition-colors duration-300 hover:bg-[#e88f1b] disabled:opacity-60 lg:w-[55%]"
                >
                  {status === "submitting" ? "Submitting..." : "Submit"}
                </button>

                {status === "success" && (
                  <p className="text-sm !text-[#438e42]">
                    Thanks! We&apos;ll get back to you shortly.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm !text-[#dc2626]">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}