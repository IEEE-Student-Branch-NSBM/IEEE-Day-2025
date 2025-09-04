"use client";

import Image from "next/image";
import NsbmLogo from "../../public/logos/nsbm-logo.png"
import SbLogo from "../../public/logos/ieee-nsbm-sb-logo.png"
import CsLogo from "../../public/logos/ieee-nsbm-cs-logo.png"
import WieLogo from "../../public/logos/ieee-nsbm-wie-logo.png"

const Footer = () => {

    const logos = [SbLogo, CsLogo, WieLogo, NsbmLogo ];

    return (
        <div className="relative z-50 w-full h-40 bg-white/5 backdrop-blur-lg overflow-hidden">
            <div className="flex items-center justify-center h-full gap-40">
                {logos.map((logo, index) => (
                    <Image
                        key={index}
                        src={logo}
                        alt={`IEEE Logo ${index + 1}`}
                        width={200}
                        height={200}
                        className="object-contain"
                    />
                ))}
            </div>
        </div>
    )
}

export default Footer