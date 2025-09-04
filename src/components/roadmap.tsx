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
      className="relative z-50 flex flex-col overflow-hidden text-white"
    >
      <div className="text-4xl mb-4">Roadmap</div>
      <div className="max-w-3xl text-xl mb-4">
        <div>
        We have planned some wonderful experiences for you,
        </div>
        <div>
        These are some of them.
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-22">
        <div className="w-3/7 h-150 flex">
          <div className="w-full flex items-center justify-center">
            {flow.slice(0, 2).map((flowItem, i) => (
              <div
                key={flowItem.id}
                ref={(el) => { cardRefs.current[i] = el; }}
                className={`absolute ${i === 0 ? "z-10" : "z-5"}`}
              >
                <div className="w-xs h-120 bg-white/5 backdrop-blur-lg flex flex-col items-center justify-center">
                  <div className="">
                  </div>
                  <div className="text-xl font-semibold mb-2">{flowItem.name}</div>
                  <div className="text-sm">{flowItem.time}</div>
                  <div className="text-lg text-center p-6">{flowItem.details}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-3/7 h-150 flex">
          <div className="w-full flex items-center justify-center">
            {flow.slice(2, 4).map((flowItem, i) => (
              <div
                key={flowItem.id}
                ref={(el) => { cardRefs.current[i + 2] = el; }}
                className={`absolute ${i === 0 ? "z-10" : "z-5"}`}
              >
                <div className="w-xs h-120 bg-white/5 backdrop-blur-lg flex flex-col items-center justify-center">
                  <div className="">
                  </div>
                  <div className="text-xl font-semibold mb-2">{flowItem.name}</div>
                  <div className="text-sm">{flowItem.time}</div>
                  <div className="text-lg text-center p-6">{flowItem.details}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
