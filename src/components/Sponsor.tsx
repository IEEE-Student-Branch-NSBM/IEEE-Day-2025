"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import AesturnumLogo from "../../public/sponsors/Aeturnum.webp";
import NescafeLogo from "../../public/sponsors/nescafe.webp";
import OrelitLogo from "../../public/sponsors/orelit.webp";
import VirtusaLogo from "../../public/sponsors/virtusa.webp";
import NsbmLogo from "../../public/sponsors/nsbm.webp";
import HeaderText from './HeaderText';


const sponsors = [AesturnumLogo, NescafeLogo, OrelitLogo, VirtusaLogo, NsbmLogo]

const settings = {
    infinite: sponsors.length > 1,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: sponsors.length < 5 ? sponsors.length : 5,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: sponsors.length < 3 ? sponsors.length : 3,
                centerMode: true,
                centerPadding: "0px",
            },
        },
        {
            breakpoint: 770,
            settings: {
                slidesToShow: sponsors.length < 2 ? sponsors.length : 2,
                centerMode: true,
                centerPadding: "0px",
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "0px",
            },
        },
    ],
};

const Sponsor = () => {
    return (
        <div className="w-full py-8 sm:py-12 md:py-16">
            <HeaderText title="Past Sponsors" />
            <Slider {...settings}>
                {sponsors.map((sponsor, index) => (
                    <div key={index} className="flex items-center justify-center h-24 sm:h-32 md:h-40">
                        <div className="relative w-32 h-16 sm:w-40 sm:h-24 md:w-full md:h-full max-w-xs mx-auto">
                            <Image
                                src={sponsor}
                                alt={`Sponsor ${index + 1}`}
                                fill
                                className="rounded-lg object-contain"
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Sponsor