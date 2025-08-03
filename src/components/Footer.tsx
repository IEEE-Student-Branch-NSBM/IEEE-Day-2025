import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

import IEEECsLogo from "../../public/ieee-cs-logo.png";
import IEEESbLogo from "../../public/ieee-sb-logo.png";
import IEEEWieLogo from "../../public/ieee-wie-logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-black/35 via-black/50 to-black py-3 flex justify-center">
      <div className="flex w-11/12 sm:w-4/5 flex-col items-center gap-8 py-5">
        <div className="flex w-full flex-col md:flex-row items-center justify-between gap-y-5">
          <Image
            src={IEEESbLogo}
            alt="IEEE SB Logo"
            className="w-40 md:w-48 lg:w-64 h-auto"
            priority
          />
          <Image
            src={IEEECsLogo}
            alt="IEEE CS Logo"
            className="w-24 md:w-28 lg:w-32 h-auto"
            priority
          />
          <Image
            src={IEEEWieLogo}
            alt="IEEE WIE Logo"
            className="w-40 md:w-48 lg:w-64 h-auto"
            priority
          />
        </div>

        <div className="w-full h-0.5 bg-gray-50" />

        <div className="flex flex-col items-center gap-y-4 text-white">
          <div className="flex gap-4 text-xl md:text-2xl">
            <Link
              href="https://www.linkedin.com/company/ieeesbnsbm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://www.instagram.com/ieee_nsbm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.facebook.com/ieeensbm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </Link>
          </div>
          <p className="text-[10px] md:text-sm text-center font-orbitron tracking-wider">
            Powered by IEEE Computer Society
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
