import React from 'react'
import { Orbitron , Inter} from "next/font/google";
import Image from "next/image";



const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "700",
});

const img = [
  {
    src: "/assets/image-1.jpg",
    alt: "Journey Image 1"
  },
  {
    src: "/assets/image-2.jpg",
    alt: "Journey Image 2"
  },
  {
    src: "/assets/image-3.jpg",
    alt: "Journey Image 3"
  },
  {
    src: "/assets/image-4.jpg",
    alt: "Journey Image 4"
  },
 
]

const Journey = () => {
  return (
    <div className={`${orbitron.className} font-bold text-[24px] text-center bg-gradient-to-b from-[#FFFFFF] to-[#999999] bg-clip-text text-transparent `}>
      Glimpses of the Journey
      <div className='grid grid-cols-4 gap-2 p-10 '>
        {img.map((image, index) => (
          <div key={index} className=''>
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={300}
              className=''
            />
          </div>
        ))}
    </div>
    </div>
  )
}

export default Journey