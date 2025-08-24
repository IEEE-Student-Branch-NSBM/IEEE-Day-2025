"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const leftDivRef = useRef<HTMLDivElement>(null);
    const rightDivRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(leftDivRef.current, {
            x: "-100%",
            opacity: 0
        }, {
            x: "0%",
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "bottom 20%",
                scrub: 2,
                toggleActions: "play none none reverse"
            }
        });
        gsap.fromTo(rightDivRef.current, {
            x: "100%",
            opacity: 0
        }, {
            x: "0%",
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "bottom 20%",
                scrub: 2,
                toggleActions: "play none none reverse"
            }
        })
    })

    return (
        <div ref={containerRef} className='w-full relative z-50 flex gap-10 h-dvh items-center justify-center'>
            <div ref={leftDivRef} className='bg-white/5 backdrop-blur-lg h-200 w-full flex flex-col items-center justify-center p-10 text-white'>
                <div className="text-3xl font-bold mb-10">What is IEEE?</div>
                <div className="text-justify text-xl ">
                    IEEE Student Branch of NSBM Green University is on a mission to
                    inspire and empower students in 2024! We’re pushing the boundaries
                    of innovation and personal growth, collaborating with the IEEE
                    Computer Society and IEEE Women in Engineering groups. Join us as
                    we create an energetic tech community, unleash potential, and pave
                    the way for future leaders in technology.
                </div>

            </div>
            <div ref={rightDivRef} className='bg-white/5 backdrop-blur-lg h-200 w-full flex flex-col items-center justify-center p-10 text-white'>
                <div className="text-3xl font-bold mb-10">What is IEEE Day?</div>
                <div className="text-justify text-xl ">
                    Since 2018, IEEE Day has united the community with events starting
                    with lectures on IoT and Data-Driven Civilization. In 2019 and
                    2020, it transitioned to a virtual format due to the pandemic. In
                    2021, the focus was on Cyber Security and Digital Wellbeing, while
                    2022 and 2023 emphasized AI, AR, VR, and IEEE's mission for a
                    better tomorrow.
                </div>

            </div>
        </div>
    )
}

export default About