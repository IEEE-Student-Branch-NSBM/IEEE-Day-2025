"use client";

import { useState, useEffect } from "react";

const Countdown = () => {
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div>
                    <h1 className="text-3xl sm:text-3xl md:text-6xl font-semibold">
                        {formatTime(timeLeft)}
                    </h1>
                    <div className="text-center text-base sm:text-base md:text-xl">
                        until Oct 07, 2025
                    </div>
                </div>
                <div className="flex flex-row justify-center gap-2 sm:gap-2 md:gap-8 text-base sm:text-base md:text-2xl font-bold">
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