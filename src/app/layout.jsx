import Navbar from "@/components/Navbar";
import "./globals.css";

import { Montserrat, Playfair_Display } from "next/font/google";
import Footer from "@/components/Footer";
import FloatingCTAs from "@/components/FloatingCTA";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
export const metadata = {
  title: "Prithvi Global School | Growing Curious Minds",
  description:
    "Prithvi Global School is a CBSE-based school nurturing curious, confident and responsible learners through meaningful experiences, strong values and academic excellence.",
  icons: {
    icon: "/globe1.png",
    shortcut: "/globe1.png",
    apple: "/globe1.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${playfair.variable}`}>
        <Navbar />

        {/* Visible only on mobile */}
        <div className="block sm:hidden">
          <FloatingCTAs />
        </div>

        {children}

        <Footer />
      </body>
    </html>
  );
}