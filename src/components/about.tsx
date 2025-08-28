"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { MainTitle, SubTitle } from "./titles";

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
        scrub: 1,
        toggleActions: "play reverse play reverse",
      },
    };

    const textAnimationConfig = {
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
      scrollTrigger: {
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
    };

    const textSplits = [
      { ref: leftTextRef, split: null as any },
      { ref: rightTextRef, split: null as any },
    ];

    textSplits.forEach((item) => {
      item.split = SplitText.create(item.ref.current, { type: "words" });
    });

    const slideAnimations = [
      { ref: leftDivRef, fromX: "-100%" },
      { ref: rightDivRef, fromX: "100%" },
    ];

    slideAnimations.forEach(({ ref, fromX }) => {
      gsap.fromTo(
        ref.current,
        { x: fromX, opacity: 0 },
        { x: "0%", opacity: 1, ...slideAnimationConfig }
      );
    });

    textSplits.forEach(({ split }, index) => {
      const triggerRef = index === 0 ? leftDivRef : rightDivRef;
      gsap.from(split.words, {
        ...textAnimationConfig,
        scrollTrigger: {
          ...textAnimationConfig.scrollTrigger,
          trigger: triggerRef.current,
        },
      });
    });

    return () => {
      textSplits.forEach(({ split }) => split.revert());
    };
  }, []);

  return (
    <div className="relative z-50 mb-20 text-white">
      <MainTitle>About</MainTitle>
      <SubTitle>
        <div>Maybe you're wondereing what all of these means,</div>
        <div>Don't worry we got you.</div>
      </SubTitle>
      <div
        ref={containerRef}
        className="w-full flex gap-10 items-center justify-center"
      >
        <div
          ref={leftDivRef}
          className="bg-white/5 backdrop-blur-lg h-160 w-full flex flex-col items-center justify-center p-10"
        >
          <div className="text-4xl mb-4">What is IEEE?</div>
          <div ref={leftTextRef} className="text-justify text-xl ">
            IEEE Student Branch of NSBM Green University is on a mission to
            inspire and empower students in 2024! We're pushing the boundaries
            of innovation and personal growth, collaborating with the IEEE
            Computer Society and IEEE Women in Engineering groups. Join us as we
            create an energetic tech community, unleash potential, and pave the
            way for future leaders in technology.
          </div>
        </div>
        <div
          ref={rightDivRef}
          className="bg-white/5 backdrop-blur-lg h-160 w-full flex flex-col items-center justify-center p-10"
        >
          <div className="text-4xl mb-4">What is IEEE Day?</div>
          <div ref={rightTextRef} className="text-justify text-xl ">
            Since 2018, IEEE Day has united the community with events starting
            with lectures on IoT and Data-Driven Civilization. In 2019 and 2020,
            it transitioned to a virtual format due to the pandemic. In 2021,
            the focus was on Cyber Security and Digital Wellbeing, while 2022
            and 2023 emphasized AI, AR, VR, and IEEE's mission for a better
            tomorrow.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
