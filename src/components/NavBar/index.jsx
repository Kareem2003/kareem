/* eslint-disable no-unused-vars */
import React from "react";

const NavBar = () => {
  return (
    <div className="flex mb-12  justify-between items-center">
      <div className="flex text-xl">
        <h1 className="font-bold">Kareem</h1>
        <span className="font-bold text-primary">.</span>
      </div>
      <ul className="flex gap-5 text-base">
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
