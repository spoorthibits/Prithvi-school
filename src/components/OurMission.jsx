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
    // First block: text on the left, image on the right, sketch background
    imageSide: "right",
    bgImage: "/sketch-bg-dark.png",
  },
  {
    id: "mission",
    title: "Mission",
    description:
      "Our mission is to provide a balanced and engaging learning environment that combines academic excellence with values, creativity, innovation and meaningful experiences. We aim to empower every child with the knowledge, skills and character needed to navigate the future with confidence, empathy and responsibility.",
    image: "/curriculum-2new.png", // <- put your image in /public
    alt: "Our Mission",
    // Second block: image on the left, text on the right, plain light background
    imageSide: "left",
    bgImage: null,
  },
];

// Image with the double offset outline frame seen in the reference
function FramedImage({ src, alt, mirror = false }) {
  return (
    <div className="!relative !w-full !max-w-[400px] !mx-auto !p-5">
      {/* Outline frames */}
      <span
        className={`!absolute !border !border-[#196191]/25 !pointer-events-none ${
          mirror
            ? "!top-0 !right-5 !left-0 !bottom-5"
            : "!top-0 !left-0 !right-5 !bottom-5"
        }`}
        aria-hidden="true"
      />
      <span
        className={`!absolute !border !border-[#196191]/25 !pointer-events-none ${
          mirror
            ? "!top-5 !left-5 !right-0 !bottom-0"
            : "!top-5 !right-0 !left-5 !bottom-0"
        }`}
        aria-hidden="true"
      />

      {/* Image */}
      <div className="!relative !w-full !h-[220px] sm:!h-[260px] md:!h-[280px] !overflow-hidden !shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 90vw, 400px"
          className="!object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function VisionMissionSection() {
  return (
    <div className="!w-full">
      {SECTIONS.map((section) => {
        const imageOnRight = section.imageSide === "right";

        return (
          <section
            key={section.id}
            className={`!relative !overflow-hidden !w-full !py-12 sm:!py-6 lg:!py-3 ${
              section.bgImage ? "!bg-[#E4EBF5]" : "!bg-[#F7FAFD]"
            }`}
          >
            {/* Sketch background + soft overlay (only for sections with a bgImage) */}
            {section.bgImage && (
              <>
                <div
                  className="!absolute !inset-0 !bg-cover !bg-center !bg-no-repeat"
                  style={{ backgroundImage: `url('${section.bgImage}')` }}
                  aria-hidden="true"
                />
                <div
                  className="!absolute !inset-0 !bg-[#E4EBF5]/85"
                  aria-hidden="true"
                />
              </>
            )}

            <div className="container-custom !relative !z-10 !px-4 sm:!px-6">
              {/* Mobile: flex-col-reverse → image first, then text.
                  md+: side-by-side. */}
              <div
                className={`!flex !flex-col-reverse !items-center !gap-8 md:!gap-14 lg:!gap-20 ${
                  imageOnRight ? "md:!flex-row" : "md:!flex-row-reverse"
                }`}
              >
                {/* Text */}
                <div
                  className={`!flex-1 !w-full !text-center ${
                    imageOnRight ? "md:!text-right" : "md:!text-left"
                  }`}
                >
                  <h2
                    className="!normal-case !mb-3"
                    style={{
                      fontWeight: 700,
                      fontSize: "clamp(28px, 4vw, 40px)",
                      lineHeight: 1.0,
                      color: "#196191",
                    }}
                  >
                    {section.title}
                  </h2>

                  {/* Small underline */}
                  <span
                    className={`!block !h-[2px] !w-24 !bg-[#F7941D] !mb-6 !mx-auto ${
                      imageOnRight ? "md:!ml-auto md:!mr-0" : "md:!mx-0"
                    }`}
                    aria-hidden="true"
                  />

                  <p className="!text-[#4C4C4C] !text-[15px] sm:!text-base lg:!text-[17px] !leading-[1.9] !m-0">
                    {section.description}
                  </p>
                </div>

                {/* Image */}
                <div className="!w-full md:!w-[42%] lg:!w-[38%] !shrink-0">
                  <FramedImage
                    src={section.image}
                    alt={section.alt}
                    mirror={!imageOnRight}
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}