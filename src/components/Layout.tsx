// src/components/Layout.tsx

export default function Layout() {
    return (
        <section className="bg-gray-800 text-white py-10 px-4">
            <div className="max-w-[1280px] mx-auto flex flex-col justify-center md:flex-row flex-wrap  md:gap-y-10 gap-y-10">

                {/* Card 1 */}
                <div className="w-full md:w-1/3 px-2">
                    <div className="relative">
                        <h2 className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 text-3xl md:text-4xl italic font-semibold z-10 text-half-red-white">
                            Residential
                        </h2>
                        <img
                            src="/residential.jpg"
                            alt="Residential"
                            className="w-full h-[250px] md:h-[300px] lg:h-[469px] object-cover rounded shadow"
                        />
                    </div>
                    <div className="mt-4 text-left">
                        <button className="border border-red-600 text-white px-4 py-2 hover:bg-red-600 transition-all rounded-sm cursor-pointer">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="w-full md:w-1/3 px-2">
                    <div className="relative">
                        <h2 className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 text-3xl md:text-4xl italic font-semibold z-10 text-half-red-white">
                            Commercial
                        </h2>
                        <img
                            src="/commercial.jpg"
                            alt="Commercial"
                            className="w-full h-[250px] md:h-[300px] lg:h-[469px] object-cover rounded shadow mb-4"
                        />
                    </div>
                    <div className="text-left">
                        <button className="border border-red-600 text-white px-4 py-2 hover:bg-red-600 transition-all rounded-sm cursor-pointer">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="w-full md:w-1/3 px-2">
                    <div className="relative">
                        <h2 className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 text-3xl md:text-4xl italic font-semibold z-10 text-half-red-white">
                            AerialDrone
                        </h2>
                        <img
                            src="/aerial.jpg"
                            alt="Aerial Drone"
                            className="w-full h-[250px] md:h-[300px] lg:h-[469px] object-cover rounded shadow mb-4"
                        />
                    </div>
                    <div className="text-left">
                        <button className="border border-red-600 text-white px-4 py-2 hover:bg-red-600 transition-all rounded-sm cursor-pointer">
                            Learn More
                        </button>
                    </div>
                </div>

            </div>
        </section>

    );
}
