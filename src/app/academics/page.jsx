import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import BeyondClassroom from "@/components/BeyondClassroom";
import ScrollStory from "@/components/ScrollStory";
import ScrollSlider from "@/components/ScrollSlider";
import OurApproach from "@/components/OurApproch";
import VideoHeroAnimation from "@/components/VideoHeroAnimation";
export default function Academics() {
const aboutSlides = [
  {
    image: "/curriculum1.png",
    imageAlt: "Holistic Learning",
    imageTitle: "Holistic Learning",
    imageDescription: "",
    paragraphs: [
      "At Prithvi Global School, we inspire children to explore, question, and discover through meaningful learning experiences.",
      "Our curriculum blends strong academics with creativity, collaboration, and hands-on activities to make learning enjoyable and engaging.",
      "Every classroom nurtures confidence, curiosity, and a love for lifelong learning.",
    ],
  },
  {
    image: "/curriculum2.png",
    imageAlt: "Concept-Based Learning",
    imageTitle: "Concept-Based Learning",
    imageDescription: "",
    paragraphs: [
      "We focus on understanding concepts rather than memorizing facts, helping children develop critical thinking and problem-solving skills.",
      "Interactive lessons, project-based learning, technology integration, and real-world applications make every subject meaningful.",
      "Students are encouraged to think independently, ask questions, and learn with confidence.",
    ],
  },
  {
    image: "/curriculum3.png",
    imageAlt: "Future Ready Learners",
    imageTitle: "Future Ready Learners",
    imageDescription: "",
    paragraphs: [
      "Education at Prithvi goes beyond academics by nurturing communication, leadership, teamwork, and strong values.",
      "We prepare every child to become a confident, compassionate, and responsible individual ready for tomorrow's opportunities.",
      "Our mission is to empower learners to grow into global citizens who make a positive difference.",
    ],
  },
];
  return (
    <>
      <PageBanner
        image="/academicsbanner.png"
         title="International Learning, Rooted in Culture"
  subtitle="CBSE Curriculum integrated with Cambridge learning frameworks"
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