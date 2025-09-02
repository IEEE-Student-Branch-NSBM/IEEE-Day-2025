"use client";

import Image from "next/image";
import SbLogo from "../../public/logos/ieee-nsbm-sb-logo.png";
import CsLogo from "../../public/logos/ieee-nsbm-cs-logo.png";
import WieLogo from "../../public/logos/ieee-nsbm-wie-logo.png";

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center bg-white/5 backdrop-blur-lg z-50">
      <div className="w-11/12 py-6 md:py-10 flex gap-y-5 md:flex-row flex-col items-center justify-around">
        <div className="h-auto w-52 md:w-60">
          <Image src={SbLogo} alt="logo" />
        </div>
        <div className="h-auto w-36 md:w-40">
          <Image src={CsLogo} alt="logo" />
        </div>
        <div className="h-auto w-52 md:w-60">
          <Image src={WieLogo} alt="logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
