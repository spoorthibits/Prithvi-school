"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";


const FAQS = [
  {
    question: "Which age groups does Prithvi Global School admit?",
    answer:
      "Prithvi Global School welcomes children from Pre-primary through Grade 5. Our Early Years programme includes Playgroup, Nursery, PP1 and PP2, followed by Primary School from Grade 1 onwards. Admissions are based on applicable age and eligibility guidelines, while considering each child's developmental readiness.",
  },
  {
    question: "What is the admission process?",
    answer:
      "Our admission process begins with an enquiry through our website or by contacting the admissions team. Parents can then connect with our team to learn about the school's programmes, understand age eligibility and admission requirements, and arrange a campus visit. The team will guide families through the application, required documentation and subsequent admission formalities.",
  },
  {
    question: "Do you offer transport facilities?",
    answer:
      "Yes, Prithvi Global School provides transport facilities for students. For details about available routes, pick-up and drop-off points, and transport arrangements, please contact our admissions team.",
  },
  {
    question: "What extracurricular activities are available?",
    answer:
      "We offer a range of co-curricular experiences that encourage children to collaborate, express themselves and learn to co-exist. Activities include sports, arts, music, dance, nature awareness and yoga, supporting creativity, teamwork, well-being and holistic development.",
  },
  {
    question: "How do you support different learning needs?",
    answer:
      "We strive to create a supportive learning environment that respects each child's individual pace, interests and developmental needs. Through guidance, encouragement and meaningful learning experiences, we help children build confidence, develop their abilities and grow into independent learners.",
  },
];


function AccordionItem({ index, faq, isOpen, onToggle }) {
  return (
    <div
      className="group relative border-b border-[#0F3D2E]/10 last:border-none"
    >
      <button
        type="button"
        onClick={onToggle}
        className="relative flex w-full items-start gap-4 py-5 text-left sm:gap-6 sm:py-6"
      >
        {/* Ghost number */}
        <span
          className={`
            select-none
            font-sans
            text-[30px]
            font-extrabold
            leading-none
            tracking-tight
            transition-colors
            duration-300
            sm:text-[42px]
            lg:text-[48px]
            ${isOpen ? "text-[#E8962E]" : "text-[#0F3D2E]/10 group-hover:text-[#0F3D2E]/20"}
          `}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="flex-1 pt-0.5 sm:pt-1.5">
          <span
            className={`
              block
              font-sans
              text-[15px]
              font-semibold
              leading-snug
              transition-colors
              duration-300
              sm:text-[18px]
              ${isOpen ? "text-[#0F3D2E]" : "text-[#26382F] group-hover:text-[#0F3D2E]"}
            `}
          >
            {faq.question}
          </span>

          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="max-w-xl pt-2.5 text-[13px] font-normal leading-relaxed text-[#5B625D] sm:pt-3 sm:text-[14.5px]">
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </span>

        {/* Plus / rotate icon */}
        <span
          className={`
            mt-0.5
            flex
            h-8
            w-8
            flex-shrink-0
            items-center
            justify-center
            rounded-full
            border
            transition-all
            duration-300
            sm:mt-1.5
            sm:h-9
            sm:w-9
            ${
              isOpen
                ? "rotate-45 border-[#E8962E] bg-[#E8962E] text-white"
                : "border-[#0F3D2E]/15 text-[#0F3D2E] group-hover:border-[#0F3D2E]/30"
            }
          `}
        >
          <Plus size={15} strokeWidth={2.2} className="sm:hidden" />
          <Plus size={16} strokeWidth={2.2} className="hidden sm:block" />
        </span>
      </button>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#ffffff] py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">

          {/* ================= LEFT — STICKY INTRO ================= */}
          <div className="lg:sticky lg:top-24 lg:self-start items-center justify-center align-center">
            

           <h2
  className="
    mt-2
    text-center
    text-[34px]
    font-extrabold
    leading-[1.1]
    tracking-tight
    !text-[#196191]
    sm:mt-5
    !text-[29px]
    md:!text-[39px]
    lg:text-[40px]
    lg:ml-10
  "
>
  FAQ'S
</h2>

            {/* <p className="mt-5 max-w-sm text-[15px] font-normal leading-relaxed text-[#5B625D]">
              Everything you need to know about admissions, academics, and
              daily life at Prithvi Global School. Can't find your answer?
              Reach out directly.
            </p> */}

            {/* Photo card with floating CTA */}
         <div className="relative mt-6 hidden justify-center sm:mt-8 sm:flex">
  <div className="relative h-[200px] w-full overflow-hidden rounded-3xl sm:h-[260px] lg:h-[300px]">
    <Image
      src="/faq.png"
      alt="Students at Prithvi Global School"
      fill
      className="object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D2E]/70 via-[#0F3D2E]/0 to-transparent" />
  </div>
</div>
          </div>

          {/* ================= RIGHT — ACCORDION ================= */}
          <div>
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                index={index}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
              />
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}