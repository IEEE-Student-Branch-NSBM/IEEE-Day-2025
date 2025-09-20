"use client"

import { useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import geeth from "../../public/people/chair.png"
import jayasanka from "../../public/people/vice-chair.png"
import sithum from "../../public/people/ambassador.png"

gsap.registerPlugin(ScrollTrigger);

const People = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const people = [
        {
            name: "Geeth Indurawa",
            contribution:
                "Chair - IEEE Student Branch NSBM",
            image: geeth,
            animations: {
                y: 400,
            }
        },
        {
            name: "Jayasanka Ariyarathna",
            contribution:
                "Vice Chair - IEEE Student Branch NSBM",
            image: jayasanka,
            animations: {
                y: -400,
            }
        },
        {
            name: "Sithum Sankajith",
            contribution:
                "Ambassador - IEEE Day 2025 NSBM",
            image: sithum,
            animations: {
                y: 400,
            }
        },
    ];

    useGSAP(() => {
        cardRefs.current.forEach((card, i) => {
            if (!card) return;

            gsap.from(
                card,
                {
                    ...people[i].animations,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse",
                    }
                });
        });
    }, []);

    return (
        <section id="people" ref={containerRef} className="relative z-50 mb-10 sm:mb-10 md:mb-20 text-white text-center sm:text-center md:text-left">
            <div className="text-3xl sm:text-3xl md:text-4xl mb-2 sm:mb-4 md:mb-4">People</div>
            <div className="md:max-w-3xl text-lg sm:text-lg md:text-xl mb-4 sm:mb-4 md:mb-4">
                <div>
                    Organizing a event of this scale is no small feet,
                </div>
                <div>
                    A lot of people spent their time to make this event a success,
                </div>
                <div>
                    These are some of them.
                </div>
            </div>
            <div className="flex flex-col items-center justify-center ">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3  gap-4 sm:gap-4 md:gap-10">
                    {people.map((person, index) => <div key={index}>
                        <div ref={(element) => { cardRefs.current[index] = element }} className="relative w-xs sm:w-xs md:w-sm h-80 sm:h-80 md:h-120">
                            <Image
                                src={person.image.src}
                                alt=""
                                fill
                                className="brightness-90 object-cover"
                            />
                            <div className="absolute inset-0 flex flex-col self-end p-4 z-10 text-center bg-black/20 backdrop-blur-lg">
                                <div className="text-lg sm:text-lg md:text-2xl">{person.name}</div>
                                <div className="text-sm sm:text-sm md:text-base">{person.contribution}</div>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </section>
    );
};

export default People;