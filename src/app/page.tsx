"use client";
import Hero from "@/components/hero";
import Memories from "@/components/memories";
import Sponsors from "@/components/sponsors";
import About from "@/components/about";
import People from "@/components/people";
import Chat from "@/components/chat";
import Register from "@/components/register";
import ParticlesBg from "@/components/particlesBg";
import Flow from "@/components/roadmap";

const HomePage = () => {
  return (
    <section id="home">
      <Hero />
      <ParticlesBg />
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-40 flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-16 overflow-hidden">
        <Sponsors />
        <About />
        <Memories />
        <Flow />
        <People />
        <Chat />
        <Register />
      </div>
    </section>
  );
};

export default HomePage;
