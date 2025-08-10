"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { LogoSVG } from "@/constants/images";

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const scrollCount = useRef(0);
  const rotationRef = useRef(0);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (!unlocked) {
        e.preventDefault();

        const direction = e.deltaY > 0 ? 1 : -1;

        if (direction > 0) {
          scrollCount.current += 1;
          rotationRef.current += 60;

          if (imageRef.current) {
            gsap.to(imageRef.current, {
              rotation: rotationRef.current,
              duration: 0.6,
              ease: "power2.out",
            });
          }

          if (scrollCount.current >= 6) {
            setUnlocked(true);
          }
        }
      }
    };

    const preventOtherScroll = (e: Event) => {
      if (!unlocked) e.preventDefault();
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("touchmove", preventOtherScroll, {
      passive: false,
    });
    window.addEventListener("keydown", preventOtherScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", preventOtherScroll);
      window.removeEventListener("keydown", preventOtherScroll);
    };
  }, [unlocked]);

  return (
    <div className="min-h-nav overflow-hidden relative">
      <Image
        ref={imageRef}
        src={LogoSVG}
        width={750}
        height={100}
        alt="IEEE Logo"
        className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-4/9"
      />
    </div>
  );
};

export default Hero;
