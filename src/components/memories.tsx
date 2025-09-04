"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

function Memories() {
  const [isMounted, setIsMounted] = useState(false);

  const images = [
    "/memories/2023/image1.jpg",
    "/memories/2023/image2.jpg",
    "/memories/2023/image3.jpg",
    "/memories/2023/image4.jpg",
    "/memories/2023/image5.jpg",
    "/memories/2023/image6.jpg",
    "/memories/2023/image7.jpg",
    "/memories/2023/image8.jpg",
    "/memories/2024/day1.jpg",
    "/memories/2024/day2.jpg",
    "/memories/2024/day3.jpg",
    "/memories/2024/day4.jpg",
    "/memories/2024/day5.jpg",
    "/memories/2024/day6.jpg",
    "/memories/2024/day7.jpg",
    "/memories/2024/day9.jpg",
  ];

  const imagePositions = [
    { top: 5, left: 0, rotation: -5, zIndex: 3 },
    { top: 15, left: 55, rotation: 8, zIndex: 1 },
    { top: 50, left: 10, rotation: -8, zIndex: 5 },
    { top: 35, left: 65, rotation: 3, zIndex: 2 },
    { top: 60, left: 35, rotation: -3, zIndex: 4 },
    { top: 10, left: 30, rotation: 6, zIndex: 6 },
    { top: 70, left: 5, rotation: -7, zIndex: 1 },
    { top: 25, left: 70, rotation: 4, zIndex: 3 },
    { top: 45, left: 25, rotation: -2, zIndex: 7 },
    { top: 0, left: 50, rotation: 9, zIndex: 2 },
    { top: 65, left: 60, rotation: -4, zIndex: 5 },
    { top: 30, left: 15, rotation: 2, zIndex: 8 },
    { top: 55, left: 75, rotation: 7, zIndex: 4 },
    { top: 20, left: 45, rotation: -6, zIndex: 6 },
    { top: 75, left: 30, rotation: 1, zIndex: 9 },
    { top: 40, left: 0, rotation: 5, zIndex: 3 },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const renderImages = (images: string[]) => {
    if (!isMounted) return null;

    return images.map((src, i) => {
      const position = imagePositions[i] || { top: 50, left: 50, rotation: 0, zIndex: 1 };

      return (
        <Image
          key={i}
          src={src}
          alt={`memory-${i}`}
          width={200}
          height={150}
          className="absolute object-cover"
          style={{
            top: `${position.top}%`,
            left: `${position.left}%`,
            transform: `rotate(${position.rotation}deg)`,
            zIndex: position.zIndex,
            width: '40vw',
            height: 'auto',
            maxWidth: '400px',
            minWidth: '240px',
          }}
        />
      );
    });
  };

  return (
    <section id="memories" className="relative z-50 min-h-screen flex flex-col text-white">

      <div className="text-4xl mb-4">Memories</div>
      <div className="max-w-3xl text-xl mb-4">
        <div>
        This is not the first time we are doing this,
        </div>
        <div>
        Here are some of the wonderful memories from our past events.
        </div>
      </div>
      <div
        className="h-200 w-full mx-auto relative bg-white/5"
      >
        <div className="absolute inset-0 z-10">{renderImages(images)}</div>

        <div className="flex flex-col p-6 text-center">
          <div
            className=""
          >
          </div>
          <div className=""></div>
        </div>
      </div>
    </section>
  );
}

export default Memories;
