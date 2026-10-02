export default function OurPhilosophySection() {
  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 md:px-8 lg:px-10">
      <div
        className="
          relative
          w-full
          overflow-hidden
          rounded-[24px]
          bg-cover
          bg-center
          py-16
          sm:py-20
          md:py-24
          lg:py-28
        "
        style={{
          backgroundImage: "url('/bgblue.png')",
        }}
      >
        {/* Top Center Label */}
        <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2">
          <div
            className="
              flex
              items-center
              justify-center
              whitespace-nowrap
              bg-[#F7F6F2]
              px-5
              py-4
              text-center
              text-sm
              font-bold
              tracking-[3px]
              text-[#0F4D81]
              shadow-sm
              sm:px-7
              sm:py-5
              sm:text-base
              sm:tracking-widest
            "
          >
            OUR PHILOSOPHY
          </div>
        </div>

        {/* Content */}
        <div
          className="
            relative
            z-10
            mx-auto
            max-w-4xl
            px-6
            pt-5
            text-center
            sm:px-10
            md:max-w-5xl
            md:px-12
            lg:px-16
          "
        >
          <p
            className="
              mb-5
              !text-white
              text-[15px]
              leading-[26px]
              sm:text-[16px]
              sm:leading-[28px]
              md:text-lg
              md:leading-[30px]
            "
          >
            At Westbrook International School, education is guided by strong
            academics and deeply rooted values. We believe learning goes beyond
            academic achievement to include character, discipline, compassion,
            and cultural grounding.
          </p>

          <p
            className="
              !text-white
              text-[15px]
              leading-[26px]
              sm:text-[16px]
              sm:leading-[28px]
              md:text-lg
              md:leading-[30px]
            "
          >
            Modern, globally aligned teaching practices are balanced with
            values such as integrity, respect, responsibility, and empathy
            drawn from India’s heritage. Each child is supported in a safe and
            engaging environment that encourages clear thinking, confidence,
            and a sense of responsibility, preparing learners not only for the
            classroom but for life beyond it.
          </p>
        </div>
      </div>
    </section>
  );
}