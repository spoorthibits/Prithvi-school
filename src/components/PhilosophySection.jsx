import Image from "next/image";

export default function PhilosophySection() {
  return (
    <>
      <section
        className="relative w-full bg-cover bg-center py-10 md:py-28"
        style={{
          backgroundColor: "#f3ebe4",
        }}
      >
        <Image
          src="/right-leaf.png"
          alt=""
          width={180}
          height={300}
          className="
            pointer-events-none
            absolute
            left-0
            top-1/2
            hidden
            -translate-y-1/2
            opacity-80

            [filter:brightness(0)_saturate(100%)_invert(100%)]

            md:block
          "
          loading="lazy"
        />

        <Image
          src="/left-leaf.png"
          alt=""
          width={180}
          height={300}
          className="
            pointer-events-none
            absolute
            right-0
            top-1/2
            hidden
            -translate-y-1/2
            opacity-80

            [filter:brightness(0)_saturate(100%)_invert(100%)]

            md:block
          "
          loading="lazy"
        />
        {/* Top Center Label */}
        <div className="absolute top-0 left-1/2 z-10 -translate-x-1/2">
          <div
            className="
              bg-[#FFFFFF]
              px-4 py-5
              md:h-20
              md:px-6
              md:py-4
              font-semibold
              tracking-widest
              text-[#0F5132]
              border border-[#F7F6F2]
              flex items-end justify-center
              text-md !font-bold md:text-base      /* smaller on mobile */
              whitespace-nowrap          /* prevents line break */
            "
          >
            OUR PHILOSOPHY
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl md:max-w-6xl px-6 md:px-0 md:text-center text-white">
          <p className="mt-4 mb-6 text-white md:text-lg leading-relaxed">
            At Prithvi Global School, education is guided by strong academics
            and deeply rooted values. We believe learning goes beyond academic
            achievement to include character, discipline, compassion, and
            cultural grounding.
          </p>

          <p className="text-white md:text-lg leading-relaxed">
            Modern, globally aligned teaching practices are balanced with values
            such as integrity, respect, responsibility, and empathy drawn from
            India&apos;s heritage. Each child is supported in a safe and
            engaging environment that encourages clear thinking, confidence, and
            a sense of responsibility, preparing learners not only for the
            classroom but for life beyond it.
          </p>
        </div>
      </section>
    </>
  );
}

/* Laurel — curved stem with tapering, alternating leaves (bottom-heavy,
   thinning toward the top), the same branch shape as the reference. */
function Laurel({ className = "" }) {
  const leaves = [
    { x: 100, y: 282, angle: 55, scale: 1.0, side: 1 },
    { x: 88, y: 252, angle: -60, scale: 0.95, side: -1 },
    { x: 80, y: 222, angle: 60, scale: 0.9, side: 1 },
    { x: 70, y: 194, angle: -65, scale: 0.85, side: -1 },
    { x: 61, y: 166, angle: 65, scale: 0.78, side: 1 },
    { x: 52, y: 138, angle: -70, scale: 0.7, side: -1 },
    { x: 44, y: 110, angle: 70, scale: 0.62, side: 1 },
    { x: 37, y: 82, angle: -75, scale: 0.54, side: -1 },
    { x: 31, y: 55, angle: 75, scale: 0.46, side: 1 },
    { x: 26, y: 28, angle: -80, scale: 0.38, side: -1 },
  ];

  return (
    <svg
      viewBox="0 0 120 300"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      {/* Stem */}
      <path
        d="M104 292 C 84 226, 60 160, 46 96 C 40 66, 32 34, 22 10"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.9"
      />
      {/* Leaves */}
      {leaves.map((leaf, i) => (
        <path
          key={i}
          d="M0,0 Q -11,-11 0,-26 Q 11,-11 0,0 Z"
          fill="#ffffff"
          opacity="0.9"
          transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.angle}) scale(${leaf.scale})`}
        />
      ))}
    </svg>
  );
}
