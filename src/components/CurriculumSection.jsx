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
    image: "/curriculum-1.png",
    accent: "#438E42", // Prithvi Green
  },
  {
    title: "Pre-Primary",
    label: "EARLY YEARS",
    description:
      "A joyful beginning built around play, stories, movement, nature and exploration — nurturing confidence and a love for learning.",
    image: "/curriculum-2.png",
    accent: "#64B0E2", // Prithvi Blue
  },
  {
    title: "Primary School",
    label: "GRADE 1–5",
    description:
      "Strong academic foundations combined with exploration, collaboration and values that help children grow into confident learners.",
    image: "/curriculum3new.png",
    accent: "#F7941D", // Prithvi Orange
  },
];

const PANEL_TRANSITION = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1],
};

export default function CurriculumSection() {
  const [active, setActive] = useState(null);

  // Mobile: index of the card whose content is open (null = all closed)
  const [mobileOpen, setMobileOpen] = useState(null);

  const toggleMobile = (index) => {
    setMobileOpen((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden bg-white pt-14 pb-[30px] md:pt-1 md:pb-[50px]">
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
              <span className="!text-[#196191]">
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
            MOBILE (tap a card to show its content)
        ========================================= */}

        <div className="flex flex-col lg:hidden">
          {sections.map((item, index) => {
            const isOpen = mobileOpen === index;

            return (
              <div
                key={item.title}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onClick={() => toggleMobile(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleMobile(index);
                  }
                }}
                className="relative h-[290px] cursor-pointer overflow-hidden"
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

                {/* DARK GRADIENT (gets stronger when open so text is readable) */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent transition-all duration-300 ${
                    isOpen
                      ? "from-black/90 via-black/55"
                      : "from-black/80 via-black/25"
                  }`}
                />

                {/* LABEL TAG (top right) */}
                <div
                  className="absolute right-4 top-3 z-20 px-4 py-2"
                  style={{ backgroundColor: item.accent }}
                >
                  <p className="!m-0 whitespace-nowrap !text-[11px] font-bold uppercase tracking-[0.12em] !text-white">
                    {item.label}
                  </p>
                </div>

                {/* CONTENT (bottom) */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-5">

                  {/* TITLE + ARROW */}
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="!m-0 !text-[24px] font-semibold uppercase leading-tight !text-white">
                      {item.title}
                    </h3>

                    <motion.span
                      initial={false}
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-white"
                      style={{
                        borderColor: item.accent,
                        backgroundColor: `${item.accent}40`,
                      }}
                    >
                      <ArrowUpRight size={16} />
                    </motion.span>
                  </div>

                  {/* DESCRIPTION (opens on tap) */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="mobile-description"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 max-w-[500px] !text-[13px] leading-[1.7] !text-white/90">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}