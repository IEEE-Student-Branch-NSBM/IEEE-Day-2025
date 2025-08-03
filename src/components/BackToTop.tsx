"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowTurnUp } from "react-icons/fa6";
import { LiaLocationArrowSolid } from "react-icons/lia";
import { TbArrowBigUpLineFilled } from "react-icons/tb";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 md:bottom-10 right-3 md:right-8 flex items-center justify-center z-50 p-2.5 bg-amber-600 hover:bg-amber-700 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:ring-offset-1"
          aria-label="Back to top"
        >
          <FaArrowTurnUp className="text-black" />
        </button>
      )}
    </>
  );
};

export default BackToTop;
