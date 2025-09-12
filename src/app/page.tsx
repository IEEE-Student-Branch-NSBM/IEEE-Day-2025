"use client";
import Hero from "@/components/hero";
import Memories from "@/components/memories";
import Sponsors from "@/components/sponsors";
import About from "@/components/about";
import People from "@/components/people";
import Chat from "@/components/chat";
import Register from "@/components/register";
import ParticlesBg from "@/components/particlesBg";
import RoadMap from "@/components/roadmap";

const HomePage = () => {
  return (
    <section id="home">
      <Hero />
      <ParticlesBg />
      <div className="px-40 flex flex-col gap-10">
        <Sponsors />
        <About />
        <Memories />
        <RoadMap />
        <People />
        <Chat />
      </div>
      <Register />
    </section>
  );
};

export default HomePage;
