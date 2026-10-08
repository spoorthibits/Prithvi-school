import AboutPageClient from "./AboutPageClient";

export const metadata = {
  title: "About Us | Prithvi Global School",
  description:
    "Discover Prithvi Global School's philosophy, programs and learning approach, rooted in strong values, curiosity, creativity and academic excellence.",
  keywords: [
    "Prithvi Global School",
    "About Prithvi Global School",
    "CBSE-based school",
    "Playgroup",
    "Nursery",
    "PP1",
    "PP2",
    "Grade 1 to 5",
  ],
  openGraph: {
    title: "About Us | Prithvi Global School",
    description:
      "Discover the philosophy, programs and learning approach at Prithvi Global School.",
    type: "website",
    siteName: "Prithvi Global School",
    images: [
      {
        url: "/aboutusbanner1.png",
        width: 1200,
        height: 630,
        alt: "Prithvi Global School",
      },
    ],
  },
  icons: {
    icon: "/logoglobe.png",
    shortcut: "/logoglobe.png",
    apple: "/logoglobe.png",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}