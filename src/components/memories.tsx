"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import image1 from "../../public/ieee-day-2022-1.jpg"
import image2 from "../../public/ieee-day-2022-2.jpg"
import image3 from "../../public/ieee-day-2022-3.jpg"
import image4 from "../../public/ieee-day-2022-4.jpg"
import image5 from "../../public/ieee-day-2022-5.jpg"
import image6 from "../../public/ieee-day-2023-1.jpg"
import image7 from "../../public/ieee-day-2024-1.jpg"
import image8 from "../../public/ieee-day-2024-2.jpg"

gsap.registerPlugin(ScrollTrigger);

const images = [image1, image2, image3, image5, image6, image4, image7, image8]

function Memories() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    cardRefs.current.forEach((card, i) => {
      if (!card) return;

      const animations = [
        { x: -100, y: 0 },
        { x: 100, y: 0 },
        { x: 0, y: 100 },
        { x: 0, y: -100 },
        { x: 0, y: 0 },
        { x: -80, y: 80 },
        { x: 80, y: -80 },
        { x: 0, y: 0 }
      ];

      gsap.from(card, {
        x: animations[i]?.x || 0,
        y: animations[i]?.y || 100,
        opacity: 0,
        duration: 1,
        delay: i * 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });
    });
  }, []);

  return (
    <section id="memories" className="relative z-50 mb-16 sm:mb-20 md:mb-32 flex flex-col text-white text-center sm:text-center md:text-left">

      <div className="text-xl sm:text-2xl md:text-4xl mb-2 sm:mb-4 md:mb-4 font-semibold">Memories</div>
      <div className="max-w-full md:max-w-3xl text-sm sm:text-base md:text-xl mb-4 sm:mb-6 md:mb-8 opacity-90">
        This isn’t our first time.
        Take a look back at some unforgettable moments from past events.
      </div>
      <div ref={containerRef} className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-4 sm:p-6 md:p-8 lg:p-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
        {images.map((image, i) => (
          <div 
            key={i} 
            ref={(el) => { cardRefs.current[i] = el; }} 
            className="rounded-lg sm:rounded-xl overflow-hidden aspect-square"
          >
            <Image 
              src={image} 
              alt={`IEEE Day memory ${i + 1}`} 
              height={400} 
              width={400} 
              className="hover:scale-95 transition-transform duration-500 cursor-pointer w-full h-full object-cover" 
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Memories;