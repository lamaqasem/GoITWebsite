import React, { useState } from "react";

export default function CustomSlider() {
  const slides = [1, 2, 3, 4, 5];
  const [current, setCurrent] = useState(2);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="w-full bg-[#2B2E5B] py-20 overflow-hidden relative">
      <div className="flex justify-center gap-4 mb-10">
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
      </div>

      <div className="flex items-center justify-center gap-6 relative">
        <button
          onClick={prevSlide}
          className="absolute left-5 text-white text-3xl z-10"
        >
          ❮
        </button>

        {slides.map((slide, index) => {
          const isActive = index === current;
          const isSide =
            index === current - 1 ||
            index === current + 1 ||
            (current === 0 && index === slides.length - 1) ||
            (current === slides.length - 1 && index === 0);

          return (
            <div
              key={index}
              className={`
                transition-all duration-500 rounded-[60px] bg-green-600
                ${isActive ? "w-[260px] h-[420px] scale-110 z-20" : ""}
                ${isSide ? "w-[220px] h-[350px] opacity-70" : ""}
                ${!isActive && !isSide ? "hidden md:block opacity-30 w-[180px] h-[300px]" : ""}
              `}
            ></div>
          );
        })}

        <button
          onClick={nextSlide}
          className="absolute right-5 text-white text-3xl z-10"
        >
          ❯
        </button>
      </div>

      <div className="flex justify-center mt-12">
        <div className="bg-green-500 w-60 h-12 rounded-full"></div>
      </div>
    </section>
  );
}
