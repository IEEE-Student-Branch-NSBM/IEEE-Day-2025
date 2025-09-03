"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import VevoLogo from "../../public/sponsors/vevo-logo.png";

gsap.registerPlugin(ScrollTrigger);

const Sponsors = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRefs = useRef<HTMLDivElement[]>([]);

  const logos = [VevoLogo, VevoLogo, VevoLogo, VevoLogo, VevoLogo];

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
    <section id="sponsor" className="relative z-50 mb-20 text-white">
      <div className="text-4xl mb-4">Sponsors</div>
      <div className="max-w-3xl text-xl mb-4">
        <div>
          Our event won't be as wonderful without our sponsors,
        </div>
        <div>
          This is our tribute to them.
        </div>
      </div>
      <div
        ref={containerRef}
        className="grid bg-white/5 p-10 backdrop-blur-lg grid-cols-5 gap-10 w-full justify-items-center"
      >
        {logos.map((logo, i) => (
          <div
            key={i}
            className="w-fit p-4 flex items-center justify-center overflow-hidden"
          >
            <div
              ref={(el) => {
                logoRefs.current[i] = el!;
              }}
            >
              <Image src={logo} alt={`logo-${i}`} width={200} height={200} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
