import AesturnumLogo from "../../public/sponsors/Aeturnum.webp";
import NescafeLogo from "../../public/sponsors/nescafe.webp";
import OrelitLogo from "../../public/sponsors/orelit.webp";
import VirtusaLogo from "../../public/sponsors/virtusa.webp";
import NsbmLogo from "../../public/sponsors/nsbm.webp";
import Image from "next/image";

const sponsors = [
	{ name: "aeturnum", logo: AesturnumLogo },
	{ name: "nescafe", logo: NescafeLogo },
	{ name: "nsbm", logo: NsbmLogo },
	{ name: "orelit", logo: OrelitLogo },
	{ name:"virtusa",logo: VirtusaLogo},
];

const Sponsors = () => {
	return <div className = "bg-black">
		{sponsors.map((sponsor, index)=>(
			<div>
				<Image src ={sponsor.logo} alt={sponsor.name}/>
			</div>
		))}
	</div>;
};

export default Sponsors;
