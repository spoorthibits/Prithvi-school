"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const slides = [
  {
    title: "Primary School",
    subtitle: "Classes 1 to 5",
    image: "/curriculum2.png",
    description:
      "Our Primary Programme nurtures curiosity, creativity, confidence and strong academic foundations through engaging classroom experiences, hands-on learning, and holistic development.",
  },
  {
    title: "Early Years",
    subtitle: "Pre-Primary",
    image: "/curriculum3.png",
    description:
      "Our Early Years programme focuses on play-based learning, communication, creativity, and social development in a joyful environment.",
  },
];

export default function AcademicsSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((current - 1 + slides.length) % slides.length);

  const next = () =>
    setCurrent((current + 1) % slides.length);

  return (
    <section className="container-custom bg-white py-12">

      <div className="container-custom">

        {/* Heading */}

        <div className="max-w-5xl mb-5">

          <p className="text-[var(--orange)] !font-semibold uppercase tracking-wider">
            OUR CURRICULUM
          </p>

          {/* <h2 className="mt-3 text-5xl font-bold text-[var(--dark-green)]">
            Learning with Purpose
          </h2> */}
{/* 
          <div className="mt-8 flex gap-6">

            <div className="w-1 bg-[var(--orange)] rounded-full" />

            <p className="text-lg leading-9 text-[#555]">
              At Prithvi Global School, we provide an engaging academic
              environment where every child develops strong fundamentals,
              critical thinking, creativity, confidence, and lifelong learning
              skills.
            </p>

          </div> */}

        </div>

        {/* Main */}

        <div className="relative flex flex-col lg:flex-row items-center">

          {/* Image */}

          <div className="lg:w-[58%]">

            <div className="relative h-[600px] overflow-hidden">

              <Image
                src={slides[current].image}
                fill
                className="object-cover"
                alt=""
                sizes="60vw"
              />

            </div>

          </div>

          {/* Floating Card */}

          <div className="lg:absolute lg:right-0 lg:w-[46%] bg-white shadow-2xl p-12">

            <h3 className="text-5xl font-bold text-[var(--dark-green)]">
              {slides[current].title}
            </h3>

            <p className="mt-4 text-xl font-semibold text-[var(--orange)]">
              {slides[current].subtitle}
            </p>

            <p className="mt-8 text-lg leading-9 text-[#555]">
              {slides[current].description}
            </p>

            <button className="mt-10 bg-[var(--dark-green)] hover:bg-[var(--green)] transition px-8 py-4 rounded-full text-white font-semibold">
              Explore Curriculum
            </button>

          </div>

        </div>

        {/* Controls */}

        <div className="flex items-center justify-end gap-5 mt-0">

          <div className="flex gap-1">

            {slides.map((_, i) => (

              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-3 w-3 rounded-full transition ${
                  i === current
                    ? "bg-[var(--orange)]"
                    : "bg-gray-300"
                }`}
              />

            ))}

          </div>

          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-[var(--dark-green)] hover:text-white transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full bg-[var(--orange)] text-white flex items-center justify-center hover:bg-[var(--green)] transition"
          >
            <ChevronRight />
          </button>

        </div>

      </div>

    </section>
  );
}