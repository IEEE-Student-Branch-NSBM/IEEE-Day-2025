import React from 'react';
import { Orbitron , Inter} from "next/font/google";


const orbitron = Orbitron({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

const details = [
  {
    title: "About IEEE Day",
    description: "IEEE Day celebrates the first time IEEE members gathered to share their technical ideas in 1884. It’s a global celebration of innovation, collaboration, and the power of engineering to shape a better future.",
  },
  {
    title: "Why You Should Join",
    description: "Be part of an international community of thinkers, doers, and change-makers. Explore cutting-edge ideas, meet industry leaders, and inspire the next generation of engineers and technologists.",
  },
]
const About = () => {
  return (
    <div className="grid grid-cols-2 gap-8 p-40 ">
      {details.map((detail, index) => (
        <div key={index} className='bg-black/25 rounded-[20px] p-10'>
          <div className={`${orbitron.className} font-bold text-[20px] text-[#F57C00]`}>
            {detail.title}
          </div>
          <div className={`${inter.className} font-bold text-[13px] text-[#999999]`}>
            {detail.description}
          </div>
        </div>
      ))}
      

      
    </div>
  )
}

export default About