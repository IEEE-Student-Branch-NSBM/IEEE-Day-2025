"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const IeeeText = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    gsap.to(textRef.current, {
      opacity: 1,
      duration: 1.5,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <h1
      ref={textRef}
      className="text-6xl opacity-5 font-orbitron md:text-7xl font-bold bg-gradient-to-r from-white via-yellow-300 to-yellow-50 bg-clip-text text-transparent drop-shadow-md"
    >
      IEEE
    </h1>
  );
};

export default IeeeText;
