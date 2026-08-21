"use client";

import { useRef, useState, useCallback, useEffect } from "react";

// ─── Brand palette (from :root) ───────────────────────────────────────────
// --green: #438e42
// --dark-green: #075a36
// --orange: #f7941d
// --blue: #d3e9f8  (very pale — deepened below so white text stays readable)
//
// Only 4 brand colors exist, so each of the 4 steps gets one, expressed as a
// diagonal gradient (color → a darker tint of itself) so cards read as rich
// rather than flat. The 4th card uses a deepened companion to --blue since
// the token itself is too pale for white text contrast — swap the hex below
// if you have an official "deep blue" token instead.

const STEPS = [
  {
    number: "1",
    title: "Enquire",
    description:
      "Connect over a call/Walk-in/Fill in the enquiry form given below.",
    gradient: "linear-gradient(135deg, #5aa658 0%, #075a36 100%)",
  },
  {
    number: "2",
    title: "Visit",
    description: "Meet the admission counsellor by visiting the school.",
    gradient: "linear-gradient(135deg, #0a7a48 0%, #043824 100%)",
  },
  {
    number: "3",
    title: "Campus Tour",
    description:
      "Explore our learning spaces and experience the environment firsthand.",
    gradient: "linear-gradient(135deg, #f7941d 0%, #c96f0a 100%)",
  },
  {
    number: "4",
    title: "Counselling Session",
    description:
      "The counsellor understands your child's needs and shares our programmes and philosophy.",
    gradient: "linear-gradient(135deg, #4a90c2 0%, #1c4f70 100%)",
  },
];

// ─── Arrow icon — same inline SVG style already used elsewhere in the app ──
function CornerArrow({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

function ChevronIcon({ direction = "left" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: direction === "right" ? "rotate(180deg)" : "none" }}
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

export default function AdmissionProcess() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // ─── Track which card is closest to the left edge, to drive the dots ────
  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.firstChild?.offsetWidth ?? 1;
    const gap = 24; // matches gap-6
    const index = Math.round(el.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(index, STEPS.length - 1));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToIndex = (index) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.firstChild?.offsetWidth ?? 0;
    const gap = 24;
    el.scrollTo({ left: index * (cardWidth + gap), behavior: "smooth" });
  };

  const scrollByCard = (dir) => {
    const next = Math.max(0, Math.min(STEPS.length - 1, activeIndex + dir));
    scrollToIndex(next);
  };

  return (
    <section className="relative py-16 md:py-20 bg-white overflow-hidden">
      {/* Decorative corner accent, echoing the reference's top-left circle */}
      <div
        className="hidden md:block absolute -top-10 -left-10 w-28 h-28 rounded-full"
        style={{ backgroundColor: "var(--dark-green)" }}
        aria-hidden="true"
      />

      <div className="container-custom relative">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="mb-4"
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 700,
              fontSize: "clamp(32px, 4vw, 44px)",
              color: "var(--dark)",
            }}
          >
            Admission Process
          </h2>
          <p className="para max-w-2xl mx-auto text-[#4C4C4C]">
            Our admission process is simple, easy to follow, and well
            supported by our helpful staff.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 no-scrollbar"
            style={{ scrollbarWidth: "none" }}
          >
            {STEPS.map((step, i) => (
              <div
                key={step.number}
                className="relative snap-start shrink-0 w-[260px] sm:w-[280px] rounded-2xl p-8 flex flex-col justify-between min-h-[340px] text-white"
                style={{ background: step.gradient }}
              >
                <div className="flex items-start justify-between">
                  <span
                    className="font-bold leading-none"
                    style={{ fontSize: "72px", fontFamily: "Arial, sans-serif" }}
                  >
                    {step.number}
                  </span>
                  <CornerArrow className="opacity-40 w-8 h-8 mt-2" />
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-white/90 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector line into the gap toward the next card */}
                {i < STEPS.length - 1 && (
                  <div
                    className="hidden md:block absolute top-1/2 -right-6 w-6 h-[2px]"
                    style={{ backgroundColor: "var(--dark-green)" }}
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Controls: arrows + dots */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => scrollByCard(-1)}
            disabled={activeIndex === 0}
            aria-label="Previous step"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-[#ccc] text-[#333] disabled:opacity-30 transition-colors"
          >
            <ChevronIcon direction="left" />
          </button>

          <div className="flex items-center gap-2">
            {STEPS.map((step, i) => (
              <button
                key={step.number}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to step ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === activeIndex ? "28px" : "8px",
                  height: "8px",
                  backgroundColor:
                    i === activeIndex ? "var(--dark-green)" : "#D9D9D9",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => scrollByCard(1)}
            disabled={activeIndex === STEPS.length - 1}
            aria-label="Next step"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-[#ccc] text-[#333] disabled:opacity-30 transition-colors"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>
      </div>

      {/* Hide scrollbar on the carousel track (webkit) */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}