import React from 'react'
import { Orbitron, Inter} from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "700",
});

const inter = Inter({
  subsets: ["latin"],
});

const milestones = [{heading: "Registration opens", detail: "early bird registration begins", date: "Aug 03"}, 
  {heading: "Speaker Announcements", detail: "Meet out distinguished speakers.", date: "Aug 03"}, 
  {heading: "IEEE Day 2025", detail: "The main event begins", date: "Aug 03"}
]


const Milestones = () => {
  return (
    <div className='px-4'>
      Event Milestones
      {milestones.map((milestone) => (

      <div className={`${orbitron.className} relative text-center p-10 font-bold text-[24px]`}>
        <div className='bg-linear-to-r from-[#F57C00] to-[#FFFFFF] rounded-lg p-4 '>
          <div className='text-left' >
            
      {milestone.heading}
          </div>
          <div className={`${inter.className} text-left font-normal text-[13px]`}>

      {milestone.detail}
          </div>
          <div className='absolute right-4'>
      {milestone.date}
          </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Milestones