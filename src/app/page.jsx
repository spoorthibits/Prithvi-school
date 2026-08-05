import CurriculumSection from "@/components/CurriculumSection";
import Hero from "@/components/HeroSection";
import CoreHeader from "@/components/CoreHeader";
import FeaturesTabs from "@/components/FeaturesTabs";

import Philosophy from "@/components/Philosophy";
import Image from "next/image";
import BeyondClassroom from "@/components/BeyondClassroom";
import FAQSection from "@/components/Faqs";


export default function Home() {
  return (
    <>
      <Hero />
      <section
  className="
    relative
    w-full
    overflow-hidden
    bg-[#F7F6F2]
    pt-12
    pb-[95px]
    md:pt-18
    md:pb-[135px]
  "
>
  {/* ================= LEFT LEAF ================= */}
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
      opacity-35

      [filter:brightness(0)_saturate(100%)_invert(65%)_sepia(25%)_saturate(1000%)_hue-rotate(165deg)_brightness(95%)_contrast(90%)]

      md:block
    "
    loading="lazy"
  />

  {/* ================= RIGHT LEAF ================= */}
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
      opacity-35

      [filter:brightness(0)_saturate(100%)_invert(65%)_sepia(25%)_saturate(1000%)_hue-rotate(165deg)_brightness(95%)_contrast(90%)]

      md:block
    "
    loading="lazy"
  />

  {/* ================= MAIN CONTENT ================= */}
  <div className="container-custom relative z-10 text-center">

    <h2
      className="
        heading
        mb-6
        !text-[24px]
        !text-[#075a36]
        leading-tight
        md:!text-5xl
      "
    >
      Welcome to <br />
      Prithvi Global School
    </h2>

    <p
      className="
        paragraph
        mx-auto
        max-w-[850px]
        text-base
        leading-relaxed
        text-dark
        md:text-lg
      "
    >
      At Prithvi Global School, we believe education should inspire
      children to think, explore and grow with confidence. Our learning
      environment brings together strong academic foundations,
      creativity, values and meaningful experiences that extend beyond
      the classroom. From Pre-Primary to Grade 5, every child is
      encouraged to ask questions, discover their interests and develop
      the skills to become a curious, responsible and confident learner.
    </p>

  </div>

  {/* ==================================================
      BOTTOM CURVE
  ================================================== */}
  <div
    className="
      pointer-events-none
      absolute
      bottom-0
      left-0
      z-20
      h-[75px]
      w-full
      overflow-hidden

      sm:h-[90px]
      md:h-[115px]
    "
  >
    <Image
      src="/calloutcurve.webp"
      alt=""
      fill
      className="object-fill"
      sizes="100vw"
      priority={false}
    />
  </div>
      </section>
      {/* <Philosophy/> */}
     
      <CurriculumSection/>
      <BeyondClassroom/>
  {/* ================= WHAT MAKES US DIFFERENT ================= */}

      <section className="relative bg-[#FAF9F5] overflow-hidden">

        {/* ================= TOP CURVE ================= */}


        {/* DON'T CHANGE YOUR CURVE */}
        <div className="relative z-0">
          <CoreHeader
            title1=""
            badge="Purpose"
          />
        </div>

        {/* FEATURES — OVERLAPS THE CURVE */}
        <div
        className="
          relative
          z-20

          mt-0

          lg:-mt-[260px]
          xl:-mt-[280px]
        "
      >
        <FeaturesTabs />
      </div>
      <div
    className="
      pointer-events-none
      absolute
      bottom-0
      left-0
      z-20
      h-[75px]
      w-full
      overflow-hidden
      
      sm:h-[90px]
      md:h-[115px]
    "
  >
    <Image
      src="/calloutcurve.webp"
      alt=""
      fill
      className="object-fill"
      sizes="100vw"
      priority={false}
    />
  </div>
      </section>
      
      <FAQSection/>
    </>
  );
}