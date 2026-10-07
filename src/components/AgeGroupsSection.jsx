"use client";

import { useRef } from "react";
import Image from "next/image";

/* =========================================================
   PROGRAM DATA
========================================================= */

const programs = [
  {
    title: "Playgroup",
    age: "1.5 – 2.5 Years",
    desc: "A joyful beginning where children explore through play, movement, stories and meaningful experiences.",
    image: "/curriculum1.png",
    color: "#438E42",
  },
  {
    title: "Nursery",
    age: "2.5 – 3.5 Years",
    desc: "Building early language, confidence and curiosity through play, exploration and everyday discovery.",
    image: "/curriculum-3new.png",
    color: "#64B0E2",
  },
  {
    title: "PP1",
    age: "3.5 – 4.5 Years",
    desc: "Encouraging children to learn through hands-on experiences, creativity, exploration and growing independence.",
    image: "/curriculum-2new.png",
    color: "#F7941D",
  },
  {
    title: "PP2",
    age: "4.5 – 5.5 Years",
    desc: "Strengthening essential skills while nurturing curiosity, confidence and a growing love for learning.",
    image: "/curriculum-1.png",
    color: "#196191",
  },
  {
    title: "Grade 1–5",
    age: "5.5 – 10.5 Years",
    desc: "Building strong academic foundations while encouraging children to question, explore, collaborate and think independently.",
    image: "/curriculum1.png",
    color: "#438E42",
  },
];

/* =========================================================
   PROGRAM CARD
========================================================= */

function ProgramCard({ item }) {
  return (
    <article
      className="
        group
        flex
        h-full
        w-full
        flex-col
        overflow-hidden
        rounded-xl
        border
        border-[#E9E8E2]
        bg-white
        shadow-[0_2px_10px_rgba(18,48,90,0.06)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_8px_24px_rgba(18,48,90,0.12)]
      "
    >
      {/* IMAGE */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EEF1F4]">
        <Image
          src={item.image}
          alt={`${item.title} program`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="
            object-cover
            object-top
            transition-transform
            duration-500
            group-hover:scale-[1.05]
          "
        />
        {/* soft fade at the bottom of the image */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col px-4 pb-4 pt-3.5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-[14px] font-bold leading-tight text-[#196191]">
            {item.title}
          </h3>

          <span
            className="whitespace-nowrap rounded-full px-2 py-0.5 text-[9px] font-semibold text-white"
            style={{ backgroundColor: item.color }}
          >
            {item.age}
          </span>
        </div>

        <p className="mt-2 flex-1 text-[10px] leading-[1.6] text-[#666666]">
          {item.desc}
        </p>
      </div>

      {/* COLOR BAR (full width, same on every card) */}
      <div className="h-[3px] w-full" style={{ backgroundColor: item.color }} />
    </article>
  );
}

/* =========================================================
   ARROW BUTTON
========================================================= */

function ScrollButton({ direction, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={
        direction === "left" ? "Previous programs" : "Next programs"
      }
      className="
        absolute
        top-1/2
        z-20
        flex
        h-9
        w-9
        -translate-y-1/2
        items-center
        justify-center
        rounded-full
        border
        border-[#E3E3DD]
        bg-white
        text-[#196191]
        shadow-[0_3px_12px_rgba(0,0,0,0.10)]
        transition-all
        duration-200
        hover:scale-105
        hover:bg-[#196191]
        hover:text-white
      "
      style={{
        left: direction === "left" ? "0px" : undefined,
        right: direction === "right" ? "0px" : undefined,
      }}
    >
      {direction === "left" ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      )}
    </button>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function AgeGroupsSection() {
  const trackRef = useRef(null);

  /* SCROLL FUNCTION */

  const scroll = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.firstElementChild;
    if (!card) return;

    const gap = 16; // matches gap-4
    const scrollAmount = card.offsetWidth + gap;

    track.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F7F6F2]
        py-10
        sm:py-12
        lg:py-14
      "
    >
      {/* HEADER */}

      <div className="mx-auto max-w-[900px] px-5 text-center">
        <h2 className="
    mb-4
    whitespace-nowrap
    font-serif
    text-[length:clamp(14px,4.2vw,26px)]
    font-semibold
    leading-[1.08]
    tracking-[-0.5px]
    !text-[#196191]
    sm:whitespace-normal
    sm:text-[30px]
    md:text-[34px]
    lg:text-[38px]
    !text-[#173B63]
    !sm:text-center
  ">
          Age Groups and Programs
        </h2>

        {/* ORANGE UNDERLINE */}
        {/* <div className="mx-auto mt-1.5 h-[2px] w-[38px] rounded-full bg-[#F7941D]" /> */}

        {/* <p className="mt-2 text-[9px] leading-[1.6] text-[#707070] sm:text-[10px]">
          From early learning foundations to primary education, every stage is
          thoughtfully designed to nurture curiosity, confidence and a love for
          learning.
        </p> */}
      </div>

      {/* CARDS AREA */}

      <div className="relative mx-auto mt-7 max-w-[1280px] px-9 sm:px-10">
        <ScrollButton direction="left" onClick={() => scroll("left")} />

        {/* items-stretch makes every card the same height */}
        <div
          ref={trackRef}
          className="
            flex
            items-stretch
            gap-4
            overflow-x-auto
            scroll-smooth
            px-1
            pb-3
            pt-1

            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {programs.map((program) => (
            <div
              key={program.title}
              className="
                flex
                min-w-full
                sm:min-w-[calc(50%-8px)]
                lg:min-w-[calc(25%-12px)]
              "
            >
              <ProgramCard item={program} />
            </div>
          ))}
        </div>

        <ScrollButton direction="right" onClick={() => scroll("right")} />
      </div>
    </section>
  );
}