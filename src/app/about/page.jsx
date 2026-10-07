"use client"; // must be the very first line

import { useState } from "react";
import { useRouter } from "next/navigation";

import PageBanner from "@/components/PageBanner";
import Internationalschool from "@/components/Internationalschool";
import OurPhilosophySection from "@/components/OurPhilosophy";
import OurMissionSection from "@/components/OurMission";
import ImageContentSection from "@/components/ImageContentSection";
import AgeGroupsSection from "@/components/AgeGroupsSection";

export default function AboutPage() {
  const router = useRouter();                 // defines router
  const [formType, setFormType] = useState(null); // defines setFormType

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
      <AgeGroupsSection />

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