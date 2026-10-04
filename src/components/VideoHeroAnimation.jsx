  "use client";

  import { useRef, useState, useCallback, useEffect } from "react";

  // ─── Brand palette (from logo / :root) ────────────────────────────────────
  // --green:      #438e42
  // --dark-green: #075a36
  // --orange:     #f7941d
  // --blue:       #64b0e2
  //
  // Option C — warm terracotta and cream. Playful, school-friendly, still
  // nods to the logo's orange while moving off the blue/teal that felt off.

  const STEPS = [
    {
      number: "1",
      title: "Enquire",
      description:
        "Connect over a call/Walk-in/Fill in the enquiry form given below.",
      gradient: "linear-gradient(135deg, #FAEEDA 0%, #F7DFB8 100%)", // Cream
      textColor: "#633806",
      subTextColor: "#854F0B",
    },
    {
      number: "2",
      title: "Visit",
      description: "Meet the admission counsellor by visiting the school.",
      gradient: "linear-gradient(135deg, #FAC775 0%, #F2B454 100%)", // Warm gold
      textColor: "#412402",
      subTextColor: "#633806",
    },
    {
      number: "3",
      title: "Campus Tour",
      description:
        "Explore our learning spaces and experience the environment firsthand.",
      gradient: "linear-gradient(135deg, #E8794A 0%, #D85A30 100%)", // Terracotta
      textColor: "#FAECE7",
      subTextColor: "#F5C4B3",
    },
    {
      number: "4",
      title: "Counselling Session",
      description:
        "The counsellor understands your child's needs and shares our programmes and philosophy.",
      gradient: "linear-gradient(135deg, #B8481F 0%, #993C1D 100%)", // Deep terracotta
      textColor: "#FAECE7",
      subTextColor: "#F0997B",
    },
  ];

  // ─── Arrow icon — same inline SVG style already used elsewhere in the app ──
  function CornerArrow({ className = "", style = {} }) {
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
        style={style}
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
        aria-hidden="true"
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
    );
  }

  export default function AdmissionProcess() {
    const scrollRef = useRef(null);
    const cardRefs = useRef([]);
    // Card 1 is "popped up" by default.
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollToIndex = useCallback((index) => {
      const container = scrollRef.current;
      const card = cardRefs.current[index];
      if (!container || !card) return;
      container.scrollTo({
        left: card.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }, []);

    const scrollByCard = useCallback(
      (dir) => {
        const next = Math.max(0, Math.min(STEPS.length - 1, activeIndex + dir));
        scrollToIndex(next);
      },
      [activeIndex, scrollToIndex]
    );

    // Clicking a card's corner arrow "pops" that card into the active state,
    // instead of the popup being driven by scroll position.
    const handleArrowClick = useCallback(
      (index) => {
        scrollToIndex(index);
      },
      [scrollToIndex]
    );

    return (
      <section className="relative py-12 sm:py-16 md:py-12 bg-[#FAF9F5] overflow-hidden">
        {/* Decorative corner accent, echoing the reference's top-left circle */}
        <div
          className="hidden md:block absolute -top-10 -left-10 w-28 h-28 rounded-full"
          aria-hidden="true"
        />

        <div className="container-custom relative px-4 sm:px-6">
          {/* Heading */}
          <div className="text-center mb-10 sm:mb-2">
            <h2
              className="mb-3 sm:mb-4"
              style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 5vw, 44px)",
                color: "#196191",
                
              }}
            >
              Admission Process
            </h2>
            {/* <p className="para max-w-2xl mx-auto text-[#4C4C4C] text-sm sm:text-base">
              Our admission process is simple, easy to follow, and well
              supported by our helpful staff.
            </p> */}
          </div>

          {/* Carousel */}
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pt-10 sm:pt-12 pb-8 no-scrollbar"
              style={{ scrollbarWidth: "none" }}
            >
              {STEPS.map((step, i) => {
                const isActive = i === activeIndex;
                return (
                  <div
                    key={step.number}
                    ref={(el) => (cardRefs.current[i] = el)}
                    className="relative snap-start shrink-0 w-[82vw] xs:w-[70vw] sm:w-[280px] max-w-[300px] rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[300px] sm:min-h-[340px] transition-all duration-300 ease-out"
                    style={{
                      background: step.gradient,
                      transform: isActive
                        ? "translateY(-14px) scale(1.05)"
                        : "translateY(0) scale(1)",
                      boxShadow: isActive
                        ? "0 20px 40px -12px rgba(0,0,0,0.35)"
                        : "0 4px 10px -4px rgba(0,0,0,0.15)",
                      zIndex: isActive ? 10 : 1,
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <span
                        className="font-bold leading-none"
                        style={{
                          fontSize: "clamp(48px, 8vw, 72px)",
                          fontFamily: "Arial, sans-serif",
                          color: step.textColor,
                        }}
                      >
                        {step.number}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleArrowClick(i)}
                        aria-label={`Pop up ${step.title} card`}
                        className="rounded-full p-1 -m-1"
                      >
                        <CornerArrow
                          className="opacity-40 w-7 h-7 sm:w-8 sm:h-8 mt-2 cursor-pointer transition-opacity duration-300 hover:opacity-80"
                          style={{
                            color: step.textColor,
                            opacity: isActive ? 0.9 : 0.4,
                          }}
                        />
                      </button>
                    </div>

                    <div>
                      <h3
                        className="text-lg sm:text-xl font-bold mb-2"
                        style={{ color: step.textColor }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="leading-relaxed text-sm sm:text-base"
                        style={{ color: step.subTextColor }}
                      >
                        {step.description}
                      </p>
                    </div>

                    {/* Connector line into the gap toward the next card */}
                    {i < STEPS.length - 1 && (
                      <div
                        className="hidden md:block absolute top-1/2 -right-6 w-6 h-[2px]"
                        style={{ backgroundColor: "#075a36" }}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controls: arrows + dots */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={activeIndex === 0}
              aria-label="Previous step"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border border-[#ccc] text-[#333] disabled:opacity-30 transition-colors"
            >
              <ChevronIcon direction="left" />
            </button>

            <div className="flex items-center gap-2">
              {STEPS.map((step, i) => (
                <button
                  type="button"
                  key={step.number}
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Go to step ${i + 1}`}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === activeIndex ? "28px" : "8px",
                    height: "8px",
                    backgroundColor: i === activeIndex ? "#075a36" : "#D9D9D9",
                  }}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={activeIndex === STEPS.length - 1}
              aria-label="Next step"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border border-[#ccc] text-[#333] disabled:opacity-30 transition-colors"
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