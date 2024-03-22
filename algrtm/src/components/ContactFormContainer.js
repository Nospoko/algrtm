"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactFormContainer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="w-full">
        <div className="">
          <form className="flex flex-wrap -m-2" ref={form} onSubmit={sendEmail}>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="t6 text-neutralLight-neutral20 "
                >
                  Name
                </label>
                <input
                  placeholder="Enter your name and surname..."
                  type="text"
                  id="name"
                  name="your_name"
                  className="w-full bg-neutralLight-neutral100 bg-opacity-50 rounded border border-neutralLight-neutral60 focus:border-blueLight-blue50 focus:bg-neutralLight-neutral100 focus:ring-2 text-base outline-none text-neutralLight-neutral20 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="t6 text-neutralLight-neutral20 "
                >
                  Your email
                </label>
                <input
                  placeholder="Enter your email address..."
                  type="email"
                  id="email"
                  name="your_email"
                  className="w-full bg-neutralLight-neutral100 bg-opacity-50 rounded border border-neutralLight-neutral60 focus:border-blueLight-blue50 focus:bg-neutralLight-neutral100 focus:ring-2 text-base outline-none text-neutralLight-neutral20 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="t6 text-neutralLight-neutral20 "
                >
                  Tell us more
                </label>
                <textarea
                  placeholder="Tell us more..."
                  id="message"
                  name="message"
                  className="w-full bg-neutralLight-neutral100 bg-opacity-50 rounded border border-neutralLight-neutral60 focus:border-blueLight-blue50 focus:bg-neutralLight-neutral100 focus:ring-2 h-32 text-base outline-none text-neutralLight-neutral20 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 flex justify-end items-end w-full">
              <button className="text-neutralLight-neutral100 bg-neutralLight-neutral10 border-0 py-2 px-8 focus:outline-none hover:bg-blueLight-blue50 rounded p3SB transition ease-in-out duration-300 animationSmall">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormContainer;