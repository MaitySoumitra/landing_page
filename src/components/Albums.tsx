import AlbumsAnimation from "./Animations/AlbumAnimation"

export default function Albums() {
  return (
    <div className="bg-gray-800 text-white min-h-screen flex flex-col items-center ">
      {/* Top Headings */}
      <AlbumsAnimation/>
      <div className="text-center mt-8 lg:mb-20 md:mb-10 mb-6 relative z-10">
        <h2 className="lg:text-base text-[10px] tracking-wide uppercase mb-2" id="subtitle">
          COMMERCIAL, ARCHITECTURAL AND INTERIORS PHOTOGRAPHY
        </h2>

        <h1
          className="text-[50px] sm:text-[100px] lg:text-[160px] leading-[1] font-extrabold tracking-wide bg-clip-text text-transparent"
          id="main-title"
          style={{
            backgroundImage:
              "linear-gradient(90deg, white 50%, #ef4444 50%)", // white and red 50% split
            backgroundSize: "200% 100%",
            backgroundPosition: "0% center",
          }}
        >
          ALBUMS
        </h1>
      </div>

      {/* 3-Column Layout */}
      <div className="flex flex-col md:flex-row  w-full max-w-[1280px] px-6 ">
        {/* LEFT COLUMN */}
        <div className="w-full lg:w-1/3">
          <img
            src="/resi.jpg"
            alt="Residential"
            className="object-cover w-[377px] md:h-[460px] h-[260px] rounded-lg shadow-lg blur-img"
            id="left-img"
          />
        </div>

        {/* CENTER COLUMN: Only Text */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center items-center md:space-y-6 space-y-3 text-center">
          <h2 className="lg:text-[45px] md:text-[32px] font-extrabold text-red-500 italic">
            RESIDENTIAL
          </h2>
          <h2 className="lg:text-[45px] md:text-[32px] font-bold text-gray-400 italic">
            COMMERCIAL
          </h2>
          <h2 className="lg:text-[45px] md:text-[32px] font-bold text-gray-400 italic">
            AERIAL DRONE
          </h2>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full lg:w-1/3 relative h-[290px]">
          <img
            src="/com.jpg"
            alt="Commercial"
            className="md:p-8 lg:p-0 p-0 object-cover w-[312px] md:h-[373px] h-[200px] rounded-lg shadow-lg absolute top-0 right-0 blur-img"
            id="right-top-img"
          />
          <img
            src="/aerial-drone.jpg"
            alt="Aerial Drone"
            className="object-cover w-[190px] md:h-[227px] h-[150px] rounded-lg shadow-lg absolute md:top-58 top-25 blur-img"
            id="right-bottom-img"
          />
        </div>
      </div>

     <div className="max-w-[1283px] mx-auto mt-10 mb-10 flex flex-col items-center relative">
  <h2
    className="lg:text-[55px] md:text-[40px] text-base font-bold text-center uppercase absolute lg:top-[-20px]  md:top-[-10px] top-[10px]"
    id="clean-eye-text"
  >
    <span id="left-part" className="text-red-600 italic">A Clean Eye for </span>
    <span id="beautiful-part" className="text-white italic">Beautiful </span>
    <span id="right-part" className="text-red-600 italic">Spaces</span>
  </h2>
  <img src="/spaces.jpg" alt="Divider" className="w-full h-auto mt-6" />
</div>

    </div>
  );
}
