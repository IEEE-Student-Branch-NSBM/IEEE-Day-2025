"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import DimoLogo from "../../public/sponsors/dimo-logo.png";
import KotmaleLogo from "../../public/sponsors/kotmale-logo.png";
import AfsaanLogo from "../../public/sponsors/afsaan-logo.png";
import NsbmLogo from "../../public/logos/nsbm-logo.png";
import CodeGenLogo from "../../public/logos/codegen-logo.png";
import NagarroLogo from "../../public/logos/nagarro-logo.png";
import RhinoLogo from "../../public/logos/rhino-logo.png";
import RoboticGenLogo from "../../public/logos/roboticgen-logo.png";

gsap.registerPlugin(ScrollTrigger);

const Sponsors = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRefs = useRef<HTMLDivElement[]>([]);

  const logos = [NsbmLogo, RhinoLogo, KotmaleLogo, AfsaanLogo, CodeGenLogo, NagarroLogo, DimoLogo, RoboticGenLogo];

  useGSAP(() => {
    const animationConfig = {
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
    };

    const getDirection = (id: number) => {
      switch (id % 8) {
        case 0:
          return { x: -150, y: 0 };
        case 1:
          return { x: 0, y: -150 };
        case 2:
          return { x: 150, y: 0 };
        case 3:
          return { x: 0, y: 150 };
        case 4:
          return { x: -150, y: 0 };
        case 5:
          return { x: 0, y: -150 };
        case 6:
          return { x: 0, y: 150 };
        case 7:
        default:
          return { x: -150, y: 0 };
      }
    };

    logoRefs.current.forEach((el, i) => {
      if (el) {
        const direction = getDirection(i);
        const delay = i * 0.2;

        gsap.fromTo(
          el,
          {
            x: direction.x,
            y: direction.y,
            opacity: 0,
            scale: 0.8,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            delay,
            ...animationConfig,
          }
        );
      }
    });
  }, []);

  return (
    <section id="sponsor" className="relative z-50 mb-10 sm:mb-10 md:mb-20 text-white text-center sm:text-center md:text-left">
      <div className="text-3xl sm:text-3xl md:text-4xl mb-2 sm:mb-4 md:mb-4">Sponsors</div>
      <div className="md:max-w-3xl text-lg sm:text-lg md:text-xl mb-4 sm:mb-4 md:mb-4">
        <div>
          This event wouldn’t be possible without our sponsors.
        </div>
        <div>
          Here’s a spotlight on the organizations powering IEEE Day 2025.
        </div>
      </div>
      <div
        ref={containerRef}
        className="grid bg-white/5 p-4 sm:p-4 md:p-10 backdrop-blur-lg grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-4 sm:gap-4 md:gap-10 w-full justify-items-center"
      >
        {logos.map((logo, i) => (
          <div
            key={i}
            className="w-fit h-30 sm:h-30 md:h-40 p-2 sm:p-2 md:p-4 flex items-center justify-center overflow-hidden"
          >
            <div
              ref={(el) => {
                logoRefs.current[i] = el!;
              }}
            >
              <Image
                src={logo}
                alt={`logo-${i}`}
                width={200}
                height={200}
                className={
                  logo === AfsaanLogo
                    ? "scale-[40%] sm:scale-[40%] md:scale-[60%]"
                    : logo === RhinoLogo
                      ? "scale-[80%] sm:scale-[80%] md:scale-[115%]"
                      : "scale-[60%] sm:scale-[60%] md:scale-[90%]"
                }
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
