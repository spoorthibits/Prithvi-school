import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import BeyondClassroom from "@/components/BeyondClassroom";
import ScrollStory from "@/components/ScrollStory";
export default function Academics() {
const aboutSlides = [
  {
    image: "/curriculum1.png",
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
    image: "/curriculum2.png",
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
    image: "/curriculum3.png",
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
  return (
    <>
      <PageBanner
        image="/academicsnewimg.png"
        alt="Academics Banner"
      />
       <ScrollStory
          slides={aboutSlides}
          layoutType="default"
          backgroundColor="#ffffff"
          heading="OUR STORY"
          imagePosition="left"
          imageTransition="vertical"
          decorativeImage="/assets/SVG/below-dark-half.svg"
          decorativeImageMobile="/assets/SVG/below-dark-half.svg"
          dotActiveColor="#a44a1f"
          dotInactiveColor="#4a4a4a"
          textColor="#000000"
          headingClassName="text-[#d4af37]"
          contentClassName="text-black"
         
          
        />
     
    </>
  );
}