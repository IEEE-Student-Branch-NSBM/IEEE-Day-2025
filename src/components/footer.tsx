'use client';

import Image from "next/image";
import Link from "next/link";
import SbLogo from "../../public/logos/ieee-nsbm-sb-logo.png";
import CsLogo from "../../public/logos/ieee-nsbm-cs-logo.png";
import WieLogo from "../../public/logos/ieee-nsbm-wie-logo.png";
import IeeeDayLogo from "../../public/logos/ieee-day-logo-2025.png";

const Footer = () => {
    
    const socialLinks = [
        { 
            name: "Facebook", 
            url: "https://www.facebook.com/ieeensbm/",
            icon: (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
            )
        },
        { 
            name: "Instagram", 
            url: "https://www.instagram.com/ieee_nsbm/",
            icon: (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
            )
        },
        { 
            name: "LinkedIn", 
            url: "https://lk.linkedin.com/company/ieeesbnsbm",
            icon: (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            )
        },
        { 
            name: "Twitter", 
            url: "https://x.com/nsbmieee",
            icon: (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 14-7.497 14-13.986 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59l-.047-.02z"/>
                </svg>
            )
        },
        { 
            name: "YouTube", 
            url: "https://www.youtube.com/@ieeensbm",
            icon: (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
            )
        },
        { 
            name: "GitHub", 
            url: "https://github.com/IEEE-Student-Branch-NSBM/",
            icon: (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
            )
        }
    ];

    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Memories", href: "#memories" },
        { name: "Flow", href: "#flow" },
        { name: "People", href: "#people" },
        { name: "Chat", href: "#chat" },
        { name: "Register", href: "#register" }
    ];

    const contactInfo = [
        { 
            label: "Email", 
            value: "nsbmieee@gmail.com", 
            href: "mailto:nsbmieee@gmail.com",
            isLink: true,
            icon: (
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
            )
        },
        { 
            label: "Website", 
            value: "www.ieeensbm.org", 
            href: "https://www.ieeensbm.org/",
            isLink: true,
            icon: (
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/>
                </svg>
            )
        },
        { 
            label: "Location", 
            value: "NSBM Green University, Homagama, Sri Lanka", 
            href: "https://maps.google.com/?q=NSBM+Green+University+Homagama+Sri+Lanka",
            isLink: true,
            icon: (
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
            )
        }
    ];

    return (
        <footer className="relative z-50 w-full h-auto bg-gradient-to-b from-black to-black/95 overflow-hidden pt-12 pb-6">
            <div className="container mx-auto px-6 md:px-8">
                {/* Main Footer Content */}
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 sm:p-8 md:p-10">
                    {/* Top Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 mb-10">
                        {/* About Section */}
                        <div className="flex flex-col space-y-4 lg:order-1">
                            <div className="flex items-center mb-2">
                                <Image 
                                    src={IeeeDayLogo} 
                                    alt="IEEE Day 2025" 
                                    width={120} 
                                    height={60}
                                    className="object-contain h-12 w-auto"
                                />
                            </div>
                            <p className="text-white/80 text-sm leading-relaxed">
                                IEEE Day celebrates the first time in history when engineers worldwide gathered to share their technical ideas in 1884. Join us for IEEE Day 2025 at NSBM Green University.
                            </p>
                            
                            {/* Social Links */}
                            <div className="flex flex-wrap gap-2 mt-2">
                                {socialLinks.map((social, index) => (
                                    <a 
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className="w-9 h-9 bg-white/10 rounded-lg hover:bg-white/20 flex items-center justify-center transition-colors duration-300 text-white hover:scale-110"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Contact Info - Order 2 on tablet, Order 3 on desktop */}
                        <div className="flex flex-col space-y-4 md:order-2 lg:order-3">
                            <h3 className="text-white text-lg font-medium border-b border-white/10 pb-2">Contact Us</h3>
                            <ul className="space-y-3">
                                {contactInfo.map((contact, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="mr-3 mt-0.5 bg-white/10 p-1.5 rounded-md flex items-center justify-center">
                                            {contact.icon}
                                        </div>
                                        <div>
                                            <p className="text-white/60 text-xs">{contact.label}</p>
                                            {contact.isLink ? (
                                                <a 
                                                    href={contact.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-white text-sm hover:text-blue-300 transition-colors duration-300 flex items-center"
                                                >
                                                    {contact.value}
                                                    <svg className="w-3 h-3 ml-1 opacity-70" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                                                    </svg>
                                                </a>
                                            ) : (
                                                <p className="text-white text-sm">{contact.value}</p>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quick Links - Order 3 on tablet, Order 2 on desktop */}
                        <div className="flex flex-col space-y-4 md:order-3 lg:order-2">
                            <h3 className="text-white text-lg font-medium border-b border-white/10 pb-2">Quick Links</h3>
                            <ul className="space-y-2">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link 
                                            href={link.href}
                                            className="text-white/70 hover:text-white transition-colors duration-300 text-sm flex items-center"
                                        >
                                            <span className="mr-1.5">•</span> {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                    {/* Chapter Logos */}
                    <div className="pt-8 border-t border-white/10">
                        <div className="grid grid-cols-1 sm:grid-cols-3 items-center justify-items-center h-full gap-6 sm:gap-8 md:gap-12">
                            {/* Student Branch Logo */}
                            <div className="flex items-center justify-center w-full">
                                <div className="w-[220px] h-[120px] relative flex items-center justify-center">
                                    <Image
                                        src={SbLogo}
                                        alt="IEEE NSBM Student Branch Logo"
                                        width={200}
                                        height={100}
                                        quality={100}
                                        priority={true}
                                        style={{
                                            objectFit: 'contain',
                                            width: '200px',
                                            height: '100px',
                                            margin: '0 auto'
                                        }}
                                        className="mix-blend-normal"
                                    />
                                </div>
                            </div>
                            
                            {/* Computer Society Logo */}
                            <div className="flex items-center justify-center w-full">
                                <div className="w-[220px] h-[120px] relative flex items-center justify-center">
                                    <Image
                                        src={CsLogo}
                                        alt="IEEE NSBM Computer Society Logo"
                                        width={120}
                                        height={50}
                                        quality={100}
                                        priority={true}
                                        style={{
                                            objectFit: 'contain',
                                            width: '120px',
                                            height: '50px',
                                            margin: '0 auto'
                                        }}
                                        className="mix-blend-normal"
                                    />
                                </div>
                            </div>
                            
                            {/* WIE Logo */}
                            <div className="flex items-center justify-center w-full">
                                <div className="w-[220px] h-[120px] relative flex items-center justify-center">
                                    <Image
                                        src={WieLogo}
                                        alt="IEEE NSBM Women in Engineering Logo"
                                        width={200}
                                        height={100}
                                        quality={100}
                                        priority={true}
                                        style={{
                                            objectFit: 'contain',
                                            width: '200px',
                                            height: '100px',
                                            margin: '0 auto'
                                        }}
                                        className="mix-blend-normal"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Copyright Section */}
                <div className="mt-8 text-center">
                    <p className="text-white/60 text-sm">
                        © IEEE NSBM Student Branch. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer