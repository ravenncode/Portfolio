import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import techStackData from "../data/techStackData";

const About = () => {
  return (
    <div id="about" className="bg-white px-4 md:px-20 xl:px-40 py-32">
      <p className="text-gray-900 font-[800] text-4xl tracking-widest text-center mb-20 heading">
        ABOUT ME
      </p>
      <div className="md:container md:mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="p-4">
            <p className="text-2xl font-bold mb-10">Get to know me!</p>
            <p className="text-gray-500 lg:text-lg">
              I am a motivated Web Developer specializing in{" "}
              <b> Frontend Development </b>, backed by three years of valuable
              work experience and a Bachelor's degree in Information Technology.
              My expertise extends to <b>Backend Development</b>, ensuring that
              I can create seamless and efficient web solutions. My passion lies
              in crafting user-friendly designs and creating engaging and
              responsive user interfaces. Additionally, I am a dedicated team
              player who loves to collaborate, aiming to deliver high-quality
              web experiences and eager to take on new challenges in the
              ever-evolving digital landscape.
            </p>
            <br />
            <br />
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="no-underline"
            >
              <button
                type="button"
                className="bg-indigo-500 hover:bg-indigo-600 transition-transform transform hover:translate-y-0.5 text-white px-12 py-3 rounded-md font-bold text-md tracking-wider"
              >
                CONTACT
              </button>
            </ScrollLink>
          </div>
          <div className="bg-white p-4">
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
                    className="h-auto w-[60px] cursor-pointer hover:-translate-y-2 duration-150"
                  />
                  <p className="text-gray-500 text-sm text-center font-semibold mt-2">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
