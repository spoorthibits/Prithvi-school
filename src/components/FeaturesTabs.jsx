"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sprout,
  SunMedium,
  Palette,
  Users,
  Clock4,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

/* ================= ICON MAP ================= */
const iconMap = {
  sprout: Sprout,
  sun: SunMedium,
  palette: Palette,
  users: Users,
  clock: Clock4,
};

/* ================= DEFAULT DATA ================= */
export const defaultFeaturesData = [
  {
    icon: "sprout",
    iconBg: "bg-[#F4C77A]",
    title: "Campus Amidst Open, Green Spaces",
    description:
      "A welcoming campus environment that gives children space to explore, move, observe nature and learn beyond the classroom.",
    image: "/curriculum2.png",
    mobileImage: "/green-space-mbl.webp",
  },
  {
    icon: "sun",
    iconBg: "bg-[#64B0E2]",
    title: "Safe & Supportive Learning Spaces",
    description:
      "Thoughtfully designed learning spaces where children feel secure, comfortable and confident to participate, ask questions and discover.",
    image: "/curriculum3.png",
    mobileImage: "/safe-learning-mbl.webp",
  },
  {
    icon: "users",
    iconBg: "bg-[#F7941D]",
    title: "Strong Academic Foundations",
    description:
      "A balanced academic approach that builds essential skills while encouraging curiosity, understanding and independent thinking.",
    image: "/curriculum4.png",
    mobileImage: "/global-standards-mbl.webp",
  },
  {
    icon: "palette",
    iconBg: "bg-[#E99AC8]",
    title: "Personalised Attention for Every Child",
    description:
      "Every child learns differently. Our teachers provide thoughtful guidance and individual attention to help each learner progress with confidence.",
    image: "/child-attention.webp",
    mobileImage: "/personalised-attention-mbl.webp",
  },
  {
    icon: "users",
    iconBg: "bg-[#F4C77A]",
    title: "Learning Guided by Values",
    description:
      "Along with academics, children develop kindness, responsibility, respect and confidence through everyday experiences and meaningful interactions.",
    image: "/indian-values.webp",
    mobileImage: "/global-standards-mbl.webp",
  },
  {
    icon: "clock",
    iconBg: "bg-[#64B0E2]",
    title: "Learning Beyond the Classroom",
    description:
      "Sports, creativity, activities and hands-on experiences give children opportunities to discover their interests and develop skills beyond academics.",
    image: "/green-spaces.webp",
    mobileImage: "/activities-mbl.webp",
  },
];

/* ================= COMPONENT ================= */
export default function FeaturesTabs({
  features = defaultFeaturesData,
}) {
  const [activeTab, setActiveTab] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedTab, setDisplayedTab] = useState(0);

  const handleTabChange = (index) => {
    if (index === activeTab) return;

    setActiveTab(index);
    setIsTransitioning(true);

    setTimeout(() => {
      setDisplayedTab(index);
      setIsTransitioning(false);
    }, 200);
  };

  const currentFeature = features[displayedTab];

  return (
    <section className="mb-20  ">
      <div className="container-custom">

        {/* ================= SECTION HEADING ================= */}

        <div className="mb-10 text-center md:mb-14">
          <p className="mb-3 !text-[28px] !font-bold  tracking-[0.28em] text-[#64B0E2] ">
            What Makes Us Different?
          </p>

         
          <p className="mx-auto mt-4 max-w-[650px] !text-[16px] leading-[1.8] text-[#686159] md:text-[16px]">
            {/* Thoughtful learning, meaningful experiences and personal
            attention come together to help every child learn and grow
            with confidence. */}
          </p>
        </div>

        {/* ================================================= */}
        {/* MOBILE */}
        {/* ================================================= */}

        <div className="space-y-3 lg:hidden">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            const isActive = activeTab === index;

            return (
              <div
                key={feature.title}
                className="overflow-hidden rounded-xl border border-[#E8E5DD] bg-white"
              >
                {/* HEADER */}

                <button
                  type="button"
                  onClick={() => handleTabChange(index)}
                  className={`
                    flex w-full items-center gap-4
                    p-4 text-left
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-[#075A36] text-white"
                        : "bg-white text-[#333333]"
                    }
                  `}
                >
                  {/* ICON */}

                  <span
                    className={`
                      flex h-10 w-10
                      shrink-0 items-center justify-center
                      rounded-lg
                      ${feature.iconBg}
                    `}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </span>

                  {/* TITLE */}

                  <span className="flex-grow text-[14px] font-medium">
                    {feature.title}
                  </span>

                  {/* ARROW */}

                  <span
                    className={`
                      flex h-8 w-8 items-center justify-center
                      rounded-full border
                      transition-transform duration-300

                      ${
                        isActive
                          ? "rotate-180 border-white/40"
                          : "border-[#64B0E2] text-[#64B0E2]"
                      }
                    `}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                {/* CONTENT */}

                <div
                  className={`
                    overflow-hidden
                    transition-all duration-500
                    ${
                      isActive
                        ? "max-h-[550px]"
                        : "max-h-0"
                    }
                  `}
                >
                  <div className="relative h-[400px]">

                    <Image
                      src={feature.mobileImage || feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />

                    {/* IMAGE GRADIENT */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                    {/* DESCRIPTION CARD */}

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-sm">

                        <div className="mb-3 flex items-center gap-3">

                          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#075A36]">
                            <Icon className="h-4 w-4 text-white" />
                          </span>

                          <p className="!text-[14px] font-semibold text-[#333333]">
                            {feature.title}
                          </p>

                        </div>

                        <p className="!text-[13px] leading-[1.7] text-[#686159]">
                          {feature.description}
                        </p>

                        {feature.description2 && (
                          <p className="mt-2 !text-[13px] leading-[1.7] text-[#686159]">
                            {feature.description2}
                          </p>
                        )}

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================================================= */}
        {/* DESKTOP */}
        {/* ================================================= */}

        <div className="hidden grid-cols-[0.95fr_1.05fr] gap-10 lg:grid">

          {/* ================= LEFT TABS ================= */}

          <div className="space-y-3">

            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              const isActive = activeTab === index;

              return (
                <button
                  type="button"
                  key={feature.title}
                  onClick={() => handleTabChange(index)}
                  className={`
                    group flex w-full
                    items-center gap-4
                    rounded-xl
                    px-5 py-4
                    text-left
                    transition-all duration-300

                    ${
                      isActive
                        ? "translate-x-2 bg-[#075A36] text-white shadow-lg"
                        : "border border-[#E8E5DD] bg-white text-[#333333] hover:translate-x-1 hover:border-[#64B0E2]"
                    }
                  `}
                >

                  {/* ICON */}

                  <span
                    className={`
                      flex h-11 w-11
                      shrink-0 items-center justify-center
                      rounded-lg
                      ${feature.iconBg}
                    `}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </span>

                  {/* TITLE */}

                  <span className="flex-grow text-[15px] font-medium">
                    {feature.title}
                  </span>

                  {/* ARROW */}

                  <ArrowRight
                    className={`
                      h-5 w-5
                      transition-transform duration-300
                      ${isActive ? "translate-x-1" : "group-hover:translate-x-1"}
                    `}
                  />

                </button>
              );
            })}

          </div>

          {/* ================= RIGHT IMAGE ================= */}

          <div className="relative min-h-[520px]">

            <div
              className={`
                relative h-full
                overflow-hidden
                rounded-[20px]
                transition-all duration-300

                ${
                  isTransitioning
                    ? "scale-[0.99] opacity-0"
                    : "scale-100 opacity-100"
                }
              `}
            >

              {/* IMAGE */}

              <Image
                src={currentFeature.image}
                alt={currentFeature.title}
                fill
                className="object-cover"
                sizes="55vw"
                priority
              />

              {/* IMAGE OVERLAY */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* DESCRIPTION CARD */}

              <div className="absolute bottom-5 left-5 right-5">

                <div className="rounded-[16px] bg-white/95 p-6 shadow-xl backdrop-blur-md">

                  {/* CARD TITLE */}

                  <div className="mb-4 flex items-center gap-3">

                    {(() => {
                      const Icon = iconMap[currentFeature.icon];

                      return (
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#075A36]">
                          <Icon className="h-5 w-5 text-white" />
                        </span>
                      );
                    })()}

                    <p className="!text-[16px] font-semibold text-[#333333]">
                      {currentFeature.title}
                    </p>

                  </div>

                  {/* DESCRIPTION */}

                  <p className="!text-[14px] leading-[1.75] text-[#686159]">
                    {currentFeature.description}
                  </p>

                  {currentFeature.description2 && (
                    <p className="mt-2 !text-[14px] leading-[1.75] text-[#686159]">
                      {currentFeature.description2}
                    </p>
                  )}

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}