import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import profile2 from "../images/profile2.png";

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
    <div id="home" className="bg-zinc-800 px-4 md:px-20 xl:px-40 py-32">
      <div className="md:container md:mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="p-4 text-white flex items-center">
            <div>
              <p className="font-[800] text-4xl tracking-wide mb-2">
                Hello, I'm
              </p>
              <p className="font-[900] text-7xl lg:-ml-1 mb-5">
                Raven <span className="text-indigo-500">Jugalbot</span>
              </p>
              <p className="lg:text-lg">
                A <b>Web Developer</b> based in Cagayan de Oro, Philippines. 📍
              </p>
              <div className="mt-8 -ml-1 mb-14">
                <button
                  onClick={toLinkedin}
                  className=" hover:text-indigo-500 transition ease-in-out"
                >
                  <LinkedInIcon fontSize="large" />
                </button>
                <button
                  onClick={toGithub}
                  className=" hover:text-indigo-500 ml-4 transition ease-in-out"
                >
                  <GitHubIcon sx={{ fontSize: 30 }} />
                </button>
              </div>
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
                  CONTACT ME
                </button>
              </ScrollLink>
            </div>
          </div>
          <div className="p-4">
            <img
              src={profile2}
              className="w-100 hover:-rotate-3 transition-transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
