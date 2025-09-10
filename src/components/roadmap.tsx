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
          x: i % 2 === 0 ? -170 : 170,
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
      id="roadmap"
      ref={containerRef}
      className="relative z-50 flex flex-col overflow-hidden text-white px-4 py-12 "
    >
      <h2 className="text-4xl font-bold mb-6 text-center">Roadmap</h2>
      <p className="max-w-3xl text-xl text-center mb-12">
        We have planned some wonderful experiences for you. These are some of them.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-5xl">
        {flow.map((flowItem, i) => (
          <div
            key={flowItem.id}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center justify-center transition-transform duration-500"
          >
            <div className="text-xl font-semibold mb-2 text-center">
              {flowItem.name}
            </div>
            <div className="text-sm mb-4 text-center">{flowItem.time}</div>
            {flowItem.details && (
              <div className="text-lg text-center">{flowItem.details}</div>
            )}
          </div>
        ))}
      </div> 
    </section>
  );
};

export default RoadMap;












