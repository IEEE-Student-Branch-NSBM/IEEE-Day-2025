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
// import SideSkirts from "@/components/sideSkirts";

const HomePage = () => {
  return (
    <section id="home">
      <Hero />
      <ParticlesBg />
      {/* <SideSkirts /> */}
      <div className="px-8 sm:px-8 md:px-40 flex flex-col gap-10 overflow-hidden">
        <Sponsors />
        <About />
        <Memories />
        <Flow />
        {/* <People /> */}
        <Chat />
      </div>
      <Register />
    </section>
  );
};

export default HomePage;
