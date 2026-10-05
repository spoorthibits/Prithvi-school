"use client";

import { useEffect } from "react";
import Link from "next/link";

const CTAS = [
  { label: "VISIT US", href: "/contact", bg: "bg-[#e88f1b] hover:bg-[#e88612]" },
  { label: "APPLY NOW", href: "/admissions", bg: "bg-[#248bcf] hover:bg-[#367a38]" },
];

export default function FloatingCTAs() {
  // Adds bottom padding to the page on mobile so the bar doesn't cover content
  useEffect(() => {
    document.body.classList.add("has-floating-cta");
    return () => document.body.classList.remove("has-floating-cta");
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 z-50 w-full md:left-auto md:right-0 md:top-[60%] md:bottom-auto md:w-auto md:-translate-y-1/2"
      style={{ willChange: "transform" }}
    >
      <div className="flex flex-row bg-white shadow-[0_12px_32px_rgba(0,0,0,0.45)] md:flex-col md:overflow-hidden md:rounded-l-2xl md:bg-transparent md:shadow-none">
        {CTAS.map((cta) => (
          <Link
            key={cta.href}
            href={cta.href}
            className={`flex h-[50px] flex-1 cursor-pointer items-center justify-center text-[15px] font-semibold tracking-wide text-white transition-colors duration-300 md:h-[100px] md:w-[44px] md:flex-none md:rotate-180 md:text-[12px] md:[writing-mode:vertical-rl] ${cta.bg}`}
          >
            {cta.label}
          </Link>
        ))}
      </div>
    </div>
  );
}