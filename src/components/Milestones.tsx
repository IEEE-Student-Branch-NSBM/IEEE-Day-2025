"use client";

import HeaderText from "./HeaderText";

const milestones = [
  {
    heading: "Registration opens",
    detail: "Early bird registration begins",
    date: "Aug 03",
  },
  {
    heading: "Speaker Announcements",
    detail: "Meet our distinguished speakers.",
    date: "Aug 03",
  },
  {
    heading: "IEEE Day 2025",
    detail: "The main event begins",
    date: "Aug 03",
  },
];

const Milestones = () => {
  return (
    <section className="flex w-full items-center justify-center pb-10 md:pb-20">
      <div className="flex w-11/12 flex-col items-center gap-8 py-5 sm:w-4/5">
        <HeaderText title="Event Milestones" />

        <div className="flex w-full flex-col items-center gap-4">
          {milestones.map(({ heading, detail, date }, index) => (
            <div
              key={index}
              className={`flex w-full max-w-lg flex-col justify-between gap-y-2 rounded-xl px-10 py-4 shadow-lg transition-all duration-300 ease-in-out hover:shadow-[0_0_30px_rgba(245,124,0,0.4)] hover:ring-2 hover:ring-[#F57C00]/60 md:max-w-xl md:flex-row md:items-center lg:max-w-3xl cursor-pointer ${
                index % 2 === 0
                  ? "bg-gradient-to-r from-[#F57C00] to-white"
                  : "bg-gradient-to-r from-white to-[#F57C00]"
              }`}
            >
              <div className="flex flex-col gap-2">
                <h3 className="font-orbitron text-base font-semibold md:text-lg">
                  {heading}
                </h3>
                <p className="text-sm">{detail}</p>
              </div>
              <p className="font-orbitron text-right font-semibold">{date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
