import { ArrowUpRight, CaretDown, CaretUp } from "phosphor-react";
import { useState } from "react";

export default function Footer() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleDropdown = (): void => setIsOpen(!isOpen);

    return (
        <footer className="bg-gray-800 text-white px-6 sm:px-12 pt-20 pb-6">

            <div className="max-w-[1283px] mx-auto">
                {/* Call to action section */}
                <div className="mb-10 lg:text-[90px] md:text-[50px] text-[25px] lg:leading-[90px] md:leading-[50px] leading-[30px] text-center flex flex-col items-center">
                    <h2 className=" font-extrabold">
                        GOT ANYTHING IN MIND?
                    </h2>

                    <div className="mt-4 flex flex-col  gap-3">
                        {/* Line 1: GET IN TOUCH + icon */}
                        <div className="flex items-center gap-3">
                            <h2 className=" font-extrabold italic text-red-600">
                                GET IN TOUCH &
                            </h2>
                            <div className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-8 h-8 flex items-center justify-center bg-red-600 rounded-full">
                                <ArrowUpRight weight="bold" className="text-white text-[20px] md:text-[40px]" />
                            </div>
                        </div>

                        {/* Line 2: & WORK TOGETHER */}
                        <h2 className=" font-extrabold">
                            WORK TOGETHER
                        </h2>
                    </div>
                </div>


                {/* Divider line */}
                <div className="border-t border-white/30 mb-8"></div>

                {/* Footer content */}
                <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-0 mb-8">
                    {/* Left: Logo and description */}
                    <div className="flex flex-col gap-4 max-w-md">
                        <img
                            src="/logo.png"
                            className="w-[150px] h-12 md:h-15 md:max-w-[200px] inline-block cursor-pointer"
                        />

                        <p className="text-white/80 text-sm">
                            Working throughout Melbourne and <br /> Victoria, call to discuss options for your <br /> photographic requirements.
                        </p>
                    </div>

                    {/* Center: Contact Info */}
                    <div className="text-left">
                        <h4 className="font-bold mb-2">Contact</h4>
                        <p>0410 993 462</p>
                    </div>

                    {/* Right: Social links */}
                    <div className="text-left">
                        {/* Social Links Header */}
                        <h4 className="font-bold mb-2 flex items-center justify-between">
                            <span>Social</span>
                            <button onClick={toggleDropdown} className="md:hidden">
                                {/* Toggle icon */}
                                {isOpen ? (
                                    <CaretUp size={20} color="white" />
                                ) : (
                                    <CaretDown size={20} color="white" />
                                )}
                            </button>
                        </h4>

                        {/* Dropdown for Mobile */}
                        <div className={`md:hidden ${isOpen ? "block" : "hidden"} space-y-1`}>
                            <ul>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                                <li>Tik-Tok</li>
                            </ul>
                        </div>

                        {/* Regular List for Desktop and Tablets */}
                        <ul className="space-y-1 hidden md:block">
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Tik-Tok</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom copyright */}
                <div className="border-t border-white/30 pt-4 text-center text-xs text-white/60">
                    © 2025 Rob Rae Photography. All Rights Reserved
                </div>
            </div>
        </footer>
    );
}
