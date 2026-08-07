"use client";

import Image from "next/image";

/**
 * ContactSchool
 * Full building photo shown COMPLETELY (no cropping, no zoom) with
 * headline/CTAs overlaid on the right. Built with Prithvi's global
 * tokens (--dark-green, --orange, --white).
 *
 * WHY THE PREVIOUS VERSION LOOKED ZOOMED IN:
 * The section had a fixed height (h-[250px] md:h-[300px] ...) AND the
 * inner div had its own aspect-ratio (aspect-[16/9] sm:aspect-[15/9]).
 * Those fight each other — aspect-ratio computes its OWN height from
 * the width regardless of the section's fixed height, so the div ended
 * up much taller than the section, and overflow-hidden on the section
 * chopped off everything below the fixed height — hence the extreme
 * close-up crop on just the roofline/logo.
 *
 * THIS VERSION:
 * No fixed height, no aspect-ratio, no object-cover. The <Image> uses
 * its real `width`/`height` and scales with `w-full h-auto`, so the
 * browser shows 100% of the photo, full stop. Size is controlled only
 * via `max-w-*` on the wrapper — narrower width = shorter height too,
 * automatically, since the ratio never changes. Adjust `max-w-6xl`
 * below (max-w-4xl, 5xl, 6xl, 7xl...) to make it bigger/smaller.
 *
 * Usage:
 *   <ContactSchool imageSrc="/schoolbuilding.png" />
 *
 * NOTE: files placed in /public are referenced from the root — a file
 * at public/schoolbuilding.png is "/schoolbuilding.png", never
 * "public/schoolbuilding.png".
 */
export default function ContactSchool({
  imageSrc = "/schoolbuilding.png",
  imageAlt = "Prithvi Global School building",
  imageWidth = 1900,
  imageHeight = 700,
  heading = "We'd love to hear from you!",
  subheading = "Feel free to get in touch, or apply now.",
  contactHref = "/contact",
  applyHref = "/ContactSection",
}) {
  return (
    <section className="relative m-0 block w-full overflow-hidden p-0">
      <div className="relative w-full">
        {/* Full, uncropped image — height comes purely from its own
            aspect ratio (w-full h-auto). Nothing here forces a crop. */}
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          sizes="100vw"
          className="block h-auto w-full"
          priority
        />

        {/* Very light overlay — just enough to keep the photo from
            competing with the text on the right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.08) 70%, rgba(0,0,0,0.15) 100%)",
          }}
        />

        {/* Content */}
        <div className="container-custom absolute inset-0 z-10 flex items-center">
          <div className="ml-auto w-full text-center sm:max-w-md sm:text-right md:max-w-lg">
            <h2
              className="text-lg sm:text-2xl md:text-3xl"
              style={{
                color: "var(--white)",
                textShadow: "0 2px 10px rgba(0,0,0,0.35)",
              }}
            >
              {heading}
            </h2>
            <p
              className="mt-2 text-xs sm:text-base"
              style={{
                color: "var(--white)",
                textShadow: "0 1px 6px rgba(0,0,0,0.3)",
              }}
            >
              {subheading}
            </p>

            <div className="mt-4 flex flex-col justify-center gap-2 sm:mt-6 sm:flex-row sm:justify-end sm:gap-3">
              <a
                href={contactHref}
                className="text-cta rounded-full px-4 py-2 text-center text-xs uppercase transition hover:opacity-90 sm:px-6 sm:py-3 sm:text-sm"
                style={{ background: "var(--orange)", color: "var(--white)" }}
              >
                Contact Us
              </a>
              <a
                href={applyHref}
                className="text-cta rounded-full px-4 py-2 text-center text-xs uppercase transition hover:opacity-90 sm:px-6 sm:py-3 sm:text-sm"
                style={{
                  background: "var(--dark-green)",
                  color: "var(--white)",
                }}
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}