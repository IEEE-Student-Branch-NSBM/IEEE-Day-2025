"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import IeeeDayLogo from "../../public/logos/ieee-day-logo.svg";
import IeeeDayLogo2025 from "../../public/logos/ieee-day-logo-2025.png"

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(imageRef.current, {
      rotate: 720,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      }
    })
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="h-screen overflow-hidden relative z-50">
      <Image
        ref={imageRef}
        src={IeeeDayLogo}
        width={750}
        height={100}
        alt="Main IEEE Day Logo"
        className="absolute left-1/2 top-1/2 bottom-1/2 -translate-y-1/2 -translate-x-1/2"
      />
      <Image
        src={IeeeDayLogo2025}
        width={400}
        height={100}
        alt="Secondary IEEE Day Logo"
        className="absolute left-1/2 top-1/2 bottom-1/2 -translate-y-1/2 -translate-x-1/2"
      />
    </div>
  );
};

export default Hero;
