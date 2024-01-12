import React, { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import r from "../images/r.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleNav = () => {
    setOpen(!open);
  };

  let Links = [
    { name: "HOME", link: "home" },
    { name: "ABOUT", link: "about" },
    { name: "PROJECTS", link: "projects" },
    { name: "CONTACT", link: "contact" },
  ];

  const openPDF = () => {
    const pdfPath = "../RESUME.pdf";
    window.open(pdfPath, "_blank");
  };

  return (
    <nav className="bg-zinc-800 w-full drop-shadow-md px-7 lg:px-10 xl:px-20 py-7 fixed top-0 z-10">
      <div className="lg:flex justify-between items-center">
        <div
          className={`lg:pb-0 lg:border-0 ${
            open
              ? "pb-7 border border-t-0 border-x-0 border-b-gray-200"
              : "pb-0"
          }`}
        >
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="text-gray-800 hover:text-indigo-600 font-[700] text-lg tracking-wider cursor-pointer"
            onClick={open ? handleNav : () => {}}
          >
            {/* <img
              src={r}
              className="h-10 w-10 cursor-pointer hover:scale-110 duration-300 ease-in-out"
            /> */}
            <p className="font-[900] text-indigo-500 hover:text-indigo-700 text-2xl">
              RJDEV
            </p>
          </ScrollLink>
        </div>
        <div onClick={handleNav} className="absolute right-6 top-6 lg:hidden">
          {open ? (
            <XMarkIcon className="w-8 h-8 text-gray-800 hover:text-indigo-600 cursor-pointer" />
          ) : (
            <Bars3Icon className="w-8 h-8 text-gray-800 hover:text-indigo-600 cursor-pointer" />
          )}
        </div>
        <div
          className={`lg:flex lg:items-center text-center ${
            open ? "block" : "hidden"
          }`}
        >
          <ul className="lg:flex lg:space-x-20">
            {Links.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.link}
                smooth={true}
                duration={500}
                className="font-bold tracking-widest duration-500"
                onClick={handleNav}
              >
                <li className="lg:py-0 py-7 text-white hover:text-indigo-500 cursor-pointer border border-t-0 border-x-0 border-b-gray-200 lg:border-0">
                  {link.name}
                </li>
              </ScrollLink>
            ))}
          </ul>
          <button
            type="button"
            onClick={openPDF}
            className="bg-indigo-500 hover:bg-indigo-600 transition-transform transform hover:translate-y-0.5 text-white px-4 py-2 rounded-md font-bold text-sm tracking-widest lg:ml-10 lg:my-0 my-7"
          >
            <div className="flex items-center">
              <ArrowDownTrayIcon className="w-4 h-4 mr-2" /> RESUME
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
