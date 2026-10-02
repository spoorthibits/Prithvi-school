
import PageBanner from "@/components/PageBanner";
import ScrollStory from "@/components/ScrollStory";
import ImageSection from "@/components/SplitContent";
import Internationalschool from "@/components/Internationalschool";
import OurPhilosophySection from "@/components/OurPhilosophy";
import AboutZoom from "@/components/AboutZoom";
import VisionSection from "@/components/OurVision";


const aboutSlides = [
  {
    image: "/curriculum2.png",
    imageAlt: "Holistic Learning",
    imageTitle: "Holistic Learning",
    imageDescription: "",
    paragraphs: [
      "At Prithvi Global School, our curriculum is thoughtfully designed to nurture curiosity, creativity, and confidence in every child. We believe that meaningful learning goes beyond textbooks and inspires children to think independently.",
      "By combining academic excellence with experiential learning, we help students develop strong conceptual understanding while encouraging exploration, collaboration, and innovation.",
      "Our classrooms foster a positive environment where every learner feels supported, valued, and motivated to achieve their full potential.",
    ],
  },
  {
    image: "/curriculum3.png",
    imageAlt: "Concept-Based Education",
    imageTitle: "Concept-Based Education",
    imageDescription: "",
    paragraphs: [
      "We focus on concept-based learning that enables students to understand the 'why' behind every lesson rather than simply memorizing facts. This approach builds critical thinking and problem-solving abilities from an early age.",
      "Interactive classroom discussions, hands-on activities, projects, and technology-integrated learning ensure that education remains engaging, relevant, and enjoyable.",
      "Every learning experience is designed to encourage curiosity and prepare students for lifelong learning.",
    ],
  },
  {
    image: "/curriculum4.png",
    imageAlt: "Future Ready Learners",
    imageTitle: "Future Ready Learners",
    imageDescription: "",
    paragraphs: [
      "Our goal is to develop confident, responsible, and compassionate individuals who are prepared for the opportunities and challenges of tomorrow.",
      "Along with academic excellence, we place equal emphasis on communication skills, leadership, teamwork, values, and character development.",
      "By nurturing every child's unique strengths, we empower them to become lifelong learners and responsible global citizens.",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner 
      image = "/academicsnewimg.png"
       />
       <Internationalschool
        title="At Prithvi Global School"
        image="/kids.png"
        
        titleClass="text-[22px] sm:text-[26px] md:text-[34px] font-semibold text-[var(--color-primary)] mb-4 leading-tight"
        paragraphs={[
          "Prithvi Global School is built on the belief that education must do more than deliver academic results. For families exploring the international school in madhapur, the school focuses on shaping thinking, character, and confidence in a way that supports children throughout their school years and beyond. As parents search for the Best international school in madhapur, they often look for an environment where academic clarity, balanced learning, and strong values come together to support each child’s development.",
        ]}
      />
      <OurPhilosophySection />
      <AboutZoom />
      <VisionSection />
      {/* <AboutPrithvi /> */}
       
 
    </>
  );
}
