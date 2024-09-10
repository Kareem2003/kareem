import React, { useState, useEffect } from "react";
import { ImCancelCircle } from "react-icons/im";
import { HiMiniBars3 } from "react-icons/hi2";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div className="relative flex mb-12 justify-between items-center">
      {/* Logo */}
      <div className="flex text-3xl z-20">
        <h1 className="font-bold">Kareem</h1>
        <span className="font-bold text-primary">.</span>
      </div>

      {/* Hamburger Icon */}
      <div className="lg:hidden z-20">
        <button
          onClick={toggleMenu}
          className="text-3xl relative focus:outline-none transition-transform duration-300"
        >
          {/* Hamburger Icon */}
          <span
            className={`transition-transform duration-500 ease-in-out ${
              isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
            }`}
          >
            <HiMiniBars3 />
          </span>
          {/* Close Icon */}
          <span
            className={`transition-transform duration-500 ease-in-out absolute inset-0 ${
              isOpen ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
            }`}
          >
            <ImCancelCircle />
          </span>
        </button>
      </div>

      {/* Full-Screen Dropdown Menu */}
      <ul
        className={`fixed inset-0 flex flex-col justify-center items-center gap-7 text-3xl text-center transition-transform transform ${
          isOpen ? "translate-x-0 bg-gray " : "translate-x-full"
        } lg:relative lg:translate-x-0 lg:flex lg:flex-row lg:bg-transparent lg:gap-7 lg:text-lg lg:justify-end`}
      >
        <li className="relative">
          <a
            href="#"
            className="hover:text-primary before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
          >
            Home
          </a>
        </li>
        <li className="relative">
          <a
            href="#"
            className="hover:text-primary before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
          >
            Resume
          </a>
        </li>
        <li className="relative">
          <a
            href="#"
            className="hover:text-primary before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
          >
            Certificates
          </a>
        </li>
        <li className="relative">
          <a
            href="#"
            className="hover:text-primary before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
          >
            Projects
          </a>
        </li>
        <li className="relative">
          <a
            href="#"
            className="hover:text-primary before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
