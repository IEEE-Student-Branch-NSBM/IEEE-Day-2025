import HeaderText from './HeaderText';
import Image from 'next/image';
import Geeth from "../../public/contact/Geeth.webp";
import Jayasanka from "../../public/contact/Jayasanka.webp";
import Sithum from "../../public/contact/Sithum.webp";
import Benoli from "../../public/contact/benoli.webp";

const contactData = [
    {
        id: 1,
        name: "Geeth Induwara",
        title: "Chairperson - IEEE Student Branch of NSBM",
        image: Geeth,
        phone: "+94773623718",
        email: "geethinduwara@ieee.org",
    },
    {
        id: 2,
        name: "Jayasanka Ariyaratne",
        title: "Vice Chair - IEEE Student Branch of NSBM",
        image: Jayasanka,
        phone: "+94704821254",
        email: "jayasankaariyaratne@ieee.org",
    },
    {
        id: 3,
        name: "Sithum Sankajith",
        title: "IEEE Day Ambassador and Treasurer - IEEE Student Branch of NSBM",
        image: Sithum,
        phone: "+94775524461",
        email: "sithumsankajith@ieee.org",
    },
    {
        id: 4,
        name: "Benoli Senanayake",
        title: "Finance Team Lead - IEEE Day 2025",
        image: Benoli,
        phone: "+94 70 392 4621",
        email: "benolisenanayake@ieee.org",
    },
];

const ContactUs = () => {
    return (
        <section className="py-8 sm:py-16 px-2 sm:px-4 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 sm:mb-16">
                    <HeaderText title="Contact Us" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
                    {contactData.map((contact) => (
                        <div
                            key={contact.id}
                            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-900/40 via-orange-800/30 to-amber-700/40 backdrop-blur-sm border border-amber-600/30 shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 group hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 pointer-events-none"></div>
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400/5 via-transparent to-orange-600/5 pointer-events-none"></div>
                            <div className="relative h-48 sm:h-64 overflow-hidden">
                                <Image
                                    src={contact.image}
                                    alt={contact.name}
                                    fill
                                    className="object-cover object-top group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                            </div>
                            <div className="relative p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-bold font-orbitron bg-gradient-to-b from-amber-100 via-orange-100 to-amber-200 text-transparent bg-clip-text mb-2">
                                    {contact.name}
                                </h3>
                                <p className="text-xs sm:text-sm text-amber-200/80 font-medium mb-2 sm:mb-4 leading-relaxed">
                                    {contact.title}
                                </p>
                                <div className="space-y-2 sm:space-y-3">
                                    <a
                                        href={`tel:${contact.phone}`}
                                        className="flex items-center gap-3 text-amber-100/80 hover:text-amber-100 transition-colors group/phone"
                                    >
                                        <div className="flex-shrink-0 w-10 h-10 bg-amber-600/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover/phone:bg-amber-500/40 transition-colors border border-amber-500/30">
                                            <svg
                                                className="w-5 h-5 text-amber-200"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium">
                                            {contact.phone}
                                        </span>
                                    </a>

                                    <a
                                        href={`mailto:${contact.email}`}
                                        className="flex items-center gap-3 text-amber-100/80 hover:text-amber-100 transition-colors group/email"
                                    >
                                        <div className="flex-shrink-0 w-10 h-10 bg-amber-600/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover/email:bg-amber-500/40 transition-colors border border-amber-500/30">
                                            <svg
                                                className="w-5 h-5 text-amber-200"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium truncate">
                                            {contact.email}
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
                        </div>
                    ))}
                </div>
                <div className="mt-8 sm:mt-16 text-center">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-900/40 via-orange-800/30 to-amber-700/40 backdrop-blur-sm border border-amber-600/30 shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 p-4 sm:p-8 max-w-2xl sm:max-w-4xl mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 pointer-events-none"></div>

                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400/5 via-transparent to-orange-600/5 pointer-events-none"></div>

                        <div className="relative">
                            <h3 className="text-2xl font-bold font-orbitron bg-gradient-to-b from-amber-100 via-orange-100 to-amber-200 text-transparent bg-clip-text mb-4">
                                IEEE Student Branch of NSBM
                            </h3>
                            <p className="text-amber-200/80 mb-6">
                                For general inquiries about IEEE Day 2025, feel free to reach out to any of our team members above.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href={`mailto:nsbmieee@gmail.com`}
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/80 to-orange-600/80 backdrop-blur-sm text-amber-100 px-6 py-3 rounded-lg hover:from-amber-500/90 hover:to-orange-500/90 transition-all duration-300 border border-amber-500/30"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    General Inquiries
                                </a>
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;