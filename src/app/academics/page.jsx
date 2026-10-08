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
            

            {/* Assessment Section */}
            {/* <ImageContentSection
                imageSrc="/curriculum2.png"
                imageAlt="Our amazing product"
                imageOnRight={false}

                mobileImageFirst={true}
                className="    "
            >

                <div className="sm:space-y-3    space-y-0   lg:pr-32 pr-0 md:pr-0   sm:py-8 ">


                    <p className="para  sm:mb-4  mb-3 text-[#4C4C4C] ">
                        Our teachers encourage children to think independently, communicate with confidence, and collaborate with openness. Inquiry-based learning, STEAM integration, design thinking and project work help students connect ideas across subjects and see the world as an interconnected whole.


                    </p>
                    <p className="para  text-[#4C4C4C] ">At the same time, values, mindfulness, and everyday discipline shape their character and emotional strength. With teachers as mentors and co-learners, our classrooms become vibrant spaces where knowledge grows, individuality is honoured and every child finds their unique path to excellence.</p>

                </div>

            </ImageContentSection>
             <ImageContentSection
                imageSrc="/curriculum4.png"
                imageAlt="Our amazing product"
                imageOnRight={true}

                mobileImageFirst={true}
                className="    "
            >

                <div className="sm:space-y-3 lg:pl-32 pl-0 md:pl-0    space-y-0  py-4  sm:py-8 ">

                    <div className="border w-fit border-[#D2AD8B] text-[#164950]  font-semibold  px-6 py-2  rounded-full  ">Pedagogy</div>

                    <h2 className="heading !py-1   ">
                        Our Pedagogy
                    </h2>

                    <p className="para  text-[#4C4C4C] ">
                        We believe that teaching is a benevolent act, rooted in curiosity, culture, and compassion. Our pedagogy blends global best practices with India’s timeless learning traditions, creating a balanced approach where children learn by exploring, questioning, experimenting, and reflecting.
                    </p>
                    

                </div>

            </ImageContentSection> */}
    <CardGridSection
  badge="Our Approach"
  description="Learning at Prithvi goes beyond textbooks. We create meaningful experiences that encourage children to question, explore, create and grow with confidence."
  items={[
    {
      image: "/Inquiry-Based-Learning.png",
      title: "Curiosity & Exploration",
      description:
        "Children are encouraged to ask questions, explore ideas and discover the joy of learning through meaningful experiences.",
    },
    {
      image: "/steam-tech.png",
      title: "Creativity & Innovation",
      description:
        "Children have opportunities to create, experiment and approach ideas with an open and curious mind.",
    },
    {
      image: "/values.png",
      title: "Values & Responsibility",
      description:
        "Alongside academics, children develop kindness, respect, empathy and a sense of responsibility towards others and the world around them.",
    },
  ]}
/>
     

    </>
  );
}