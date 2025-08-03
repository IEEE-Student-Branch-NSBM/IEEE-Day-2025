import type { Metadata } from "next";
import "./globals.css";
import { orbitron, poppins } from "@/utils/fonts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "IEEE Day 2025",
  description: "NSBM Green University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${orbitron.variable}`}
      suppressHydrationWarning
    >
      <body
        className={`flex flex-col bg-linear-to-b from-black/95 via-[#d26a00] to-black/95 min-h-screen antialiased`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
