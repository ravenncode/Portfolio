import React from "react";
import project1 from "../images/portfolio.png";
import portfolioData from "../data/portfolioData";

const Projects = () => {
  return (
    <div id="projects" className="bg-gray-50 px-4 md:px-20 py-32">
      <p className="text-gray-900 font-[800] text-4xl tracking-widest text-center mb-20 heading">
        PROJECTS
      </p>
      <div className="md:container md:mx-auto">
        <div className="grid xl:grid-cols-5 xl:gap-8">
          <div className="col-span-3 p-4">
            <img
              src={project1}
              alt="Portfolio"
              className="cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
          <div className="col-span-2 p-6 flex flex-col justify-center items-center text-center xl:items-start xl:text-left">
            <p className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8">
              Portfolio Website
            </p>
            <p className="text-gray-500 lg:text-lg mb-7">
              Explore my digital portfolio – a curated collection of my passion
              for web development. As a Web Developer, I've crafted this space
              to showcase my journey in creating meaningful and innovative
              digital solutions.
            </p>
            <p className="text-gray-500 font-bold text-md tracking-wide mb-3">
              Built With
            </p>
            <div className="flex flex-wrap gap-5">
              {portfolioData.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col justify-center items-center"
                >
                  <img
                    src={tech.image}
                    alt={tech.alt}
                    className="h-auto w-10 lg:w-[40px] cursor-pointer hover:-translate-y-2 duration-150"
                  />
                  <p className="text-gray-500 text-[0.65rem] text-center font-bold mt-2">
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

export default Projects;
