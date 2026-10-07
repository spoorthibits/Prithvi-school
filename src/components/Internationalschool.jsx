"use client";

import Image from "next/image";

export default function Internationalschool() {
  return (
    <section className="w-full bg-white py-8 sm:py-10 md:py-12 lg:py-10">
      <div className="container-custom">
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-8
            md:grid-cols-[0.9fr_1.1fr]
            md:gap-10
            lg:grid-cols-[0.92fr_1.08fr]
            lg:gap-12
            xl:gap-14
          "
        >
          {/* ================= LEFT IMAGE ================= */}

          <div className="w-full">
            <div className="relative aspect-[1.45/1] w-full overflow-hidden">
              <Image
                src="/curriculum-3new.png"
                alt="Prithvi Global School students"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 43vw"
              />
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}

          <div className="w-full">
            {/* ABOUT US LABEL */}

            

            {/* TITLE */}

           <h2
            className="mb-4 font-bold leading-[1.12] tracking-[-0.5px]"
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(22px, 3vw, 32px)",
            }}
          >
            <span className="block text-[#196191] !text-[29px] md:!text-[35px]">
              Who We Are.
            </span>
            {/* <span className="block text-[#196191]">
              Connected to the <em className="italic">World.</em>
            </span> */}
          </h2>

            {/* CONTENT */}

           <div className="max-w-[640px] space-y-3">
  <p className="text-[14px] leading-[24px] text-[#365579] sm:text-[15px] sm:leading-[25px]">
    Prithvi, meaning Earth, is at the heart of our philosophy. We believe
    education begins with strong roots — values, culture, community and a
    sense of belonging. From these roots grows the confidence to question,
    explore and connect with the wider world.
  </p>

  <p className="text-[14px] leading-[24px] text-[#365579] sm:text-[15px] sm:leading-[25px]">
    At Prithvi, we nurture curious, compassionate and responsible learners
    who understand their place in the world. Our aim is to help children
    grow into confident individuals with strong values, an open mind and a
    truly global outlook.
  </p>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}