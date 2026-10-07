"use client";

import { useEffect, useRef, useState } from "react";
import ScrollButton from "./ScrollButton";
import Image from "next/image";

export default function VideoHero({
  videoSrc,
  title,
  slides = [],
}) {
  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mobileIndex, setMobileIndex] = useState(0);

  const totalSlides = slides.length + 1;

  /* ---------------- SCREEN DETECTION ---------------- */

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  /* ---------------- DESKTOP SCROLL LOGIC (FIXED) ---------------- */

  useEffect(() => {
    if (!isDesktop) return;

    const handleScroll = () => {
      const el = scrollRef.current;
      if (!el) return;

      const start = el.offsetTop;
      const scrollY = window.scrollY;

      const slideScrollDistance =
        (totalSlides - 1) * window.innerHeight;

      const releaseBuffer =
        window.innerHeight * 0.45;

      const totalDistance =
        slideScrollDistance + releaseBuffer;

      const progressRaw =
        (scrollY - start) / slideScrollDistance;

      /* Clamp horizontal movement only for slides */
      const clamped = Math.max(
        0,
        Math.min(progressRaw, 1)
      );

      setProgress(clamped);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [isDesktop, totalSlides]);

  const translateX = isDesktop
    ? progress * (totalSlides - 1) * -100
    : 0;

 const nextMobile = () =>
  setMobileIndex((prev) =>
    prev === slides.length - 1 ? 0 : prev + 1
  );

const prevMobile = () =>
  setMobileIndex((prev) =>
    prev === 0 ? slides.length - 1 : prev - 1
  );

  /* ---------------- HEADING ----------------
     `fontSize` is optional: mobile keeps the default size,
     the desktop slides pass a smaller one. */

  const Heading = ({
    top,
    bottom,
    fontSize, // only passed by the desktop slides
  }) => (
    <div className="mb-4">

      {/* MAIN HEADING */}
      {top && (
        <div className="inline-block mb-2 sm:!text-[29px]
            md:!text-[39px]">
          {/* Mobile (below sm): 26px. From sm up: original clamp size.
              When `fontSize` is passed (desktop slides) it is used as-is. */}
          <h2
            className={`leading-[100%] uppercase ${
              fontSize
                ? ""
                : "!text-[26px] sm:!text-[length:clamp(32px,6vw,48px)]"
            }`}
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 700,
              ...(fontSize ? { fontSize } : {}),
              color: "#196191",
            }}
          >
            {top}
          </h2>
        </div>
      )}

      {/* SECOND HEADING */}
      {bottom && (
        <div className="inline-block py-2">
          <h2
            className="leading-[100%] uppercase"
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 700,
              fontSize: fontSize || "clamp(32px, 6vw, 48px)",
              color: "#e88f1b",
            }}
          >
            {bottom}
          </h2>
        </div>
      )}
    </div>
  );

  /* ---------------- SLIDE LAYOUT (desktop) ---------------- */

  const SlideLayout = ({ slide }) => (
    <div className="w-screen h-auto lg:h-screen flex flex-col lg:flex-row">

      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-10 lg:px-20 py-12 lg:py-0">
        <div className="w-full max-w-xl paragraph">

          {/* Heading: was clamp(32px, 6vw, 48px) */}
          <Heading
            top={slide.headingTop}
            bottom={slide.headingBottom}
            fontSize="clamp(24px, 2.6vw, 36px)"
          />

          {/* DESKTOP SUBTITLE — was clamp(48px, 2.5vw, 524px) i.e. 48px */}
          {slide.subTitle && (
            <p
              className="mb-4 leading-[100%] !text-[#e88f1b]"
              style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 700,
                fontSize: "clamp(22px, 2vw, 30px)",
                color: "#e88f1b",
              }}
            >
              {slide.subTitle}
            </p>
          )}

          {/* Description — was clamp(17px, 2vw, 18px) */}
          {slide.description && (
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(14px, 1.2vw, 16px)",
                lineHeight: "clamp(21px, 1.8vw, 24px)",
                color: "#4B5563",
              }}
            >
              {slide.description}
            </p>
          )}

        </div>
      </div>

      <div className="relative w-full lg:w-1/2 h-[55vh] sm:h-[65vh] lg:h-full">
        <Image
          src={slide.image}
          alt=""
          fill
          className="object-cover"
        />
      </div>

    </div>
  );

  return (
    <>
      {/* ================= DESKTOP ================= */}

      {isDesktop && (
        <section
          ref={scrollRef}
          className="relative w-full"
          style={{
            height: `${(totalSlides + 1) * 100}vh`,
          }}
        >
          <div className="sticky top-[72px] h-[calc(100vh-72px)] overflow-hidden">

            <div
              className="flex h-full"
              style={{
                width: `${totalSlides * 100}vw`,
                transform: `translateX(${translateX}vw)`,
                transition: "transform 0.1s linear",
                willChange: "transform",
              }}
            >

              {/* VIDEO HERO */}

              <div className="w-screen h-screen relative">

                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source
                    src={videoSrc}
                    type="video/mp4"
                  />
                </video>

                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.36) 37.51%, rgba(0,0,0,0.54) 51.68%, rgba(0,0,0,0.30) 78.65%, rgba(0,0,0,0) 100%)",
                  }}
                />

                <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
                <h2
                  className="!text-white uppercase leading-[100%]"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 730,
                    fontVariant: "small-caps",
                    fontSize: "clamp(36px, 8vw, 160px)",
                  }}
                >
                  {title}
                </h2>
              </div>

              </div>

              {slides.map((slide, index) => (
                <SlideLayout
                  key={index}
                  slide={slide}
                />
              ))}

            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE + TABLET ================= */}

      {!isDesktop && (
        <>
          <section className="relative w-full">

            <div className="w-full aspect-[10/7] relative">

              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source
                  src={videoSrc}
                  type="video/mp4"
                />
              </video>

              <div className="absolute inset-0 bg-black/40" />

              <div className="relative z-10 flex items-center justify-center h-full text-center">

                <h2
                  className="!text-white uppercase leading-[100%] "
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontWeight: 700,
                    fontVariant: "small-caps",
                    fontSize: "clamp(32px, 6vw, 48px)",
                  }}
                >
                  {title}
                </h2>

              </div>

            </div>

          </section>

          <section className=" relative">

            {/* ================= SLIDES ================= */}
            <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500"
                  style={{
                   transform: `translateX(-${mobileIndex * 100}%)`,
                  }}
                >

                  {slides.map((slide, index) => (

                    <div
                      key={index}
                      className="min-w-full"
                    >

                      <div className="container-custom py-10 pb-1 ">

                        {/* IMAGE */}

                        <div className="relative w-full h-[280px] md:h-[340px] mb-6">

                          <Image
                            src={slide.image}
                            alt=""
                            fill
                            className="object-cover object-top"
                          />

                        </div>

                        {/* MAIN HEADING */}

                        <Heading
                          top={slide.headingTop}
                          bottom={slide.headingBottom}
                        />

                        {/* SUBTITLE
                            HIDDEN ON MOBILE + TABLET */}

                        {/* DESCRIPTION */}

                        {slide.description && (
                          <p
                          className="mb-0"
                            style={{
                              fontFamily: "Montserrat, sans-serif",
                              fontWeight: 400,
                              fontSize: "clamp(16px, 3vw, 18px)",
                              color: "#4B5563",
                            }}
                          >
                            {slide.description}
                          </p>
                        )}

                      </div>

                    </div>

                  ))}

                </div>
            </div>

            {/* =================================================
                CONSTANT SCROLL BUTTONS
                OUTSIDE slides.map()
            ================================================= */}

            {slides.length > 1 && (
              <div className="flex justify-center  mb-4">

                <div className="flex ">

                  <ScrollButton
                    direction="left"
                    onClick={prevMobile}
                    bgColorClass="bg-[#196191]"
                    hoverColor="#B85F2C"
                    className="border-r border-white/30"
                  />

                  <ScrollButton
                    direction="right"
                    onClick={nextMobile}
                    bgColorClass="bg-[#196191]"
                    hoverColor="#B85F2C"
                  />

                </div>

              </div>
            )}

          </section>
        </>
      )}
    </>
  );
}