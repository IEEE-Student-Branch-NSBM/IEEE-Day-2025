"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import VevoLogo from "../../public/sponsors/vevo-logo.png";
import DimoLogo from "../../public/sponsors/dimo-logo.png";
import KotmaleLogo from "../../public/sponsors/kotmale-logo.png";
import AfsaanLogo from "../../public/sponsors/afsaan-logo.png";

gsap.registerPlugin(ScrollTrigger);

const Sponsors = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRefs = useRef<HTMLDivElement[]>([]);

  const logos = [DimoLogo, KotmaleLogo, AfsaanLogo, VevoLogo, VevoLogo];

  useGSAP(() => {
    const animationConfig = {
      duration: 2,
      ease: "power3.out",
      repeat: -1,
      yoyo: true,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
    };

    const getDirection = (id: number) => {
      switch (id % 4) {
        case 0:
          return { x: -150, y: 0 };
        case 1:
          return { x: 0, y: -150 };
        case 2:
          return { x: 150, y: 0 };
        case 3:
        default:
          return { x: 0, y: 150 };
      }
    };

    logoRefs.current.forEach((el, i) => {
      if (el) {
        const direction = getDirection(i);
        const delay = i * 0.3;

        gsap.fromTo(
          el,
          {
            x: direction.x,
            y: direction.y,
            opacity: 0,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            delay,
            ...animationConfig,
          }
        );
      }
    });
  }, [logos.length]);

  return (
    <section id="sponsor" className="relative z-50 mb-10 sm:mb-10 md:mb-20 text-white text-center sm:text-center md:text-left">
      <div className="text-3xl sm:text-3xl md:text-4xl mb-2 sm:mb-4 md:mb-4">Sponsors</div>
      <div className="md:max-w-3xl text-lg sm:text-lg md:text-xl mb-4 sm:mb-4 md:mb-4">
        <div>
          Our event won't be as wonderful without our sponsors,
        </div>
        <div>
          This is our tribute to them.
        </div>
      </div>
      <div
        ref={containerRef}
        className="grid bg-white/5 p-4 sm:p-4 md:p-10 backdrop-blur-lg grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-4 sm:gap-4 md:gap-10 w-full justify-items-center"
      >
        {logos.map((logo, i) => (
          <div
            key={i}
            className="w-fit p-2 sm:p-2 md:p-4 flex items-center justify-center overflow-hidden"
          >
            <div
              ref={(el) => {
                logoRefs.current[i] = el!;
              }}
            >
              <Image src={logo} alt={`logo-${i}`} width={200} height={200} className="scale-[60%] sm:scale-[60%] md:scale-100" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
