"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

function Memories() {
  const [validImages, setValidImages] = useState<string[]>([]);

  const images = [
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
    "/memories/2024/day7.jpg",
    "/memories/2024/day2.jpg",
    "/memories/2024/day3.jpg",
    "/memories/2024/day4.jpg",
    "/memories/2024/day5.jpg",
    "/memories/2024/day6.jpg",
    "/memories/2024/day1.jpg",
    "/memories/2024/day9.jpg",
  ];

  // Filter out invalid/broken images
  useEffect(() => {
    const checkImages = async () => {
      const promises = images.map(
        (src) =>
          new Promise<string | null>((resolve) => {
            const img = document.createElement('img');
            img.src = src;
            img.onload = () => resolve(src);
            img.onerror = () => resolve(null);
          })
      );

      const results = await Promise.all(promises);
      setValidImages(results.filter((src): src is string => src !== null));
    };

    checkImages();
  }, []);

  const renderImages = (images: string[]) => {
    return images.map((src, i) => {
      const top = 10 + Math.random() * 50;
      const left = 10 + Math.random() * 50;
      const rotation = Math.random() * 20 - 10;
      const zIndex = Math.floor(Math.random() * 10);

      return (
        <Image
          key={i}
          src={src}
          alt={`memory-${i}`}
          width={200}
          height={150}
          className="absolute object-cover"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            transform: `rotate(${rotation}deg)`,
            zIndex: zIndex,
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
    <section id="memories" className="relative z-50 min-h-screen flex justify-center items-center">
      <div
        className="h-200 w-full mx-auto relative overflow-hidden bg-white/5"
      >
        <div className="absolute inset-0 z-10">{renderImages(validImages)}</div>

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
