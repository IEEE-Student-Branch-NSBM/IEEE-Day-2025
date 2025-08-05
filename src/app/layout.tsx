import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import localFont from 'next/font/local'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "IEEE Day 2025",
  description: "NSBM Green University",
};

const audiowide = localFont({
  src: './../../public/fonts/Audiowide-Regular.ttf',
  variable: '--font-audiowide',
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${audiowide.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body
        className={`flex flex-col bg-linear-to-b from-black/95 via-[#842701] to-black/95 min-h-screen antialiased font-audiowide`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
