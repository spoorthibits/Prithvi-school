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
            <div
              className="
                relative
                aspect-[1.45/1]
                w-full
                overflow-hidden
               
              "
            >
              <Image
                src="/curriculum-3new.png"
                alt="Prithvi Global School students"
                fill
                priority
                className="object-cover object-center"
                sizes="
                  (max-width: 640px) 100vw,
                  (max-width: 1024px) 45vw,
                  43vw
                "
              />
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}

          <div className="w-full">
            {/* OUR STORY */}

            {/* OUR STORY */}

<p
  className="
    mb-2
    text-[10px]
    font-medium
    uppercase
    tracking-[3px]
    text-[#64B0E2]
    sm:text-[11px]
    sm:tracking-[4px]
  "
>
  
</p>

{/* TITLE */}

<h2
  className="
    mb-4
    whitespace-nowrap
    font-serif
    text-[length:clamp(14px,4.2vw,26px)]
    font-semibold
    leading-[1.08]
    tracking-[-0.5px]
    !text-[#196191]
    sm:whitespace-normal
    sm:text-[30px]
    md:text-[34px]
    lg:text-[38px]
    !text-[#173B63]
    !sm:text-center
  "
>
  The Vision Behind Prithvi
</h2>

{/* ACCENT LINE */}


{/* CONTENT */}

<div className="max-w-[680px]">
  <p
    className="
      text-[14px]
      leading-[24px]
      text-[#365579]
      sm:text-[15px]
      sm:leading-[26px]
      md:text-[16px]
      md:leading-[28px]
      
    "
  >
    Prithvi Global School was founded with a simple yet powerful belief
    that every child deserves a strong foundation for a brighter future.
  </p>

  <p
    className="
      mt-4
      text-[14px]
      leading-[24px]
      text-[#365579]
      sm:text-[15px]
      sm:leading-[26px]
      md:text-[16px]
      md:leading-[28px]
     
    "
  >
    We envisioned a school where academic excellence goes hand in hand with
    values, creativity, and real-world skills. A place where children feel
    safe, inspired, and empowered to become confident, compassionate and
    responsible global citizens.
  </p>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}