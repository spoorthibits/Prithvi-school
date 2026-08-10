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
       <ScrollSlider
 
        slides={[
          {
            smallTitle: "Our Curriculum",
            title: "What we follow",
            description: (
              <>
                The academic framework at Prithvi Global School is designed to support concept clarity, application, and clear communication. Following a CBSE curriculum integrated with Cambridge learning frameworks, we help students build strong academic foundations while developing the confidence to express ideas and understand concepts deeply.
              </>
            ),
            image: "/curriculum4.png",
          },
          {
            smallTitle: "Our Approach",
            title: "How learning progresses",
            description:
              "Subjects are structured to build understanding gradually across grades — from pre-primary through 5th class — allowing children to connect ideas and strengthen foundations year on year. This steady, age-appropriate progression supports every learner as they grow through the early stages of schooling.",
            image: "/curriculum2.png",
          },
          {
            smallTitle: "Our Philosophy",
            title: "Why this matters",
            description:
              "This approach helps students move beyond memorization and develop confidence in applying what they learn. By focusing on understanding rather than rote learning, children at Prithvi Global School develop stronger thinking skills and a genuine curiosity for learning.",
            image: "/curriculum3.png",
          },
        ]}
      />
     {/* <BeyondClassroom/> */}
     <VideoHeroAnimation
        videoSrc="/academics.mp4"
        title="Our Approch"
        
       slides={[
          {
            headingTop: "OUR",
            headingBottom: "CURRICULUM",
            subTitle: "Building Strong Foundations",
            description:
              "At Prithvi Global School, our curriculum blends academic excellence with creativity, critical thinking, and real-world learning. We nurture confident learners by creating engaging classroom experiences that inspire curiosity and lifelong learning.",
            image: "/curriculum4.png",
          },
          {
            headingTop: "CONCEPT BASED",
            headingBottom: "LEARNING",
            subTitle: "Learning Beyond Memorization",
            description:
              "We encourage students to understand concepts rather than simply memorize facts. Interactive lessons, practical activities, discussions, and project-based learning help children develop analytical thinking and problem-solving skills.",
            image: "/curriculum2.png",
          },
          {
            headingTop: "HOLISTIC",
            headingBottom: "DEVELOPMENT",
            subTitle: "Growing Every Child",
            description:
              "Education at Prithvi extends beyond academics. Sports, arts, music, leadership activities, and value-based education help students develop confidence, communication skills, creativity, and emotional intelligence.",
            image: "/curriculum3.png",
          },
          {
            headingTop: "DIGITAL",
            headingBottom: "LEARNING",
            subTitle: "Technology with Purpose",
            description:
              "Modern classrooms integrate technology to make learning more engaging and meaningful. Digital tools, smart classrooms, and collaborative activities prepare students for the future while keeping learning enjoyable and interactive.",
            image: "/curriculum4.png",
          },
          {
            headingTop: "FUTURE",
            headingBottom: "READY STUDENTS",
            subTitle: "Preparing Tomorrow's Leaders",
            description:
              "Our academic approach develops confident, responsible, and compassionate learners equipped with strong communication, leadership, collaboration, and critical thinking skills to succeed in an ever-changing world.",
            image: "/curriculum5.png",
          },
        ]}
      />
    </>
  );
}