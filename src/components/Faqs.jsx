"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";

const FAQS = [
  {
    question: "What age groups does Prithvi Global School admit?",
    answer:
      "We welcome children from Pre-Nursery (age 2.5+) through Grade 12, with age-appropriate curricula designed around each developmental stage.",
  },
  {
    question: "What is the admission process like?",
    answer:
      "Admissions begin with an online enquiry, followed by a campus tour, an informal interaction with the child, and document verification. Our team guides you through every step.",
  },
  {
    question: "Do you offer transport facilities?",
    answer:
      "Yes, we operate GPS-tracked buses across major routes in Hyderabad, with real-time tracking available to parents through our school app.",
  },
  {
    question: "What extracurricular activities are available?",
    answer:
      "From robotics and music to football, art, and debate club, students choose from over 20 co-curricular programs each term to explore their interests.",
  },
  {
    question: "How do you support students with different learning needs?",
    answer:
      "Our counselors and trained faculty work closely with families to build individualized support plans, ensuring every child learns at a pace that works for them.",
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
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">

          {/* ================= LEFT — STICKY INTRO ================= */}
          <div className="lg:sticky lg:top-24 lg:self-start items-center justify-center align-center">
            {/* <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#0F3D2E]/[0.06]
                px-4
                py-1.5
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#075A36]
                sm:text-[12px]
              "
            >
              FAQ
            </span> */}

            <h2
        className="
          mt-4
          text-center
          text-[26px]
          font-extrabold
          leading-[1.15]
          tracking-tight
          !text-[#075a36]
          sm:mt-5
          sm:text-[34px]
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
            <div className="relative mt-6 flex justify-center sm:mt-8">
              <div className="relative h-[200px] w-full overflow-hidden rounded-3xl sm:h-[260px] lg:h-[300px]">
                <Image
                  src="/curriculum4.png"
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