// BeyondClassroom.jsx
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const sections = [
  {
    tab: "CO-CURRICULARS",
    title: "Co-Curriculars",
    description:
      "There’s more to learning than a classroom. From sport and the arts to hands-on activities and collaborative experiences, children have the space to explore new interests, build friendships and discover what they love.",
    heroImage: "/academics-mainimg1.png",
    sideImage: "/Joyful Classroom Block Tower Builders.png",
    moreLabel: "MORE ABOUT CO-CURRICULARS",
  },

  {
    tab: "EXPERIENTIAL LEARNING",
    title: "Learning by Doing",
    description:
      "Children learn through meaningful experiences that encourage them to explore, create and understand the world around them. Learning by doing helps build curiosity, confidence and practical skills.",
    heroImage: "/main1.png",
    sideImage: "/sub1.png",
    moreLabel: "MORE ABOUT EXPERIENTIAL LEARNING",
  },

  {
    tab: "SPORTS & CREATIVITY",
    title: "Explore. Create. Grow.",
    description:
      "Sport, creativity and hands-on activities give children opportunities to try something new, express themselves and develop confidence beyond the classroom.",
    heroImage: "/sport-main.png",
    sideImage: "/academics-side2.png",
    moreLabel: "EXPLORE LIFE AT PRITHVI",
  },
];

export default function BeyondClassroom() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const descRef = useRef(null);

  const current = sections[active];

  // Switch section and always collapse the description
  const selectSection = (index) => {
    setActive(index);
    setExpanded(false);
  };

  // Previous section
  const goPrevious = () => {
    selectSection(active === 0 ? sections.length - 1 : active - 1);
  };

  // Next section
  const goNext = () => {
    selectSection(active === sections.length - 1 ? 0 : active + 1);
  };

  // Detect whether the text is actually cut off (mobile only, since the
  // clamp is removed from sm and up, so nothing is cut off there).
  useEffect(() => {
    const el = descRef.current;
    if (!el) return;

    const check = () => {
      if (!expanded) {
        setIsClamped(el.scrollHeight > el.clientHeight + 1);
      }
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [active, expanded]);

  return (
    <section className="pt-14 pb-16 md:pb-20" style={{ background: "#f1ebe3" }}>
      <div className="container-custom">
        {/* =========================
            TOP TABS
        ========================== */}
        <div className="relative mb-3">
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {sections.map((item, i) => (
              <button
                key={item.tab}
                onClick={() => selectSection(i)}
                className="text-nav whitespace-nowrap font-bold tracking-wide transition-colors"
                style={{
                  color: active === i ? "var(--orange)" : "var(--dark-green)",
                  opacity: active === i ? 1 : 0.9,
                }}
              >
                {item.tab}
              </button>
            ))}
          </div>

          {/* =========================
              LAPTOP + DESKTOP HEADING
              Visible from lg and above
          ========================== */}
          <h2
            className="absolute right-5 -top-32 z-20 hidden text-right uppercase lg:block"
            style={{
              color: "#196191",
              fontFamily: '"Montserrat", sans-serif',
              fontWeight: 800,
              fontSize: "clamp(46px, 3.4vw, 40px)",
              lineHeight: 1.05,
              letterSpacing: "-0.5px",
              transform: "translateY(165px)",
            }}
          >
            Cultivating
            <br />
            Exceptional
            <br />
            Thinkers
          </h2>

          {/* =========================
              MOBILE + TABLET HEADING
              Hidden
          ========================== */}
          <h2 className="hidden">
            Cultivating
            <br />
            Exceptional
            <br />
            Thinkers
          </h2>
        </div>

        {/* =========================
            HERO IMAGE
        ========================== */}
        <div className="relative">
          <div className="relative h-[380px] w-full overflow-hidden md:h-[420px] lg:w-[68%]">
            <Image
              src={current.heroImage}
              alt={current.title}
              fill
              className="object-cover"
            />

            {/* Dark gradient + content */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-7 pt-24">
              <h3
                className="mb-2 uppercase"
                style={{
                  color: "var(--white)",
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 700,
                  fontSize: "22px",
                  letterSpacing: "0.5px",
                }}
              >
                {current.title}
              </h3>

              {/* Mobile: clamped to 3 lines until expanded.
                  sm and up: full text, no clamp. */}
              <p
                ref={descRef}
                className={`max-w-md leading-relaxed sm:line-clamp-none ${
                  expanded ? "" : "line-clamp-3"
                }`}
                style={{
                  color: "var(--white)",
                  opacity: 0.95,
                  fontSize: "14px",
                  lineHeight: 1.6,
                }}
              >
                {current.description}
              </p>

              {/* ...more / less toggle (mobile only) */}
              {(isClamped || expanded) && (
                <button
                  type="button"
                  onClick={() => setExpanded((prev) => !prev)}
                  aria-expanded={expanded}
                  className="mt-1 font-bold underline underline-offset-2 sm:hidden"
                  style={{
                    color: "var(--white)",
                    fontSize: "14px",
                  }}
                >
                  {expanded ? "less" : "...more"}
                </button>
              )}
            </div>
          </div>

          {/* =========================
              OVERLAPPING SIDE CARD
              
              Hidden below lg
              Visible on desktop
          ========================== */}
          <div className="absolute bottom-[-16px] -right-10 hidden w-[38%] min-w-[240px] max-w-[360px] lg:block lg:right-15">
            <div className="relative h-40 w-full overflow-hidden shadow-2xl md:h-58">
              <Image
                src={current.sideImage}
                alt=""
                fill
                className="object-cover object-top"
              />
            </div>

            <button
              className="flex w-full items-center justify-between px-5 py-3 text-left shadow-2xl"
              style={{
                background: "var(--white)",
              }}
            >
              <span
                className="text-cta pr-4 uppercase"
                style={{
                  color: "var(--dark-green)",
                  fontSize: "13px",
                }}
              >
                {current.moreLabel}
              </span>

              <span
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
                style={{
                  background: "var(--green)",
                  color: "var(--white)",
                }}
              >
                <ArrowRight size={14} />
              </span>
            </button>
          </div>
        </div>

        {/* =========================
            MOBILE + TABLET NAVIGATION
            Hidden on laptop + desktop
        ========================== */}
        <div className="mt-6 flex items-center justify-center gap-4 lg:hidden">
          {/* Previous Button */}
          <button
            onClick={goPrevious}
            aria-label="Previous section"
            className="flex h-10 w-10 items-center justify-center rounded-full border transition-all"
            style={{
              borderColor: "rgba(0,0,0,0.2)",
              color: "var(--dark-green)",
              background: "transparent",
            }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {sections.map((_, i) => (
              <button
                key={i}
                onClick={() => selectSection(i)}
                aria-label={`Go to section ${i + 1}`}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: active === i ? "28px" : "8px",
                  background:
                    active === i ? "var(--green)" : "rgba(0,0,0,0.18)",
                }}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={goNext}
            aria-label="Next section"
            className="flex h-10 w-10 items-center justify-center rounded-full border transition-all"
            style={{
              borderColor: "rgba(0,0,0,0.2)",
              color: "var(--dark-green)",
              background: "transparent",
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
