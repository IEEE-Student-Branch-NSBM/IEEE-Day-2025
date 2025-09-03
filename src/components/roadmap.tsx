"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const RoadMap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const flow = [
    {
      id: 1,
      name: "",
      description: "",
    },
    {
      id: 2,
      name: "",
      description: "",
    },
    {
      id: 3,
      name: "",
      description: "",
    },
    {
      id: 4,
      name: "",
      description: "",
    },
  ];

  useGSAP(() => {
    cardRefs.current.forEach((card, i) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        card,
        { x: 0 },
        {
          x: i % 2 === 0 ? -150 : 150,
          duration: 1,
          ease: "power3.out",
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
      ref={containerRef}
      className="flex flex-row items-center justify-center overflow-hidden text-white"
    >
      <div className="w-3/7 h-150 flex mx-auto">
        <div className="w-full flex items-center justify-center">
          {flow.slice(0, 2).map((person, i) => (
            <div
              key={person.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`absolute ${i === 0 ? "z-10" : "z-5"}`}
            >
              <div className="w-sm h-120 bg-white/5 backdrop-blur-lg flex flex-col items-center justify-center">
                <div className="">
                </div>
                <div className="">{person.description}</div>
                <div className="">{person.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-3/7 h-150 flex mx-auto">
        <div className="w-full flex items-center justify-center">
          {flow.slice(2, 4).map((person, i) => (
            <div
              key={person.id}
              ref={(el) => { cardRefs.current[i + 2] = el; }}
              className={`absolute ${i === 0 ? "z-10" : "z-5"}`}
            >
              <div className="w-sm h-120 bg-white/5 backdrop-blur-lg flex flex-col items-center justify-center">
                <div className="">
                </div>
                <div className="">{person.description}</div>
                <div className="">{person.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
