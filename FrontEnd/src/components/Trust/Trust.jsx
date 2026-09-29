import React from "react";
import TrustImg from "../../assets/Trust.png";
import RightArrow from "../../assets/Right Arrow.png";

export default function Trust() {
  return (
    <>
      <div className="Trust py-20">
        <div className="container mx-auto flex flex-col lg:flex-row bg-indigo-100 lg:items-start items-center gap-10">
          <div className="flex justify-center lg:justify-start w-full lg:w-auto">
            <img
              src={TrustImg}
              alt="TrustImg"
              className="w-[280px] sm:w-[400px] lg:w-[500px] animate-bounce"
            />
          </div>

          <div className="persons w-full lg:w-auto">
            <h2 className="text-2xl text-indigo-800 font-bold text-center lg:text-left mb-7">
              Trusted BY
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
              <div className="person w-[120px] h-[90px] sm:w-[130px] sm:h-[100px] rounded-2xl bg-green-600 hover:scale-120 transition-all"></div>
              <div className="person w-[120px] h-[90px] sm:w-[130px] sm:h-[100px] rounded-2xl bg-green-600 hover:scale-120 transition-all"></div>
              <div className="person w-[120px] h-[90px] sm:w-[130px] sm:h-[100px] rounded-2xl bg-green-600 hover:scale-120 transition-all"></div>
              <div className="person w-[120px] h-[90px] sm:w-[130px] sm:h-[100px] rounded-2xl bg-green-600 hover:scale-120 transition-all"></div>
              <div className="person w-[120px] h-[90px] sm:w-[130px] sm:h-[100px] rounded-2xl bg-green-600 hover:scale-120 transition-all"></div>
              <div className="person w-[120px] h-[90px] sm:w-[130px] sm:h-[100px] rounded-2xl bg-green-600 hover:scale-120 transition-all"></div>
            </div>
          </div>
        </div>

        <div className=" flex flex-row-reverse ml-[600px]   bootoms mt-5    flex flex-col md:flex-row items-center justify-center       md:justify-start gap-4 md:gap-6 px-4 md:px-0">
          <div className=" hover:scale-120 transition-all w-[200px] sm:w-[280px] md:w-[300px] h-[80px] sm:h-[100px] bg-blue-950 rounded-3xl"></div>

          <img
            src={RightArrow}
            alt="RightArrow"
            className="w-[200px] sm:w-[250px] md:w-[300px] h-[80px] sm:h-[100px]  animate-ping "
          />
        </div>
      </div>
    </>
  );
}
