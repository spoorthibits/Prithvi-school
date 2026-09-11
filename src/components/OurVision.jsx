import Image from "next/image";

export default function VisionSection() {
  return (
    <section className="bg-white py-12 md:py-1">
      <div className="container-custom grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-8">

        {/* ================= IMAGE SIDE ================= */}

        <div className="relative flex items-center justify-center">

          {/* ================= BLUE CIRCLE ================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[20px]
              z-0
              h-[180px]
              w-[180px]
              -translate-x-1/2
              rounded-full
              bg-[#A2D5EB]

              sm:top-[25px]
              sm:h-[280px]
              sm:w-[280px]

              md:top-[25px]
              md:h-[330px]
              md:w-[330px]

              lg:top-[30px]
              lg:h-[390px]
              lg:w-[390px]

              xl:top-[35px]
              xl:h-[330px]
              xl:w-[330px]
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
              bottom-[290px]
              left-[5px]
              z-10
              h-auto
              w-[90px]

              sm:left-0
              sm:w-[105px]

              md:left-[-10px]
              md:w-[120px]

              lg:left-[-25px]
              lg:w-[145px]

              xl:left-[-2px]
              xl:w-[165px]
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
              bottom-[280px]
              right-[8px]
              z-10
              h-auto
              w-[90px]

              sm:right-0
              sm:w-[105px]

              md:right-[-10px]
              md:w-[120px]

              lg:right-[-25px]
              lg:w-[145px]

              xl:right-[2px]
              xl:w-[165px]
            "
            loading="lazy"
          />

          {/* ================= STUDENT IMAGE ================= */}

          <Image
            src="/kids.png"
            alt="Students"
            width={600}
            height={850}
            className="
              relative
              z-20
              h-auto
              w-[320px]
              object-contain

              sm:w-[350px]

              md:w-[420px]

              lg:w-[520px]

              xl:w-[560px]
            "
          />

        </div>

        {/* ================= TEXT SIDE ================= */}

        <div className="text-center md:text-left">

          <h2
            className="
              mb-6
              inline-block
              bg-[#A2D5EB]
              px-2
              py-2
              font-semibold
              md:text-5xl
            "
          >
            OUR VISION
          </h2>

          <p
            className="
              max-w-lg
              text-left
              leading-relaxed
              !text-[16px]
              !sm:text-[16px]
              !md:text-[18px]
            "
          >
            To emerge as a world-class institution of learning that nurtures
            curious minds, strong character, and global competence, while
            remaining deeply rooted in Indian values, culture, and ethos,
            shaping responsible, confident, and compassionate leaders of
            tomorrow.
          </p>

        </div>

      </div>
    </section>
  );
}