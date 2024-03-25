"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import FormField from "./shared/FormField";
import validateForm from "@/utils/validation";

const ContactFormContainer = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();

    const name = e.target.your_name.value;
    const email = e.target.your_email.value;
    const message = e.target.message.value;

    const validationErrors = validateForm(name, email, message);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

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
          setErrors({});
          alert("Email sent");
        },
        (error) => {
          console.error("FAILED...", error);
          if (error.text) {
            console.error("Error Text:", error.text);
          } else {
            console.error("Unknown Error:", error);
          }
        }
      )
      .catch((error) => {
        console.error("Catch Error:", error);
      });
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="w-full">
        <div className="">
          <form className="flex flex-wrap -m-2" ref={form} onSubmit={sendEmail}>
            <FormField
              label="Your name"
              placeholder="Enter your name and surname..."
              type="text"
              id="name"
              name="your_name"
              fieldType="input"
              errors={errors}
            />

            <FormField
              label="Your email"
              placeholder="Enter your email..."
              type="text"
              id="email"
              name="your_email"
              fieldType="input"
              errors={errors}
            />

            <FormField
              label="Tell us more"
              placeholder="Tell us more..."
              type="text"
              id="message"
              name="message"
              fieldType="textarea"
              errors={errors}
            />

            <div className="p-2 flex justify-end items-end w-full">
              <button className="text-neutralLight-neutral100 bg-neutralLight-neutral10 border-0 py-[0.635rem] px-[1.25rem] focus:outline-none hover:bg-blueLight-blue50 rounded-[0.5rem] p3SB transition ease-in-out duration-300 animationSmall h-[2.75rem]">
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
