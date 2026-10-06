"use client";

import Link from "next/link";

const CTAS = [
  {
    label: "VISIT US",
    href: "/contact",
    bg: "bg-[#e88f1b] hover:bg-[#e88612]",
  },
  {
    label: "APPLY NOW",
    href: "/admissions",
    bg: "bg-[#248bcf] hover:bg-[#367a38]",
  },
];

export default function FloatingCTAs() {
  return (
    <div className="fixed right-0 top-1/2 z-50 -translate-y-1/2 sm:hidden">
      <div className="flex flex-col overflow-hidden rounded-l-xl shadow-[0_8px_25px_rgba(0,0,0,0.35)]">
        {CTAS.map((cta) => (
          <Link
            key={cta.href}
            href={cta.href}
            className={`
              flex
              h-[90px]
              w-[38px]
              items-center
              justify-center
              text-[11px]
              font-semibold
              tracking-wide
              text-white
              transition-colors
              duration-300
              rotate-180
              [writing-mode:vertical-rl]
              ${cta.bg}
            `}
          >
            {cta.label}
          </Link>
        ))}
      </div>
    </div>
  );
}