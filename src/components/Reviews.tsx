
import ReviewAnimation from "./Animations/ReviewAnimation";
import useIsDesktop from "./Responsive/IsDesktopView";
export default function Reviews() {
    const isDesktop = useIsDesktop();

    return (
        <div className="bg-gray-800 text-white md:py-10 py-4 px-4 flex flex-col items-center">
          <ReviewAnimation/>
  <div className="max-w-9xl justify-center mx-auto relative">
    {/* Section Title */}
    <div className="text-center mt-3 mb-10">
      <p className="text-lg text-center text-[#FFFFFF]">Words from the happy clients</p>

      <h1 className="text-[50px] sm:text-[100px] lg:text-[160px] leading-[1] font-extrabold tracking-wide bg-clip-text text-transparent"
       id="review-title"
          style={{
            backgroundImage:
              "linear-gradient(90deg, white 50%, #ef4444 50%)", // white and red 50% split
            backgroundSize: "200% 100%",
            backgroundPosition: "0% center",
          }}
      >
        REVIEWS
      </h1>
    </div>

    {/* Review Cards */}
    <div className="relative flex flex-col lg:flex-row gap-10 lg:gap-5">
      {/* Foreground Card (top layer) */}
      <div className="review-card bg-[#3B3B3B] p-[20px] sm:p-[50px] lg:p-[62px] shadow-lg  lg:max-w-[992px] md:max-w-[720px] max-w-[340px] max-h-[650px]  mx-auto z-20 relative">
        <div className="bg-white px-[10px] lg:px-[58px] py-[30px] lg:py-[83px]">
          <p className="text-[10px] sm:text-[16px] lg:text-[25px] text-[#333333] italic leading-relaxed mb-6 font-bold">
           I’ve been selling property in Melbourne for over 10 years, and Rob’s photography consistently delivers the best results I’ve seen. His ability to make each room feel spacious, warm, and inviting is second to none. Our listings get more engagement, more clicks, and more inspections when Rob’s images are featured. He’s also incredibly dependable—he always arrives on time, works quickly, and delivers final edits promptly. Our team trusts him completely, and so do our clients.
          </p>
          <div className="text-left text-[#161616] text-sm font-bold">
            <p>Emma Fraser, Senior Architect</p>
          </div>
        </div>
      </div>

      {/* Background Card (slightly visible behind) */}
      <div className="hidden md:block review-card bg-[#3B3B3B] p-[30px] sm:p-[50px] lg:p-[62px] shadow-lg max-w-full lg:max-w-[885px] md:max-w-[626px] max-h-[650px] mx-auto z-10 absolute top-[30px] sm:top-[20px] left-[0px] sm:left-[47px]">
        <div className="bg-white px-[30px] lg:px-[55px] py-[50px] lg:py-[80px]">
          <p className="text-[14px] sm:text-[16px] lg:text-[24px] text-[#333333] italic leading-relaxed mb-6 font-bold">
           I’ve been selling property in Melbourne for over 10 years, and Rob’s photography consistently delivers the best results I’ve seen. His ability to make each room feel spacious, warm, and inviting is second to none. Our listings get more engagement, more clicks, and more inspections when Rob’s images are featured. {isDesktop? "He’s also incredibly dependable—he always arrives on time, works quickly, and delivers final edits promptly. Our team trusts him completely, and so do our clients." :""}
          </p>
          <div className="text-left text-[#161616] text-sm font-bold">
            <p>Emma Fraser, Senior Architect</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}