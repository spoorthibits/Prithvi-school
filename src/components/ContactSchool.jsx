"use client";

import Image from "next/image";

/**
 * ContactSchool
 * Full building photo shown COMPLETELY (no cropping, no zoom).
 * Built with Prithvi's global tokens (--dark-green, --orange, --white).
 *
 * RESPONSIVE APPROACH:
 * Below `sm` (640px), a dedicated mobile image (imageSrcMobile) is used
 * instead of the desktop banner, since the desktop image's aspect ratio
 * renders too short on phone widths to look intentional. The
 * heading/subheading/CTAs are overlaid directly ON TOP of that mobile
 * image (centered, stacked buttons), with a dark gradient behind the
 * text for legibility — matching the desktop treatment rather than
 * sitting in a separate band underneath.
 *
 * From `sm` up, the original desktop image (imageSrc) is shown full and
 * uncropped, with heading/subheading/CTAs overlaid on top of it, and
 * type sizing that keeps scaling through `lg`/`xl` so it doesn't look
 * undersized on large desktop screens.
 *
 * Usage:
 *   <ContactSchool imageSrc="/schoolbuilding.png" imageSrcMobile="/contactmobile.png" />
 *
 * NOTE: files placed in /public are referenced from the root — a file
 * at public/schoolbuilding.png is "/schoolbuilding.png", never
 * "public/schoolbuilding.png".
 */
export default function ContactSchool({
  imageSrc = "/contactfooterbannerimg.webp",
  imageSrcMobile = "/contactmobile.png",
  imageAlt = "Prithvi Global School building",
  imageWidth = 1900,
  imageHeight = 700,
  imageWidthMobile = 800,
  imageHeightMobile = 1000,
  heading = "We'd love to hear from you!",
  subheading = "Feel free to get in touch, or apply now.",
  contactHref = "/contact",
  applyHref = "/ContactSection",
}) {
  return (
    <section className="relative m-0 block w-full overflow-hidden p-0">
      {/* ---------------- Desktop / tablet (sm and up) ---------------- */}
      <div className="relative hidden w-full sm:block">
        {/* Full, uncropped desktop image — height comes purely from its own
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

        {/* Overlay gradient — tablet/desktop only. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.08) 70%, rgba(0,0,0,0.15) 100%)",
          }}
        />

        {/* Overlay content — sm and up, where the image is tall enough
            to carry text comfortably. */}
        <div className="container-custom absolute inset-0 z-10 flex items-center">
          <div className="ml-auto w-full text-right sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
              style={{
                color: "var(--white)",
                textShadow: "0 2px 10px rgba(0,0,0,0.35)",
              }}
            >
              {heading}
            </h2>
            <p
              className="mt-2 text-sm md:text-base lg:text-lg"
              style={{
                color: "var(--white)",
                textShadow: "0 1px 6px rgba(0,0,0,0.3)",
              }}
            >
              {subheading}
            </p>

            <div className="mt-4 flex justify-end gap-2 sm:mt-6 sm:gap-3 lg:mt-8">
              <a
                href={contactHref}
                className="text-cta rounded-full px-4 py-2 text-center text-xs uppercase transition hover:opacity-90 sm:px-6 sm:py-3 sm:text-sm lg:px-8 lg:py-3.5 lg:text-base"
                style={{ background: "var(--orange)", color: "var(--white)" }}
              >
                Contact Us
              </a>
              <a
                href={applyHref}
                className="text-cta rounded-full px-4 py-2 text-center text-xs uppercase transition hover:opacity-90 sm:px-6 sm:py-3 sm:text-sm lg:px-8 lg:py-3.5 lg:text-base"
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

      {/* ---------------- Mobile (below sm) ---------------- */}
      {/* Text + buttons overlaid directly on the mobile image, centered,
          with a dark gradient behind the content for legibility. */}
      <div className="relative block h-[55vh] max-h-[420px] min-h-[320px] w-full sm:hidden">
        <Image
          src={imageSrcMobile}
          alt={imageAlt}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />

        {/* Dark gradient so white text stays legible over the photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.1) 35%, rgba(0,0,0,0.55) 68%, rgba(0,0,0,0.7) 100%)",
          }}
        />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end px-6 pb-8 text-center">
          <h2
            className="text-2xl"
            style={{
              color: "var(--white)",
              textShadow: "0 2px 10px rgba(0,0,0,0.45)",
            }}
          >
            {heading}
          </h2>
          <p
            className="mt-2 text-sm"
            style={{
              color: "var(--white)",
              textShadow: "0 1px 6px rgba(0,0,0,0.4)",
            }}
          >
            {subheading}
          </p>

          <div className="mt-5 flex w-full flex-col gap-3">
            <a
              href={contactHref}
              className="text-cta w-full rounded-full px-6 py-3 text-center text-xs uppercase transition hover:opacity-90"
              style={{ background: "var(--orange)", color: "var(--white)" }}
            >
              Contact Us
            </a>
            <a
              href={applyHref}
              className="text-cta w-full rounded-full px-6 py-3 text-center text-xs uppercase transition hover:opacity-90"
              style={{ background: "var(--dark-green)", color: "var(--white)" }}
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}