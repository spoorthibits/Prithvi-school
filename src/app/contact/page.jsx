import Hero from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";
import ContactSchool from "@/components/ContactSchool";
import PageBanner from "@/components/PageBanner";
export default function ContactUs() {
  return (
    <>
      <PageBanner 
            image = "/Warm School Reception Conversation.png"
            title="Enquire Now"
            subtitle="We’re here to help you take the next step."
      />
      <ContactSection/>
      <ContactSchool/>
    </>
  );
}
