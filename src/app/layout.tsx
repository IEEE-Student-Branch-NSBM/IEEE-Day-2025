import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/utils/fonts";
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
    <html lang="en" className={`${poppins.variable}`}>
      <body className="flex flex-col min-h-screen antialiased bg-mintwhite">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}