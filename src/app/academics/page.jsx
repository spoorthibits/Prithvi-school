import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import ScrollSlider from "@/components/ScrollSlider";
import VideoHero from "@/components/VideoHero";
import BeyondClassroom from "@/components/BeyondClassroom";
import ImageContentSection from "@/components/ImageContentSection";
import CardGridSection from "@/components/CardGridSection";
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
        image = "/academiba.png"
         title="Academics"
         subtitle="Building essential skills while encouraging children to question, understand and think independently."
      />
       <ScrollSlider
        slides={[
          {
            smallTitle: "Our Curriculum",
            title: "What we follow",
            description: (
              <>
                Prithvi Global School follows a CBSE-based approach with the NEXT
                Education curriculum. Our learning framework brings together strong
                academic foundations, curiosity, creativity and meaningful
                experiences to help children understand concepts and learn with
                confidence.
              </>
            ),
            image: "/OurCurriculum.png",
          },

          {
            smallTitle: "Our Approach",
            title: "How learning progresses",
            description:
              "Learning at Prithvi is designed to grow with every child, from Playgroup and Nursery through PP1, PP2 and Grade 1 to 5. Each stage builds on the previous one through age-appropriate experiences that encourage children to explore, question, understand and develop essential skills.",
            image: "/Our-Approach.png",
          },

          {
            smallTitle: "Our Philosophy",
            title: "Why this matters",
            description:
              "We believe meaningful learning goes beyond memorisation. By encouraging children to question, explore and think independently, we help them build confidence, curiosity and a deeper understanding of the world around them.",
            image: "/OurPhilosophy.png",
          },
        ]}
        />
      
      <VideoHero
  videoSrc="/acad.mp4"
  title="LEARNING JOURNEY"
  slides={[
  {
    headingTop: "EARLY YEARS",
    subTitle: "Curiosity begins here.",
    description:
      "The early years are a time of wonder, discovery and growing confidence. At Prithvi, children are given the space to explore their surroundings, ask questions and develop their first connections with learning. Through play, stories, movement, creativity and meaningful experiences, they begin to express themselves, build relationships and understand the world around them. With gentle guidance and a caring environment, children develop early language, social and thinking skills while discovering the joy of learning.",
    image: "/Eearly-years.png",
  },
  {
    headingTop: "PRIMARY YEARS",
    subTitle: "Strong foundations. Curious minds.",
    description:
      "The primary years build on the curiosity and confidence developed in the early years. As learning becomes more structured, children are encouraged to understand concepts, ask questions, explore ideas and make connections across what they learn. Alongside strong academic foundations, they develop the confidence to express their thoughts, work with others and approach challenges with an open mind. Through meaningful learning experiences, children gradually develop independence, responsibility and the ability to think for themselves.",
    image: "/primary-years.png",
  },
]}
/>
            

           
     <CardGridSection
  badge="Our Approach"
  description="Learning at Prithvi goes beyond textbooks. We create meaningful experiences that encourage children to question, explore, create and grow with confidence."
  items={[
    {
      image: "/Inquiry-Based-Learning.png",
      title: "Curiosity and Exploration",
      description:
        "Children are encouraged to ask questions, explore ideas and discover the joy of learning through meaningful experiences.",
    },
    {
      image: "/steam-tech.png",
      title: "Creativity and Innovation",
      description:
        "Children have opportunities to create, experiment and approach ideas with an open and curious mind.",
    },
    {
      image: "/values.png",
      title: "Values and Responsibility",
      description:
        "Alongside academics, children develop kindness, respect, empathy and a sense of responsibility towards others and the world around them.",
    },
  ]}
/>
     

    </>
  );
}