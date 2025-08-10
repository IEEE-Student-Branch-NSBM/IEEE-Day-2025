"use client"
import AesturnumLogo from "../../public/sponsors/Aeturnum.webp";
import NescafeLogo from "../../public/sponsors/nescafe.webp";
import OrelitLogo from "../../public/sponsors/orelit.webp";
import VirtusaLogo from "../../public/sponsors/virtusa.webp";
import NsbmLogo from "../../public/sponsors/nsbm.webp";
import Image from "next/image";
import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const sponsors = [
  { name: "aeturnum", logo: AesturnumLogo, duration: 2, x: 110 },
  { name: "nescafe", logo: NescafeLogo, duration: 2, y: -100 },
  { name: "nsbm", logo: NsbmLogo, duration: 2, x: 100 },
  { name: "orelit", logo: OrelitLogo, duration: 2, y: 100 },
  { name: "virtusa", logo: VirtusaLogo, duration: 2, x: -100 },
];

const Sponsors = () => {
  const logoRefs = useRef([]);

  useGSAP(() => {
    sponsors.forEach((sponsor, index) => {
      gsap.to(logoRefs.current[index], {
        x: sponsor.x || 0,
		y: sponsor.y || 0,
		yoyo:true,
		repeat: -1,
        duration: sponsor.duration || 1.5,
        ease: "power2.inOut",
      });
    });
  }, []);

  return (
    <div className="bg-black flex gap-6 p-6">
      {sponsors.map((sponsor, index) => (
        <div key={index} className="overflow-hidden">
			
          <Image
            ref={(el) => (logoRefs.current[index] = el)}
            src={sponsor.logo}
            alt={sponsor.name}
            className="logo"
			width={100}
			height={100}
          />
        </div>
      ))}
    </div>
  );
};

export default Sponsors;
