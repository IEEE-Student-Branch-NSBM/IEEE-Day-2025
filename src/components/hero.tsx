"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import IeeeDayLogoInner from "../../public/logos/ieee-day-logo-inner.svg";
import IeeeDayLogoOuter from "../../public/logos/ieee-day-logo-outer.svg";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.to(imageRef.current, {
      rotate: 720,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      }
    })

    gsap.set(cardsRef.current, { opacity: 0 });

    // Generate random positions for each card, avoiding the center area where logos are and other cards
    const positions: { x: number; y: number }[] = [];
    const minDistance = 20; // Minimum distance between cards (in percentage)

    testimonials.forEach(() => {
      let x: number, y: number;
      let attempts = 0;
      const maxAttempts = 100;

      do {
        x = Math.random() * 80 + 10; // 10% to 90% from left
        y = Math.random() * 80 + 10; // 10% to 90% from top
        attempts++;

        // Check if position is in the center area (logo zone) - make it larger
        // The logos are centered and quite large, so avoid a bigger area
        const inLogoZone = (x >= 25 && x <= 75) && (y >= 30 && y <= 70);

        // Check if position is too close to existing cards
        const tooCloseToOthers = positions.some(pos => {
          const distance = Math.sqrt(Math.pow(x - pos.x, 2) + Math.pow(y - pos.y, 2));
          return distance < minDistance;
        });

        if (!inLogoZone && !tooCloseToOthers) break;

        // If we can't find a good position after many attempts, accept a less ideal one
        if (attempts >= maxAttempts) {
          if (!inLogoZone) break;
        }
      } while (true);

      positions.push({ x, y });
    });

    // Set random positions for all cards
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.set(card, {
          left: `${positions[index].x}%`,
          top: `${positions[index].y}%`,
        });
      }
    });

    // Create timeline for testimonial cards - one at a time
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    let visibleCards: number[] = [];

    testimonials.forEach((_, index) => {
      tl.call(() => {
        // If we have 3 visible cards, remove the oldest one
        if (visibleCards.length >= 3) {
          const oldestCard = visibleCards.shift();
          if (oldestCard !== undefined && cardsRef.current[oldestCard]) {
            gsap.to(cardsRef.current[oldestCard], {
              opacity: 0,
              scale: 0.8,
              duration: 0.6,
              ease: "back.in(1.7)"
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
            ease: "back.out(1.7)"
          });
        }
      })
        .to({}, { duration: 4 }); // Wait 4 seconds before next card
    });

    // At the end, hide all remaining visible cards
    tl.call(() => {
      visibleCards.forEach(cardIndex => {
        if (cardsRef.current[cardIndex]) {
          gsap.to(cardsRef.current[cardIndex], {
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            ease: "back.in(1.7)"
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
    description: "\"Most supporting team I’ve found during my university time. I was lucky enough to interact with seniors to get a professional experience.\"",
  },
  {
    id: 7,
    name: "Tania Wickramaratne",
    description: "\"Very effective and productive.\"",
  },
  ]

  return (
    <div ref={containerRef} className="h-screen overflow-hidden relative z-50">
      <Image
        ref={imageRef}
        src={IeeeDayLogoOuter}
        width={750}
        height={100}
        alt="IEEE Day Logo Outer"
        className="absolute left-1/2 top-1/2 bottom-1/2 -translate-y-1/2 -translate-x-1/2"
      />
      <Image
        src={IeeeDayLogoInner}
        width={400}
        height={100}
        alt="IEEE Day Logo Inner"
        className="absolute left-1/2 top-1/2 bottom-1/2 -translate-y-1/2 -translate-x-1/2"
      />
      {testimonials.map((testimonial, index) =>
        <div
          key={testimonial.id}
          ref={(el) => { cardsRef.current[index] = el }}
          className="absolute bg-white/5 backdrop-blur-lg text-white py-4 px-5 max-w-xs transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="text-center font-bold text-xl mb-2">{testimonial.name}</div>
          <div className="text-center text-lg">{testimonial.description}</div>
        </div>
      )}
    </div>
  );
};

export default Hero;
