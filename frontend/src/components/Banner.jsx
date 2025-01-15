import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BEST SELLERS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
