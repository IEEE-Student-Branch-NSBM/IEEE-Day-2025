import Image from "next/image";
import Link from "next/link";
import IEEEDaySubLogo from "../../public/ieee-day-sub-logo.webp";
import IEEESbLogo from "../../public/ieee-sb-logo.webp";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-[999] w-full h-16 md:h-20 bg-black flex justify-center">
      <div className="flex w-11/12 sm:w-4/5 items-center justify-between gap-8 py-5">
        <Image
          src={IEEESbLogo}
          alt="IEEE Logo"
          className="h-auto w-40 md:w-64"
          priority
        />
        <Link href="/">
          <Image
            src={IEEEDaySubLogo}
            alt="IEEE Logo"
            className="h-auto w-40 md:w-64"
            priority
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
