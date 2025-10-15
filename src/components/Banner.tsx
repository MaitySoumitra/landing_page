// src/components/Banner.tsx
import BannerAnimation from "./Animations/BannerAnimation";

export default function Banner() {
    return (
        <section id="banner-section" className="bg-gray-800 text-white py-10 px-4 text-center">

            <BannerAnimation />
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span id="capturing" className="inline-block">CAPTURING</span> <span id="the" className="inline-block">THE</span> <span id="essence" className="inline-block italic text-red-600">ESSENCE</span><br />
                <p>OF  <span id="property" className="inline-block"> EVERY </span> PROPERTY</p>
            </h1>

            {/* Main Image */}
            <div className="max-w-4xl mx-auto mb-8">
                <img
                    src="/banner-main.jpg" // Make sure to replace this with your actual image path
                    alt="Modern property"
                    id="banner-main-image"
                    className="w-full h-auto rounded shadow-md"
                />
            </div>

            {/* Bottom Subheading */}
            <div className="text-lg md:text-[48px] font-semibold mb-2 flex flex-col items-center gap-4">
                <div className="flex gap-2 items-center">
                    <span id="see-text" style={{ position: "relative", zIndex: 10 }}>SEE</span>
                    <span id="your-text">YOUR</span>

                    <img
                        id="your-image"
                        src="/banner-thumb1.jpg"
                        alt="Interior 1"
                        className="h-24 w-[200px] object-cover rounded-sm shadow"
                    />

                    <span className="italic text-red-600 font-medium">SPACE</span>
                </div>


                {/* Inline Images */}
                <div  className="flex gap-2 items-center" id="lens-animation">
                    <img
                        id="lens-image"
                        src="/banner-thumb2.jpg"
                        alt="Interior 2"
                        className="h-24 w-[200px] object-cover rounded-sm shadow "
                    />
                    <span id="lens-caption" className="italic text-white ">
                        THROUGH A NEW LENS
                    </span>
                </div>

            </div>
        </section>
    );
}
