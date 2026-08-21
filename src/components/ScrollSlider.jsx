"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollButton from "./ScrollButton";

export default function ScrollSlider({
  slides = [],
  sectionBgClass = "bg-[var(--cream)]",
  cardBgClass = "bg-[#F4EFE4]", // warm cream — lets the uniform green + orange logo be the accent colors
  cardTextClass = "text-[#173A4A]", // deep ink-teal, dark enough for contrast, ties back to the brand mark
  arrowBgClass = "bg-[var(--green)]",
  indicatorWidth = "25%",
  minHeight = 520,
}) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

  const nextSlide = () =>
    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );

  return (
    <section className={`relative py-8 md:py-15 overflow-hidden`}>
      <div className="container-custom">

        {/* MOBILE TITLE */}
        <div className="md:hidden mb-5 text-center">
          <div className="bg-[#A2D5EB] inline-block px-6 py-2">
            <h2 className="text-[#2B292A] !text-3xl">
              OUR APPROACH
            </h2>
          </div>
        </div>

        {/* SLIDER WRAPPER */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full flex flex-col md:flex-row"
              >

                {/* MOBILE */}
                <div className="md:hidden w-full">
                  <div className="relative w-full h-[290px]">
                    <Image
                      src={slide.image}
                      alt={slide.title || "Slide image"}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  <div
                    className={`px-5 py-5 ${cardBgClass} ${cardTextClass} relative overflow-hidden`}
                    style={{ minHeight: "240px" }}
                  >
                    <div className="absolute top-0 left-0 h-1 w-full bg-[var(--green)]" />

                    {slide.smallTitle && (
                      <p className={`mb-2 text-xs font-semibold uppercase tracking-[0.15em] ${cardTextClass} opacity-70`}>
                        {slide.smallTitle}
                      </p>
                    )}

                    {slide.title && (
                      <h3 className={`mb-3 ${cardTextClass}`}>
                        {slide.title}
                      </h3>
                    )}

                    {slide.description && (
                      <p className={`${cardTextClass} opacity-90`}>
                        {slide.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* DESKTOP CONTENT */}
                <div
                  className={`hidden md:flex w-full md:w-1/2 px-8 md:px-14 py-14 md:py-20 flex-col justify-center relative overflow-hidden ${cardBgClass} ${cardTextClass}`}
                  style={{ minHeight: `${minHeight}px` }}
                >
                  {/* left accent bar */}
                  <div className="absolute top-0 left-0 h-full w-1.5 bg-[var(--green)]" />

                  {slide.smallTitle && (
                    <div className="flex items-center gap-3 mb-5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)]" />
                      <p className={`${cardTextClass} font-semibold uppercase tracking-[0.2em] text-sm opacity-70`}>
                        {slide.smallTitle}
                      </p>
                    </div>
                  )}

                  {slide.title && (
                    <h2 className={`mb-6 ${cardTextClass}`}>
                      {slide.title}
                    </h2>
                  )}

                  {slide.description && (
                    <p className={`max-w-lg leading-relaxed ${cardTextClass} opacity-80`}>
                      {slide.description}
                    </p>
                  )}

                  {/* INDICATOR */}
                  <div className="mt-10 w-[60%] h-[2px] bg-black/10 relative overflow-hidden rounded-full">
                    <div
                      className="absolute top-0 left-0 h-[2px] bg-[var(--green)] transition-all duration-500 rounded-full"
                      style={{
                        width: `${100 / slides.length}%`,
                        left:
                          current === slides.length - 1
                            ? `${100 - 100 / slides.length}%`
                            : `${(100 / slides.length) * current}%`,
                      }}
                    />
                  </div>
                </div>

                {/* DESKTOP IMAGE */}
                <div
                  className="hidden md:flex w-full md:w-1/2 bg-white items-center justify-center"
                  style={{ minHeight: `${minHeight}px` }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={slide.image}
                      alt={slide.title || "Slide image"}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* ARROWS */}
        <div className="flex justify-center mt-10">
          <div className="flex">
            <ScrollButton
              direction="left"
              onClick={prevSlide}
              bgColorClass={arrowBgClass}
              className="border-r border-white/30"
            />
            <ScrollButton
              direction="right"
              onClick={nextSlide}
              bgColorClass={arrowBgClass}
            />
          </div>
        </div>

      </div>
      {/* ==================================================
          BOTTOM CURVE
      ================================================== */}
      {/* <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-20
          h-[75px]
          w-full
          overflow-hidden

          sm:h-[90px]
          md:h-[115px]
        "
      >
        <Image
          src="/calloutcurve.webp"
          alt=""
          fill
          className="object-fill"
          sizes="100vw"
          priority={false}
        />
      </div> */}
    </section>
  );
}