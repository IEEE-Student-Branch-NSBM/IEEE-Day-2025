'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'sponsor', 'about', 'people', 'chat', 'register']
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
    { href: '#people', label: 'People', section: 'people' },
    { href: '#chat', label: 'Chat', section: 'chat' },
    { href: '#register', label: 'Register', section: 'register' },
  ]

  return (
    <div className="fixed bg-white/5 backdrop-blur-lg top-0 right-1/2 translate-x-1/2 z-100 flex gap-12 text-white transition-all duration-300 p-8">
      {navItems.map((item) => (
        <Link
          key={item.section}
          href={item.href}
          className={`m-auto hover:scale-110 transition-all duration-300 ${activeSection === item.section
            ? 'font-semibold text-2xl'
            : 'text-xl'
            }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default Navbar