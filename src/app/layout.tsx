import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/utils/fonts";
import Navbar from "@/components/navbar";

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
    <html lang="en" className={`${poppins.variable}`}>
      <body className="flex flex-col min-h-screen antialiased bg-[#E3FEF7]">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
