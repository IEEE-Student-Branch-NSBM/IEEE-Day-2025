"use client";
import Hero from "@/components/hero";
// import Memories from "@/components/memories";
import Sponsors from "@/components/sponsors";
import ParticlesComponent from "@/components/particles-bg";
import About from "@/components/about";
import People from "@/components/people";
import Register from "@/components/register";

const HomePage = () => {
  return (
    <section id="home">
      <Hero />
      <ParticlesComponent />
      <div className="px-40 flex flex-col gap-10">
        <Sponsors />
        {/* <Memories /> */}
        <About />
        <People />
        <Register />
      </div>
    </section>
  );
};

export default HomePage;
