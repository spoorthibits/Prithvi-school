"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";

export default function ImageContentSplit({
  eyebrow = "Our Vision",

  heading = "A school built around one simple idea.",

  paragraphs = [
    "We believe every child learns best when they understand the 'why' behind every lesson, not just the answer.",
    "That belief shapes every classroom, every teacher, and every day at our school.",
  ],

  image = "",
  imageAlt = "",

  // "left" | "right"
  imagePosition = "left",

  ctaText = "",
  ctaLink = "",
  onCtaClick = null,

  badgeNumber = "",
  badgeText = "",

  backgroundColor = "bg-white",
}) {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const isImageRight = imagePosition === "right";

  return (
    <section
      ref={sectionRef}
      className={`${backgroundColor} w-full overflow-hidden py-6 md:py-14 lg:py-16`}
    >
      <div className="container-custom">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch ${
            isImageRight ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* =====================================
              IMAGE
          ====================================== */}
          <div
            className={`relative w-full min-w-0 transition-all duration-700 ease-out ${
              inView
                ? "opacity-100 translate-x-0"
                : isImageRight
                ? "opacity-0 translate-x-8"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative w-full h-full min-h-[420px] rounded-[26px] overflow-hidden">
              {image ? (
                <Image
                  src={image}
                  alt={imageAlt || heading}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              ) : (
                <div className="w-full h-full min-h-[420px] bg-[var(--dark-green)]" />
              )}

              {/* =====================================
                  BADGE
              ====================================== */}
              {badgeNumber && (
                <div
                  className={`absolute bottom-0 z-10 bg-white rounded-tr-[20px] px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.12)] flex items-center gap-3 min-w-[220px] transition-all duration-700 delay-300 ${
                    isImageRight
                      ? "right-0 rounded-tl-[20px] rounded-tr-none"
                      : "left-0"
                  } ${
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                >
                  <span
                    className="text-[28px] font-bold leading-none text-[var(--orange)]"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    {badgeNumber}
                  </span>

                  {badgeText && (
                    <span className="text-[12px] leading-snug text-[var(--dark)]/70">
                      {badgeText}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* =====================================
              CONTENT
          ====================================== */}
          <div
            className={`w-full min-w-0 flex flex-col justify-center transition-all duration-700 ease-out delay-150 ${
              inView
                ? "opacity-100 translate-x-0"
                : isImageRight
                ? "opacity-0 -translate-x-8"
                : "opacity-0 translate-x-8"
            }`}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-7 h-[2px] bg-[var(--orange)] shrink-0" />

              <span className="text-[13px] font-semibold uppercase tracking-[2px] text-[var(--orange)]">
                {eyebrow}
              </span>
            </div>

            {/* Heading */}
            <h2 className="!mb-5">
              {heading}
            </h2>

            {/* Paragraphs */}
            <div className="max-w-[650px] !mb-7">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="!mb-4 last:!mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CTA */}
            {ctaText && (
              <div>
                <Button
                  text={ctaText}
                  href={ctaLink}
                  onClick={onCtaClick}
                  variant="primary"
                  className="!bg-[var(--dark-green)] hover:!bg-[var(--orange)] !text-white !px-8 !py-3.5 !rounded-full transition-all duration-300"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}