
"use client"; // must be the very first line

import { useState } from "react";
import { useRouter } from "next/navigation";

import PageBanner from "@/components/PageBanner";
import Internationalschool from "@/components/Internationalschool";
import OurPhilosophySection from "@/components/OurPhilosophy";
import OurMissionSection from "@/components/OurMission";
import ImageContentSection from "@/components/ImageContentSection";
import AgeGroupsSection from "@/components/AgeGroupsSection";
import LearningSpacesSection from "@/components/Learning-spaces";

export default function AboutPageClient() {
  const router = useRouter();                 // defines router
  const [formType, setFormType] = useState(null); // defines setFormType
const spaces = [
  {
    title: "Playgroup",
    age: "1.5 – 2.5 Years",
    color: "#438E42",
    description:
      "A gentle beginning through play, movement, stories and meaningful experiences.",
    image: "/playgroup.png",
  },
  {
    title: "Nursery",
    age: "2.5 – 3.5 Years",
    color: "#64B0E2",
    description:
      "Building early language, confidence and curiosity through play and exploration.",
    image: "/whoweare1.png",
  },
  {
    title: "PP1",
    age: "3.5 – 4.5 Years",
    color: "#F7941D",
    description:
      "Developing early skills through hands-on learning, creativity and exploration.",
    image: "/pp1.png",
  },
  {
    title: "PP2",
    age: "4.5 – 5.5 Years",
    color: "#196191",
    description:
      "Strengthening foundations while building confidence, curiosity and independence.",
    image: "/pp2.png",
  },
  {
    title: "Grade 1–5",
    age: "5.5 – 10.5 Years",
    color: "#438E42",
    description:
      "Building strong academic foundations through curiosity, collaboration and independent thinking.",
    image: "/class1-5.png",
  },
];
  return (
    <>
      <PageBanner
        image="/aboutusbanner1.png"
        title="About Us"
        subtitle="Building strong foundations today for the leaders of tomorrow."
        imageClassName="!object-top"
      />
      <Internationalschool />
      <OurPhilosophySection />
      <OurMissionSection />
      {/* <AgeGroupsSection /> */}
       <LearningSpacesSection
      heading="Programs We Offer"
      // subText="For families exploring the best school in Hyderabad, learning spaces that feel welcoming and purposeful often play an important role in helping children adapt comfortably to their early school years."
      data={spaces}
      
    />
     <ImageContentSection
  imageSrc="/aboutbannerdown.png"
  imageAlt="About banner"
  title="We’d love to hear from you!"
  description="Feel free to get in touch, or apply now"
  primaryBtnText="CONTACT US"
  secondaryBtnText="APPLY NOW"
  onPrimaryClick={() => router.push("/contact")}
  onSecondaryClick={() => setFormType("simple")}
  imageClassName="lg:scale-110 lg:translate-y-9 origin-bottom"
/>

      {/* Show your form when APPLY NOW is clicked */}
      {formType === "simple" && (
        <div>{/* <ApplyForm onClose={() => setFormType(null)} /> */}</div>
      )}
    </>
  );
}