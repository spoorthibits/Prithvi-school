export const metadata = {
  title: "Academics | Prithvi Global School",
  description:
    "Explore academics at Prithvi Global School, where a CBSE-based curriculum and meaningful learning experiences help children build strong foundations, curiosity and independent thinking.",
  keywords: [
    "Prithvi Global School Academics",
    "CBSE-based school",
    "school curriculum",
    "early years education",
    "primary education",
    "Playgroup",
    "Nursery",
    "PP1",
    "PP2",
    "Grade 1 to 5",
  ],
  openGraph: {
    title: "Academics | Prithvi Global School",
    description:
      "Discover Prithvi Global School's academic approach, learning journey and curriculum from the early years through Grade 5.",
    type: "website",
    siteName: "Prithvi Global School",
    images: [
      {
        url: "/acad.png",
        width: 1200,
        height: 630,
        alt: "Prithvi Global School Academics",
      },
    ],
  },
  icons: {
    icon: "/logoglobe.png",
    shortcut: "/logoglobe.png",
    apple: "/logoglobe.png",
  },
};
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import ScrollSlider from "@/components/ScrollSlider";
import VideoHero from "@/components/VideoHero";
import CardGridSection from "@/components/CardGridSection";
export default function Academics() {

  return (
    <>
      <PageBanner
        image = "/academicsbannerimg.png"
        mobileImage="/academicsmobile.png"
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
          Prithvi Global School follows a CBSE-based approach supported by
          the NEXT Education curriculum. Our learning framework brings
          together strong academic foundations, curiosity, creativity and
          meaningful learning experiences, helping children understand
          concepts, develop essential skills and learn with confidence.
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
        "The early years are a time for children to explore, discover and build their first connections with learning. Through play, stories, movement, creativity and meaningful experiences, children are encouraged to ask questions, express themselves and develop confidence. A caring environment helps them build strong foundations while discovering the joy of learning.",
      image: "/Eearly-years.png",
    },
    {
      headingTop: "PRIMARY YEARS",
      subTitle: "Strong foundations. Curious minds.",
      description:
        "The primary years build on these early foundations through a growing focus on concepts, exploration and independent thinking. Children are encouraged to question, understand and connect what they learn with the world around them. Alongside academic growth, they develop confidence, responsibility and the skills to become thoughtful, curious learners.",
      image: "/primary-years.png",
    },
  ]}
/>
            

            
    <CardGridSection
  badge="Learnings Beyond Textbooks"
  description="Learning at Prithvi goes beyond textbooks. We create meaningful experiences that encourage children to question, explore, create and grow with confidence."
  items={[
    {
      image: "/stem2.png",
      title: "STEM and Innovation",
      description:
        "Hands-on learning develops logical thinking, experimentation and problem-solving skills.",
    },
    {
      image: "/Curious Mind at Work.png",
      title: "Critical Thinking",
      description:
        "Children learn to analyse, question and approach challenges with confidence.",
    },
    {
      image: "/communication.png",
      title: "Communication and Collaboration",
      description:
        "Children learn to express themselves, listen to others and work together.",
    },
  ]}
/>
     

    </>
  );
}