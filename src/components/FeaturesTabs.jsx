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
    title: "01 — CAMPUS",
    lead: "Room to explore.",
    description:
      "Surrounded by open, green spaces, children have room to move, observe, play and discover beyond the classroom.",
    image: "/campus.png",
    mobileImage: "/green-space-mbl.webp",
  },

  {
    icon: "sun",
    iconBg: "bg-[#64B0E2]",
    title: "02 — LEARNING ENVIRONMENT",
    lead: "A space to feel at ease.",
    description:
      "Thoughtfully designed spaces where children feel comfortable to participate, ask questions, make mistakes and learn with confidence.",
    image: "/curriculum3new.png",
    mobileImage: "/safe-learning-mbl.webp",
  },

  {
    icon: "users",
    iconBg: "bg-[#F7941D]",
    title: "03 — ACADEMICS",
    lead: "Strong foundations. Curious minds.",
    description:
      "A balanced academic approach that builds essential skills while encouraging children to question, understand and think independently.",
    image: "/a5305326-4c60-4fdc-8869-cf1c70342496.png",
    mobileImage: "/global-standards-mbl.webp",
  },

  {
    icon: "palette",
    iconBg: "bg-[#E99AC8]",
    title: "04 — INDIVIDUAL LEARNING",
    lead: "",
    description:
      "With thoughtful guidance and individual attention, children are supported to learn at their own pace and build on their strengths.",
    image: "/indiv-img.png",
    mobileImage: "/personalised-attention-mbl.webp",
  },

  {
    icon: "users",
    iconBg: "bg-[#F4C77A]",
    title: "05 — CORE VALUES",
    lead: "",
    description:
      "Alongside academics, children learn the importance of kindness, responsibility, respect and empathy. These values become part of how they learn, collaborate and connect with the world around them.",
    image: "/corevalues.png",
    mobileImage: "/global-standards-mbl.webp",
  },

  {
    icon: "clock",
    iconBg: "bg-[#64B0E2]",
    title: "06 — BEYOND THE CLASSROOM",
    lead: "More to discover.",
    description:
      "Sport, creativity, activities and hands-on experiences give children the freedom to explore their interests, try something new and discover what they enjoy.",
    image: "/ec5f8a5d-27eb-4df8-b641-0c094fb46ca1.png",
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
    <section className="mb-20">
      <div className="container-custom">

        {/* ================= SECTION HEADING ================= */}

        <div className="mb-10 text-center md:mb-14">
          <p className="mb-3 !text-[28px] !font-bold tracking-[0.08em] text-[#64B0E2]">
            What does growing up at Prithvi feel like?
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
                        ? "max-h-[600px]"
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

                        {/* LEAD TEXT */}

                        {feature.lead && (
                          <p className="mb-2 !text-[15px] font-semibold leading-[1.5] text-[#075A36]">
                            {feature.lead}
                          </p>
                        )}

                        {/* DESCRIPTION */}

                        <p className="!text-[13px] leading-[1.7] text-[#686159]">
                          {feature.description}
                        </p>

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
                      ${
                        isActive
                          ? "translate-x-1"
                          : "group-hover:translate-x-1"
                      }
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

                  {/* LEAD TEXT */}

                  {currentFeature.lead && (
                    <p className="mb-2 !text-[17px] font-semibold leading-[1.5] text-[#075A36]">
                      {currentFeature.lead}
                    </p>
                  )}

                  {/* DESCRIPTION */}

                  <p className="!text-[14px] leading-[1.75] text-[#686159]">
                    {currentFeature.description}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}