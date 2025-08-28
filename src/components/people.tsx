"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MainTitle, SubTitle } from "./titles";

gsap.registerPlugin(ScrollTrigger);

const People = () => {
  const [currentPerson, setCurrentPerson] = useState(1);
  const [isShown, setIsShown] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const people = [
    {
      name: "Sithum Sankajith",
      contribution: "Chair Person",
      image: null,
    },
    {
      name: "Udara Rathnapala",
      contribution: "Program Team Lead",
      image: null,
    },
    {
      name: "Akash De Silva",
      contribution: "Development Team Lead",
      image: null,
    },
    {
      name: "Benoli Siriwardana",
      contribution: "Publicity Team Lead",
      image: null,
    },
    {
      name: "Isunima Fernando",
      contribution: "Secretary Team Lead",
      image: null,
    },
  ];

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

    gsap.fromTo(
      cardsContainerRef.current,
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, ...slideAnimationConfig }
    );

    const cards = cardsContainerRef.current?.children;
    if (cards) {
      Array.from(cards).forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    }
  }, [currentPerson]);

  return (
    <div ref={containerRef} className="relative text-white mb-20 z-50">
      <MainTitle>People</MainTitle>
      <SubTitle>
        <div>Organizing a event of this scale is no small feet,</div>
        <div>
          A lot of people spent their time to make this event a success,
        </div>
        <div>These are some of them.</div>
      </SubTitle>
      <div
        ref={cardsContainerRef}
        className="flex !h-[600px] gap-4 overflow-hidden"
      >
        {people.map((person, index) =>
          currentPerson === index ? (
            <div
              key={index}
              className="relative bg-white/5 w-4xl flex flex-col items-baseline justify-between"
            >
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                {person.image && (
                  <>
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        boxShadow: "inset 0 0 200px 50px rgba(0,0,0,0.6)",
                      }}
                    ></div>
                  </>
                )}
              </div>
              <div className="absolute top-4 left-4 text-3xl">
                {people[currentPerson].name}
              </div>
              <div className="absolute bottom-4 left-4 text-xl">
                {people[currentPerson].contribution}
              </div>
            </div>
          ) : (
            <div
              key={index}
              className="bg-white/5 w-40 cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={() => {
                setCurrentPerson(index);
                setIsShown(!isShown);
              }}
            >
              <div className="flex items-center justify-center text-2xl text-center rotate-90 h-full w-full whitespace-nowrap">
                {person.name}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default People;
