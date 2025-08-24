"use client";
import Hero from "@/components/hero";
import Memories from "@/components/memories";
import Sponsors from "@/components/sponsors";
import ParticlesComponent from "@/components/particles-bg";
import About from "@/components/about";

const HomePage = () => {
  return (
    <section>
      <Hero />
      <ParticlesComponent />
      <div className="px-40 flex flex-col gap-10">
        <Sponsors />
        <Memories />
        <About />
      </div>
    </section>
  );
};

export default HomePage;
