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
      time: "8:30 am - 10:00 am",
      details: "The opening ceremony features registration, an oil lamp lighting, welcome and guest speeches, cake cutting, an introduction video, and concludes with a group photo, fostering a warm and engaging atmosphere.",
    },
    {
      id: 2,
      name: "Panel Discussion",
      time: "10:00 am - 1:00 pm",
      details: "The panel discussion \"AI Beyond the Hype: Opportunities and Risks in 2025\" will cover AI's daily integration, benefits like automation and healthcare, and challenges such as privacy and ethics. Speakers will be announced soon."
    },
    {
      id: 3,
      name: "Track Sessions + Lunch Break",
      time: "01:00 pm - 3:00 pm",
      details: "The sessions will cover Quantum Computing, AI in Data Science, Industry 4.0, Cybersecurity, and Cloud Computing, focusing on applications, challenges, and career opportunities. Speakers will be announced soon."
    },
  ];

  // const flow = [
  //   {
  //     id: 1,
  //     name: "Registrations + Introduction",
  //     time: "8:30 am - 10:30 am",
  //     details: "",
  //   },
  //   {
  //     id: 2,
  //     name: "Panel Discussion",
  //     time: "1:00 pm - 3:00 pm",
  //     details: {
  //       name: " AI Beyond the Hype",
  //       description: "The panel discussion \"AI Beyond the Hype: Opportunities and Risks in 2025\" will explore AI's integration into daily life and IT, addressing benefits like automation and healthcare, while also highlighting challenges such as privacy, misinformation, and ethical concerns."
  //     }
  //   },
  //   {
  //     id: 3,
  //     name: "Track Sessions + Lunch Break",
  //     time: "10:35 am - 1:00 pm",
  //     sessions: [
  //       {
  //         name: "Quantum Computing",
  //         description: "The session covers quantum computing fundamentals, algorithms, hardware, challenges, and applications, emphasizing its transformative potential in technology.",
  //       },
  //       {
  //         name: "Data Science & Analytics with AI",
  //         description: "The session covers AI integration in data analytics, essential tools, real-world applications, and career opportunities in data science.",
  //       },
  //       {
  //         name: "AI & Robotics in Industry 4.0",
  //         description: "Industry 4.0 focuses on AI, robotics, and IoT in manufacturing, highlighting career opportunities and smart factory demonstrations.",
  //       },
  //       {
  //         name: "AI in Cybersecurity",
  //         description: "AI enhances cybersecurity by detecting anomalies, predicting attacks, automating defenses, and addressing challenges like data privacy and bias.",
  //       },
  //       {
  //         name: "AI in Cloud Computing",
  //         description: "The session explores AI's role in cloud computing, focusing on infrastructure, optimization, challenges, and emerging trends in intelligent applications."
  //       }
  //     ]
  //   },
  // ];

  useGSAP(() => {
    cardRefs.current.forEach((card, i) => {
      if (!card) return;

      gsap.from(
        card,
        {
          opacity: 0,
          scale: 0.2,
          ease: "none",
          duration: 0.5,
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
      <div className="text-2xl sm:text-2xl md:text-4xl mb-2 sm:mb-4 md:mb-4">Flow</div>
      <div className="md:max-w-3xl text-base sm:text-base md:text-xl mb-4 sm:mb-4 md:mb-4">
        We’ve lined up an exciting program for the day.
        Here’s a quick look at what’s in store.
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 text-center gap-4 sm:gap-4 md:gap-6 w-full">
          {flow.map((flowItem, i) => (
            <div key={flowItem.id}
              className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-lg h-80 sm:h-80 md:h-100 w-full p-4"
              ref={(el) => { cardRefs.current[i] = el; }}
            >
              <div>
                <div className="text-lg sm:text-lg md:text-xl font-semibold mb-2">{flowItem.name}</div>
                <div className="text-xs sm:text-xs md:text-sm">{flowItem.time}</div>
                <div className="text-base sm:text-base md:text-lg text-center p-2 sm:p-2 md:p-6">{flowItem.details}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flow;