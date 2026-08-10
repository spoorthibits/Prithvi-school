"use client";

const pillars = [
  { letter: "S", text: "Strong and experienced leadership in the field of education." },
  { letter: "I", text: "Innovative curriculum that blends Cambridge and CBSE." },
  { letter: "M", text: "Motivating and engaging events for all stakeholders." },
  { letter: "P", text: "Personal touch in every interaction." },
  { letter: "L", text: "Learning resources and infrastructure built for growth." },
  { letter: "E", text: "Experienced faculty who know every child by name." },
];

const palette = ["#E07A3E", "#173A4A", "#4783B5"]; // orange, ink-teal, brand blue — cycled

export default function OurApproach() {
  return (
    <section className="relative bg-[#FBF9F4] py-20 overflow-hidden">

      {/* faint concentric-ring watermark, echoing the logo mark */}
      <svg
        className="pointer-events-none absolute -right-24 -top-24 opacity-[0.06]"
        width="420"
        height="420"
        viewBox="0 0 420 420"
      >
        {[60, 100, 140, 180].map((r) => (
          <circle
            key={r}
            cx="210"
            cy="210"
            r={r}
            fill="none"
            stroke="#173A4A"
            strokeWidth="10"
          />
        ))}
      </svg>

      <div className="container-custom relative text-center">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="h-2 w-2 rounded-full bg-[var(--orange)]" />
          <p className="text-[var(--orange)] font-semibold uppercase tracking-[0.2em] text-sm">
            Our Approach
          </p>
          <span className="h-2 w-2 rounded-full bg-[var(--orange)]" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-[#173A4A]">
          Six ideas, one word
        </h2>
        <p className="mt-3 text-lg text-[#555]">
          Learning at Prithvi Global School is{" "}
          <span className="font-semibold text-[var(--orange)]">SIMPLE</span>.
        </p>

        {/* Pillars */}
        <div className="relative mt-16">

          {/* connecting thread — meaningful here since S-I-M-P-L-E is a real sequence */}
          <div className="hidden md:block absolute top-10 left-[8%] right-[8%] h-px bg-[#173A4A]/15" />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-14">
            {pillars.map((p, i) => {
              const color = palette[i % palette.length];
              return (
                <div key={p.letter} className="group relative flex flex-col items-center">

                  <div
                    className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center border-[3px] bg-[#FBF9F4] transition-colors duration-300 group-hover:text-white"
                    style={{
                      borderColor: color,
                      color: color,
                    }}
                  >
                    <span
                      className="absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"
                      style={{ backgroundColor: color }}
                    />
                    <span className="relative font-serif text-3xl font-bold">
                      {p.letter}
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-6 text-[#173A4A]/75 max-w-[160px]">
                    {p.text}
                  </p>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}