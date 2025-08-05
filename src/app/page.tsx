import About from "@/components/About";
import Countdown from "@/components/countdown/Countdown";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Sponsor from "@/components/Sponsor";
import ContactUs from "@/components/ContactUs";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Countdown />
      <About />
      <Journey />
      <Sponsor />
      <ContactUs />
    </div>
  );
};

export default HomePage;
