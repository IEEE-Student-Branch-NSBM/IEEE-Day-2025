"use client";

import Image from "next/image";
import SbLogo from "../../public/logos/ieee-nsbm-sb-logo.png"
import CsLogo from "../../public/logos/ieee-nsbm-cs-logo.png"
import WieLogo from "../../public/logos/ieee-nsbm-wie-logo.png"

const Footer = () => {

    const logos = [SbLogo, CsLogo, WieLogo];

    return (
        <div className="w-full h-80 bg-white/5 backdrop-blur-lg z-50 overflow-hidden">
            <div className="flex items-center justify-center h-full gap-40">
                {logos.map((logo, index) => (
                    <Image
                        key={index}
                        src={logo}
                        alt={`IEEE Logo ${index + 1}`}
                        width={400}
                        height={400}
                        className="object-contain"
                    />
                ))}
            </div>
        </div>
    )
}

export default Footer