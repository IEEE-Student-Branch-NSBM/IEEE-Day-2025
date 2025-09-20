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
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // gsap.fromTo(
      //   card,
      //   { opacity: 0, y: 50 },
      //   {
      //     opacity: 1,
      //     y: 0,
      //     duration: 1,
      //     ease: "power3.out",
      //     scrollTrigger: {
      //       trigger: containerRef.current,
      //       start: "top 80%",
      //       end: "bottom 20%",
      //       toggleActions: "play reverse play reverse",
      //     },
      //   }
      // );

      // gsap.fromTo(
      //   card,
      //   { x: 0 },
      //   {
      //     x: i % 2 === 0 ? -170 : 170,
      //     duration: 1,
      //     ease: "power3.out",
      //     scrollTrigger: {
      //       trigger: containerRef.current,
      //       start: "top 80%",
      //       end: "bottom 20%",
      //       toggleActions: "play reverse play reverse",
      //     },
      //   }
      // );
    });
  }, []);

  return (
    <section
      id="flow"
      ref={containerRef}
      className="relative z-50 mb-10 sm:mb-10 md:mb-20 text-white text-center sm:text-center md:text-left overflow-hidden"
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
      {/* <div className="grid grid-cols-4 gap-4 sm:gap-4 md:gap-22 md:mt-24">
        <div className="md:w-3/7 h-80 flex">
          <div className="w-full flex items-center justify-center">
            {flow.slice(0, 2).map((flowItem, i) => (
              <div
                key={flowItem.id}
                ref={(el) => { cardRefs.current[i] = el; }}
                className={`absolute ${i === 0 ? "z-10" : "z-5"}`}
              >
                <div className="w-xs h-80 sm:h-80 md:h-120 bg-white/5 backdrop-blur-lg flex flex-col items-center justify-center">
                  <div className="">
                  </div>
                  <div className="text-lg sm:text-lg md:text-xl font-semibold mb-2">{flowItem.name}</div>
                  <div className="text-xs sm:text-xs md:text-sm">{flowItem.time}</div>
                  <div className="text-base sm:text-base md:text-lg text-center p-2 sm:p-2 md:p-6">{flowItem.details}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-3/7 h-80 flex">
          <div className="w-full flex items-center justify-center">
            {flow.slice(2, 4).map((flowItem, i) => (
              <div
                key={flowItem.id}
                ref={(el) => { cardRefs.current[i + 2] = el; }}
                className={`absolute ${i === 0 ? "z-10" : "z-5"}`}
              >
                <div className="w-xs h-80 sm:h-80 md:h-120 bg-white/5 backdrop-blur-lg flex flex-col items-center justify-center">
                  <div className="">
                  </div>
                  <div className="text-lg sm:text-lg md:text-xl font-semibold mb-2">{flowItem.name}</div>
                  <div className="text-xs sm:text-xs md:text-sm">{flowItem.time}</div>
                  <div className="text-base sm:text-base md:text-lg text-center p-2 sm:p-2 md:p-6">{flowItem.details}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 text-center gap-4 sm:gap-4 md:gap-8">
          {flow.map((flowItem, i) => (<div key={flowItem.id}
            className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-lg h-80 sm:h-80 md:h-100 w-xs sm:w-xs md:w-sm"
            ref={(el) => { cardRefs.current[i] = el; }}
          >
            <div className="text-lg sm:text-lg md:text-xl font-semibold mb-2">{flowItem.name}</div>
            <div className="text-xs sm:text-xs md:text-sm">{flowItem.time}</div>
            <div className="text-base sm:text-base md:text-lg text-center p-2 sm:p-2 md:p-6">{flowItem.details}</div>
          </div>))}
        </div>
      </div>
    </section>
  );
};

export default Flow;