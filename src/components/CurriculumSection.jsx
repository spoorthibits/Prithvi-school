"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const sections = [
  {
    title: "Our Curriculum",
    label: "LEARNING AT PRITHVI",
    description:
      "A thoughtful curriculum where academics, curiosity, creativity and real-world experiences come together to make learning meaningful.",
    image: "/curriculum4.png",
    accent: "#438E42", // Prithvi Green
  },
  {
    title: "Pre-Primary",
    label: "EARLY YEARS",
    description:
      "A joyful beginning built around play, stories, movement, nature and exploration — nurturing confidence and a love for learning.",
    image: "/curriculum2.png",
    accent: "#64B0E2", // Prithvi Blue
  },
  {
    title: "Primary School",
    label: "GRADE 1–5",
    description:
      "Strong academic foundations combined with exploration, collaboration and values that help children grow into confident learners.",
    image: "/curriculum3.png",
    accent: "#F7941D", // Prithvi Orange
  },
];

const PANEL_TRANSITION = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1],
};

export default function CurriculumSection() {
  const [active, setActive] = useState(null);

  return (
    <section className="relative overflow-hidden bg-white pt-14 pb-[110px] md:pt-10 md:pb-[100px]">
      <div className="container-custom">

        {/* =========================================
            SECTION HEADING
        ========================================= */}
        <div className="mb-10 md:mb-12">

          {/* BLUE EYEBROW */}
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-7 bg-[#64B0E2]" />

            <p
              className="
                !m-0
                !text-[10px]
                font-semibold
                uppercase
                tracking-[0.32em]
                !text-[#4D9ED1]
                md:!text-[11px]
              "
            >
              Learning at Prithvi
            </p>
          </div>

          <div
            className="
              flex
              flex-col
              justify-between
              gap-6
              md:flex-row
              md:items-end
            "
          >
            {/* HEADING */}
            <h2
              className="
                max-w-[650px]
                !text-[34px]
                font-medium
                leading-[1.12]
                !text-[#333333]

                sm:!text-[40px]
                md:!text-[48px]
              "
            >
              Every stage opens a new{" "}
              <span className="!text-[#438E42]">
                world of learning.
              </span>
            </h2>

            {/* RIGHT DESCRIPTION */}
            <div className="max-w-[380px]">
              <p
                className="
                  !text-[13px]
                  leading-[1.8]
                  !text-[#686159]
                  md:!text-[14px]
                "
              >
                From joyful early experiences to strong academic foundations,
                every stage at Prithvi is designed around how children learn
                best.
              </p>

              {/* SMALL BRAND DETAIL */}
              <div className="mt-4 flex items-center gap-[6px]">
                <span className="h-[3px] w-7 rounded-full bg-[#438E42]" />
                <span className="h-[3px] w-7 rounded-full bg-[#64B0E2]" />
                <span className="h-[3px] w-7 rounded-full bg-[#F7941D]" />
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            DESKTOP CARDS
        ========================================= */}

        <div
          className="
            hidden
            h-[560px]
            w-full
            overflow-hidden
            rounded-[3px]
            lg:flex
          "
          onMouseLeave={() => setActive(null)}
        >
          {sections.map((item, index) => {
            const isActive = active === index;
            const hasActive = active !== null;

            return (
              <motion.div
                key={item.title}
                onMouseEnter={() => {
                  if (active !== index) {
                    setActive(index);
                  }
                }}
                initial={false}
                animate={{
                  flex: !hasActive ? 1 : isActive ? 2 : 1,
                }}
                transition={PANEL_TRANSITION}
                className="
                  group
                  relative
                  h-full
                  min-w-0
                  cursor-pointer
                  overflow-hidden
                "
                style={{
                  willChange: "flex",
                }}
              >

                {/* IMAGE */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    priority={index === 0}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="
                      object-cover
                      transition-transform
                      duration-[1000ms]
                      ease-out
                      group-hover:scale-[1.025]
                    "
                  />
                </div>

                {/* LIGHT TINT */}
                <div className="pointer-events-none absolute inset-0 bg-black/[0.04]" />

                {/* BOTTOM GRADIENT */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/10
                    to-transparent
                  "
                />

                {/* ACTIVE COLOR TINT */}
                <motion.div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    backgroundColor: item.accent,
                  }}
                  initial={false}
                  animate={{
                    opacity: isActive ? 0.055 : 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                />

                {/* TOP BRAND LINE */}
                <motion.div
                  className="absolute left-0 top-0 z-20 h-[4px]"
                  style={{
                    backgroundColor: item.accent,
                  }}
                  initial={false}
                  animate={{
                    width: isActive ? "100%" : "0%",
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* =========================================
                    CARD CONTENT
                ========================================= */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    z-20
                    p-7
                    xl:p-9
                  "
                >

                  {/* LABEL */}
                  <div className="mb-3 flex items-center gap-3">

                    <motion.span
                      className="h-[2px]"
                      style={{
                        backgroundColor: item.accent,
                      }}
                      initial={false}
                      animate={{
                        width: isActive ? 38 : 26,
                      }}
                      transition={PANEL_TRANSITION}
                    />

                    <p
                      className="
                        !m-0
                        whitespace-nowrap
                        !text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.25em]
                        !text-white/85
                      "
                    >
                      {item.label}
                    </p>
                  </div>

                  {/* TITLE + ARROW */}
                  <div className="flex items-center justify-between gap-5">

                    <h3
                      className="
                        whitespace-nowrap
                        !text-[25px]
                        font-medium
                        leading-tight
                        !text-white
                        xl:!text-[29px]
                      "
                    >
                      {item.title}
                    </h3>

                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        scale: isActive ? 1 : 0.85,
                        rotate: isActive ? 0 : -15,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      style={{
                        borderColor: item.accent,
                        backgroundColor: isActive
                          ? `${item.accent}25`
                          : "transparent",
                      }}
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        text-white
                      "
                    >
                      <ArrowUpRight size={17} />
                    </motion.div>

                  </div>

                  {/* DESCRIPTION */}
                  <div className="relative">
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key="description"
                          initial={{
                            opacity: 0,
                            y: 15,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: 10,
                          }}
                          transition={{
                            duration: 0.35,
                            delay: 0.08,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="pt-[18px]"
                        >
                          <p
                            className="
                              max-w-[470px]
                              !text-[13px]
                              leading-[1.8]
                              !text-white/85
                            "
                          >
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =========================================
            MOBILE
        ========================================= */}

        <div className="flex flex-col gap-3 lg:hidden">
          {sections.map((item, index) => (
            <div
              key={item.title}
              className="
                relative
                h-[390px]
                overflow-hidden
                rounded-[3px]
              "
            >

              {/* IMAGE */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />

              {/* GRADIENT */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/10
                  to-transparent
                "
              />

              {/* TOP BRAND LINE */}
              <div
                className="absolute left-0 top-0 h-[4px] w-full"
                style={{
                  backgroundColor: item.accent,
                }}
              />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-6">

                {/* LABEL */}
                <div className="mb-3 flex items-center gap-3">

                  <span
                    className="h-[2px] w-[24px]"
                    style={{
                      backgroundColor: item.accent,
                    }}
                  />

                  <p
                    className="
                      !m-0
                      !text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.23em]
                      !text-white/85
                    "
                  >
                    {item.label}
                  </p>

                </div>

                {/* TITLE */}
                <h3
                  className="
                    mb-3
                    !text-[27px]
                    font-medium
                    !text-white
                  "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    max-w-[500px]
                    !text-[13px]
                    leading-[1.7]
                    !text-white/85
                  "
                >
                  {item.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
          {/* =========================================
          BOTTOM CURVE
      ========================================= */}
     
    </section>
  );
}