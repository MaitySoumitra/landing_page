// src/components/Banner.tsx
export default function Banner() {
  return (
    <section className="bg-gray-800 text-white py-10 px-4 text-center">
      {/* Top Heading */}
      <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
        CAPTURING THE <span className="italic text-red-600">ESSENCE</span><br />
        OF EVERY PROPERTY
      </h1>

      {/* Main Image */}
      <div className="max-w-4xl mx-auto mb-8">
        <img
          src="/banner-main.jpg" // Make sure to replace this with your actual image path
          alt="Modern property"
          className="w-full h-auto rounded shadow-md"
        />
      </div>

      {/* Bottom Subheading */}
      <div className="text-lg md:text-[48px] font-semibold mb-2 flex flex-col items-center gap-4">
        <div className="flex gap-2 items-center">
          SEE YOUR
          <img
            src="/banner-thumb1.jpg"
            alt="Interior 1"
            className="h-24 w-[200px] object-cover rounded-sm shadow"
          />
          <span className="italic text-red-600 font-medium">SPACE</span>
        </div>

        {/* Inline Images */}
        <div className="flex gap-2 items-center">
          
          <img
            src="/banner-thumb2.jpg"
            alt="Interior 2"
            className="h-24 w-[200px] object-cover rounded-sm shadow"
          />
        

        {/* Bottom Caption */}
        <div className="italic text-white ">
          THROUGH A NEW LENS
        </div>
        </div>
      </div>
    </section>
  );
}
