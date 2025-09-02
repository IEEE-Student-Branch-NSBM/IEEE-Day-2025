
type TitleProps = {
  children: React.ReactNode;
};

export function MainTitle({children}: TitleProps) {
  return (
    <h1 className="text-4xl mb-4">{children}</h1>
  )
}

export function SubTitle({children}: TitleProps) {
  return (
    <div className="max-w-3xl text-xl flex flex-col mb-4">{children}</div>
  );
}
