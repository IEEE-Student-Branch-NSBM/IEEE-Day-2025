"use client"
import AesturnumLogo from "../../public/sponsors/Aeturnum.webp";
import NescafeLogo from "../../public/sponsors/nescafe.webp";
import OrelitLogo from "../../public/sponsors/orelit.webp";
import VirtusaLogo from "../../public/sponsors/virtusa.webp";
import NsbmLogo from "../../public/sponsors/nsbm.webp";
import Image from "next/image";
import { gsap } from "gsap";
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 




const sponsors = [
	{ name: "aeturnum", logo: AesturnumLogo },
	{ name: "nescafe", logo: NescafeLogo },
	{ name: "nsbm", logo: NsbmLogo },
	{ name: "orelit", logo: OrelitLogo },
	{ name:"virtusa",logo: VirtusaLogo},
];

const Sponsors = () => {
	useGSAP(() => {
	// gsap code here...
	gsap.to('.logo', { x: 360 }); // <-- automatically reverted
},{ }); // <-- scope is for selector text (optional)

	return <div className = "bg-black">
		{sponsors.map((sponsor, index)=>(
			<div>

				<Image src ={sponsor.logo} alt={sponsor.name} className="logo"/>
			</div>
		))}
	</div>;
};

export default Sponsors;
