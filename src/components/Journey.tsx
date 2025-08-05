import HeaderText from "./HeaderText";
import Image from "next/image";
import Journey1 from "../../public/journey-5.webp"
import Journey2 from "../../public/journey-2.webp"
import Journey3 from "../../public/journey-6.webp"
import Journey4 from "../../public/journey-4.webp"

const journey = [Journey1, Journey2, Journey3, Journey4]

const Journey = () => {
  return (
    <section className="flex pb-8 sm:pb-10 md:pb-20 w-full items-center justify-center">
      <div className="w-full sm:w-11/12 md:w-4/5 py-5 gap-4 sm:gap-8 flex flex-col">
        <HeaderText title="Glimpses of the Journey" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
          {journey.map((journeyImage, index) => (
            <div key={index} className="relative h-48 sm:h-64 md:h-80">
              <Image
                src={journeyImage}
                alt={`Journey moment ${index + 1}`}
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;