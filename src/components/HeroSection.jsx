const GRADIENT_STYLE = {
  background:
    "linear-gradient(180deg, rgba(0,0,0,0.7) -9.82%, rgba(220,220,220,0.08) 50.38%, rgba(0,0,0,0.25) 66.47%, rgba(0,0,0,0.7) 104.13%, rgba(82,82,82,0.25) 104.13%)",
};

export default function Hero() {
  return (
    <section
  className="
    relative
    w-full
    overflow-hidden
    aspect-[10/7]

    sm:aspect-auto
    sm:h-[580px]
    md:h-[650px]
    
  "
>
      {/* BACKGROUND VIDEO */}
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
        <source src="/homenew.mp4" type="video/mp4" />
      </video>
        <div className="relative z-20 h-full flex items-end justify-center !p-6 md:pb-24 lg:pb-15">
          <div className="lg:max-w-3xl w-full flex flex-col items-center text-center gap-6">
            <h2
              className="!text-white leading-[120%] !text-[20px] sm:text-[22px] md:text-[40px] lg:!text-[48px]"
              style={{ fontWeight: 600 }}
            >
              Education that Forms Minds. Learning that Shapes Character.
            </h2>
          </div>
        </div>
      {/* GRADIENT OVERLAY */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={GRADIENT_STYLE}
      />

      {/* BOTTOM LINE */}
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