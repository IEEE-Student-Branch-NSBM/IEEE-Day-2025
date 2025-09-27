"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Countdown = () => {
    const countdownRef = useRef<HTMLDivElement>(null);

    const eventDate = new Date("2025-10-07T00:00:00Z");

    const [timeLeft, setTimeLeft] = useState(() => {
        const now = new Date();
        return Math.max(
            0,
            Math.floor((now.getTime() - eventDate.getTime()) / 1000)
        );
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setTimeLeft(
                Math.max(0, Math.floor((eventDate.getTime() - now.getTime()) / 1000))
            );
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useGSAP(() => {
        gsap.from(countdownRef.current, {
            opacity: 0,
            delay: 3,
            duration: 2,
            ease: "none",
        })
    }, []);

    const formatTime = (time: number) => {
        const days = Math.floor(time / (24 * 3600));
        const hours = Math.floor((time % (24 * 3600)) / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        return (
            <div className="text-center">
                <div>
                    <span>{String(days).padStart(2, "0")}</span>:
                    <span>{String(hours).padStart(2, "0")}</span>:
                    <span>{String(minutes).padStart(2, "0")}</span>:
                    <span>{String(seconds).padStart(2, "0")}</span>
                </div>
            </div>
        );
    };

    return (
        <div className="relative text-white h-screen">
            <div ref={countdownRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div>
                    <h1 className="text-2xl sm:text-2xl md:text-4xl 2xl:text-6xl font-semibold">
                        {formatTime(timeLeft)}
                    </h1>
                    <div className="text-center text-sm sm:text-sm md:text-lg 2xl:text-xl">
                        until Oct 07, 2025
                    </div>
                </div>
                <div className="flex flex-row justify-center gap-1 sm:gap-1 md:gap-4 2xl:gap-8 text-base sm:text-base md:text-lg 2xl:text-2xl font-bold">
                    <span>DAYS</span>
                    <span>HRS</span>
                    <span>MIN</span>
                    <span>SEC</span>
                </div>
            </div>

        </div>
    )
}

export default Countdown