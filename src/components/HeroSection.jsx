const GRADIENT_STYLE = {
  background:
    "linear-gradient(180deg, rgba(0,0,0,0.7) -15.82%, rgba(220,220,220,0.08) 43.38%, rgba(0,0,0,0.25) 66.47%, rgba(0,0,0,0.7) 104.13%, rgba(82,82,82,0.25) 104.13%)",
};

export default function Hero() {
  return (
    <section
      className="
        relative
        h-[520px]
        w-full
        overflow-hidden

        sm:h-[580px]
        md:h-[650px]
        lg:h-[750px]
      "
    >
      {/* =========================
          BACKGROUND VIDEO
      ========================== */}
      <video
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* =========================
          GRADIENT OVERLAY
      ========================== */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={GRADIENT_STYLE}
      />

      {/* =========================
          HERO TEXT
      ========================== */}
      

      {/* =========================
          VERY THIN BOTTOM LINE
      ========================== */}
      <div
        className="
          absolute
          bottom-0
          left-0
          z-20
          h-[3px]
          w-full
          bg-[#64B0E2]
        "
      />
    </section>
  );
}