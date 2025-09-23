"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const leftDivRef = useRef<HTMLDivElement>(null);
    const rightDivRef = useRef<HTMLDivElement>(null);
    const leftTextRef = useRef<HTMLDivElement>(null);
    const rightTextRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const slideAnimationConfig = {
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play reverse play reverse"
            }
        };

        const textSplits = [
            { ref: leftTextRef, split: null as any },
            { ref: rightTextRef, split: null as any }
        ];

        textSplits.forEach(item => {
            item.split = SplitText.create(item.ref.current, { type: "chars" });
        });

        const slideAnimations = [
            { ref: leftDivRef, fromX: "-100%" },
            { ref: rightDivRef, fromX: "100%" }
        ];

        slideAnimations.forEach(({ ref, fromX }) => {
            gsap.fromTo(ref.current,
                { transform: `translateX(${fromX})`, opacity: 0 },
                { transform: "translateX(0)", opacity: 1, ...slideAnimationConfig }
            );
        });

        // Typing animation for text
        textSplits.forEach(({ split }, index) => {
            const triggerRef = index === 0 ? leftDivRef : rightDivRef;

            // Initially hide all characters
            gsap.set(split.chars, { opacity: 0 });

            // Create typing animation
            gsap.to(split.chars, {
                opacity: 1,
                duration: 0.02,
                stagger: 0.02,
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top 70%",
                    end: "bottom 30%",
                    toggleActions: "play reverse play reverse"
                }
            });
        });

        return () => {
            textSplits.forEach(({ split }) => split.revert());
        };
    }, []);

    return (
        <section id="about" className="relative z-50 mb-16 sm:mb-20 md:mb-32 text-white text-center sm:text-center md:text-left">
            <div className="text-xl sm:text-2xl md:text-4xl mb-2 sm:mb-4 md:mb-4 font-semibold">About</div>
            <div className="max-w-full md:max-w-3xl text-sm sm:text-base md:text-xl mb-4 sm:mb-6 md:mb-8 opacity-90">
                Wondering what this is all about?
                We’ve got you covered.
            </div>
            <div ref={containerRef} className='flex flex-col sm:flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10'>
                <div ref={leftDivRef} className='bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 w-full flex flex-col justify-start p-4 sm:p-6 md:p-8 lg:p-10 hover:bg-white/10 transition-all duration-300'>
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-3 md:mb-4 font-semibold">Description</div>
                    <div ref={leftTextRef} className="text-justify text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                        IEEE Student Branch of NSBM Green University is on a mission to
                        inspire and empower students in 2025! We're pushing the boundaries
                        of innovation and personal growth, collaborating with the IEEE
                        Computer Society and IEEE Women in Engineering groups. Join us as
                        we create an energetic tech community, unleash potential, and pave
                        the way for future leaders in technology.
                    </div>
                </div>
                <div ref={rightDivRef} className='bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 w-full flex flex-col justify-start p-4 sm:p-6 md:p-8 lg:p-10 hover:bg-white/10 transition-all duration-300'>
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-3 md:mb-4 font-semibold">Our History</div>
                    <div ref={rightTextRef} className="text-justify text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                        Since 2018, IEEE Day has united the community with events starting
                        with lectures on IoT and Data-Driven Civilization. In 2019 and
                        2020, it transitioned to a virtual format due to the pandemic. In
                        2021, the focus was on Cyber Security and Digital Wellbeing, while
                        2022 and 2023 emphasized AI, AR, VR, and IEEE's mission for a
                        better tomorrow.
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About