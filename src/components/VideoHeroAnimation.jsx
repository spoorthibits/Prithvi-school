"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

// ─── Button (inline, no separate file) ───────────────────────────────────────
function Button({ text, link, onClick, className = "" }) {
  const base =
    "inline-block px-8 py-3 rounded-full bg-[#196191] !text-white text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition";

  if (link) {
    return (
      <Link href={link} className={`${base} ${className}`}>
        {text}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`${base} ${className}`}>
      {text}
    </button>
  );
}

// ─── Slider arrow button (inline) ────────────────────────────────────────────
function ScrollButton({
  onClick,
  direction = "left",
  bgColor = "#196191",
  hoverColor = "#B85F2C",
  className = "",
}) {
  const isLeft = direction === "left";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isLeft ? "Previous slide" : "Next slide"}
      className={`
        flex items-center justify-center
        w-[50px] h-[50px]
        sm:w-[55px] sm:h-[55px]
        md:w-[60px] md:h-[60px]
        transition-colors duration-300 cursor-pointer
        ${className}
      `}
      style={{ backgroundColor: bgColor }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = bgColor)}
    >
      <svg
        className="
          w-[28px] h-[16px]
          sm:w-[32px] sm:h-[18px]
          md:w-[36px] md:h-[20px]
        "
        viewBox="0 0 46 28"
        style={{
          transform: isLeft ? "none" : "rotate(180deg)",
        }}
      >
        <path
          d="M45 14H3M3 14L16 1M3 14L16 27"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </button>
  );
}

// ─── Enquiry form (inline) ───────────────────────────────────────────────────
function EnquiryForm({ variant = "simple" }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send `form` to your API, e.g.
    // await fetch("/api/enquiry", { method: "POST", body: JSON.stringify(form) });
    console.log("Enquiry:", form);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="bg-white p-8 text-center">
        <h3 className="text-xl font-bold text-[#196191] mb-2">Thank you!</h3>
        <p className="text-gray-600">We'll get back to you shortly.</p>
      </div>
    );
  }

  const input =
    "w-full border border-gray-300 px-4 py-3 outline-none focus:border-[#196191]";

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 space-y-4">
      <h3 className="text-2xl font-bold text-[#196191]">Enquire Now</h3>
      <input
        name="name"
        placeholder="Name"
        required
        value={form.name}
        onChange={handleChange}
        className={input}
      />
      <input
        name="phone"
        type="tel"
        placeholder="Phone"
        required
        value={form.phone}
        onChange={handleChange}
        className={input}
      />
      {variant !== "simple" && (
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className={input}
        />
      )}
      <textarea
        name="message"
        placeholder="Message"
        rows={3}
        value={form.message}
        onChange={handleChange}
        className={input}
      />
      <button
        type="submit"
        className="w-full py-3 rounded-full bg-[#9B1B2F] text-white font-semibold uppercase"
      >
        Submit
      </button>
    </form>
  );
}

// ─── Heading defined OUTSIDE component — never re-created on render ──────────
function Heading({ top, bottom }) {
  return (
    <div className="mb-4">
      {top && (
        <div className="inline-block px-7 py-1 mb-0">
          <h2
            className="leading-[100%]"
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 700,
              fontSize: "clamp(29px, 6vw, 48px)",
              color: "#196191", // top line: blue
            }}
          >
            {top}
          </h2>
        </div>
      )}
      <br />
      {bottom && (
        <div className="inline-block px-7 py-2">
          <h2
            className="leading-[100%]"
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 700,
              fontSize: "clamp(29px, 6vw, 48px)",
              color: "#196191", // bottom line: blue
            }}
          >
            {bottom}
          </h2>
        </div>
      )}
    </div>
  );
}

// ─── Video overlay gradient — static object, never re-created ────────────────
const OVERLAY_STYLE = {
  background:
    "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.36) 37.51%, rgba(0,0,0,0.54) 51.68%, rgba(0,0,0,0.30) 78.65%, rgba(0,0,0,0) 100%)",
};

// ─── Popup animation variants — static, never re-created ────────────────────
const BACKDROP_VARIANTS = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const MODAL_VARIANTS = {
  hidden: { scale: 0.85, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
  exit: { scale: 0.85, opacity: 0 },
};
const MODAL_TRANSITION = { duration: 0.25 };

export default function VideoHeroAnimation({
  imageSrc,
  title,
  slides = [],
  onPopupOpen,
}) {
  // ─── Use null initial state to avoid SSR mismatch ───────────────────────
  const [isDesktop, setIsDesktop] = useState(null);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  // ─── Mobile slider: height follows the active slide ─────────────────────
  const slideRefs = useRef([]);
  const [sliderHeight, setSliderHeight] = useState(null);

  // ─── Screen detection ────────────────────────────────────────────────────
  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // ─── Measure active slide so there is no empty space above the arrows ───
  useEffect(() => {
    const update = () => {
      const el = slideRefs.current[mobileIndex];
      if (el) setSliderHeight(el.offsetHeight);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [mobileIndex, isDesktop, slides.length]);

  // ─── Stable slider callbacks ─────────────────────────────────────────────
  const nextMobile = useCallback(
    () =>
      setMobileIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1)),
    [slides.length]
  );

  const prevMobile = useCallback(
    () =>
      setMobileIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1)),
    [slides.length]
  );

  const openPopup = useCallback(() => setShowPopup(true), []);
  const closePopup = useCallback(() => setShowPopup(false), []);
  const stopPropagation = useCallback((e) => e.stopPropagation(), []);

  // ─── Render nothing until client screen size is known ────────────────────
  if (isDesktop === null) return null;

  return (
    <>
      {/* ================= DESKTOP ================= */}
      {isDesktop && (
        <section
          className="relative w-full"
          style={{
            height: `${(slides.length + 1) * 100}vh`,
            contain: "layout style",
          }}
        >
          <div className="sticky top-[72px] h-screen z-10">
            <div className="w-full h-screen relative">
              <Image
                src={imageSrc}
                alt={title || "Hero banner"}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />

              <div
                className="absolute inset-0 pointer-events-none"
                style={OVERLAY_STYLE}
              />

              <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
                <h2
                  className="!text-white uppercase leading-[100%]"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 630,
                    fontVariant: "small-caps",
                    fontSize: "clamp(36px, 8vw, 160px)",
                  }}
                >
                  {title}
                </h2>
              </div>
            </div>
          </div>

          {slides.map((slide, index) => (
            <div
              key={index}
              className="sticky top-[72px] h-screen relative bg-white"
              style={{ zIndex: index + 20 }}
            >
              <div className="relative z-10 h-full flex w-full max-w-full">
                {/* Content column — bg #F7F6F2 */}
                <div className="w-1/2 flex items-center !bg-[#F7F6F2]">
                  <div
                    className="max-w-xl"
                    style={{
                      marginLeft: "max(1rem, calc((100vw - 1280px) / 2))",
                    }}
                  >
                    <Heading
                      top={slide.headingTop}
                      bottom={slide.headingBottom}
                    />

                    {/* px-4 matches the heading's inner padding so all text aligns */}
                    <div className="px-4">
                      {slide.subTitle && (
                        <h3 className="!text-[#e88f1b] font-bold leading-[1.5] mb-6">
                          {slide.subTitle}
                        </h3>
                      )}

                      {slide.description && (
                        <p
                          className="!text-gray-600 [&_b]:!text-primary [&_b]:font-semibold"
                          dangerouslySetInnerHTML={{
                            __html: slide.description,
                          }}
                        />
                      )}

                      {slide.button &&
                        (slide.button.action === "popup" ? (
                          <Button
                            text={slide.button.text}
                            onClick={openPopup}
                            className="mt-6"
                          />
                        ) : (
                          <Button
                            text={slide.button.text}
                            link={slide.button.link}
                            className="mt-6 bg-[#9B1B2F] text-white !border-none hover:!bg-[#9B1B2F] hover:!border-none"
                          />
                        ))}
                    </div>
                  </div>
                </div>

                <div className="w-1/2 relative">
                  <Image
                    src={slide.image}
                    alt={slide.headingTop || "slide image"}
                    fill
                    sizes="50vw"
                    loading={index === 0 ? "eager" : "lazy"}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* ================= MOBILE ================= */}
      {!isDesktop && (
        <>
          <section className="relative w-full">
            <div className="w-full aspect-[10/7] relative">
              <Image
                src={imageSrc}
                alt={title || "Hero banner"}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="relative z-10 flex items-center justify-center h-full text-center">
                <h2 className="!text-white uppercase text-[36px]">{title}</h2>
              </div>
            </div>
          </section>

          <section className="overflow-hidden relative !bg-[#F7F6F2]">
            <div
              className="flex items-start transition-[transform,height] duration-500 will-change-transform"
              style={{
                transform: `translateX(-${mobileIndex * 100}%)`,
                height: sliderHeight ?? "auto",
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="min-w-full"
                  ref={(el) => (slideRefs.current[index] = el)}
                >
                  <div className="!container-custom py-3">
                    <div className="relative w-full h-[280px] mb-6">
                      <Image
                        src={slide.image}
                        alt={slide.headingTop || "slide image"}
                        fill
                        sizes="100vw"
                        loading={index === 0 ? "eager" : "lazy"}
                        className="object-cover md:object-fill lg:object-cover"
                      />
                    </div>

                    <Heading
                      top={slide.headingTop}
                      bottom={slide.headingBottom}
                    />

                    {/* px-7 matches the heading's inner padding */}
                    <div className="px-7">
                      {slide.subTitle && (
                        <p className="!font-playfair !text-[#e88f1b] font-bold leading-[1.5] mb-4">
                          {slide.subTitle}
                        </p>
                      )}

                      {slide.description && (
                        <p
                          className="!text-gray-600 [&_b]:!text-primary [&_b]:font-semibold"
                          dangerouslySetInnerHTML={{
                            __html: slide.description,
                          }}
                        />
                      )}

                      {slide.button &&
                        (slide.button.action === "popup" ? (
                          <Button
                            text={slide.button.text}
                            onClick={openPopup}
                            className="mt-6"
                          />
                        ) : (
                          <Button
                            text={slide.button.text}
                            link={slide.button.link}
                            className="mt-6 bg-[#9B1B2F] text-white !border-none hover:!bg-[#9B1B2F] hover:!border-none"
                          />
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows: smaller top margin now that the height is exact */}
            <div className="container-custom flex justify-center mt-2 mb-8">
              <div className="flex">
                <ScrollButton
                  direction="left"
                  onClick={prevMobile}
                  bgColor="#196191"
                />
                <ScrollButton
                  direction="right"
                  onClick={nextMobile}
                  bgColor="#196191"
                />
              </div>
            </div>
          </section>
        </>
      )}

      {/* ================= POPUP ================= */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            variants={BACKDROP_VARIANTS}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={closePopup}
          >
            <motion.div
              variants={MODAL_VARIANTS}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={MODAL_TRANSITION}
              onClick={stopPropagation}
              className="relative w-full max-w-md"
            >
              <button
                onClick={closePopup}
                className="absolute top-3 right-3 bg-white rounded-full w-8 h-8 shadow flex items-center justify-center text-black font-bold"
              >
                ✕
              </button>

              <EnquiryForm variant="simple" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}