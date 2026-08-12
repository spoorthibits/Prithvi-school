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

  const totalSlides = slides?.length || 0;

  /* =========================================
     SCROLL SETTINGS

     Compact scroll-story.

     1 slide  = 100vh
     2 slides = 145vh
     3 slides = 190vh
     4 slides = 235vh

     Much smaller than 100vh per slide.
  ========================================= */

  const scrollHeight =
    totalSlides > 1
      ? `${100 + (totalSlides - 1) * 45}vh`
      : "100vh";

  /* =========================================
     SCROLL HANDLER
  ========================================= */

  useEffect(() => {
    if (!totalSlides) return;

    let ticking = false;

    const updateActiveSlide = () => {
      if (!wrapperRef.current) {
        ticking = false;
        return;
      }

      const wrapper = wrapperRef.current;
      const rect = wrapper.getBoundingClientRect();

      /*
       * Amount scrolled inside this component.
       */
      const scrolled = Math.max(
        -rect.top,
        0
      );

      /*
       * Total scroll distance.
       */
      const maxScroll = Math.max(
        wrapper.offsetHeight -
          window.innerHeight,
        1
      );

      /*
       * Progress 0 -> 1
       */
      const progress = Math.min(
        Math.max(
          scrolled / maxScroll,
          0
        ),
        1
      );

      /*
       * Current slide.
       */
      const nextActive = Math.round(
        progress *
          (totalSlides - 1)
      );

      setActive((previous) =>
        previous === nextActive
          ? previous
          : nextActive
      );

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(
          updateActiveSlide
        );

        ticking = true;
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      updateActiveSlide
    );

    updateActiveSlide();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        updateActiveSlide
      );
    };
  }, [totalSlides]);

  /* =========================================
     DOT CLICK
  ========================================= */

  const handleDotClick = (index) => {
    if (
      !wrapperRef.current ||
      !totalSlides ||
      isScrolling
    ) {
      return;
    }

    setActive(index);
    setIsScrolling(true);

    const wrapper =
      wrapperRef.current;

    const rect =
      wrapper.getBoundingClientRect();

    const wrapperTop =
      window.scrollY + rect.top;

    const scrollableHeight =
      Math.max(
        wrapper.offsetHeight -
          window.innerHeight,
        0
      );

    const target =
      wrapperTop +
      (scrollableHeight /
        Math.max(
          totalSlides - 1,
          1
        )) *
        index;

    window.scrollTo({
      top: target,
      behavior: "smooth",
    });

    setTimeout(() => {
      setIsScrolling(false);
    }, 800);
  };

  /* =========================================
     CURRENT SLIDE
  ========================================= */

  const currentSlide =
    slides[active] || slides[0];

  if (!currentSlide) {
    return null;
  }

  /* =========================================
     TEXT CONTENT
  ========================================= */

  const renderTextContent = () => {
    return (
      <div
        className="
          flex
          w-full
          transition-transform
          duration-700
          ease-out
        "
        style={{
          transform: `translateX(-${
            active * 100
          }%)`,
          willChange: "transform",
        }}
      >
        {slides.map(
          (slide, index) => (
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

  /* =========================================
     DOTS
  ========================================= */

  const renderDots = (
    isMobile = false
  ) => {
    return (
      <div
        className={`
          flex
          items-center
          gap-1
          w-fit
          bg-[#f5f0ed]
          rounded-full
          px-3
          py-2.5
          ${
            isMobile
              ? "mt-5"
              : "mt-5"
          }
        `}
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

  /* =========================================
     IMAGE SECTION
  ========================================= */

  const renderImageSection = (
    isMobile = false
  ) => {
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
          {/* =================================
              VERTICAL IMAGE
          ================================= */}

          {imageTransition ===
          "vertical" ? (
            <div
              className="
                absolute
                inset-0
                w-full
                transition-transform
                duration-700
                ease-out
              "
              style={{
                height: `${
                  slides.length * 100
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
            /* =================================
               NORMAL IMAGE
            ================================= */

            <Image
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
                duration-700
                ease-out
              "
              sizes="
                (max-width: 1024px) 100vw,
                370px
              "
            />
          )}
        </div>

        {/* =================================
            IMAGE TITLE
        ================================= */}

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

        {/* =================================
            IMAGE DESCRIPTION
        ================================= */}

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

  /* =========================================
     DISCOVER CONTENT
  ========================================= */

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

  /* =========================================
     CTA
  ========================================= */

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

  /* =========================================
     DISCOVER LAYOUT
  ========================================= */

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
        style={{
          height:
            scrollHeight,
        }}
      >
        <section
          className={`
            sticky
            top-[76px]
            lg:top-[88px]
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

  /* =========================================
     DEFAULT LAYOUT
  ========================================= */

  return (
    <div
      ref={wrapperRef}
      className="
        relative
        w-full
      "
      style={{
        height:
          scrollHeight,
      }}
    >
      <section
        className={`
          sticky
          top-[76px]
          lg:top-[88px]
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
          {/* =================================
              DESKTOP
          ================================= */}

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

          {/* =================================
              MOBILE / TABLET
          ================================= */}

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

          {/* =================================
              CTA
          ================================= */}

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