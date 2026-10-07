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
          <h1 className="font-playfair font-bold !text-[35px] sm:text-[34px] md:text-[42px] lg:text-[48px] leading-[110%] !text-[#196191]">
            The Prithvi Way
          </h1>

          <div className="paragraph mt-6 sm:mt-8 md:mt-10 max-w-4xl mx-auto space-y-4">
            <p>
              Prithvi doesn’t treat admissions as a selection process, but as the beginning of a partnership. We believe every child deserves the opportunity to learn in an environment that understands their pace, personality, and needs.
</p>
            <p>
              Our focus is on welcoming families, understanding the child, and ensuring alignment between home and school. The process is designed to feel calm, transparent, and supportive, just like the learning environment we aim to create. This approach is especially helpful for parents navigating School Admissions in Madhapur and exploring options for International school admissions for their children.
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
              `There are no entrance exams or qualification tests at Prithvi. Each admission is approached with care and individual attention, supporting families who are exploring School Admissions in Madhapur and beginning their journey with International school admissions.`,
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
              "Reach out to us through the enquiry form or contact our admissions team. This helps us understand your interest and answer your initial questions.",
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
              "Parents are invited for a conversation with our team to understand the school’s approach, daily routines, and academic framework.",
            image: "/curriculum-3new.png  ",
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
              "A relaxed interaction with the child helps us understand comfort levels and readiness, without pressure or assessment.",
            image: "/curriculum-1.png",
            button: {
              text: "KNOW MORE",
              action: "popup",
            },
          },
          {
            headingTop: "ADMISSION",
            headingBottom: "CONFIRMATION",
            subTitle:
              "Every admission matters to us, and each family is guided through the process with clarity and care.",
            description:
              "Every admission matters to us, and each family is guided through the process with clarity and care, especially for parents exploring School Admissions in Madhapur and seeking guidance through International school admissions.",
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