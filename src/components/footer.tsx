import Image from "next/image";
import NsbmLogo from "../../public/logos/nsbm-logo.png"
import SbLogo from "../../public/logos/ieee-nsbm-sb-logo.png"
import CsLogo from "../../public/logos/ieee-nsbm-cs-logo.png"
import WieLogo from "../../public/logos/ieee-nsbm-wie-logo.png"

const Footer = () => {

    const logos = [SbLogo, CsLogo, WieLogo, NsbmLogo];

    return (
        <div className="relative z-50 w-full h-auto min-h-32 bg-white/5 backdrop-blur-lg overflow-hidden py-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 items-center justify-items-center h-full gap-6 sm:gap-6 md:gap-12">
                    {logos.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center w-full h-16 sm:h-16 md:h-24">
                            <Image
                                src={logo}
                                alt=""
                                width={200}
                                height={200}
                                className="object-contain max-w-full max-h-full w-auto h-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer