"use client";



import { useState } from "react";
import Image from "next/image";

export default function AboutPrithvi() {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <>
    <section style={{ background: "var(--white)" }} className="relative w-full overflow-hidden">
      <div className="container-custom flex flex-col lg:flex-row lg:items-stretch">
        {/* Text column */}
        <div className="w-full py-12 sm:py-16 lg:w-3/5 lg:py-20 flex flex-col justify-center lg:pr-16">
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

        {/* Image column — bleeds full section height, extends to viewport edge on the right */}
        <div className="relative h-72 w-full sm:h-96 lg:h-auto lg:w-2/5 lg:absolute lg:inset-y-0 lg:right-0">
          <div className="relative h-full w-full lg:w-[calc(50vw+2rem)] lg:ml-auto">
            {logoFailed ? (
              <PlaceholderCrest className="h-full w-full" />
            ) : (
              <Image
                src="/student.png"
                alt="Prithvi Global School student"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
                onError={() => setLogoFailed(true)}
              />
            )}
          </div>
        </div>
      </div>
    </section>
    </>

    
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