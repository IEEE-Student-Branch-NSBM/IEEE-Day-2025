const details = [
  {
    title: "About IEEE Day",
    description:
      "IEEE Day celebrates the first time IEEE members gathered to share their technical ideas in 1884. It's a global celebration of innovation, collaboration, and the power of engineering to shape a better future.",
  },
  {
    title: "Why You Should Sponsor",
    description:
      "Support a global network of innovation, leadership, and impact. By sponsoring, you align your brand with forward-thinking changemakers, gain visibility among top talent and industry experts, and contribute to empowering the next generation of engineers and technologists who are shaping the future.",
  },
];

const About = () => {
  return (
    <section className="flex pb-8 sm:pb-10 md:pb-20 items-center justify-center w-full">
      <div className="w-full sm:w-11/12 md:w-4/5 gap-4 md:gap-8 grid grid-cols-1 md:grid-cols-2">
        {details.map((detail, index) => (
          <div
            key={index}
            className="bg-amber-950/60 backdrop-blur-sm border border-amber-600/40 shadow-lg rounded-[20px] p-6 sm:p-10 hover:bg-amber-900/70 transition-all duration-300"
          >
            <div className="font-bold text-lg sm:text-xl md:text-[20px] mb-2 sm:mb-4 text-amber-200/70 font-orbitron">
              {detail.title}
            </div>
            <div className="text-xs sm:text-sm md:text-[13px] text-slate-100 tracking-wider">
              {detail.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
