"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountdownCard from "./CountdownCard";
import HeaderText from "../HeaderText";

const Countdown = () => {
  const containerRef = useRef<HTMLElement>(null);

  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-10-07T00:00:00+05:30");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    return difference > 0
      ? {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
      : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      containerRef.current.querySelectorAll(".countdown-card"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [hasMounted]);

  if (!hasMounted) return null;

  return (
    <section
      ref={containerRef}
      className="flex items-center py-10 md:py-20 justify-center"
    >
      <div className="w-11/12 flex gap-8 flex-col items-center py-5 sm:w-4/5">
        <HeaderText title="Coming Soon" />

        <div className="grid w-full text-center grid-cols-4 md:grid-cols-4 gap-x-2 sm:gap-x-4 md:gap-x-8 gap-y-4">
          <CountdownCard time={timeLeft.days} type="Days" />
          <CountdownCard time={timeLeft.hours} type="Hours" />
          <CountdownCard time={timeLeft.minutes} type="Minutes" />
          <CountdownCard time={timeLeft.seconds} type="Seconds" />
        </div>
      </div>
    </section>
  );
};

export default Countdown;
