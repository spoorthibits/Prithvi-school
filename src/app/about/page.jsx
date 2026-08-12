
import PageBanner from "@/components/PageBanner";
import ScrollStory from "@/components/ScrollStory";
import SplitContent from "@/components/SplitContent";


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
      
      {/* <AboutPrithvi /> */}
       <ScrollStory
          slides={aboutSlides}
          layoutType="default"
          backgroundColor="#ffffff"
          heading="OUR STORY"
          imagePosition="left"
          imageTransition="vertical"
         
          dotActiveColor="#a44a1f"
          dotInactiveColor="#a09b9b"
          textColor="#0F5132"
          headingClassName="text-[#0F5132]"
          contentClassName="text-black"
        />
    <SplitContent
  eyebrow="Our Vision"
  heading="A school built around one simple idea."
  paragraphs={[
    "We believe every child learns best when they understand the 'why' behind every lesson, not just the answer.",
    "That belief shapes every classroom, every teacher, and every day at our school.",
  ]}
  image="/ourvision.png"
  imageAlt="Students exploring and learning together"
  imagePosition="left"
/>
<SplitContent
  eyebrow="Our Mission"
  heading="Building strong foundations for lifelong learning."
  paragraphs={[
    "We provide a safe, inclusive and engaging learning environment where every child is encouraged to learn, create and grow.",
    "Through meaningful experiences, creativity and strong values, we prepare children for a confident future.",
  ]}
  image="/ourmission.png"
  imageAlt="Students working together"
  imagePosition="right"
/>
<SplitContent
  eyebrow="Why Choose Us"
  heading="What makes Prithvi different"
  paragraphs={[
    "Every detail of our campus, our teachers, and our classrooms is built around one question: what does this child need to thrive?",
    "That belief shapes the experience every single day.",
  ]}
  image="/whychooseus.png"
  imageAlt="Students learning at Prithvi Global School"
  imagePosition="left"
  badgeNumber="12+"
  badgeText={
    <>
      Years of nurturing
      <br />
      confident learners
    </>
  }
  ctaText="Book a Campus Tour"
  ctaLink="/contact"
/>

    </>
  );
}
