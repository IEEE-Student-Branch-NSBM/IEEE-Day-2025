import Image from "next/image";
import Link from "next/link";
import IEEELogo from "../../public/ieee-sb-logo.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-[999] w-full h-16 md:h-20 bg-gradient-to-b from-black via-black/75 to-black/60 backdrop-blur-3xl bg-blend-darken flex justify-center">
      <div className="flex w-11/12 sm:w-4/5 items-center justify-between gap-8 py-5">
        <Link href="/">
          <Image
            src={IEEELogo}
            alt="IEEE Logo"
            className="h-auto w-40 md:w-64"
            priority
          />
        </Link>
        <Link
          href="#"
          className="rounded-md bg-white px-2 py-0.5 text-sm font-semibold font-orbitron md:px-3 md:py-1 md:text-base"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
