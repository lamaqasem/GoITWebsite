import React from "react";
import descriptionImg from "../../assets/Description.png";
import Arrows from "../../assets/Arrows.png";
export default function Description() {
  return (
    <>
      <div className="w-full h-150 flex ">
        <div>
          <img src={descriptionImg} alt="Description" className="     w-165" />
          <p className="text-emerald-950 mt-37.5  ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae, eos.
          </p>
        </div>

        <div>
          <img
            src={Arrows}
            alt="Arrows"
            className=" hidden md:block w-full mt-[100px]"
          />
        </div>
      </div>
    </>
  );
}
