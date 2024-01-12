import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Home = () => {
  const toLinkedin = () => {
    const externalLink = "https://www.linkedin.com/in/ravenjugalbot/";
    window.open(externalLink, "_blank");
  };

  const toGithub = () => {
    const externalLink = "https://github.com/ravenncode";
    window.open(externalLink, "_blank");
  };

  return (
    <div
      id="home"
      className="relative bg-zinc-800 px-4 md:px-20 xl:px-40 pt-20 lg:pt-40 pb-32 xl:h-screen flex flex-col justify-center"
    >
      <div className="md:container md:mx-auto">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center ">
          <div className="text-center lg:text-left text-white">
            <p className="font-[800] text-3xl lg:text-4xl tracking-tight">
              Hello, I'm
            </p>
            <p className="font-[900] text-5xl lg:text-7xl lg:-ml-1 mb-4">
              Raven <span className="text-indigo-700">Jugalbot</span>
            </p>
            <p className="text-white text-base lg:text-lg">
              A passionate{" "}
              <span className="font-[800] text-xl lg:text-2xl">
                Web Developer{" "}
              </span>
              based in Cagayan de Oro, Philippines. 📍
            </p>
            <div className="mt-7 -ml-1">
              <button
                onClick={toGithub}
                className="rounded-full outline outline-2 hover:text-indigo-500 p-1.5 mx-1.5 transition ease-in-out"
              >
                <GitHubIcon fontSize="medium" />
              </button>
              <button
                onClick={toLinkedin}
                className="rounded-full outline outline-2 hover:text-indigo-500 p-1.5 mx-1.5 transition ease-in-out"
              >
                <LinkedInIcon fontSize="medium" />
              </button>
            </div>
            <br />
            <br />
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="no-underline"
            >
              <button
                type="button"
                className="bg-indigo-500 hover:bg-indigo-600 transition-transform transform hover:translate-y-0.5 text-white px-12 py-3 rounded-md font-bold text-md tracking-wider"
              >
                PROJECTS
              </button>
            </ScrollLink>
          </div>
          <div className="flex justify-center items-center lg:ml-40">
            <div className="blob scale-[60%] sm:scale-75 lg:scale-100"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[2rem] left-1/2 transform -translate-x-1/2">
        <ChevronDoubleDownIcon className="h-10 w-10 text-white animate-bounce" />
      </div>
    </div>
  );
};

export default Home;
