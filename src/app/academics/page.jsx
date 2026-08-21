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
      <VideoHero
              videoSrc="/learnings.mp4"
              title="LEARNING JOURNEY"
              slides={[
                {
                  headingTop: "EARLY YEARS",
                  subTitle: "Empathy, Healthy,",
                  description:
                    "The early years are shaped around warmth, security, and gentle exploration. Children are encouraged to observe, ask questions, and engage with the world through play, stories, movement, and conversation. Learning experiences are thoughtfully guided to help children develop language, social awareness, and early thinking skills. With consistent routines and a caring environment, children begin to feel safe, confident, and ready to learn.",
                  image: "/curriculum2.png",
                },
                {
                  headingTop: "PRIMARY YEARS",
                  subTitle: "Simple. Personal. Child-first.",
                  description:
                    "The primary years focus on building strong academic foundations while developing independence and curiosity. Learning becomes more structured, helping children make connections, express ideas clearly, and develop confidence in their abilities.Teachers support students in understanding concepts deeply rather than memorizing outcomes. Equal importance is given to academic growth, emotional development, and responsible behaviour, allowing children to grow into thoughtful and capable learners.",
                  image: "/curriculum3.png",
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
  badge="Our Pedagogy"
  description="At our school, pedagogy goes beyond textbooks — it's about how children learn to think, question, and grow every day."
  items={[
    {
      image: "/curriculum2.png",
      title: "Inquiry-Based Learning",
      description:
        "Children explore concepts through questions and hands-on discovery rather than rote instruction.",
    },
    {
      image: "/curriculum3.png",
      title: "STEAM Integration",
      description:
        "Science, technology, engineering, arts, and math come together in real, connected projects.",
    },
    {
      image: "/curriculum4.png",
      title: "Values & Mindfulness",
      description:
        "Daily practices build emotional strength, discipline, and character alongside academics.",
    },
  ]}
/>
     

    </>
  );
}