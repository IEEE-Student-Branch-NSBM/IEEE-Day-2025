"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // ✅ correct import
import { useEffect, useRef, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import newlogo from '../../public/logo/newlogo.png';
gsap.registerPlugin(ScrollTrigger); // ✅ register plugin

const links = [
    { name: "Home", href: "home" },
    { name: "Contact Us", href: "contact" },
    { name: "Sponsors", href: "sponsors" },
    { name: "Memories", href: "memories" },
];

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    // const navRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setMobileMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full transition-colors duration-300 z-50 ${scrolled ? "bg-white shadow-md" : "bg-transparent"
                }`}
        >

            <div className="max-w-[1440px] mx-auto px-4 py-3 ">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <button onClick={() => scrollToSection("home")} className="z-20">
                        <Image
                            src={newlogo}
                            alt="IEEE Logo"
                            className="w-[100px] md:w-[250px] object-contain"
                            priority
                        />
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-6 relative w-full">
                        <ul
                            className={`flex gap-14 text-base font-semibold rounded-full px-10 py-4 absolute left-1/2 -translate-x-1/2 transition-all duration-300
                              ${scrolled ? "bg-white shadow-none" : "bg-white shadow"}`
                            }
                        >
                            {links.map((link, idx) => (
                                <li key={idx}>
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className={`transition duration-300 
                                        ${scrolled ? "hover:text-blue-500" : "hover:text-blue-500"}`}
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {/* Right Buttons */}
                        <div className="ml-auto flex gap-4">
                            <button
                                className={`px-4 py-2 rounded-full transition-all duration-300 ${scrolled
                                    ? "bg-gray-900 text-white"
                                    : "bg-transparent text-white border border-white"

                                    }`}
                            >
                                Register
                            </button>
                            <button className="bg-[#b39ddb] text-black rounded-full px-4 py-2 hover:opacity-90 transition">
                                Sign Up
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden z-20"
                    >
                        {mobileMenuOpen ? (
                            <HiX size={28} className={scrolled ? "text-black" : "text-white"} />
                        ) : (
                            <HiMenu size={28} className={scrolled ? "text-black" : "text-white"} />
                        )}
                    </button>
                </nav>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden flex flex-col items-center gap-4 py-4 bg-black/90">
                        {links.map((link, idx) => (
                            <button
                                key={idx}
                                onClick={() => scrollToSection(link.href)}
                                className="text-white hover:text-blue-500 transition duration-300"
                            >
                                {link.name}
                            </button>
                        ))}
                        <div className="flex gap-4 mt-4">
                            <button className="bg-white text-black rounded-lg px-4 py-2 hover:bg-gray-200 transition">
                                Register
                            </button>
                            <button className="bg-white text-black rounded-lg px-4 py-2 hover:bg-gray-200 transition">
                                Sign Up
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header >
    );
}

export default Navbar;
