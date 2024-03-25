import React from "react";

const TextArea = ({ type, placeholder, value, onChange, id, name }) => {
  return (
    <textarea
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      id={id}
      name={name}
      className="w-full bg-neutralLight-neutral100 bg-opacity-50 rounded-[0.5rem] border border-neutralLight-neutral60 focus:border-blueLight-blue50 focus:bg-neutralLight-neutral100 focus:ring-2 h-32 text-base outline-none py-[0.875rem] px-[1rem] resize-none leading-[1.32rem]  transition-colors duration-200 ease-in-out"
    />
  );
};

export default TextArea;
