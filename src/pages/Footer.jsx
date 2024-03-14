import React from "react";
import socialData from "../data/socialData";
import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  const toSocial = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="bg-zinc-800 h-auto py-10 px-8 md:px-20">
      <section className="text-white mb-10">
        <div className="flex justify-center">
          <div className="mb-14 text-center">
            <p className="font-bold text-xl lg:text-2xl tracking-wider mb-4 ml-1">
              RAVEN JUGALBOT
            </p>
            {socialData.map((social) => (
              <button
                key={social.name}
                onClick={() => toSocial(social.link)}
                className="hover:scale-125 mr-4 transition duration-100 ease-in-out"
              >
                <social.icon sx={{ fontSize: 30 }} />
              </button>
            ))}
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
