import PageBanner from "@/components/PageBanner";
import AdmissionProcess from "@/components/VideoHeroAnimation";
import CoreHeader from "@/components/CoreHeader";
import FeaturesTabs from "@/components/FeaturesTabs"; 
import FAQSection from "@/components/Faqs";
import ContactSchool from "@/components/ContactSchool";
export default function AboutPage() {
  return (
   <>
   <PageBanner
           image="/admissionsban.png"
            title="Admissions"
    //  subtitle="Learn about our admission process and how to apply."
     
         />
          
   <AdmissionProcess/>
  
      <FAQSection/>
      <ContactSchool/>
   </>
  );
}