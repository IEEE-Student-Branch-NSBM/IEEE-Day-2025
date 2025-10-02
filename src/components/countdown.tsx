"use client";

import { useState, useEffect } from "react";

const Countdown = () => {
  const eventDate = new Date("2025-10-07T00:00:00Z");

  const calculateTimeLeft = () => {
    const now = new Date();
    return Math.max(
      0,
      Math.floor((eventDate.getTime() - now.getTime()) / 1000)
    );
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => {
    const days = Math.floor(time / (24 * 3600));
    const hours = Math.floor((time % (24 * 3600)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return (
      <div className="text-center">
        <span>{String(days).padStart(2, "0")}</span>:
        <span>{String(hours).padStart(2, "0")}</span>:
        <span>{String(minutes).padStart(2, "0")}</span>:
        <span>{String(seconds).padStart(2, "0")}</span>
      </div>
    );
  };

  return (
    <div className="text-white text-center flex flex-col">
      <h1 className="text-2xl md:text-4xl 2xl:text-6xl font-semibold">
        {formatTime(timeLeft)}
      </h1>
      <p className="text-sm md:text-lg 2xl:text-xl">until Oct 07, 2025</p>
      <div className="flex justify-center gap-2 md:gap-4 2xl:gap-8 text-base md:text-lg 2xl:text-2xl font-bold">
        <span>DAYS</span>
        <span>HRS</span>
        <span>MIN</span>
        <span>SEC</span>
      </div>
    </div>
  );
};

export default Countdown;
