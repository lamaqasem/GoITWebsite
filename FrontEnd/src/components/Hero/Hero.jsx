import React from "react";
import hero from "../../assets/hero.png";

export default function Hero() {
  return (
    <div
      className="h-screen flex relative flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <h2 className="text-white text-center mb-8 text-3xl max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        <br />
        Consequatur nesciunt nulla similique cupiditate <br />
        dolores facilis corrupti in impedit vitae aliquid.
      </h2>

      <div className="flex gap-4">
        <button className="bg-white  font-bold py-3 px-6 rounded-full hover:scale-75">
          Button 1
        </button>
        <button className="bg-green-500  font-bold py-3 px-6 rounded-full hover:scale-75  ">
          Button 2
        </button>
      </div>

      <div
        className=" hidden md:block
         bg-green-400 w-[700px] rounded-3xl h-20 mt-10 absolute mt-[740px] hover:scale-105 transition-transform duration-300 cursor-pointer flex items-center justify-center"
      ></div>
    </div>
  );
}
