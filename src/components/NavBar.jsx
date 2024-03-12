import React, { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import profile from "../images/profile-1.png";

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

  return (
    <nav className="bg-zinc-800 w-full px-7 lg:px-10 xl:px-20 py-7 fixed top-0 z-10">
      <div className="lg:flex justify-between items-center">
        <div
          className={`lg:pb-0 lg:border-0 ${
            open
              ? "pb-7 border border-t-0 border-x-0 border-b-zinc-800"
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
            <img src={profile} className="h-12" />
          </ScrollLink>
        </div>
        <div onClick={handleNav} className="absolute right-6 top-9 lg:hidden">
          {open ? (
            <XMarkIcon className="w-8 h-8 text-white hover:text-indigo-600 cursor-pointer" />
          ) : (
            <Bars3Icon className="w-8 h-8 text-white hover:text-indigo-600 cursor-pointer" />
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
                <li className="lg:py-0 py-7 text-white hover:text-indigo-500 cursor-pointer border border-t-0 border-x-0 border-b-zinc-800 lg:border-0">
                  {link.name}
                </li>
              </ScrollLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
