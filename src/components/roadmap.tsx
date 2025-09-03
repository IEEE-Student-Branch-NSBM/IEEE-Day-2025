"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RoadMap = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  //dummy data
  const contactUsData = [
    {
      id: 1,
      name: "john doe",
      title: "Development team lead",
      imgUrl: "https://via.placeholder.com/150",
      linkedin: "https://www.linkedin.com/in/johndoe",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
    },
    {
      id: 2,
      name: "jane smith",
      title: "Marketing Specialist",
      imgUrl: "https://via.placeholder.com/150",
      linkedin: "https://www.linkedin.com/in/janesmith",
      email: "jane.smith@example.com",
      phone: "+1 (555) 987-6543",
    },
    {
      id: 3,
      name: "alice johnson",
      title: "UX/UI Designer",
      imgUrl: "https://via.placeholder.com/150",
      linkedin: "https://www.linkedin.com/in/alicejohnson",
      email: "alice.johnson@example.com",
      phone: "+1 (555) 555-5555",
    },
    {
      id: 4,
      name: "bob brown",
      title: "Data Scientist",
      imgUrl: "https://via.placeholder.com/150",
      linkedin: "https://www.linkedin.com/in/bobbrown",
      email: "bob.brown@example.com",
      phone: "+1 (555) 111-2222",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
            },
          }
        );

        gsap.fromTo(
          card,
          { x: 0 },
          {
            x: i % 2 === 0 ? -150 : 150,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 5%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="h-screen flex flex-row items-center justify-center bg-gray-50 overflow-hidden"
    >
      <div className="w-3/7 h-150 flex mx-auto">
        <div className="w-full flex items-center justify-center">
          {contactUsData.slice(0, 2).map((person, i) => (
            <div
              key={person.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`absolute ${i === 0 ? "z-10" : "z-5"}`}
            >
              <div className="w-sm h-120 rounded-2xl bg-purple-200 flex flex-col items-center justify-center shadow-lg">
                <div className="mb-4">
                  <img
                    src={person.imgUrl}
                    alt={person.name}
                    className="w-24 h-24 object-cover"
                  />
                </div>
                <h1 className="text-xl font-semibold">{person.title}</h1>
                <p className="text-xl font-semibold">{person.name}</p>
                <div>
                  <p className="text-sm">Email: {person.email}</p>
                  <p className="text-sm">Phone: {person.phone}</p>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-3/7 h-150 flex mx-auto">
        <div className="w-full flex items-center justify-center">
          {contactUsData.slice(2, 4).map((person, i) => (
            <div
              key={person.id}
              ref={(el) => { cardRefs.current[i + 2] = el; }}
              className={`absolute ${i === 0 ? "z-10" : "z-5"}`}
            >
              <div className="w-sm h-120 rounded-2xl bg-purple-200 flex flex-col items-center justify-center shadow-lg">
                <div className="mb-4">
                  <img
                    src={person.imgUrl}
                    alt={person.name}
                    className="w-24 h-24 object-cover"
                  />
                </div>
                <h1 className="text-xl font-semibold">{person.title}</h1>
                <p className="text-xl font-semibold">{person.name}</p>
                <div>
                  <p className="text-sm">Email: {person.email}</p>
                  <p className="text-sm">Phone: {person.phone}</p>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
