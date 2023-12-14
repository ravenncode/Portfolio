import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-100 px-4 md:px-20 xl:px-40 py-32">
      <p className="text-gray-900 font-[800] text-4xl tracking-widest text-center mb-6 heading">
        CONTACT ME
      </p>
      <p className="text-center text-gray-500 mb-20 lg:text-xl px-4">
        Feel free to contact me by filling out the form below. I'll respond at
        my earliest convenience.
      </p>
      <div className="md:container md:mx-auto">
        <div className="flex justify-center px-2 md:px-6">
          <section className="bg-white border-solid border-1 drop-shadow-2xl rounded-md p-6 sm:p-12 w-full lg:w-3/4">
            <form
              action="https://formsubmit.co/b141c7089d169825a13c60d4a1473436"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="Someone sent you a message from your portfolio!"
              ></input>
              <label
                htmlFor="name"
                className="block font-bold text-sm tracking-wide leading-6 text-gray-600 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
                className="block w-full rounded-md border-0 bg-gray-100 p-4 focus:outline-none font-semibold"
                required
              />
              <br />
              <br />
              <label
                htmlFor="name"
                className="block font-bold text-sm tracking-wide leading-6 text-gray-600 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className="block w-full rounded-md border-0 bg-gray-100 p-4 focus:outline-none font-semibold"
                required
              />
              <br />
              <br />
              <label
                htmlFor="message"
                className="block font-bold text-sm tracking-wide leading-6 text-gray-600 mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Enter Your Message"
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
              >
                SUBMIT
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
