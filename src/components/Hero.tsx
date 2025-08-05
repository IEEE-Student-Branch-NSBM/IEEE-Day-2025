import Image from "next/image";
import IEEEBg from "../../public/hero-bg-new.webp";
import IEEEDayLogo from "../../public/ieee-day-logo.webp";

const Hero = () => {
  return (
    <div className="min-h-[100vh] relative flex flex-col text-white overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src={IEEEBg}
          alt="IEEE Background"
          className="w-full h-full object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-900/20 to-black/60"></div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 mb-8 sm:mb-12 md:mb-16">
          <div className="relative">
            <Image
              src={IEEEDayLogo}
              alt="IEEE Day Logo"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl"
              priority
              quality={100}
            />
            <div className="absolute inset-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-radial from-amber-400/20 via-orange-500/10 to-transparent rounded-full blur-2xl"></div>
          </div>
        </div>

        <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl text-center space-y-4 sm:space-y-6 md:space-y-8">
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-orbitron tracking-wider leading-tight">
              <span className="bg-gradient-to-r from-amber-200 via-orange-100 to-amber-300 text-transparent bg-clip-text drop-shadow-lg">
                IEEE DAY
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold font-orbitron tracking-wide">
              <span className="bg-gradient-to-r from-amber-100 via-orange-200 to-amber-200 text-transparent bg-clip-text">
                IS HERE!
              </span>
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-amber-100/90 leading-relaxed tracking-wide max-w-[280px] sm:max-w-none mx-auto">
              Prepare for an electrifying celebration of innovation, technology, and
              engineering brilliance that will reshape the future
            </p>
          </div>

          <div className="pt-4 sm:pt-6 md:pt-8">
            <div className="inline-flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-amber-400/70 text-amber-100 hover:bg-amber-400/10 font-semibold rounded-lg sm:rounded-xl transition-all duration-300 backdrop-blur-sm font-orbitron tracking-wide text-sm sm:text-base">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs sm:text-sm text-amber-200/80 font-medium tracking-wide">
            Scroll Down
          </span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-amber-300/60 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-amber-300/80 rounded-full mt-1 sm:mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 left-4 sm:left-8 w-2 h-16 sm:w-3 sm:h-20 bg-gradient-to-b from-amber-400/30 to-transparent rounded-full"></div>
      <div className="absolute top-1/3 right-4 sm:right-8 w-2 h-12 sm:w-3 sm:h-16 bg-gradient-to-b from-orange-400/30 to-transparent rounded-full"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-8 sm:w-2 sm:h-12 bg-gradient-to-b from-amber-300/20 to-transparent rounded-full"></div>
    </div>
  );
};

export default Hero;