"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import image1 from "../../public/ieee-day-2022-1.jpg"
import image2 from "../../public/ieee-day-2022-2.jpg"
import image3 from "../../public/ieee-day-2022-3.jpg"
import image4 from "../../public/ieee-day-2023-1.jpg"
import image5 from "../../public/ieee-day-2023-2.jpg"
import image6 from "../../public/ieee-day-2024-1.jpg"
import image7 from "../../public/ieee-day-2024-2.jpg"

gsap.registerPlugin(ScrollTrigger);

function Memories() {
  const containerRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLImageElement>(null);
  const image2Ref = useRef<HTMLImageElement>(null);
  const image3Ref = useRef<HTMLImageElement>(null);
  const image5Ref = useRef<HTMLImageElement>(null);
  const image6Ref = useRef<HTMLImageElement>(null);
  const image7Ref = useRef<HTMLImageElement>(null);


  useGSAP(() => {
    const spreadAnimationConfig = {
      ease: "power2.out",
      stagger: 0.4,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
      }
    };

    const images = [
      { ref: image1Ref, x: 200, y: 200, rotation: 10 },
      { ref: image2Ref, x: -200, y: 200, rotation: -10 },
      { ref: image3Ref, x: 200, y: -200, rotation: 5 },
      { ref: image5Ref, x: -200, y: -200, rotation: -5 },
      { ref: image6Ref, x: 200, y: 0, rotation: 15 },
      { ref: image7Ref, x: -200, y: 0, rotation: -15 },
    ]

    images.forEach(({ ref, x, y }) => {
      gsap.fromTo(ref.current, { x: y, y: x, ...spreadAnimationConfig }, { x: 0, y: 0, ...spreadAnimationConfig })
    })
  }, []);
  return (
    <section id="memories" className="relative z-50 mb-10 sm:mb-10 md:mb-0 flex flex-col text-white text-center sm:text-center md:text-left">

      <div className="text-3xl sm:text-3xl md:text-4xl mb-2 sm:mb-4 md:mb-4">Memories</div>
      <div className="md:max-w-3xl text-lg sm:text-lg md:text-xl mb-4 sm:mb-4 md:mb-4">
        <div>
          This is not the first time we are doing this,
        </div>
        <div>
          Here are some of the wonderful memories from our past events.
        </div>
      </div>
      <div
        ref={containerRef}
        className="hidden sm:hidden md:block relative h-140 sm:h-140 md:h-180 w-full mx-auto bg-white/5 md:my-10"
      >
        <Image ref={image1Ref} src={image1} alt="" height={540} width={540} className="absolute top-0 left-0" />
        <Image ref={image2Ref} src={image2} alt="" height={540} width={540} className="absolute z-0 bottom-0 left-0" />
        <Image ref={image3Ref} src={image3} alt="" height={540} width={540} className="absolute z-0 top-0 right-0" />
        <Image src={image4} alt="" height={540} width={540} className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <Image ref={image5Ref} src={image5} alt="" height={540} width={540} className="absolute bottom-0 right-0" />
        <Image ref={image6Ref} src={image6} alt="" height={540} width={540} className="absolute -top-10 left-1/2 -translate-x-1/2" />
        <Image ref={image7Ref} src={image7} alt="" height={540} width={540} className="absolute -bottom-20 left-1/2 -translate-x-1/2" />
      </div>
      <div className="md:hidden grid grid-cols-2">
        <Image src={image1} alt="" height={540} width={540} />
        <Image src={image2} alt="" height={540} width={540} />
        <Image src={image3} alt="" height={540} width={540} />
        <Image src={image4} alt="" height={540} width={540} />
        <Image src={image6} alt="" height={540} width={540} />
        <Image src={image7} alt="" height={540} width={540} />
      </div>
    </section>
  );
}

export default Memories;