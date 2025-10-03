"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Countdown from "./countdown";
import IeeeDayLogoInner from "../../public/logos/ieee-day-logo-inner.svg";
import IeeeDayLogoRegister from "../../public/logos/ieee-day-logo-register.svg";
import IeeeDayLogoBlank from "../../public/logos/ieee-day-logo-blank.svg";

const HeroCenter = () => {
  const ieeeLogoRef = useRef<HTMLDivElement>(null);
  const registerLogoRef = useRef<HTMLDivElement>(null);
  const countdownRef = useRef<HTMLDivElement>(null);

  let logoArrange = [ieeeLogoRef, registerLogoRef, countdownRef];
  // 1 - iee day
  // 2 - register now
  // 3 - countdown

  useEffect(() => {
    const refs = logoArrange.map((ref) => ref.current);

    gsap.set(refs.slice(1), { opacity: 0 });
    gsap.set(refs[0], { opacity: 1 });

    const animateTransition = () => {
      const tl = gsap.timeline();

      tl.to({}, { duration: 8 });

      logoArrange.forEach((currentRef, index) => {
        const nextIndex = (index + 1) % logoArrange.length;
        const currentElement = currentRef.current;
        const nextElement = logoArrange[nextIndex].current;

        if (currentElement && nextElement) {
          tl.to(currentElement, {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
          })
            .to(
              nextElement,
              { opacity: 1, duration: 1, ease: "power2.inOut" },
              "-=0.5"
            )
            .to({}, { duration: 8 });
        }
      });

      return tl;
    };

    const masterTimeline = gsap.timeline({ repeat: -1 });
    masterTimeline.add(animateTransition());

    return () => {
      masterTimeline.kill();
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* 1 - ieee day */}
      <div ref={ieeeLogoRef}>
        <Image
          src={IeeeDayLogoInner}
          alt="IEEE Day 2025"
          height={400}
          width={400}
          className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 scale-[48%] sm:scale-[48%] md:scale-[70%] 2xl:scale-100"
        />
      </div>

      {/* 2 - register now */}
      <div ref={registerLogoRef}>
        <Image
          src={IeeeDayLogoRegister}
          alt="Register Now"
          height={400}
          width={400}
          className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 scale-[48%] sm:scale-[48%] md:scale-[70%] 2xl:scale-100"
        />
      </div>

      {/* 3 - countdown */}
      <div ref={countdownRef}>
        <Image
          src={IeeeDayLogoBlank}
          alt="IEEE Day Logo Background"
          height={400}
          width={400}
          className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 scale-[48%] sm:scale-[48%] md:scale-[70%] 2xl:scale-100"
        />
        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-white">
          <Countdown />
        </div>
      </div>
    </div>
  );
};

export default HeroCenter;
