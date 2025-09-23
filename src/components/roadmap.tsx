"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Flow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const flow = [
    {
      id: 1,
      name: "Registrations + Introduction",
      time: "8:30 am - 10:30 am",
      details: "",
    },
    {
      id: 2,
      name: "Track Sessions + Lunch Break",
      time: "10:35 am - 1:00 pm",
      details: ""
    },
    {
      id: 3,
      name: "Panel Discussion",
      time: "1:00 pm - 3:00 pm",
      details: ""
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
      className="relative z-50 mb-16 sm:mb-20 md:mb-32 text-white text-center sm:text-center md:text-left"
    >
      <div className="text-xl sm:text-2xl md:text-4xl mb-2 sm:mb-4 md:mb-4 font-semibold">Flow</div>
      <div className="max-w-full md:max-w-3xl text-sm sm:text-base md:text-xl mb-4 sm:mb-6 md:mb-8 opacity-90">
        We’ve lined up an exciting program for the day.
        Here’s a quick look at what’s in store.
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center gap-4 sm:gap-5 md:gap-6 w-full">
          {flow.map((flowItem, i) => (
            <div key={flowItem.id}
              className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 h-64 sm:h-72 md:h-80 lg:h-96 w-full p-4 sm:p-6 md:p-8 lg:p-10"
              ref={(el) => { cardRefs.current[i] = el; }}
            >
              <div>
                <div className="text-base sm:text-lg md:text-xl font-semibold mb-2">{flowItem.name}</div>
                <div className="text-xs sm:text-sm md:text-base opacity-80">{flowItem.time}</div>
                <div className="text-sm sm:text-base md:text-lg text-center p-2 sm:p-3 md:p-4 lg:p-6">{flowItem.details}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flow;