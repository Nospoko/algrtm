import localFont from "next/font/local";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import LinksSection from "@/components/LinksSection";

const pingFont = localFont({ src: "../fonts/PingFangHK.ttf" });

export const metadata = {
  title: "Algrtm | Algorithmic solutions",
  description: "We develop algorithmic solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${pingFont.className}`}>
        <Navbar />
        {children}
        <LinksSection />
        <Footer />
      </body>
    </html>
  );
}
