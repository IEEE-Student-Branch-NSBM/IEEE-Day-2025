"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Bebas_Neue } from "next/font/google";

// Import Bebas Neue font
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

function Memories() {
  const [currentSection, setCurrentSection] = useState(1);
  const [validImages2023, setValidImages2023] = useState<string[]>([]);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const titlesRef = useRef<HTMLHeadingElement[]>([]);

  const imagesSection2 = [
    "/memories/2023/image1.jpg",
    "/memories/2023/image2.jpg",
    "/memories/2023/image3.jpg",
    "/memories/2023/image4.jpg",
    "/memories/2023/image5.jpg",
    "/memories/2023/image10.jpg",
    "/memories/2023/image11.jpg",
    "/memories/2023/image12.jpg",
    "/memories/2023/image13.jpg",
    "/memories/2023/image14.jpg",
    "/memories/2023/image15.jpg",
    "/memories/2023/image16.jpg",
    "/memories/2023/image17.jpg",
    "/memories/2023/image18.jpg",
  ];

  const imagesSection3 = [
    "/memories/2024/day7.jpg",
    "/memories/2024/day2.jpg",
    "/memories/2024/day3.jpg",
    "/memories/2024/day4.jpg",
    "/memories/2024/day5.jpg",
    "/memories/2024/day6.jpg",
    "/memories/2024/day1.jpg",
    "/memories/2024/day9.jpg",
  ];

  // Filter out invalid/broken images for 2023
  useEffect(() => {
    const checkImages = async () => {
      const promises = imagesSection2.map(
        (src) =>
          new Promise<string | null>((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(src);
            img.onerror = () => resolve(null);
          })
      );

      const results = await Promise.all(promises);
      setValidImages2023(results.filter((src): src is string => src !== null));
    };

    checkImages();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;

      if (scrollY < height) {
        setCurrentSection(2);
      } else if (scrollY >= height && scrollY < height * 2) {
        setCurrentSection(3);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate images and titles when section changes
  useEffect(() => {
    // Images animation
    if (imagesRef.current.length > 0) {
      gsap.fromTo(
        imagesRef.current,
        { opacity: 0, scale: 0.6, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "back.out(1.7)" }
      );
    }

    // Titles animation
    if (titlesRef.current.length > 0) {
      const titleIndex = currentSection - 2; // 2023 = index 0, 2024 = index 1
      const title = titlesRef.current[titleIndex];
      if (title) {
        gsap.fromTo(
          title,
          { y: 50, opacity: 0, scale: 0.8, textShadow: "0 0 0px rgba(255,0,150,0)" },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
          }
        );
      }
    }
  }, [currentSection]);

  const renderImages = (images: string[]) => {
    return images.map((src, i) => {
      const top = 10 + Math.random() * 50;
      const left = 10 + Math.random() * 50;
      const rotation = Math.random() * 20 - 10;
      const zIndex = Math.floor(Math.random() * 10);

      return (
        <img
          key={i}
          ref={(el) => {
            if (el) imagesRef.current[i] = el;
          }}
          src={src}
          alt={`memory-${i}`}
          className="absolute object-cover rounded-lg shadow-md border- border-white
                     w-2/5 sm:w-1/3 md:w-1/4 lg:w-1/5 h-auto"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            transform: `rotate(${rotation}deg)`,
            zIndex: zIndex,
          }}
        />
      );
    });
  };

  const renderSection = (
    title: string,
    description: string,
    images: string[],
    bgColor: string
  ) => (
    <section className="h-screen flex justify-center items-center sticky top-0">
      <div
        className={`w-11/12 sm:w-4/5 max-w-[1400px] h-[400px] sm:h-[500px] md:h-[600px] mx-auto relative overflow-hidden rounded-2xl ${bgColor}`}
      >
        <div className="absolute inset-0 z-10">{renderImages(images)}</div>

        <div className="relative z-20 flex flex-col p-6 text-center sm:text-left">
          <h1
            ref={(el) => {
              if (el) titlesRef.current.push(el);
            }}
            className={`${bebasNeue.className} text-4xl sm:text-4xl md:text-5xl font-extrabold mb-2
                       text-transparent bg-clip-text bg-gradient-to-r 
                       from-black
                       transition-transform duration-300 ease-in-out hover:scale-105`}

          >
            {title}
          </h1>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </section>
  );

  return (
    <div className="relative">
      {renderSection("IEEE Day 2023!", "Celebrating Innovation & Unity", validImages2023, "bg-teal-50")}
      {renderSection("IEEE Day 2024!", "Building the Future Together", imagesSection3, "bg-teal-50")}
    </div>
  );
}

export default Memories;
