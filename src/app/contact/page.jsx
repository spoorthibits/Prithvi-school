import Hero from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";
import ContactSchool from "@/components/ContactSchool";
import PageBanner from "@/components/PageBanner";
export default function ContactUs() {
  return (
    <>
      <PageBanner 
            image = "/ba-contact.webp"
      />
      <ContactSection/>
      <ContactSchool/>
    </>
  );
}
