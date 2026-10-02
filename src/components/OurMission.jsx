"use client";

import { Lightbulb, Heart, Compass, Users } from "lucide-react";

const missionCards = [
  {
    icon: Lightbulb,
    title: "Curiosity",
    description:
      "Encourage children to question, explore and discover the joy of learning.",
    bg: "bg-[#EEF7FB]",
    accent: "#64B0E2",
  },
  {
    icon: Compass,
    title: "Independent Thinking",
    description:
      "Help children understand, think independently and build confidence in their ideas.",
    bg: "bg-[#FFF3E6]",
    accent: "#F7941D",
  },
  {
    icon: Heart,
    title: "Strong Values",
    description:
      "Nurture kindness, responsibility, respect and empathy alongside academics.",
    bg: "bg-[#FDF0F0]",
    accent: "#D98C8C",
  },
  {
    icon: Users,
    title: "Growing Together",
    description:
      "Create an environment where children learn, collaborate and connect with others.",
    bg: "bg-[#EAF6E8]",
    accent: "#438E42",
  },
];

export default function OurMissionSection() {
  return (
    <section className="w-full bg-[#ffffff] px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <div className="mb-10 text-center md:mb-14">
          <div className="mx-auto mb-5 h-[3px] w-20 rounded-full bg-[#F7941D]" />

          <h2 className="text-[32px] font-bold leading-tight tracking-[-0.5px] !text-[#173B63] sm:text-[38px] md:text-[46px]">
            Our Mission
          </h2>

          <p className="mx-auto mt-4 max-w-[650px] text-[15px] leading-[26px] text-[#5B6B7D] sm:text-[16px] sm:leading-[28px]">
            Creating a learning environment where children are encouraged to
            question, discover, create and grow with confidence.
          </p>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {missionCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className={`
                  flex flex-col items-center
                  rounded-[28px] border-t-[3px]
                  ${card.bg}
                  px-6 pb-10 pt-8
                  text-center
                  shadow-[0_8px_24px_rgba(23,59,99,0.08)]
                  transition-all duration-300
                  hover:-translate-y-1.5
                  hover:shadow-[0_16px_36px_rgba(23,59,99,0.14)]
                  sm:px-7 sm:pt-10
                  md:min-h-[300px]
                `}
                style={{ borderTopColor: card.accent }}
              >
                {/* Icon */}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
                  <Icon
                    size={24}
                    strokeWidth={1.8}
                    style={{ color: card.accent }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="mb-3 text-[21px] font-bold leading-[1.25] sm:text-[22px]"
                  style={{ color: card.accent }}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] leading-[24px] text-[#4B5563] sm:text-[15px] sm:leading-[26px]">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 