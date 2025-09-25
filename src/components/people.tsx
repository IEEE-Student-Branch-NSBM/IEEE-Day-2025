"use client"

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import geeth from "../../public/people/chair.jpg"
import jayasanka from "../../public/people/vice-chair.jpg"
import sithum from "../../public/people/ambassador.jpg"
// import pasindi from "../../public/people/wie-chair.jpg"

gsap.registerPlugin(ScrollTrigger);

const People = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const people = [
        {
            name: "Geeth Induwara",
            contribution:
                "Chair - IEEE Student Branch NSBM",
            image: geeth,
            animations: {
                y: 400,
            },
            linkedIn: "https://www.linkedin.com/in/geethinduwara/",
            facebook: "https://web.facebook.com/geethinduwara.online"
        },
        {
            name: "Jayasanka Ariyarathna",
            contribution:
                "Vice Chair - IEEE Student Branch NSBM",
            image: jayasanka,
            animations: {
                y: -400,
            },
            linkedIn: "",
            facebook: ""
        },
        // {
        //     name: "Pasandi Samarasinghe",
        //     contribution:
        //         "Chair - IEEE Women In Engineering NSBM",
        //     image: pasindi,
        //     animations: {
        //         y: 400,
        //     },
        //     linkedIn: "",
        //     facebook: ""
        // },
        {
            name: "Sithum Sankajith",
            contribution:
                "Ambassador - IEEE Day 2025 NSBM",
            image: sithum,
            animations: {
                y: 400,
            },
            linkedIn: "https://www.linkedin.com/in/sithum-sankajith",
            facebook: "https://facebook.com/sithum.sankajith.1"
        },
    ];

    useGSAP(() => {
        cardRefs.current.forEach((card, i) => {
            if (!card) return;

            gsap.from(
                card,
                {
                    ...people[i].animations,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse",
                    }
                });
        });
    }, []);

    return (
        <section id="people" ref={containerRef} className="relative z-50 mb-10 sm:mb-10 md:mb-20 text-white text-center sm:text-center md:text-left">
            <div className="text-2xl sm:text-2xl md:text-4xl mb-2 sm:mb-4 md:mb-4">People</div>
            <div className="md:max-w-3xl text-base sm:text-base md:text-xl mb-4 sm:mb-4 md:mb-4">
                Organizing an event of this scale is no small feat.
                Meet some of the faces behind IEEE Day 2025.
            </div>
            <div className="flex flex-col items-center justify-center ">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-4 md:gap-6 w-full 2xl:w-[80%]">
                    {people.map((person, index) => <div key={index} className="md:hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                        <div ref={(element) => { cardRefs.current[index] = element }} className="relative w-full max-w-sm h-80 sm:h-80 md:h-100">
                            <Image
                                src={person.image.src}
                                alt=""
                                fill
                                className="brightness-90 object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 flex flex-col z-10 text-center bg-black/20 backdrop-blur-lg p-4">
                                <div className="text-lg sm:text-lg md:text-xl">{person.name}</div>
                                <div className="text-sm sm:text-sm md:text-base">{person.contribution}</div>
                                <div className="mt-2 flex justify-center gap-1 sm:gap-1 md:gap-2">
                                    <a href={person.facebook}>
                                        <svg className="h-6 sm:h-6 md:h-8 w-6 sm:w-6 md:w-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.4024 21V14.0344H17.7347L18.0838 11.3265H15.4024V9.59765C15.4024 8.81364 15.62 8.27934 16.7443 8.27934L18.1783 8.27867V5.85676C17.9302 5.82382 17.0791 5.75006 16.0888 5.75006C14.0213 5.75006 12.606 7.01198 12.606 9.32952V11.3265H10.2677V14.0344H12.606V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15.4024Z"></path></svg>
                                    </a>
                                    <a href={person.linkedIn}>
                                        <svg className="h-6 sm:h-6 md:h-8 w-6 sm:w-6 md:w-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </section>
    );
};

export default People;