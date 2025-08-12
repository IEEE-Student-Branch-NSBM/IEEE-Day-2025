import Image from "next/image"; 
import logo from '../../public/logo/logo.png';
function Navbar() {
    return(
        
        <div className="bg-black flex gap-6 p-3 justify-between">
            <div>
                <Image
                    src={logo}
                    alt="IEEE Logo"
                    className="h-auto w-40 md:w-64"
                    priority
                />
            </div>
            <div className="bg-white flex gap-6 p-2 rounded-4xl ">
               <button className="text-black rounded-xl   px-4 py-2 hover:bg-gray-100 transition">Home</button>
               <button className="text-black rounded-xl   px-4 py-2 hover:bg-gray-100 transition">Contact_Us</button>
               <button className="text-black rounded-xl   px-4 py-2 hover:bg-gray-100 transition">Sponsors</button>
               <button className="text-black rounded-xl   px-4 py-2 hover:bg-gray-100 transition">Memories</button>
            </div>
            <div className="bg-white flex gap-6 p-2 rounded-4xl">
                <button className="text-black rounded-md  px-4 py-1 hover:bg-gray-100 transition">Register</button>
                <button className="text-black rounded-md  px-4 py-1 hover:bg-gray-100 transition">Sign_Up</button>
            </div>
        </div>
    )
}

export default Navbar;
