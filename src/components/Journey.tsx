import HeaderText from "./HeaderText";
import Journey1 from "../../public/journey-1.webp"
import Journey2 from "../../public/journey-2.webp"
import Journey3 from "../../public/journey-3.webp"
import Journey4 from "../../public/journey-4.webp"

const img = [
  {
    src: Journey1,
    alt: "Journey Image 1",
  },
  {
    src: Journey2,
    alt: "Journey Image 2",
  },
  {
    src: Journey3,
    alt: "Journey Image 3",
  },
  {
    src: Journey4,
    alt: "Journey Image 4",
  },
];

const Journey = () => {
  return (
    <section className="flex pb-10 md:pb-20 w-full items-center justify-center">
      <div className="w-11/12 sm:w-4/5 py-5 gap-8 items-center flex flex-col">
        <HeaderText title="Glimpses of the Journey" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {img.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image.src.src}
                alt={image.alt}
                className="w-full h-full rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;

const JurneyMobile = () => {
  return <div></div>;
};
