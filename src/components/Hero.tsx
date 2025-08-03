import Image from "next/image";
import IEEEBg from "../../public/hero-bg.png";
import IeeeText from "./IeeeText";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] relative flex flex-col text-white items-center justify-center gap-20 bg-black bg-blend-exclusion">
      <Image
        src={IEEEBg}
        alt="IEEE Background"
        className="absolute inset-0 left-0 w-full h-full object-cover md:object-bottom"
        priority
        quality={100}
      />
      <div className="flex top-6 md:top-0 relative flex-col items-center justify-center gap-2">
        <IeeeText />

        <div className="w-full h-1 bg-gradient-to-r from-white via-yellow-300 to-yellow-50 rounded-full"></div>

        <p className="text-2xl md:text-3xl font-orbitron">DAY 2025</p>
      </div>
      <div className="flex top-6 md:top-0 flex-col gap-4 items-center max-w-[300px] md:max-w-lg lg:max-w-xl text-center justify-center bg-white/30 backdrop-blur-md p-6 rounded-lg">
        <h2 className="text-3xl font-orbitron tracking-wider md:text-4xl font-semibold">
          IEEE DAY IS HERE!
        </h2>
        <p className="text-base md:text-lg tracking-wider">
          Prepare for an electrifying celebration of innovation, technology, and
          engineering brilliance that will reshape the future
        </p>
      </div>
    </div>
  );
};

export default Hero;
