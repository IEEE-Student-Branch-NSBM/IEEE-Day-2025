"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import nescafe from "../../public/sponsors/nescafe.webp";

const Sponsors = () => {
  const logoRefs = useRef<HTMLDivElement[]>([]);

  const logos = [nescafe, nescafe, nescafe, nescafe, nescafe];

  useEffect(() => {
    const enter = (el: HTMLDivElement, fromVars: gsap.TweenVars) =>
      gsap.fromTo(
        el,
        { ...fromVars, opacity: 0 },
        { x: 0, y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );

    const wait = (duration = 2) => gsap.to({}, { duration });

    const exit = (el: HTMLDivElement, exitVars: gsap.TweenVars) =>
      gsap.to(el, {
        ...exitVars,
        opacity: 0,
        duration: 0.8,
        ease: "power2.in",
      });

    const animateLogo = (
      el: HTMLDivElement,
      fromVars: gsap.TweenVars,
      exitVars: gsap.TweenVars,
      delay = 0
    ) => {
      const tl = gsap.timeline({ repeat: -1, delay });
      tl.add(enter(el, fromVars)).add(wait(2)).add(exit(el, exitVars));
    };

    // Function to pick direction based on id % 4
    const getDirection = (id: number) => {
      switch (id % 4) {
        case 0: // Left → Right
          return { from: { x: -150 }, exit: { x: 150 } };
        case 1: // Top → Bottom
          return { from: { y: -150 }, exit: { y: 150 } };
        case 2: // Right → Left
          return { from: { x: 150 }, exit: { x: -150 } };
        case 3: // Bottom → Top
        default:
          return { from: { y: 150 }, exit: { y: -150 } };
      }
    };

    logoRefs.current.forEach((el, i) => {
      if (el) {
        const id = i; // use i directly for mod
        const dir = getDirection(id);
        const delay = i * 0.3; // stagger each logo
        animateLogo(el, dir.from, dir.exit, delay);
      }
    });
  }, [logos.length]);

  return (
    <div className="min-h-nav w-full flex items-center justify-center">
      <div className="grid bg-white/5 py-10 backdrop-blur-lg grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full justify-items-center">
        {logos.map((logo, i) => (
          <div
            key={i}
            className="w-fit flex items-center justify-center overflow-hidden"
          >
            <div
              ref={(el) => {
                logoRefs.current[i] = el!;
              }}
            >
              <Image src={logo} alt={`logo-${i}`} width={120} height={120} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
