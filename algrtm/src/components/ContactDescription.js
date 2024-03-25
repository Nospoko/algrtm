import React from "react";
import CustomLink from "./shared/CustomLink";

const ContactDescription = () => {
  return (
    <section className="flex flex-col gap-6 max-w-[22.375rem] w-full">
      <h2 className=" h2 text-neutralLight-neutral10 leading-[4rem] ">
        Contact
      </h2>
      <div className="flex flex-col gap-4">
        <h6 className="h6 text-neutralLight-neutral20 leading-[1.98rem]">
          Let's explore how we can work together. Share your algorithmic ideas,
          and we’ll provide the expertise to bring them to life.
        </h6>
        <div className="flex gap-4 items-start">
          {/* TODO add link href */}
          <CustomLink variant="secondary" text="Book a meeting" href="" />

          {/* TODO add link href */}

          <CustomLink
            variant="tertiary"
            text="Go to the questionnaire"
            href=""
            icon="/ArrowUpRightBlack-icon.svg"
            alt="arrow up icon"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactDescription;
