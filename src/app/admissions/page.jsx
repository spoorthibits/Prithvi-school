import AdmissionProcess from "@/components/AdmissionProcess";
import Hero from "@/components/HeroSection";
import VideoHero from "@/components/VideoHero";


export default function AboutPage() {
  return (
   <>
   <Hero/>
   {/* <AdmissionProcess/> */}
   <VideoHero
        videoSrc="/assets/academic-aivideo.mp4"
        title="LEARNING JOURNEY"
        slides={[
          {
            headingTop: "EARLY YEARS",
            subTitle: "Empathy, Healthy,",
            description:
              "The early years are shaped around warmth, security, and gentle exploration. Children are encouraged to observe, ask questions, and engage with the world through play, stories, movement, and conversation. Learning experiences are thoughtfully guided to help children develop language, social awareness, and early thinking skills. With consistent routines and a caring environment, children begin to feel safe, confident, and ready to learn.",
            image: "/assets/academicsanimation1.webp",
          },
          {
            headingTop: "PRIMARY YEARS",
            subTitle: "Simple. Personal. Child-first.",
            description:
              "The primary years focus on building strong academic foundations while developing independence and curiosity. Learning becomes more structured, helping children make connections, express ideas clearly, and develop confidence in their abilities.Teachers support students in understanding concepts deeply rather than memorizing outcomes. Equal importance is given to academic growth, emotional development, and responsible behaviour, allowing children to grow into thoughtful and capable learners.",
            image: "/assets/academicsanimation2.webp",
          },
        ]}
      />
   </>
  );
}