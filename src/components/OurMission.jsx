"use client";

import { useEffect, useRef, useState } from "react";

const defaultValues = [
  {
    label: "Curiosity",
    color: "bg-[#075a36]",
    icon: (
      <path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5z" />
    ),
  },
  {
    label: "Character",
    color: "bg-[#438e42]",
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
      </>
    ),
  },
  {
    label: "Courage",
    color: "bg-[#f7941d]",
    icon: <path d="M12 21s-7-4.5-9-9a5 5 0 019-3 5 5 0 019 3c-2 4.5-9 9-9 9z" />,
  },
  {
    label: "Community",
    color: "bg-[#2d6b8f]",
    icon: (
      <>
        <path d="M4 19V5a2 2 0 012-2h12a2 2 0 012 2v14M4 19l2-2h12l2 2M4 19h16" />
      </>
    ),
  },
];

// Alternating tilt so each patch looks hand-placed rather than uniform
const tilts = ["-rotate-3", "rotate-2", "-rotate-2", "rotate-3"];

export default function OurMission({
  eyebrow = "Our Mission",
  heading = "Stitched from four values",
  description = "Each one distinct, none of them optional — together they hold the whole approach together.",
  values = defaultValues,
  backgroundColor = "bg-white",
}) {
  const rowRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${backgroundColor} py-20 md:py-10`}>
      <div className="container-custom text-center">
        <div className="max-w-xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-[13px] tracking-[0.2em] uppercase font-bold text-[#f7941d] mb-4">
            {eyebrow}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#075a36] mb-3">
            {heading}
          </h2>
          <p className="text-gray-600 text-[15.5px]">{description}</p>
        </div>

        <div
          ref={rowRef}
          className="flex flex-wrap items-center justify-center gap-1 max-w-4xl mx-auto"
        >
          {values.map((item, i) => (
            <div key={item.label} className="flex items-center">
              <div
                className={`w-[110px] h-[110px] md:w-[130px] md:h-[130px] m-2 rounded-xl shadow-lg flex flex-col items-center justify-center gap-2 text-white ${item.color}
                  transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  ${inView ? `opacity-100 scale-100 ${tilts[i % tilts.length]}` : "opacity-0 scale-30 rotate-0"}
                `}
                style={{ transitionDelay: inView ? `${i * 150}ms` : "0ms" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  className="w-6 h-6 md:w-7 md:h-7"
                >
                  {item.icon}
                </svg>
                <span className="text-xs font-semibold tracking-wide">
                  {item.label}
                </span>
              </div>

              {i < values.length - 1 && (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.4}
                  className={`w-5 text-gray-300 transition-opacity duration-400 ${
                    inView ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: inView ? `${i * 150 + 250}ms` : "0ms" }}
                >
                  <path d="M4 12h4M10 12h4M16 12h4" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}