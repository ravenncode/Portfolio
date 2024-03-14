import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { CloudArrowDownIcon } from "@heroicons/react/24/solid";
import techStackData from "../data/techStackData";

const About = () => {
  const openPDF = () => {
    const pdfPath = "../RESUME.pdf";
    window.open(pdfPath, "_blank");
  };
  return (
    <div id="about" className="bg-white px-4 md:px-20 xl:px-40 py-32">
      <p className="text-gray-900 font-[800] text-4xl tracking-widest text-center mb-20 heading">
        ABOUT ME
      </p>
      <div className="md:container md:mx-auto">
        <div className="grid lg:grid-cols-5 gap-20">
          {/* First Column */}
          <div className="p-4 col-span-3 lg:col-span-2">
            <p className="text-2xl font-bold mb-10">Tech Stack</p>
            <div className="flex flex-wrap gap-7">
              {techStackData.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col justify-center items-center"
                >
                  <img
                    src={tech.image}
                    alt={tech.alt}
                    className="h-auto w-[50px] cursor-pointer hover:-translate-y-2 duration-150"
                  />
                  {/* <p className="text-gray-500 text-sm text-center font-semibold mt-2">
                    {tech.name}
                  </p> */}
                </div>
              ))}
            </div>
          </div>
          {/* Second Column */}
          <div className="p-4 col-span-3">
            <p className="text-2xl font-bold mb-4">Get to know me!</p>
            <p className="text-4xl font-[900] mb-4">
              I <span className="text-indigo-500">Design</span> &{" "}
              <span className="text-indigo-500">Develop </span>
              Web Solutions
            </p>
            <p className="text-gray-500 lg:text-lg">
              I am a passionate Web Developer specializing in{" "}
              <b> Frontend Development </b>, backed by three years of valuable
              work experience and a Bachelor's degree in Information Technology.
              My expertise extends to <b>Backend Development</b>, ensuring that
              I can create seamless and efficient web solutions. My passion lies
              in crafting user-friendly designs and creating engaging and
              responsive user interfaces.
            </p>
            <br />
            <br />
            <button
              type="button"
              onClick={openPDF}
              className="bg-indigo-500 hover:bg-indigo-600 transition-transform transform hover:translate-y-0.5 text-white px-12 py-3 rounded-md font-bold text-md tracking-wider"
            >
              <div className="flex items-center">
                <CloudArrowDownIcon className="w-8 mr-2" /> DOWNLOAD CV
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
