'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { CSSProperties } from 'react'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Define animation styles
  const animateIn: CSSProperties = {
    animation: 'fadeIn 0.4s ease-in-out forwards',
    opacity: 0
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'sponsor', 'about', 'memories', 'flow', 'people', 'chat', 'register']
      let currentSection = 'home'

      // checks which section is mostly within the viewport
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2) {
            currentSection = section
          }
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Home', section: 'home' },
    { href: '#sponsor', label: 'Sponsor', section: 'sponsor' },
    { href: '#about', label: 'About', section: 'about' },
    { href: '#memories', label: 'Memories', section: 'memories' },
    { href: '#flow', label: 'Flow', section: 'flow' },
    { href: '#people', label: 'People', section: 'people' },
    { href: '#chat', label: 'Chat', section: 'chat' },
    { href: '#register', label: 'Register', section: 'register' },
  ]

  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener to detect scrolling
  useEffect(() => {
    const handleNavScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleNavScroll);
    return () => window.removeEventListener('scroll', handleNavScroll);
  }, []);

  return (
    <div>
      {/* Desktop Navbar */}
      <div 
        className={`max-w-screen hidden md:flex fixed ${scrolled ? 'bg-white/10' : 'bg-white/5'} backdrop-blur-xl rounded-2xl border border-white/20 top-4 right-1/2 translate-x-1/2 z-[100] gap-4 2xl:gap-6 text-white transition-all duration-300 px-6 py-3 md:px-8 md:py-4 shadow-lg`}
      >
        {navItems.map((item) => (
          <Link
            key={item.section}
            href={item.href}
            className={`m-auto hover:scale-110 transition-all duration-300 ${activeSection === item.section
              ? 'font-bold text-lg text-blue-300'
              : 'text-base font-medium'
              }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Navbar */}
      <div className="block md:hidden">
        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`fixed top-4 left-4 z-[100] w-11 h-11 ${scrolled ? 'bg-white/15' : 'bg-white/10'} backdrop-blur-xl rounded-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-white/20 shadow-md`}
          aria-label="Toggle menu"
        >
          {/* Hamburger Icon with Animation */}
          <div className="w-5 h-5 flex flex-col justify-center items-center relative">
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-4 rounded-sm absolute ${isExpanded ? 'rotate-45' : '-translate-y-1'}`}></span>
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-4 rounded-sm absolute ${isExpanded ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-4 rounded-sm absolute ${isExpanded ? '-rotate-45' : 'translate-y-1'}`}></span>
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 z-[90] transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          {/* Background Overlay */}
          <div 
            className={`absolute inset-0 bg-black/50 backdrop-blur-md transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setIsExpanded(false)}
          ></div>
          
          {/* Menu Content */}
          <div className={`absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-white/10 backdrop-blur-xl border-r border-white/20 shadow-lg transform transition-transform duration-500 ease-in-out ${isExpanded ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex flex-col h-full">
              {/* Header in mobile menu */}
              <div className="w-full pt-16 pb-4 px-6 border-b border-white/15">
                <h2 className="text-2xl font-bold text-white/90">IEEE Day 2025</h2>
              </div>
              
              {/* Navigation items */}
              <nav className="flex-1 overflow-y-auto py-8 px-6">
                <ul className="space-y-5">
                  {navItems.map((item, index) => (
                    <li key={item.section} className="py-1">
                      <Link
                        href={item.href}
                        onClick={() => setIsExpanded(false)}
                        className={`block text-white hover:text-blue-300 transition-all duration-300 transform hover:translate-x-2 py-1 ${
                          activeSection === item.section
                            ? 'font-bold text-2xl text-blue-300'
                            : 'text-xl font-medium'
                        }`}
                        style={isExpanded ? { ...animateIn, animationDelay: `${index * 80}ms` } : {}}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar