"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import AesturnumLogo from "../../public/sponsors/Aeturnum.webp";
import NescafeLogo from "../../public/sponsors/nescafe.webp";
import OrelitLogo from "../../public/sponsors/orelit.webp";
import VirtusaLogo from "../../public/sponsors/virtusa.webp";
import NsbmLogo from "../../public/sponsors/nsbm.webp";

gsap.registerPlugin(useGSAP);

const sponsors = [
  { name: "Aeturnum", logo: AesturnumLogo, x: 200 },
  { name: "Nescafe", logo: NescafeLogo, y: -100 },
  { name: "NSBM", logo: NsbmLogo, x: 200 },
  { name: "Orelit", logo: OrelitLogo, y: 100 },
  { name: "Virtusa", logo: VirtusaLogo, x: -200 },
];

const Sponsors = () => {
  const logoRefs = useRef<(HTMLImageElement | null)[]>([]);

  useGSAP(() => {
    sponsors.forEach((sponsor, index) => {
      const element = logoRefs.current[index];
      if (!element) return;

      gsap.from(element, {
        x: sponsor.x || 0,
        y: sponsor.y || 0,
        defaultDuration: 1.5,
        ease: "power2.inOut",
        duration: 2,
      });
    });
  }, []);

  return (
    <div className="bg-black flex flex-wrap justify-center items-center gap-6 p-6">
      {sponsors.map((sponsor, index) => (
        <div
          key={sponsor.name}
          className="overflow-hidden p-4"
        >
          <Image
            ref={(el) => {
              logoRefs.current[index] = el;
            }}
            src={sponsor.logo}
            alt={`${sponsor.name} logo`}
            className="object-contain"
            width={180}
            height={180}
          />
        </div>
      ))}
    </div>
  );
};

export default Sponsors;
