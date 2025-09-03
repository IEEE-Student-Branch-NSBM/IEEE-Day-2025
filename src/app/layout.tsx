import type { Metadata } from "next";
import "./globals.css";
import { saira } from "@/utils/fonts";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


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
    <html lang="en" className={`${saira.variable} scroll-smooth select-none`}>
      <body className="flex flex-col min-h-screen antialiased bg-mintwhite">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}