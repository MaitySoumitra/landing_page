import { useState } from "react";
import useIsDesktop from "./Responsive/IsDesktopView";
import { List, X } from "phosphor-react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const isDesktop = useIsDesktop();

    return (
        <>
            <header className="bg-gray-800 text-white md:shadow-sm sticky z-50 top-0 transition-transform">
                <div className="max-w-[1283px] mx-auto px-4 md:px-2 py-2 flex justify-between items-center">
                    <div className="flex items-center justify-between w-full">
                        <div className="p-2 " >
                            <img
                                src="/logo.png"
                                className="w-[120px] h-12 md:h-15 md:max-w-[160px] inline-block cursor-pointer"
                                alt="Logo"
                                onClick={() => (window.location.href = "/")}
                            />
                        </div>


                        <nav className="hidden md:flex items-center space-x-6  text-sm lg:text-[16px] font-medium">
                            <a href="#" className="hover:text-red-500 border-b-2 border-red-600 pb-1">Home</a>
                            <a href="#" className="hover:text-red-500">{isDesktop ? "Residential Portfolio" : "Residential"}</a>
                            <a href="#" className="hover:text-red-500">{isDesktop ? "Commercial Portfolio" : "Commercial"}</a>
                            <a href="#" className="hover:text-red-500">{isDesktop ? "Aerial Drone Photography" : "Aerial Drone"}</a>
                            <a href="#" className="hover:text-red-500">{isDesktop ? "Contact" : "Get in Touch"}</a>

                        </nav>
                        <div className="flex items-center space-x-4">
                            {/* Desktop CTA Button */}
                            <a
                                href="#"
                                className=" md:inline-flex bg-red-600 hover:bg-red-700 text-white md:px-4 md:py-2 px-3 py-1 rounded-sm"
                            >
                                {isDesktop ? "Hire Me Now" : "Hire Me"}
                            </a>

                            {/* Mobile Menu Icon */}
                            <button
                                onClick={toggleMenu}
                                className="md:hidden text-white text-3xl"
                                aria-label="Menu"
                            >
                                <List size={32} />
                            </button>
                        </div>
                  

                    {/* Mobile Slide-in Menu */}
                    <div
                        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 z-500 color-white p-6 space-y-6 ${menuOpen ? "translate-x-0" : "translate-x-full"
                            }`}
                    >
                        {/* Close Button */}
                        <div className="flex justify-end">
                            <button onClick={toggleMenu} aria-label="Close Menu" className="text-2xl">
                                <X size={32} />
                            </button>
                        </div>

                        {/* Mobile Links */}
                        <nav className="flex flex-col space-y-4 ">
                            <a href="#" className="hover:text-red-500">Home</a>
                            <a href="#" className="hover:text-red-500">Residential Portfolio</a>
                            <a href="#" className="hover:text-red-500">Commercial Portfolio</a>
                            <a href="#" className="hover:text-red-500">Aerial Drone Photography</a>
                            <a href="#" className="hover:text-red-500">Contact</a>

                        </nav>
                    </div>
                      </div>
                </div>
            </header>
        </>
    );
}
