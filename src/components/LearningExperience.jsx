"use client";

import Link from "next/link";
import {
  BookOpen,
  Leaf,
  Sparkles,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const learningPillars = [
  {
    title: "Academics",
    icon: BookOpen,
    href: "/academics",
  },
  {
    title: "Nature & Environment",
    icon: Leaf,
    href: "/academics",
  },
  {
    title: "Values & Slokas",
    icon: Sparkles,
    href: "/academics",
  },
  {
    title: "Experiential Learning",
    icon: Lightbulb,
    href: "/academics",
  },
];

export default function LearningExperience() {
  return (
    <section className="relative w-full overflow-hidden bg-[#faf9f5]">

      {/* =========================================
          BACKGROUND IMAGE SECTION
      ========================================= */}
      <div
        className="
          relative
          min-h-[620px]
          w-full
          bg-cover
          bg-center
          bg-no-repeat

          sm:min-h-[650px]
          md:min-h-[680px]
          lg:min-h-[700px]
          xl:min-h-[730px]
        "
        style={{
          backgroundImage: "url('/learning.png')",
        }}
      >

        {/* =========================================
            SOFT DARK OVERLAY

            Stronger on left for text readability.
            Almost transparent on right.
        ========================================= */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#14251c]/90
            via-[#14251c]/55
            to-[#14251c]/5
          "
        />

        {/* subtle overall overlay */}
        <div className="absolute inset-0 bg-black/5" />

        {/* =========================================
            CONTENT
        ========================================= */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[620px]
            w-[90%]
            max-w-[1450px]
            items-center

            sm:min-h-[650px]

            md:min-h-[680px]

            lg:min-h-[700px]

            xl:min-h-[730px]
          "
        >
          <div
            className="
              max-w-[650px]
              pb-24
              pt-20

              md:pb-28
              md:pt-24

              lg:pb-32
            "
          >

            {/* =========================================
                HANDWRITTEN SMALL TITLE
            ========================================= */}
            <div className="mb-4 flex items-center gap-3">

              <p
                className="
                  font-[family-name:var(--font-caveat)]
                  text-[25px]
                  font-medium
                  leading-none
                  text-[#9BCB55]

                  sm:text-[28px]

                  md:text-[30px]
                "
              >
                Learning Beyond Four Walls
              </p>

              <Leaf
                size={22}
                strokeWidth={1.5}
                className="text-[#9BCB55]"
              />

            </div>

            {/* =========================================
                MAIN HEADING
            ========================================= */}
            <h2
              className="
                max-w-[620px]

                text-[38px]
                font-semibold
                leading-[1.08]
                tracking-[-0.035em]
                text-white

                sm:text-[44px]

                md:text-[50px]

                lg:text-[56px]
              "
            >
              The Prithvi
              <span className="block">
                Learning Experience
              </span>
            </h2>

            {/* ORGANIC LINE */}
            <div className="mt-5">
              <svg
                viewBox="0 0 180 10"
                className="h-[9px] w-[130px]"
                fill="none"
              >
                <path
                  d="
                    M3 5
                    C35 2.5 65 2 90 2.3
                    C120 2.5 150 3.2 177 5
                    C150 6.8 120 7.5 90 7.5
                    C60 7.5 30 6.8 3 5Z
                  "
                  fill="#8BC53F"
                />
              </svg>
            </div>

            {/* =========================================
                DESCRIPTION
            ========================================= */}
            <p
              className="
                mt-7
                max-w-[590px]

                text-[13px]
                font-normal
                leading-[1.8]
                text-white/90

                sm:text-[14px]

                md:text-[15px]
              "
            >
              At Prithvi, learning is not limited to textbooks and
              classrooms. Children explore nature, understand the
              environment, discover history, build strong academic
              foundations, and learn through experiences that make
              knowledge meaningful.
            </p>

            {/* =========================================
                SECOND MESSAGE
            ========================================= */}
            <div
              className="
                mt-5
                flex
                max-w-[580px]
                items-start
                gap-3
              "
            >
              <Leaf
                size={17}
                strokeWidth={1.8}
                className="
                  mt-[3px]
                  shrink-0
                  text-[#9BCB55]
                "
              />

              <p
                className="
                  text-[12px]
                  leading-[1.7]
                  text-white/85

                  sm:text-[13px]

                  md:text-[14px]
                "
              >
                From Pre-Primary to Grade 5, every experience is designed
                to nurture curious minds, grounded values, and confident
                learners.
              </p>
            </div>

            {/* =========================================
                LEARNING PILLARS
            ========================================= */}
            <div
              className="
                mt-8
                grid
                grid-cols-2
                gap-2.5

                md:grid-cols-4
                md:gap-3
              "
            >
              {learningPillars.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    href={item.href}
                    key={item.title}
                    className="
                      group
                      flex
                      min-h-[72px]
                      items-center
                      gap-3

                      rounded-[3px]
                      border
                      border-white/40

                      bg-black/10

                      px-4
                      py-3

                      backdrop-blur-[2px]

                      transition-all
                      duration-500

                      hover:-translate-y-1
                      hover:border-[#9BCB55]
                      hover:bg-[#438E42]/50
                    "
                  >
                    {/* ICON */}
                    <Icon
                      size={24}
                      strokeWidth={1.5}
                      className="
                        shrink-0
                        text-[#9BCB55]

                        transition-transform
                        duration-500

                        group-hover:scale-110
                      "
                    />

                    {/* TITLE */}
                    <span
                      className="
                        text-[10px]
                        font-medium
                        uppercase
                        leading-[1.4]
                        tracking-[0.04em]
                        text-white

                        sm:text-[11px]
                      "
                    >
                      {item.title}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* =========================================
                EXPLORE LINK
            ========================================= */}
            <Link
              href="/academics"
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-2

                text-[11px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-white

                transition-colors
                duration-300

                hover:text-[#9BCB55]
              "
            >
              Discover Our Approach

              <ArrowRight
                size={15}
                className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              />
            </Link>

          </div>
        </div>

        {/* =========================================
            CURVED BOTTOM

            BLUE BRAND ACCENT
        ========================================= */}
        <div
          className="
            pointer-events-none
            absolute
            -bottom-[1px]
            left-0
            z-20
            w-full
          "
        >
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="
              block
              h-[65px]
              w-full

              md:h-[80px]

              lg:h-[95px]
            "
          >

            {/* GREEN ACCENT */}
            <path
              d="
                M0 35
                C350 105 1000 110 1440 20
                L1440 100
                L0 100
                Z
              "
              fill="#438E42"
            />

            {/* BLUE ACCENT */}
            <path
              d="
                M0 46
                C380 112 1030 112 1440 30
                L1440 100
                L0 100
                Z
              "
              fill="#64B0E2"
            />

            {/* CREAM MAIN AREA */}
            <path
              d="
                M0 54
                C390 120 1040 120 1440 38
                L1440 100
                L0 100
                Z
              "
              fill="#faf9f5"
            />

          </svg>
        </div>

      </div>
    </section>
  );
}