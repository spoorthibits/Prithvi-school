"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";

export default function ScrollStory({
  slides = [],
  backgroundColor = "white",
  sectionClassName = "",
  containerClassName = "",
  imageClassName = "",
  contentClassName = "",
  dotActiveColor = "#a44a1f",
  dotInactiveColor = "#e6b8a2",
  heading = "OUR STORY",
  headingClassName = "",

  ctaText = "",
  ctaDescription = "",
  ctaLink = "",
  onCtaClick = null,

  imagePosition = "left",
  layoutType = "default",
  imageTransition = "horizontal",

  textColor = "#075a36",

  showBulletPoints = false,
  bulletPoints = [],
}) {
  const wrapperRef = useRef(null);

  const [active, setActive] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  /*
  ============================================================
  SLIDE REFS
  ============================================================
  */

  const activeRef = useRef(0);

  const wheelLockedRef =
    useRef(false);

  const unlockTimerRef =
    useRef(null);

  /*
  ============================================================
  SETTINGS
  ============================================================
  */

  const totalSlides =
    slides?.length || 0;

  /*
  Slow transition.
  */

  const transitionDuration = 1200;

  /*
  After one wheel gesture, wait before
  allowing another slide change.

  This prevents:

  1 -> 3

  and forces:

  1 -> 2 -> 3
  */

  const wheelLockDuration = 1500;

  /*
  ============================================================
  KEEP ACTIVE REF IN SYNC
  ============================================================
  */

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  /*
  ============================================================
  WHEEL SCROLL
  ============================================================

  IMPORTANT:

  There is NO scroll progress calculation here.

  One wheel gesture changes exactly ONE slide.

  The browser page is allowed to continue only when:

  - user is on first slide and scrolls UP
  - user is on last slide and scrolls DOWN
  ============================================================
  */

  useEffect(() => {
    if (!totalSlides) return;

    const handleWheel = (event) => {
      const wrapper =
        wrapperRef.current;

      if (!wrapper) return;

      const rect =
        wrapper.getBoundingClientRect();

      const viewportHeight =
        window.innerHeight;

      /*
      ========================================================
      CHECK STORY VISIBILITY
      ========================================================
      */

      const storyVisible =
        rect.top <
          viewportHeight * 0.85 &&
        rect.bottom >
          viewportHeight * 0.15;

      if (!storyVisible) {
        return;
      }

      /*
      Ignore very tiny trackpad movements.
      */

      if (
        Math.abs(event.deltaY) < 8
      ) {
        return;
      }

      /*
      ========================================================
      CURRENT SLIDE
      ========================================================
      */

      const current =
        activeRef.current;

      const direction =
        event.deltaY > 0
          ? 1
          : -1;

      const next =
        current + direction;

      /*
      ========================================================
      FIRST SLIDE + UP
      ========================================================

      Allow normal page scrolling.
      */

      if (
        direction === -1 &&
        current === 0
      ) {
        return;
      }

      /*
      ========================================================
      LAST SLIDE + DOWN
      ========================================================

      Allow normal page scrolling.

      This is what lets the user move
      from OUR STORY to OUR VISION.
      */

      if (
        direction === 1 &&
        current ===
          totalSlides - 1
      ) {
        return;
      }

      /*
      ========================================================
      MIDDLE SLIDES
      ========================================================

      Prevent normal browser scrolling.

      The user must complete:

      Slide 1
      Slide 2
      Slide 3

      before leaving this section.
      */

      event.preventDefault();

      /*
      ========================================================
      WHEEL LOCK
      ========================================================

      If a slide is already changing,
      ignore all additional wheel events.

      This is the main protection against:

      1 -> 3
      ========================================================
      */

      if (
        wheelLockedRef.current
      ) {
        return;
      }

      /*
      ========================================================
      SAFETY CHECK
      ========================================================
      */

      if (
        next < 0 ||
        next >= totalSlides
      ) {
        return;
      }

      /*
      ========================================================
      LOCK IMMEDIATELY
      ========================================================
      */

      wheelLockedRef.current =
        true;

      /*
      Update ref immediately.
      */

      activeRef.current = next;

      /*
      Update UI.
      */

      setActive(next);

      setIsScrolling(true);

      /*
      ========================================================
      UNLOCK AFTER SLOW TRANSITION
      ========================================================
      */

      clearTimeout(
        unlockTimerRef.current
      );

      unlockTimerRef.current =
        setTimeout(() => {
          wheelLockedRef.current =
            false;

          setIsScrolling(false);
        }, wheelLockDuration);
    };

    window.addEventListener(
      "wheel",
      handleWheel,
      {
        passive: false,
      }
    );

    return () => {
      window.removeEventListener(
        "wheel",
        handleWheel
      );

      clearTimeout(
        unlockTimerRef.current
      );
    };
  }, [totalSlides]);

  /*
  ============================================================
  DOT CLICK
  ============================================================
  */

  const handleDotClick = (
    index
  ) => {
    if (
      !totalSlides ||
      isScrolling ||
      index === activeRef.current
    ) {
      return;
    }

    /*
    Update ref first.
    */

    activeRef.current = index;

    /*
    Lock wheel while transition happens.
    */

    wheelLockedRef.current =
      true;

    setActive(index);

    setIsScrolling(true);

    clearTimeout(
      unlockTimerRef.current
    );

    unlockTimerRef.current =
      setTimeout(() => {
        wheelLockedRef.current =
          false;

        setIsScrolling(false);
      }, transitionDuration);
  };

  /*
  ============================================================
  CURRENT SLIDE
  ============================================================
  */

  const currentSlide =
    slides[active] || slides[0];

  if (!currentSlide) {
    return null;
  }

  /*
  ============================================================
  TEXT CONTENT
  ============================================================
  */

  const renderTextContent =
    () => {
      return (
        <div
          className="
            flex
            w-full
            transition-transform
            duration-[1200ms]
            ease-in-out
          "
          style={{
            transform: `translateX(-${
              active * 100
            }%)`,
            willChange:
              "transform",
          }}
        >
          {slides.map(
            (
              slide,
              index
            ) => (
              <div
                key={index}
                className="
                  w-full
                  min-w-full
                  flex-shrink-0
                "
              >
                {slide.paragraphs?.map(
                  (
                    paragraph,
                    paragraphIndex
                  ) => (
                    <p
                      key={
                        paragraphIndex
                      }
                      className={`
                        mb-3
                        ${
                          layoutType ===
                          "discover"
                            ? "text-[#555]"
                            : "text-gray-600"
                        }
                        text-[15px]
                        sm:text-[16px]
                        md:text-[17px]
                        lg:text-[17px]
                        xl:text-[18px]
                        leading-[1.5]
                        md:leading-[1.55]
                      `}
                    >
                      {paragraph}
                    </p>
                  )
                )}
              </div>
            )
          )}
        </div>
      );
    };

  /*
  ============================================================
  DOTS
  ============================================================
  */

  const renderDots = (
    isMobile = false
  ) => {
    return (
      <div
        className="
          flex
          items-center
          gap-1
          w-fit
          bg-[#f5f0ed]
          rounded-full
          px-3
          py-2.5
          mt-5
        "
      >
        {slides.map(
          (_, index) => (
            <button
              key={index}
              type="button"
              disabled={
                isScrolling
              }
              onClick={() =>
                handleDotClick(
                  index
                )
              }
              className={`
                h-2
                rounded-full
                transition-all
                duration-500
                ease-out
                ${
                  index === active
                    ? "w-9"
                    : "w-2"
                }
                ${
                  isScrolling
                    ? "cursor-default"
                    : "cursor-pointer"
                }
              `}
              style={{
                backgroundColor:
                  index === active
                    ? dotActiveColor
                    : dotInactiveColor,
              }}
              aria-label={`Go to slide ${
                index + 1
              }`}
            />
          )
        )}
      </div>
    );
  };

  /*
  ============================================================
  IMAGE SECTION
  ============================================================
  */

  const renderImageSection =
    (isMobile = false) => {
      return (
        <div
          className={`
            w-full
            ${
              isMobile
                ? ""
                : "lg:w-[350px] xl:w-[370px] flex-shrink-0"
            }
          `}
        >
          <div
            className={`
              relative
              w-full
              aspect-[3/2]
              overflow-hidden
              rounded-[22px]
              ${imageClassName}
            `}
          >
            {imageTransition ===
            "vertical" ? (
              <div
                className="
                  absolute
                  inset-0
                  w-full
                  transition-transform
                  duration-[1200ms]
                  ease-in-out
                "
                style={{
                  height: `${
                    slides.length *
                    100
                  }%`,
                  transform: `translateY(-${
                    (active /
                      slides.length) *
                    100
                  }%)`,
                  willChange:
                    "transform",
                }}
              >
                {slides.map(
                  (
                    slide,
                    index
                  ) => (
                    <div
                      key={index}
                      className="
                        relative
                        w-full
                      "
                      style={{
                        height: `${
                          100 /
                          slides.length
                        }%`,
                      }}
                    >
                      <Image
                        src={
                          slide.image
                        }
                        alt={
                          slide.imageAlt ||
                          heading
                        }
                        fill
                        priority={
                          index === 0
                        }
                        className="
                          object-cover
                        "
                        sizes="
                          (max-width: 1024px) 100vw,
                          370px
                        "
                      />
                    </div>
                  )
                )}
              </div>
            ) : (
              <Image
                key={
                  currentSlide.image
                }
                src={
                  currentSlide.image
                }
                alt={
                  currentSlide.imageAlt ||
                  heading
                }
                fill
                priority
                className="
                  object-cover
                  transition-opacity
                  duration-[1200ms]
                  ease-in-out
                "
                sizes="
                  (max-width: 1024px) 100vw,
                  370px
                "
              />
            )}
          </div>

          {currentSlide.imageTitle && (
            <h3
              className="
                font-serif
                font-semibold
                text-[#142f4b]
                text-[22px]
                sm:text-[24px]
                md:text-[25px]
                mt-3
                px-1
              "
            >
              {
                currentSlide.imageTitle
              }
            </h3>
          )}

          {currentSlide.imageDescription && (
            <p
              className="
                text-gray-600
                text-[15px]
                md:text-[16px]
                mt-1
                px-1
                leading-[1.5]
              "
            >
              {
                currentSlide.imageDescription
              }
            </p>
          )}
        </div>
      );
    };

  /*
  ============================================================
  DISCOVER CONTENT
  ============================================================
  */

  const renderDiscoverContent =
    () => {
      return (
        <div
          className="
            relative
            max-w-[440px]
            p-5
            pl-2
          "
        >
          <div
            className="
              absolute
              left-0
              top-0
              w-[90px]
              h-[280px]
              bg-[#f5f0ed]
              rounded-[22px]
            "
          />

          <div
            className="
              relative
              ml-10
              pt-8
            "
          >
            <h2
              className={`
                font-serif
                mb-6
                tracking-wider
                ${headingClassName}
              `}
              style={{
                color:
                  textColor,
              }}
            >
              {heading}
            </h2>

            <ul className="space-y-4">
              {bulletPoints.map(
                (
                  point,
                  index
                ) => (
                  <li
                    key={index}
                    className="
                      flex
                      items-start
                      gap-3
                    "
                  >
                    <span className="text-[#A54220] text-lg">
                      •
                    </span>

                    <span
                      className="
                        text-[#2b2b2b]
                        tracking-wide
                        uppercase
                        font-light
                        text-[15px]
                        lg:text-[17px]
                      "
                    >
                      {point}
                    </span>
                  </li>
                )
              )}
            </ul>

            {renderDots()}
          </div>
        </div>
      );
    };

  /*
  ============================================================
  CTA
  ============================================================
  */

  const renderCtaButton =
    () => {
      return (
        <Button
          text={ctaText}
          href={ctaLink}
          onClick={onCtaClick}
          variant="primary"
          className="
            !bg-[#a44a1f]
            !px-7
            !py-2.5
            hover:!bg-[#8a3d19]
          "
        />
      );
    };

  /*
  ============================================================
  DISCOVER LAYOUT
  ============================================================
  */

  if (
    layoutType === "discover"
  ) {
    return (
      <div
        ref={wrapperRef}
        className="
          relative
          w-full
        "
      >
        <section
          className={`
            w-full
            ${sectionClassName}
          `}
          style={{
            backgroundColor,
          }}
        >
          <div
            className={`
              container-custom
              w-full
              py-4
              sm:py-5
              lg:py-6
              ${containerClassName}
            `}
          >
            {/* DESKTOP */}

            <div
              className="
                hidden
                lg:flex
                items-start
                justify-between
                gap-10
                xl:gap-14
              "
            >
              {showBulletPoints ? (
                renderDiscoverContent()
              ) : (
                <div
                  className={`
                    flex-1
                    max-w-[560px]
                    overflow-hidden
                    ${contentClassName}
                  `}
                >
                  <h2
                    className={`
                      font-serif
                      tracking-[0.12em]
                      text-[30px]
                      xl:text-[32px]
                      mb-3
                      ${headingClassName}
                    `}
                    style={{
                      color:
                        textColor,
                    }}
                  >
                    {heading}
                  </h2>

                  {renderTextContent()}

                  {renderDots()}
                </div>
              )}

              {renderImageSection()}
            </div>

            {/* MOBILE / TABLET */}

            <div
              className="
                lg:hidden
                w-full
              "
            >
              {renderImageSection(
                true
              )}

              {showBulletPoints ? (
                <div
                  className="
                    bg-[#f5f0ed]
                    rounded-[22px]
                    p-5
                    mt-4
                  "
                >
                  <h2
                    className={`
                      font-serif
                      text-[24px]
                      mb-3
                      ${headingClassName}
                    `}
                    style={{
                      color:
                        textColor,
                    }}
                  >
                    {heading}
                  </h2>

                  <ul className="space-y-3">
                    {bulletPoints.map(
                      (
                        point,
                        index
                      ) => (
                        <li
                          key={index}
                          className="
                            flex
                            items-start
                            gap-3
                          "
                        >
                          <span className="text-[#A54220]">
                            •
                          </span>

                          <span className="text-[#2b2b2b]">
                            {point}
                          </span>
                        </li>
                      )
                    )}
                  </ul>

                  {renderDots(
                    true
                  )}
                </div>
              ) : (
                <>
                  <h3
                    className={`
                      font-serif
                      tracking-[0.12em]
                      text-[24px]
                      mt-4
                      mb-2
                      ${headingClassName}
                    `}
                    style={{
                      color:
                        textColor,
                    }}
                  >
                    {heading}
                  </h3>

                  <div
                    className="
                      w-full
                      overflow-hidden
                    "
                  >
                    {renderTextContent()}
                  </div>

                  {renderDots(
                    true
                  )}
                </>
              )}
            </div>

            {/* CTA */}

            {(ctaText ||
              ctaDescription) && (
              <div
                className="
                  text-center
                  mt-5
                "
              >
                {ctaDescription && (
                  <p className="text-gray-500 mb-3">
                    {
                      ctaDescription
                    }
                  </p>
                )}

                {ctaText &&
                  renderCtaButton()}
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }

  /*
  ============================================================
  DEFAULT LAYOUT
  ============================================================
  */

  return (
    <div
      ref={wrapperRef}
      className="
        relative
        w-full
      "
    >
      <section
        className={`
          w-full
          ${sectionClassName}
        `}
        style={{
          backgroundColor,
        }}
      >
        <div
          className={`
            container-custom
            w-full
            py-4
            sm:py-5
            lg:py-14
            ${containerClassName}
          `}
        >
          {/* DESKTOP */}

          <div
            className={`
              hidden
              lg:flex
              items-start
              ${
                imagePosition ===
                "right"
                  ? "flex-row-reverse"
                  : ""
              }
              gap-10
              xl:gap-14
            `}
          >
            {/* IMAGE */}

            {renderImageSection()}

            {/* CONTENT */}

            <div
              className={`
                flex-1
                max-w-[590px]
                overflow-hidden
                ${contentClassName}
              `}
            >
              <h3
                className={`
                  font-serif
                  tracking-[0.12em]
                  text-[30px]
                  xl:text-[32px]
                  mb-3
                  ${headingClassName}
                `}
                style={{
                  color:
                    textColor,
                }}
              >
                {heading}
              </h3>

              {renderTextContent()}

              {renderDots()}
            </div>
          </div>

          {/* MOBILE / TABLET */}

          <div
            className="
              lg:hidden
              w-full
            "
          >
            {/* IMAGE */}

            {renderImageSection(
              true
            )}

            {/* HEADING */}

            <h3
              className={`
                font-serif
                tracking-[0.12em]
                text-[24px]
                sm:text-[26px]
                mt-4
                mb-0
                ${headingClassName}
              `}
              style={{
                color:
                  textColor,
              }}
            >
              {heading}
            </h3>

            {/* TEXT */}

            <div
              className="
                w-full
                overflow-hidden
              "
            >
              {renderTextContent()}
            </div>

            {/* DOTS */}

            {renderDots(true)}
          </div>

          {/* CTA */}

          {(ctaText ||
            ctaDescription) && (
            <div
              className="
                text-center
                mt-5
              "
            >
              {ctaDescription && (
                <p className="text-gray-500 mb-3">
                  {
                    ctaDescription
                  }
                </p>
              )}

              {ctaText &&
                renderCtaButton()}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}