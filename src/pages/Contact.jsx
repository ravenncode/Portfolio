import React, { useState } from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import chatting from "../images/chatting.svg";

const Contact = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleClick = () => {
    setButtonDisabled(true);
  };
  return (
    <div id="contact" className="bg-white px-4 md:px-20 xl:px-40 py-32">
      <p className="text-gray-900 font-[800] text-4xl tracking-widest text-center mb-6 heading">
        CONTACT ME
      </p>
      <p className="text-center text-gray-500 mb-20 lg:text-xl px-4">
        Get in touch. I'll respond at my earliest convenience.
      </p>

      <div className="md:container md:mx-auto">
        {/* Get in touch */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-10 mb-5 lg:mb-20 px-4">
          <div className="p-6 border-2 rounded-xl">
            <div className="flex align-items-center">
              <div className="py-3">
                <MapPinIcon className="h-7 w-7 text-indigo-500" />
              </div>
              <div className="ml-4 text-gray-800">
                <p className="font-bold text-xl">Location</p>
                <p className="text-sm lg:text-base">
                  Cagayan de Oro, Philippines
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 border-2 rounded-xl">
            <div className="flex align-items-center">
              <div className="py-3">
                <PhoneIcon className="h-7 w-7 text-indigo-500" />
              </div>
              <div className="ml-4 text-gray-800">
                <p className="font-bold text-xl">Phone</p>
                <p className="text-sm lg:text-base">(+63) 975 626 1803</p>
              </div>
            </div>
          </div>
          <div className="p-6 border-2 rounded-xl">
            <div className="flex align-items-center">
              <div className="py-3">
                <EnvelopeIcon className="h-7 w-7 text-indigo-500" />
              </div>
              <div className="ml-4 text-gray-800">
                <p className="font-bold text-xl">Email</p>
                <p className="text-sm lg:text-base">
                  developer.raven21@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col gap-10 lg:flex-row lg:justify-between mb-20 p-4">
          <div className="flex">
            <div className="bg-white rounded-full my-shadow p-3">
              <MapPinIcon className="h-7 w-7 text-indigo-500" />
            </div>
            <div className="ml-4 text-gray-800">
              <p className="font-bold text-xl">Location</p>
              <p className="text-sm lg:text-base">
                Cagayan de Oro, Philippines
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="bg-white rounded-full my-shadow p-3">
              <PhoneIcon className="h-7 w-7 text-indigo-500" />
            </div>
            <div className="ml-4 text-gray-800">
              <p className="font-bold text-xl">Phone</p>
              <p className="text-sm lg:text-base">(+63) 975 626 1803</p>
            </div>
          </div>
          <div className="flex">
            <div className="bg-white rounded-full my-shadow p-3">
              <EnvelopeIcon className="h-7 w-7 text-indigo-500" />
            </div>
            <div className="ml-4 text-gray-800">
              <p className="font-bold text-xl">Email</p>
              <p className="text-sm lg:text-base">
                developer.raven21@gmail.com
              </p>
            </div>
          </div>
        </div> */}
        {/* Get in touch end */}

        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between px-4 mb-10">
          <div className="flex align-middle">
            <img
              src={chatting}
              className="lg:w-[26rem] xl:w-[30rem] hidden lg:block"
            />
          </div>
          <div className="bg-white border-solid border-1 rounded-md p-0 w-full lg:w-1/2">
            <p className="font-bold text-3xl mb-2">Write Me a Message</p>
            <p className=" text-gray-500 mb-10 lg:text-xl">
              Feel free to contact me by filling out the form below. 👇
            </p>
            <form
              action="https://formsubmit.co/b141c7089d169825a13c60d4a1473436"
              method="POST"
              onSubmit={handleClick}
            >
              <div className="grid lg:grid-cols-2 gap-4 mb-4">
                <div>
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_subject"
                    value="Someone sent you a message from your portfolio!"
                  ></input>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name*"
                    className="block w-full rounded-md border-0 bg-gray-100 p-4 focus:outline-none font-semibold"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email*"
                    className="block w-full rounded-md border-0 bg-gray-100 p-4 focus:outline-none font-semibold"
                    required
                  />
                </div>
              </div>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message*"
                rows="8"
                className="block w-full rounded-md border-0 bg-gray-100 p-4 focus:outline-none font-semibold"
                style={{ resize: "none" }}
                required
              />
              <br />
              <br />
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 transition-transform transform hover:translate-y-0.5 text-white px-12 py-3 rounded-md font-bold text-md tracking-wider w-full sm:w-auto"
                disabled={isButtonDisabled}
              >
                {isButtonDisabled ? "SUBMITTING..." : "SUBMIT"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
