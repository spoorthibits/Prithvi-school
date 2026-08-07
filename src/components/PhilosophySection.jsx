// components/PhilosophySection.jsx
// "Our Philosophy" section for Prithvi Global School — Next.js App Router
//
// Usage: import PhilosophySection from "@/components/PhilosophySection";
//        <PhilosophySection />
//
// Uses the global tokens from your CSS file (--dark-green, --white,
// Montserrat). Laurel is a proper branch (curved stem + alternating,
// tapering leaves, bottom-heavy) matching the reference — not a straight
// line of leaves. Vertically centered, bleeding slightly off the left/right
// edges the same way the reference does.

export default function PhilosophySection() {
  return (
    <section
      style={{ background: "var(--dark-green)" }}
      className="relative w-full overflow-hidden py-14 sm:py-20 lg:py-24"
    >
      {/* Laurel — left */}
      <Laurel className="pointer-events-none absolute left-0 top-1/2 hidden h-56 w-24 -translate-x-6 -translate-y-1/2 opacity-90 sm:block sm:h-64 sm:w-28 lg:h-80 lg:w-32" />

      {/* Laurel — right, mirrored */}
      <Laurel className="pointer-events-none absolute right-0 top-1/2 hidden h-56 w-24 translate-x-6 -translate-y-1/2 scale-x-[-1] opacity-90 sm:block sm:h-64 sm:w-28 lg:h-80 lg:w-32" />

      <div className="container-custom relative flex flex-col items-center text-center">
        {/* Eyebrow badge */}
        <span
          style={{ background: "var(--white)", color: "var(--dark-green)" }}
          className="mb-8 inline-block rounded px-4 py-2 text-xs font-bold tracking-wide sm:text-sm"
        >
          OUR PHILOSOPHY
        </span>

        <div className="max-w-3xl space-y-6">
          <p style={{ color: "var(--white)" }} className="text-sm leading-relaxed sm:text-base lg:text-lg">
            At Prithvi Global School, education is guided by strong academics
            and deeply rooted values. We believe learning goes beyond
            academic achievement to include character, discipline,
            compassion, and cultural grounding.
          </p>

          <p style={{ color: "var(--white)" }} className="text-sm leading-relaxed sm:text-base lg:text-lg">
            Modern, globally aligned teaching practices are balanced with
            values such as integrity, respect, responsibility, and empathy
            drawn from India&apos;s heritage. Each child is supported in a
            safe and engaging environment that encourages clear thinking,
            confidence, and a sense of responsibility, preparing learners
            not only for the classroom but for life beyond it.
          </p>
        </div>
      </div>
    </section>
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