'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50) // Adjust threshold as needed
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`fixed top-0 left-0 z-100 bg-white/5 backdrop-blur-lg flex gap-10 items-start justify-center text-white transition-all duration-300 ${isScrolled
        ? 'p-4 text-base' // Smaller padding and text when scrolled
        : 'p-10 text-xl'   // Original size when at top
      }`}>
      <Link href="/" >Home</Link>
      <Link href="#sponsor" >Sponsor</Link>
      <Link href="#about" >About</Link>
      <Link href="#people" >People</Link>
      <Link href="#chat" >Chat</Link>
      <Link href="/register" >Register</Link>
    </div>
  )
}

export default Navbar