"use client";
import { useState, useEffect } from "react";

function Memories() {
  const [currentSection, setCurrentSection] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;

      if (scrollY < height) {
        setCurrentSection(1);
      } else if (scrollY >= height && scrollY < height * 2) {
        setCurrentSection(2);
      } else {
        setCurrentSection(3);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Memories wrapper with 3 full-height sections */}
      <div className="relative">
        {/* Section 1 */}
        <section className="h-screen flex justify-center items-center sticky top-0">
          <div className="w-[1200px] h-[500px] bg-blue-200 rounded-2xl shadow-lg flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-4">Section 1</h1>
            <p className="text-lg">This is the first memory card.</p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="h-screen flex justify-center items-center sticky top-0">
          <div className="w-[1200px] h-[500px] bg-pink-200 rounded-2xl shadow-lg flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-4">Section 2</h1>
            <p className="text-lg">This is the second memory card.</p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="h-screen flex justify-center items-center sticky top-0">
          <div className="w-[1200px] h-[500px] bg-purple-200 rounded-2xl shadow-lg flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-4">Section 3</h1>
            <p className="text-lg">This is the third memory card.</p>
          </div>
        </section>
      </div>

     
    </div>
  );
}

export default Memories;
