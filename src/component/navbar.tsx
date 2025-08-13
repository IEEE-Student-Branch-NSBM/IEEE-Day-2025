"use client";
import { useEffect, useRef, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import logo from '../../public/logo/logo.png';

const links = [
    { name: "Home", href: "home" },
    { name: "Contact Us", href: "contact" },
    { name: "Sponsors", href: "sponsors" },
    { name: "Memories", href: "memories" },
];

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setMobileMenuOpen(false);
    };

    return (
        <header className="bg-black/80 fixed top-0 left-0 right-0 z-50 shadow-lg backdrop-blur-xl transition-all duration-300">
            <div className="max-w-[1440px] mx-auto px-4 py-3">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <button onClick={() => scrollToSection("home")} className="z-20">
                        <Image
                            src={logo}
                            alt="IEEE Logo"
                            className="w-[100px] md:w-[250px] object-contain"
                            priority
                        />
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-6 relative w-full">
                        {/* Centered Links */}
                        <ul className="flex gap-10 text-sm font-semibold bg-white rounded-full px-6 py-2 shadow absolute left-3/8 -translate-x-1/2">
                            {links.map((link, idx) => (
                                <li key={idx}>
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className="text-black hover:text-orange-500 transition duration-300"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {/* Right Buttons */}
                        <div className="ml-auto flex gap-4">
                            <button className="border border-white text-white rounded-full px-4 py-2 hover:bg-white hover:text-black transition">
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
                            <HiX size={28} className="text-white" />
                        ) : (
                            <HiMenu size={28} className="text-white" />
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
                                className="text-white hover:text-orange-500 transition duration-300"
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
        </header>
    );
}

export default Navbar;
