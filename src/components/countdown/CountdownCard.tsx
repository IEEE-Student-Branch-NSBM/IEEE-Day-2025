"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

type CountdownCardProps = {
  time: number;
  type: string;
};

const CountdownCard: React.FC<CountdownCardProps> = ({ time, type }) => {
  const numRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        numRef.current,
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3, ease: "power1.out" }
      );
    },
    { dependencies: [time] }
  );

  return (
    <div className="countdown-card group w-full max-w-[120px] sm:max-w-none mx-auto">
      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-900/40 via-orange-800/30 to-amber-700/40 backdrop-blur-sm border border-amber-600/30 shadow-lg sm:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 touch-manipulation">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 pointer-events-none"></div>

        <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-400/5 via-transparent to-orange-600/5 pointer-events-none"></div>

        <div className="relative p-3 sm:p-4 md:p-6 lg:p-8 text-center min-h-[90px] sm:min-h-[120px] md:min-h-[140px] flex flex-col justify-center">
          <div className="mb-1 sm:mb-2">
            <span
              ref={numRef}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron bg-gradient-to-b from-amber-100 via-orange-100 to-amber-200 text-transparent bg-clip-text drop-shadow-lg leading-none"
            >
              {time.toString().padStart(2, "0")}
            </span>
          </div>

          <div className="space-y-0.5 sm:space-y-1">
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold font-orbitron text-amber-100/90 tracking-wider leading-tight">
              {type}
            </p>
            <p className="text-[10px] xs:text-xs sm:text-sm text-amber-200/70 font-medium tracking-wide leading-tight">
              until Launch
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>

        <div
          className="absolute inset-0 min-h-[44px] sm:min-h-0"
          aria-hidden="true"
        ></div>
      </div>
    </div>
  );
};

export default CountdownCard;
