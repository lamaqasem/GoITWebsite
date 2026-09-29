import React, { useState } from "react";
import addressicon from "../../assets/addressicon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full h-30 bg-[#2C2C54] flex items-center justify-between px-10 relative">
      <div>
        <img
          src={addressicon}
          alt="Address Icon"
          className="h-45 object-contain"
        />
      </div>

      <ul className="hidden md:flex gap-9 text-white text-lg font-medium absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Link to="/home" className="cursor-pointer hover:text-gray-300">
          Home
        </Link>
        <Link to="/about" className="cursor-pointer hover:text-gray-300">
          About Us
        </Link>
        <Link to="/services" className="cursor-pointer hover:text-gray-300">
          Services
        </Link>
        <Link to="/client" className="cursor-pointer hover:text-gray-300">
          Client
        </Link>
      </ul>

      <div
        className="text-white text-2xl cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>

      {open && (
        <ul className="flex flex-col gap-4 text-white text-lg font-medium absolute top-full right-10 bg-[#2C2C54] p-4 rounded-md md:hidden">
          <Link to="/home" className="cursor-pointer hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="cursor-pointer hover:text-gray-300">
            About Us
          </Link>
          <Link to="/services" className="cursor-pointer hover:text-gray-300">
            Services
          </Link>
          <Link to="/client" className="cursor-pointer hover:text-gray-300">
            Client
          </Link>
        </ul>
      )}
    </nav>
  );
}
