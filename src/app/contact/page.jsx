export const metadata = {
  title: "Contact Us | Prithvi Global School",
  description:
    "Get in touch with Prithvi Global School for admissions, school enquiries and more information about our programs and learning approach.",
  keywords: [
    "Prithvi Global School Contact",
    "Contact Prithvi Global School",
    "School Enquiry",
    "School Admissions",
    "Prithvi Global School Admissions",
  ],
  openGraph: {
    title: "Contact Us | Prithvi Global School",
    description:
      "Get in touch with Prithvi Global School for admissions and school enquiries.",
    type: "website",
    siteName: "Prithvi Global School",
    images: [
      {
        url: "/contactbanner.png",
        width: 1200,
        height: 630,
        alt: "Contact Prithvi Global School",
      },
    ],
  },
  icons: {
    icon: "/logoglobe.png",
    shortcut: "/logoglobe.png",
    apple: "/logoglobe.png",
  },
};
import Hero from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";
import ContactSchool from "@/components/ContactSchool";
import PageBanner from "@/components/PageBanner";
import MapSection from "@/components/map";
export default function ContactUs() {
  return (
    <>
      <PageBanner
  image="/Warm School Reception Conversation.png"
  mobileImage="/mobile-contact.png"
  title="Enquire Now"
  subtitle="We’re here to help you take the next step."
/>
      <ContactSection/>
      <MapSection/>
      {/* <ContactSchool/> */}
    </>
  );
}
