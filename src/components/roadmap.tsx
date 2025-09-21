"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Flow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const flow = [
    {
      id: 1,
      name: "Registrations + Introduction",
      time: "8:30 am - 10:30 am",
      details: "Based on the details you provided during registration, we will issue you a passport. After the welcome speech and a brief introduction, we will move on to the track-based sessions."
    },
    {
      id: 2,
      name: "Track Sessions + Lunch Break",
      time: "10:35 am - 1:00 pm",
      details: "There will be five track-based sessions running simultaneously; you will attend the one that matches your registration preference."
    },
    {
      id: 3,
      name: "Panel Discussion",
      time: "1:00 pm - 3:00 pm",
      details: "A panel discussion titled 'AI Beyond the Hype' will be held, and everyone is welcome to join"
    },
    {
      id: 4,
      name: "Entertainment Programme",
      time: "3:30 pm - 5:30 pm",
      details: ""
    },
  ];

  useGSAP(() => {
    cardRefs.current.forEach((card, i) => {
      if (!card) return;

      gsap.from(
        card,
        {
          y: 800,
          opacity: 0,
          duration: 2,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="flow"
      ref={containerRef}
      className="relative z-50 mb-10 sm:mb-10 md:mb-20 text-white text-center sm:text-center md:text-left"
    >
      <div className="text-3xl sm:text-3xl md:text-4xl mb-2 sm:mb-4 md:mb-4">Flow</div>
      <div className="md:max-w-3xl text-lg sm:text-lg md:text-xl mb-4 sm:mb-4 md:mb-4">
        <div>
          We have planned some wonderful experiences for you,
        </div>
        <div>
          These are some of them.
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 text-center gap-4 sm:gap-4 md:gap-8">
          {flow.map((flowItem, i) => (<div key={flowItem.id}
            className={`flex flex-col items-center justify-center bg-white/5 backdrop-blur-lg transition-all duration-500 ease-in-out ${hoveredCard === i ? "h-120 sm:h-120 md:h-140 w-md z-10" : "h-80 sm:h-80 md:h-100 w-xs"} ${hoveredCard !== i && "opacity-50"} ${hoveredCard === null && "opacity-100"}`}
            ref={(el) => { cardRefs.current[i] = el; }}
            onMouseEnter={() => setHoveredCard(i)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div>
              <div className="text-lg sm:text-lg md:text-xl font-semibold mb-2">{flowItem.name}</div>
              <div className="text-xs sm:text-xs md:text-sm">{flowItem.time}</div>
              <div className="text-base sm:text-base md:text-lg text-center p-2 sm:p-2 md:p-6">{flowItem.details}</div>
            </div>
          </div>))}
        </div>
      </div>
    </section>
  );
};

export default Flow;