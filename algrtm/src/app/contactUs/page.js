import ContactDescription from "@/components/ContactDescription";
import ContactFormContainer from "@/components/ContactFormContainer";

import SolutionsSection from "@/components/SolutionsSection";
import RoundedRectangle from "@/components/shared/RoundedRectangle";
import React from "react";

const ContactUs = () => {
  return (
    <section className="flex flex-col items-start mt-[4.94rem] ">
      <div className="flex items-start gap-[4rem] mx-[12.5rem]">
        <ContactDescription />
        <ContactFormContainer />
      </div>
      <RoundedRectangle />
      <SolutionsSection version="version1" />
    </section>
  );
};

export default ContactUs;
