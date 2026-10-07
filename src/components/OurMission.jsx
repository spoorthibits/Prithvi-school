"use client";

import Image from "next/image";

// ─── Edit content / images here ───────────────────────────────────────────
const SECTIONS = [
  {
    id: "vision",
    title: "Vision",
    description:
      "Our vision is to nurture confident, compassionate and curious individuals who are grounded in strong values while developing a global outlook. We aspire to create an environment where every child can discover their strengths, think independently and grow into a responsible citizen ready to contribute meaningfully to the world.",
    image: "/curriculum-3new.png", // <- put your image in /public
    alt: "Our Vision",
    bg: "linear-gradient(160deg, #EAF3FB 0%, #DCEBF7 100%)", // light blue
    ring: "#64B0E2",
  },
  {
    id: "mission",
    title: "Mission",
    description:
      "Our mission is to provide a balanced and engaging learning environment that combines academic excellence with values, creativity, innovation and meaningful experiences. We aim to empower every child with the knowledge, skills and character needed to navigate the future with confidence, empathy and responsibility.",
    image: "/curriculum-2new.png", // <- put your image in /public
    alt: "Our Mission",
    bg: "linear-gradient(160deg, #FEF4E4 0%, #FCE8C9 100%)", // light warm cream
    ring: "#F7941D",
  },
];

// Circular image with an outer ring, like the reference
function CircleImage({ src, alt, ring }) {
  return (
    <div
      className="!relative !mx-auto !flex !h-[110px] !w-[110px] !items-center !justify-center !rounded-full !border-2 sm:!h-[125px] sm:!w-[125px]"
      style={{ borderColor: ring }}
    >
      <div className="!relative !h-[85%] !w-[85%] !overflow-hidden !rounded-full !bg-white !shadow-[0_6px_16px_-6px_rgba(0,0,0,0.3)]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 95px, 110px"
          className="!object-cover !object-top"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function VisionMissionSection() {
  return (
    <section className="!w-full">
      {/* Stacked on mobile, side by side from md up */}
      <div className="!grid !w-full !grid-cols-1 md:!grid-cols-2">
        {SECTIONS.map((section) => (
          <div
            key={section.id}
            className="!flex !flex-col !items-center !px-6 !py-6 !text-center sm:!px-10 lg:!px-14 lg:!py-7"
            style={{ background: section.bg }}
          >
            <CircleImage
              src={section.image}
              alt={section.alt}
              ring={section.ring}
            />

            <h2
              className="!mb-1.5 !mt-3 !normal-case"
              style={{
                fontWeight: 700,
                fontSize: "clamp(22px, 3vw, 28px)",
                lineHeight: 1.1,
                color: "#196191",
              }}
            >
              {section.title}
            </h2>

            {/* Small underline */}
            <span
              className="!mb-3 !block !h-[2px] !w-16 !bg-[#F7941D]"
              aria-hidden="true"
            />

            <p className="!m-0 !max-w-[500px] !text-[13px] !leading-[1.6] !text-[#4C4C4C] lg:!text-[14px]">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}