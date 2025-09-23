"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import IeeeDayLogoInner from "../../public/logos/ieee-day-logo-inner.svg";
import IeeeDayLogoOuter from "../../public/logos/ieee-day-logo-outer.svg";
import Countdown from "./countdown";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const outerImageRef = useRef<HTMLImageElement>(null);
  const innerImageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.to(outerImageRef.current, {
      rotate: 360,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      }
    })

    const innerLogoTl = gsap.timeline({ repeat: -1 });

    innerLogoTl
      .to(innerImageRef.current, {
        opacity: 0,
        duration: 2,
        ease: "none",
        delay: 4
      })
      .to(innerImageRef.current, {
        opacity: 1,
        duration: 2,
        ease: "none",
        delay: 4
      });



    gsap.set(cardsRef.current, { opacity: 0 });

    const desktopPositions: { x: number; y: number }[] = [
      { x: 15, y: 20 },
      { x: 85, y: 15 },
      { x: 10, y: 45 },
      { x: 90, y: 40 },
      { x: 20, y: 75 },
      { x: 80, y: 80 },
      { x: 15, y: 60 },
      { x: 85, y: 65 },
      { x: 12, y: 30 },
      { x: 88, y: 25 },
    ];

    const akshithaPositions: { x: number; y: number }[] = [
      { x: 12, y: 26 },
      { x: 82, y: 28 },
      { x: 16, y: 60 },
      { x: 90, y: 70 },
      { x: 20, y: 86 },
      { x: 14, y: 28 },
      { x: 15, y: 60 },
      { x: 85, y: 65 },
      { x: 12, y: 30 },
      { x: 88, y: 25 },
    ];

    const mobilePositions: { x: number; y: number }[] = [
      { x: 36, y: 12 },
      { x: 78, y: 82 },
      { x: 80, y: 18 },
      { x: 34, y: 88 },
      { x: 34, y: 16 },
      { x: 76, y: 78 },
      { x: 36, y: 8 },
      { x: 75, y: 85 },
      { x: 25, y: 92 },
      { x: 70, y: 15 },
    ];

    let predefinedPositions
    if (window.innerWidth < 768) predefinedPositions = mobilePositions
    else if (window.innerWidth < 1536) predefinedPositions = akshithaPositions
    else predefinedPositions = desktopPositions

    const positions: { x: number; y: number }[] = [];
    testimonials.forEach((_, index) => {
      const positionIndex = index % predefinedPositions.length;
      positions.push(predefinedPositions[positionIndex]);
    });

    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.set(card, {
          left: `${positions[index].x}%`,
          top: `${positions[index].y}%`,
        });
      }
    });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    let visibleCards: number[] = [];
    const maxVisibleCards = window.innerWidth < 768 ? 2 : 3;

    testimonials.forEach((_, index) => {
      tl.call(() => {
        // If we have reached max visible cards, remove the oldest one
        if (visibleCards.length >= maxVisibleCards) {
          const oldestCard = visibleCards.shift();
          if (oldestCard !== undefined && cardsRef.current[oldestCard]) {
            gsap.to(cardsRef.current[oldestCard], {
              opacity: 0,
              scale: 0.8,
              duration: 0.6,
            });
          }
        }

        // Add current card to visible cards
        visibleCards.push(index);

        // Show current card
        if (cardsRef.current[index]) {
          gsap.to(cardsRef.current[index], {
            opacity: 1,
            scale: 1,
            duration: 0.8,
          });
        }
      })
        .to({}, { duration: 4 });
    });

    // At the end, hide all remaining visible cards
    tl.call(() => {
      visibleCards.forEach(cardIndex => {
        if (cardsRef.current[cardIndex]) {
          gsap.to(cardsRef.current[cardIndex], {
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
          });
        }
      });
      visibleCards = [];
    });
  }, { scope: containerRef });

  const testimonials = [{
    id: 1,
    name: "Vinudi Sethna",
    description: "\"Volunteering for IEEE Day 2019 and PES Day 2020 was wonderful - gained knowledge and great friends.\""
  },
  {
    id: 2,
    name: "Denver Shenal",
    description: "\"IEEE was a turning point in my life, providing constant learning and lifelong connections.\"",
  },
  {
    id: 3,
    name: "Pasan Jayawickrama",
    description: "\"IEEE NSBM gave me valuable experiences, skills, and the chance to work with amazing people.\"",
  },
  {
    id: 4,
    name: "Sunali Rambukwella",
    description: "\"IEEE NSBM became my university family - facing challenges together made us united.\"",
  },
  {
    id: 5,
    name: "Shameera Carrim",
    description: "\"A motivating team that inspires juniors to excel in community volunteering and tech connections.\"",
  },
  {
    id: 6,
    name: "Yasmitha Peththanayake",
    description: "\"I was lucky enough to interact with seniors to get a professional experience.\"",
  },
  {
    id: 7,
    name: "Tania Wickramaratne",
    description: "\"Very effective and productive.\"",
  },
  ]

  return (
    <div id="home" ref={containerRef} className="h-screen overflow-hidden relative z-50">
      <Image
        ref={outerImageRef}
        src={IeeeDayLogoOuter}
        alt="IEEE Day Logo Outer"
        height={760}
        width={760}
        className="absolute left-1/2 top-1/2 bottom-1/2 -translate-y-1/2 -translate-x-1/2 scale-90 sm:scale-90 md:scale-80 2xl:scale-100"
      />
      <Countdown />
      <Image
        ref={innerImageRef}
        src={IeeeDayLogoInner}
        alt="IEEE Day Logo Inner"
        height={400}
        width={400}
        className="absolute left-1/2 top-1/2 bottom-1/2 -translate-y-1/2 -translate-x-1/2 scale-[48%] sm:scale-[48%] md:scale-80 2xl:scale-100"
      />
      {testimonials.map((testimonial, index) =>
        <div
          key={testimonial.id}
          ref={(el) => { cardsRef.current[index] = el }}
          className="z-50 absolute bg-white/5 backdrop-blur-lg text-white py-2 sm:py-2 md:py-4 px-3 sm:px-3 md:px-5 max-w-xs transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="text-center font-semibold sm:font-semibold md:font-bold text-base sm:text-base md:text-xl mb-1 sm:mb-1 md:mb-2">{testimonial.name}</div>
          <div className="text-center text-sm sm:text-sm md:text-lg">{testimonial.description}</div>
        </div>
      )}
    </div>
  );
};

export default Hero;
