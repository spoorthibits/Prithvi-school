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

export default function AboutPage() {
  const router = useRouter();                 // defines router
  const [formType, setFormType] = useState(null); // defines setFormType
const spaces = [
  {
    title: "Playgroup",
    age: "1.5 – 2.5 Years",
    description:
      "A joyful beginning where children explore through play, movement, stories and meaningful experiences, building their first connections with learning.",
    image: "/playgroup.png",
  },
  {
    title: "Nursery",
    age: "2.5 – 3.5 Years",
    description:
      "Children build early language, confidence and curiosity through play, exploration and everyday discovery in a warm and supportive environment.",
    image: "/whoweare1.png",
  },
  {
    title: "PP1",
    age: "3.5 – 4.5 Years",
    description:
      "Hands-on experiences, creativity and exploration encourage children to develop essential skills while becoming increasingly confident and independent learners.",
    image: "/pp1.png",
  },
  {
    title: "PP2",
    age: "4.5 – 5.5 Years",
    description:
      "Children strengthen essential skills, deepen their understanding and develop curiosity, confidence and a growing love for learning.",
    image: "/pp2.png",
  },
  {
    title: "Grade 1–5",
    age: "5.5 – 10.5 Years",
    description:
      "Children build strong academic foundations while being encouraged to question, explore, collaborate, think independently and connect their learning with the world around them.",
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