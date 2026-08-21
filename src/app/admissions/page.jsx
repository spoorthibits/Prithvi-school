import PageBanner from "@/components/PageBanner";
import VideoHeroAnimation from "@/components/VideoHeroAnimation";
import CoreHeader from "@/components/CoreHeader";
import FeaturesTabs from "@/components/FeaturesTabs"; 
import Image from "next/image";
import FAQSection from "@/components/Faqs";

export default function AboutPage() {
  return (
   <>
   <PageBanner
           image="/academicsbanner.png"
            title=""
     subtitle=""
         />
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
     
      </section>
   <VideoHeroAnimation/>
  
      <FAQSection/>
   </>
  );
}