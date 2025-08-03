type HeaderTextProps = {
  title: string;
};

const HeaderText = ({ title }: HeaderTextProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="bg-gradient-to-r from-white via-[#ffcc91] to-[#ffe6c6] bg-clip-text text-center font-orbitron text-xl font-semibold tracking-wider text-transparent md:text-3xl">
        {title}
      </h1>
      <div className="h-[3px] w-32 rounded-full bg-gradient-to-r from-transparent via-white to-transparent" />
    </div>
  );
};

export default HeaderText;
