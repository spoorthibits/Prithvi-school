import PageBanner from "@/components/PageBanner";
import VideoHeroAnimation from "@/components/VideoHeroAnimation";
import CoreHeader from "@/components/CoreHeader";
import FeaturesTabs from "@/components/FeaturesTabs"; 
import FAQSection from "@/components/Faqs";
import ContactSchool from "@/components/ContactSchool";
import AgeGroupsSection from "@/components/AgeGroupsSection";
export default function AboutPage() {
  return (
   <>
   <PageBanner
           image="/admissionsban.png"
           mobileImage="/admissions-contact.png"
            title="Admissions"
            subtitle="Begin your child’s journey with Prithvi Global School"
    //  subtitle="Learn about our admission process and how to apply."
     
         />
        <section className="bg-[#F7F6F2] py-14 sm:py-16 md:py-20 lg:py-15">
  <div className="container-custom text-center">
    <h1
      className="
        font-playfair
        font-bold
        !text-[29px]
        md:!text-[39px]
        lg:text-[48px]
        leading-[110%]
        !text-[#196191]
      "
    >
      The Prithvi Way
    </h1>

    <div className="paragraph mt-6 sm:mt-8 md:mt-10 max-w-4xl mx-auto space-y-4">
      <p>
        At Prithvi, we see admissions as the beginning of a meaningful
        partnership between the child, family and school. We believe every
        child is unique, with their own pace, personality, interests and
        strengths.
      </p>

      <p>
        Our approach is designed to make the admissions journey welcoming,
        transparent and supportive. We take the time to understand each
        child and family, creating a strong foundation for a positive
        learning journey at Prithvi.
      </p>
    </div>
  </div>
</section>
          
    <VideoHeroAnimation
  imageSrc="/admissionprocess.png"
  title="ADMISSIONS"
  slides={[
    {
      headingTop: "OUR ADMISSION",
      headingBottom: "PROCESS",
      subTitle: "Simple. Personal. Child-first.",
      description:
        "At Prithvi, admissions mark the beginning of a meaningful partnership between the child, family and school. Our process is designed to be welcoming, transparent and supportive, with care and individual attention at every step.",
      image: "/curriculum1.png",
      button: {
        text: "KNOW MORE",
        action: "popup",
      },
    },

    {
      headingTop: "START",
      headingBottom: "A CONVERSATION",
      subTitle: "Step One",
      description:
        "Reach out to us through the enquiry form or contact our admissions team. We will understand your interest, answer your initial questions and help you take the next step.",
      image: "/curriculum-2new.png",
      button: {
        text: "KNOW MORE",
        action: "popup",
      },
    },

    {
      headingTop: "SCHOOL",
      headingBottom: "INTERACTION",
      subTitle: "Step Two",
      description:
        "Parents are invited to connect with our team and learn more about the school's approach, learning environment, daily routines and academic framework.",
      image: "/curriculum-3new.png",
      button: {
        text: "KNOW MORE",
        action: "popup",
      },
    },

    {
      headingTop: "CHILD",
      headingBottom: "INTERACTION",
      subTitle: "Step Three",
      description:
        "A warm and relaxed interaction helps us get to know the child, understand their interests and learn more about their individual personality and needs.",
      image: "/curriculum-1.png",
      button: {
        text: "KNOW MORE",
        action: "popup",
      },
    },

    {
      headingTop: "ADMISSION",
      headingBottom: "CONFIRMATION",
      subTitle: "A clear and supportive next step.",
      description:
        "Once the process is complete, families are guided through the next steps with clarity and care, helping them begin their child's journey at Prithvi with confidence.",
      image: "/curriculum-2new.png",
      button: {
        text: "APPLY NOW",
        link: "/contact",
        variant: "filledLarge",
      },
    },
  ]}
/>
  
      <FAQSection/>
      <ContactSchool/>
   </>
  );
}