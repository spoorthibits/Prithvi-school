// BeyondClassroom.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const sections = [
  {
    tab: "CO-CURRICULARS",
    title: "Co-Curriculars",
    description:
      "Our co-curricular program encourages character development through unique and rewarding experiences. Students learn to collaborate, take risks, and persevere. Our Eagles gain a deeper understanding and appreciation of themselves and others through a diverse range of pursuits outside of the classroom.",
    heroImage: "/academics-main.png",
    sideImage: "/academics-side.png",
    moreLabel: "MORE ABOUT CO-CURRICULARS",
  },
  {
    tab: "EXPERIENTIAL LEARNING",
    title: "Experiential Learning",
    description:
      "Students learn best by doing. Our experiential learning program puts students in real-world situations that build confidence and practical skills.",
    heroImage: "/experiential-main.jpg",
    sideImage: "/experiential-side.jpg",
    moreLabel: "MORE ABOUT EXPERIENTIAL LEARNING",
  },
  {
    tab: "SERVICE LEARNING",
    title: "Service Learning",
    description:
      "Through service learning, students connect classroom knowledge to community impact, developing empathy and a sense of civic responsibility.",
    heroImage: "/service-main.jpg",
    sideImage: "/service-side.jpg",
    moreLabel: "MORE ABOUT SERVICE LEARNING",
  },
];

export default function BeyondClassroom() {
  const [active, setActive] = useState(0);
  const current = sections[active];

  return (
    <section
      className="pt-14 pb-16 md:pb-20"
      style={{ background: "#DDD4CA" }}
    >
      <div className="container-custom">
        {/* Top row: tabs (left) + big heading (right) */}
        <div className="relative mb-3">
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {sections.map((item, i) => (
              <button
                key={item.tab}
                onClick={() => setActive(i)}
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

          {/* Desktop heading: absolutely positioned so it can shift down
              without adding extra height to the row / gap before the image */}
          <h2
    className="absolute right-5 -top-32 z-20 hidden text-right uppercase md:block"
    style={{
      color: "var(--dark-green)",
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 800,
      fontSize: "clamp(46px, 3.4vw, 40px)",
      lineHeight: 1.05,
      letterSpacing: "-0.5px",
      transform: "translateY(140px)",
    }}
  >
    Cultivating
    <br />
    Exceptional
    <br />
    Thinkers
  </h2>

          {/* Mobile heading: stays in normal flow below tabs */}
          <h2
            className="mt-4 text-right uppercase md:hidden"
            style={{
              color: "var(--dark-green)",
              fontFamily: '"Montserrat", sans-serif',
              fontWeight: 800,
              fontSize: "clamp(26px, 3.4vw, 40px)",
              lineHeight: 1.05,
              letterSpacing: "-0.5px",
            }}
          >
            Cultivating
            <br />
            Exceptional
            <br />
            Thinkers
          </h2>
        </div>

        {/* Image block with overlapping side card */}
        <div className="relative">
          {/* Main hero image */}
          <div className="relative h-[380px] w-full overflow-hidden md:h-[420px] lg:w-[68%]">
            <Image
              src={current.heroImage}
              alt={current.title}
              fill
              className="object-cover"
            />
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
              <p
                className="max-w-md leading-relaxed"
                style={{
                  color: "var(--white)",
                  opacity: 0.95,
                  fontSize: "14px",
                  lineHeight: 1.6,
                }}
              >
                {current.description}
              </p>
            </div>
          </div>

          {/* Overlapping side image + "more about" bar */}
          <div className="absolute bottom-[-16px] -right-10 w-[38%] min-w-[240px] max-w-[360px] md:right-18 lg:right-15">
            <div className="relative h-40 w-full overflow-hidden shadow-2xl md:h-58">
              <Image
                src={current.sideImage}
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <button
              className="flex w-full items-center justify-between px-5 py-3 text-left shadow-2xl"
              style={{ background: "var(--white)" }}
            >
              <span
                className="text-cta pr-4 uppercase"
                style={{ color: "var(--dark-green)", fontSize: "13px" }}
              >
                {current.moreLabel}
              </span>
              <span
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
                style={{ background: "var(--green)", color: "var(--white)" }}
              >
                <ArrowRight size={14} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}