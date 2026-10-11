"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

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

const FIELD_CLASS =
  "w-full rounded-md border-0 bg-[#e5e5e5] px-4 py-3 text-sm text-[#4b5563] " +
  "placeholder:text-[#6b7280] outline-none focus:ring-2 focus:ring-white/70";

const EMPTY_FORM = { parentName: "", grade: "", mobile: "", email: "", message: "" };

export default function ApplyModal({ open, onClose }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  // Close on Esc + stop the page behind from scrolling
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  // Reset the popup each time it closes
  useEffect(() => {
    if (!open) setStatus("idle");
  }, [open]);

  if (!open) return null;

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
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setStatus("success");
      setForm(EMPTY_FORM);
    } catch (err) {
      console.error("Apply form submit failed:", err);
      setStatus("error");
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Apply now"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-lg bg-[#196191] px-6 py-8 sm:px-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-2xl leading-none text-white/80 hover:text-white"
        >
          &times;
        </button>

        {status === "success" ? (
          <div className="py-8 text-center">
            <h2
              className="text-3xl font-bold !text-white"
              style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
            >
              Thank you!
            </h2>
            <p className="mt-3 text-sm !text-white">
              We&apos;ve received your details and will get back to you shortly.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 rounded-sm bg-white px-8 py-3 text-sm font-bold uppercase tracking-wide text-[#196191] transition-colors duration-300 hover:bg-[#e88f1b] hover:text-white"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2
              className="text-3xl font-bold !text-white"
              style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
            >
              Apply now
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
                  <option value="" disabled>
                    Grade
                  </option>
                  {GRADES.map((g) => (
                    <option key={g.value} value={g.value}>
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
                rows={3}
                className={`${FIELD_CLASS} min-h-[90px] resize-none`}
              />

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 w-full rounded-sm bg-white py-3.5 text-sm font-bold uppercase tracking-wide text-[#196191] transition-colors duration-300 hover:bg-[#e88f1b] hover:text-white disabled:opacity-60"
              >
                {status === "submitting" ? "Submitting..." : "Submit"}
              </button>

              {status === "error" && (
                <p className="text-sm !text-white">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}