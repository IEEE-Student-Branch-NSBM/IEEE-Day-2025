"use client";
import Hero from "@/components/hero";
import Sponsors from "@/components/sponsors";
import About from "@/components/about";
import People from "@/components/people";
import Chat from "@/components/chat";
import Register from "@/components/register";
import ParticlesBg from "@/components/particlesBg";
import Memories from "@/components/memories";

const HomePage = () => {
  return (
    <section id="home">
      <Hero />
      <ParticlesBg />
      <div className="px-40 flex flex-col gap-10">
        <Sponsors />
        <Memories />
        <About />
        <People />
        <Chat />
        <Register />
      </div>
    </section>
  );
};

export default HomePage;
