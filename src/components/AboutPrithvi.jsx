"use client";

// components/AboutPrithvi.jsx
// Responsive "About" section for Prithvi Global School — Next.js App Router
//
// Usage: import AboutPrithvi from "@/components/AboutPrithvi";  <AboutPrithvi />
//
// Uses the global tokens from your CSS file (--dark-green, --orange, --cream,
// Playfair Display / Montserrat, .container-custom) — no Tailwind color/font
// utility classes, so it inherits your site's look automatically.
//
// Marked "use client": it tracks whether the logo image fails to load (via
// useState) so it can fall back to the placeholder crest. In the App Router,
// a component that needs interactivity/state like this must be a Client
// Component — trying to pass a raw DOM event handler straight into a Server
// Component's next/image is what causes a "stringify" crash.
//
// Logo: drop your real logo file at /public/prithvi-logo.png (or .svg).
// Until it exists, the component automatically shows PlaceholderCrest below.

import { useState } from "react";
import Image from "next/image";

export default function AboutPrithvi() {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <section style={{ background: "var(--white)" }} className="w-full py-12 sm:py-16 lg:py-20">
      <div className="container-custom flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
        {/* Text column */}
        <div className="w-full lg:w-3/5">
          <h2 style={{ color: "var(--dark-green)" }} className="mb-6 !text-[28px] sm:!text-[36px]">
            At Prithvi Global School
          </h2>

          <p className="mb-4" style={{ color: "var(--dark)" }}>
            Prithvi Global School is built on the belief that education must
            do more than deliver academic results. For families exploring
            schools in the area, Prithvi focuses on shaping thinking,
            character, and confidence in a way that supports children
            throughout their school years and beyond. Parents searching for a
            well-rounded school often look for an environment where academic
            clarity, balanced learning, and strong values come together to
            support each child&apos;s development.
          </p>

          <p style={{ color: "var(--dark)" }}>
            At Prithvi, every child is recognised as a unique learner. Through
            close academic leadership, personalised attention, and
            classroom-focused teaching, the school works to build
            understanding and confidence within the school day itself. This
            approach helps reduce dependence on excessive external coaching
            while keeping learning meaningful, balanced, and student-focused.
          </p>
        </div>

        {/* Logo column */}
        <div className="flex w-full justify-center lg:w-2/5 lg:justify-end">
          <div className="relative h-40 w-40 sm:h-48 sm:w-48 lg:h-56 lg:w-56">
            {logoFailed ? (
              <PlaceholderCrest className="h-full w-full" />
            ) : (
              <Image
                src="/prithvi-logo.png"
                alt="Prithvi Global School logo"
                fill
                sizes="(max-width: 1024px) 12rem, 14rem"
                className="object-contain"
                onError={() => setLogoFailed(true)}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/*
  PlaceholderCrest — a simple stand-in logo (globe + open book) in Prithvi's
  green/orange palette, styled after the reference "shield" mark. Shown
  automatically above until /public/prithvi-logo.png exists.
*/
export function PlaceholderCrest({ className = "h-40 w-40" }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="92" fill="none" stroke="#075a36" strokeWidth="4" />
      <circle cx="100" cy="70" r="26" fill="none" stroke="#075a36" strokeWidth="3" />
      <path d="M74 70a26 26 0 0 1 52 0" fill="none" stroke="#075a36" strokeWidth="1.5" />
      <path d="M100 44v52M78 70h44" stroke="#075a36" strokeWidth="1.5" />
      <path
        d="M55 110c15 10 30 14 45 14s30-4 45-14v14c-15 10-30 14-45 14s-30-4-45-14z"
        fill="#f7941d"
      />
      <path d="M100 110v28" stroke="#ffffff" strokeWidth="2" />
      <path
        d="M50 150c12 8 30 12 50 12s38-4 50-12"
        fill="none"
        stroke="#075a36"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}