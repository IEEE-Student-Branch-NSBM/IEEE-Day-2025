import Image from "next/image";
import SbLogo from "../../public/logos/ieee-nsbm-sb-logo.png"
import CsLogo from "../../public/logos/ieee-nsbm-cs-logo.png"
import WieLogo from "../../public/logos/ieee-nsbm-wie-logo.png"

const Footer = () => {

    const logos = [SbLogo, CsLogo, WieLogo];

    return (
        <div className="relative z-50 w-full h-auto min-h-32 bg-black overflow-hidden py-8 md:py-12">
            <div className="container mx-auto px-6 md:px-8">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 sm:p-8 md:p-10">
                    <div className="grid grid-cols-3 items-center justify-items-center h-full gap-6 sm:gap-8 md:gap-12">
                        {logos.map((logo, index) => (
                            <div key={index} className="flex items-center justify-center w-full h-16 sm:h-20 md:h-24 bg-white/5 rounded-xl p-3 sm:p-4 md:p-5 hover:bg-white/10 transition-all duration-300">
                                <Image
                                    src={logo}
                                    alt=""
                                    width={200}
                                    height={200}
                                    className="object-contain max-w-full max-h-full w-auto h-auto scale-90 sm:scale-95 md:scale-100"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer