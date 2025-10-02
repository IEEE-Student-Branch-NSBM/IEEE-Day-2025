"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import Countdown from "./countdown";
import IeeeDayLogoRegister from "../../public/logos/ieee-day-logo-register.svg";
import IeeeDayLogoBlank from "../../public/logos/ieee-day-logo-blank.svg";

const HeroCenter = () => {
  const [showCountdown, setShowCountdown] = useState(false);
  const registerRef = useRef(null);
  const countdownRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 }); // infinite loop

    tl
      // Show Register Now (fade in)
      .fromTo(
        registerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" }
      )
      // Hold Register Now for 5s
      .to(registerRef.current, { duration: 5 })
      // Fade out Register Now
      .to(registerRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => setShowCountdown(true),
      })
      // Show Countdown (fade in)
      .fromTo(
        countdownRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" }
      )
      // Hold Countdown for 5s
      .to(countdownRef.current, { duration: 5 })
      // Fade out Countdown
      .to(countdownRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => setShowCountdown(false),
      });

    return () => {
      tl.kill(); // cleanup
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Countdown or Register Now */}
      <div className="z-20">
        <div ref={registerRef} style={{ display: showCountdown ? "none" : "block" }}>
          <Image
            src={IeeeDayLogoRegister}
            alt="Register Now"
            height={400}
            width={400}
            className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 scale-[48%] sm:scale-[48%] md:scale-[70%] 2xl:scale-100"
          />
        </div>
        <div ref={countdownRef} style={{ display: showCountdown ? "block" : "none" }}>
          <Countdown />
        </div>
      </div>
      {/* Background logo */}
      <Image
        src={IeeeDayLogoBlank}
        alt="IEEE Day Logo Background"
        height={400}
        width={400}
        className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 scale-[48%] sm:scale-[48%] md:scale-[70%] 2xl:scale-100"
      />
    </div>
  );
};

export default HeroCenter;