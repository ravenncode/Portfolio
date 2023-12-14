import React from "react";
import socialData from "../data/socialData";
import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  const toSocial = (link) => {
    window.open(link, "_blank");
    console.log(link);
  };

  return (
    <div className="bg-zinc-800 h-auto py-10 px-8 md:px-20">
      <section className="text-white mb-20">
        <div className="grid lg:grid-cols-2 lg:gap-20">
          <div className="mb-14 text-left">
            <p className="font-bold text-xl lg:text-2xl tracking-wider mb-4 ml-1">
              RAVEN JUGALBOT
            </p>
            {socialData.map((social) => (
              <button
                key={social.name}
                onClick={() => toSocial(social.link)}
                className="rounded-full outline outline-6 p-1.5 hover:scale-125 mr-4 transition duration-100 ease-in-out"
              >
                <social.icon fontSize="medium" />
              </button>
            ))}
          </div>
          <div>
            <p className="text-lg lg:text-2xl font-[900] tracking-wide mb-6 text-left">
              GET IN TOUCH
            </p>
            <div className="flex items-center justify-start mb-5">
              <MapIcon className="h-7 w-7 mr-5" />
              <div>
                <p className="font-bold text-base lg:text-lg">Location</p>
                <p className="text-sm lg:text-base">
                  Cagayan de Oro, Philippines
                </p>
              </div>
            </div>
            <div className="flex items-center justify-start mb-5">
              <PhoneIcon className="h-7 w-7 mr-5" />
              <div>
                <p className="font-bold text-base lg:text-lg">Phone</p>
                <p className="text-sm lg:text-base">(+63) 975 626 1803</p>
              </div>
            </div>
            <div className="flex items-center justify-start">
              <EnvelopeIcon className="h-7 w-7 mr-5" />
              <div>
                <p className="font-bold text-base lg:text-lg">Email</p>
                <p className="text-sm lg:text-base">
                  developer.raven21@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="opacity-25" />
      <section className="pt-10">
        <p className="text-xs md:text-[0.85rem] text-white text-center">
          All rights reserved © 2023. Made by{" "}
          <span className="font-bold">Nicole Raven Jugalbot</span>
        </p>
      </section>
    </div>
  );
};

export default Footer;
