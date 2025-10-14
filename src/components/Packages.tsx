export default function Packages() {
    return (
        <div className="bg-gray-800 text-white flex flex-col items-center py-10 px-5 sm:px-6 lg:px-12 space-y-6">
            {/* === Top Section === */}
            <div className="flex flex-col md:flex-row gap-6 max-w-[1280px] w-full mx-auto px-4">
                {/* Left Image */}
                <div className="w-full md:w-[520px]">
                    <img
                        src="/kitchen.jpg"
                        alt="Kitchen Interior"
                        className="w-full h-full object-cover rounded-lg max-h-[600px]"
                    />
                </div>

                {/* Right Content */}
                <div className="w-full md:w-[737px] flex flex-col justify-between space-y-6">
                    <h1 className="text-[32px] md:text-[40px] font-bold leading-tight pt-6 md:pt-[78px] px-4 md:px-0">
                        FEEL THE <span className="text-red-600 italic">AUTHENTICITY</span> <br /> IN EVERY SHOT
                    </h1>
                    <div className="px-4 md:px-0">
                        <img
                            src="/office.jpg"
                            alt="Office Interior"
                            className="w-full h-full object-cover rounded-lg max-h-[356px]"
                        />
                    </div>
                </div>
            </div>


            {/* === Bottom Section (Text + Image) === */}
            <div className="flex flex-col md:flex-row gap-10 max-w-[1280px] w-full mx-auto px-4">
                {/* Left Text Content */}
                <div className="flex flex-col justify-center space-y-[26px] w-full lg:w-[810px]">
                    <h2 className="lg:text-base md:text-sm text-sm font-semibold">Welcome to Rob Rae Photography</h2>

                    <p className="lg:text-base md:text-sm text-sm  leading-relaxed">
                        My name is Rob, and I am an experienced property photographer working out of Melbourne, Victoria. Twenty-five years in professional photography and customer service have given me the skills to work to your brief and deliver the best quality product on time and within budget.
                    </p>

                    <p className="lg:text-base md:text-sm text-sm  leading-relaxed">
                        I am a kind, courteous person and value honesty, family, good communication, and reliability. I love the collaborative nature of photography and working with people from all walks of life. A lot of a photographer’s work is conducted away from the camera, from styling a space to setting up a shot, through to post-production and delivery. I bring a relaxed but professional attitude to my work and thrive in a varied workspace. Throughout the process, from briefing to delivery, I will keep you informed and up-to-date. I will work closely with all stakeholders to get the right result.
                    </p>

                    <p className="hidden lg:block lg:text-base md:text-sm text-sm  leading-relaxed">
                        While my main focus is real estate, I also photograph food and beverages, products, corporate and private functions, architecture, and exhibitions. I love working in multicultural, metropolitan Melbourne, but for the right project, I am happy to travel further afield. <br /> If you have a property ready to go to market, or another project in the works, please contact me.
                    </p>

                    <button className="lg:text-base md:text-sm text-sm font-semibold bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded w-fit mt-2 cursor-pointer">
                        View Photography Packages
                    </button>
                </div>

                {/* Right Image */}
                <div className="w-full lg:w-[420px] flex justify-center items-center">
                    <img
                        src="/frosted-glass.jpg"
                        alt="Frosted Window Graphics"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>


        </div>
    );
}
