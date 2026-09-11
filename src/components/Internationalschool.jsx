"use client";

import Image from "next/image";

export default function Internationalschool({
  title = "",
  paragraphs = [],
  image = null, // optional
  bgClass = "bg-[#fff9da]",
  titleClass =
    "text-[20px] sm:text-[26px] md:text-[34px] font-semibold text-primary leading-tight",
  highlightTitle = false,
  titleMaxWidth = "max-w-[800px]",
  paragraphMaxWidth = "",
  highlightClass = "bg-lightblue px-3 py-1",
  textClass =
    "text-[15px] sm:text-[16px] md:text-[16px] leading-[26px] md:leading-[30px] text-[#555]",
}) {
  return (
    <section className="w-full bg-[#ffffff] py-12 md:py-10">
      <div className="container-custom">

        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center">

          {/* ================= LEFT CONTENT ================= */}

          <div className={`w-full ${titleMaxWidth}`}>

            {/* MOBILE: logo beside heading */}

            <div className="flex items-start gap-3 md:block">

              {/* Optional Image (Mobile) */}

              {image && (
                <div className="relative flex h-[150px] w-[120px] shrink-0 items-end justify-center md:hidden">

                  {/* BLUE CIRCLE */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      z-0
                      h-[120px]
                      w-[120px]
                      -translate-x-1/2
                      rounded-full
                      bg-[#9ed8ed]
                    "
                  />

                  {/* LEFT LEAF */}

                  <Image
                    src="/left-leaf.png"
                    alt=""
                    width={100}
                    height={160}
                    className="
                      pointer-events-none
                      absolute
                      bottom-0
                      left-[-18px]
                      z-10
                      h-auto
                      w-[65px]
                    "
                    loading="lazy"
                  />

                  {/* RIGHT LEAF */}

                  <Image
                    src="/right-leaf.png"
                    alt=""
                    width={100}
                    height={160}
                    className="
                      pointer-events-none
                      absolute
                      bottom-0
                      right-[-18px]
                      z-10
                      h-auto
                      w-[65px]
                    "
                    loading="lazy"
                  />

                  {/* STUDENT IMAGE */}

                  <Image
                    src={image}
                    alt="Prithvi Global School students"
                    width={180}
                    height={220}
                    className="
                      relative
                      z-20
                      h-auto
                      w-[150px]
                      object-contain
                    "
                  />
                </div>
              )}

              <h2
                className={`
                  ${titleClass}
                  ${titleMaxWidth}
                  whitespace-normal
                  break-words
                  w-full
                  xl:whitespace-nowrap
                `}
              >
                {highlightTitle ? (
                  <span className={`inline-block ${highlightClass}`}>
                    {title}
                  </span>
                ) : (
                  title
                )}
              </h2>
            </div>

            {/* ================= PARAGRAPHS ================= */}

            <div className={`space-y-5 ${paragraphMaxWidth}`}>
              {paragraphs.map((text, i) => (
                <p
                  key={i}
                  className={`blog-content ${textClass}`}
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              ))}
            </div>
          </div>

          {/* ================= RIGHT IMAGE — DESKTOP ================= */}

          <div className="relative hidden w-1/3 items-center justify-center md:flex">

            {/* BLUE ROUND BACKGROUND */}

            <div
              className="
                absolute
                left-1/2
                top-38
                z-0
                h-[360px]
                w-[360px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#9ed8ed]

                lg:h-[230px]
                lg:w-[230px]

                xl:h-[280px]
                xl:w-[280px]
              "
            />

            {/* ================= LEFT LEAF ================= */}

            <Image
              src="/left-leaf.png"
              alt=""
              width={180}
              height={300}
              className="
                pointer-events-none
                absolute
                bottom-[120px]
                left-[-35px]
                z-10
                h-auto
                w-[125px]

                lg:left-[-55px]
                lg:w-[155px]

                xl:left-[-70px]
                xl:w-[175px]
              "
              loading="lazy"
            />

            {/* ================= RIGHT LEAF ================= */}

            <Image
              src="/right-leaf.png"
              alt=""
              width={180}
              height={300}
              className="
                pointer-events-none
                absolute
                bottom-[120px]
                right-[-35px]
                z-10
                h-auto
                w-[125px]

                lg:right-[-55px]
                lg:w-[155px]

                xl:right-[-70px]
                xl:w-[175px]
              "
              loading="lazy"
            />

            {/* ================= ORIGINAL IMAGE ================= */}

            {image && (
              <Image
                src={image}
                alt="Prithvi Global School students"
                width={600}
                height={700}
                className="
                  relative
                  z-20
                  h-auto
                  w-full
                  max-w-[520px]
                  object-contain
                "
                sizes="(max-width: 1024px) 40vw, 520px"
              />
            )}
          </div>

        </div>
      </div>
    </section>
  );
}