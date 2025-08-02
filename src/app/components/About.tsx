import React from 'react';
import { Orbitron , Inter} from "next/font/google";


const orbitron = Orbitron({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

const About = () => {
  return (
    <div className="grid grid-cols-2 gap-8 p-40 ">
      <div className='bg-black/25 rounded-[20px] p-10'>
        <div className={`${orbitron.className} font-bold text-[20px] text-[#F57C00] `}>
          About IEEE Day
        </div>
        <div className='${inter.className} font-bold text-[13px] text-[#999999]'>
        IEEE Day celebrates the first time IEEE members gathered to share their technical ideas in 1884. It’s a global celebration of innovation, collaboration, and the power of engineering to shape a better future.
        </div>
      </div>

      <div className='bg-black/25 rounded-[20px] p-10'>
        <div className={`${orbitron.className} font-bold text-[20px] text-[#F57C00] `}>
          Why You Should Join
        </div>
        <div className='${inter.className} font-bold text-[13px] text-[#999999]'>
          Be part of an international community of thinkers, doers, and change-makers. Explore cutting-edge ideas, meet industry leaders, and inspire the next generation of engineers and technologists.
        </div>
      </div>
    </div>
  )
}

export default About