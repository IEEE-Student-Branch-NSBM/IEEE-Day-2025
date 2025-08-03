import About from "@/components/About";
import Countdown from "@/components/countdown/Countdown";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Milestones from "@/components/Milestones";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Countdown />
      <About />
      <Journey />
      <Milestones />
    </div>
  );
};

export default HomePage;
