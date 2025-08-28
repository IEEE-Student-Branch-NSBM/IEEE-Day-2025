"use client";
import Hero from "@/components/hero";
import Sponsors from "@/components/sponsors";
import ParticlesComponent from "@/components/particles-bg";
import About from "@/components/about";
import People from "@/components/people";
import Memories from "@/components/memories";

const HomePage = () => {
  return (
    <section>
      <Hero />
      <ParticlesComponent />
      <div className="px-40 flex flex-col gap-10">
        <Sponsors />
        <Memories />
        <About />
        <People />
      </div>
    </section>
  );
};

export default HomePage;
