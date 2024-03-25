import React from "react";
import Icon from "./Icon";

const CustomLink = ({ text, href, variant, icon, alt }) => {
  let linkClass =
    "flex justify-center items-center select-none text-sm font-medium font-semibold px-5 py-2 h-[2.75rem] rounded-md transition ease-in-out duration-300 animationSmall";

  if (variant === "primary") {
    linkClass +=
      " border border-neutralLight-neutral40 bg-neutralLight-neutral10 text-neutralLight-neutral100";
  } else if (variant === "secondary") {
    linkClass +=
      " border border-neutralLight-neutral80 bg-neutralLight-neutral100 text-neutralLight-neutral10";
  } else if (variant === "tertiary") {
    linkClass +=
      " bg-neutralLight-neutral100 text-neutralLight-neutral10 pl-0 pr-0";
  }

  return (
    <a className={linkClass} href={href}>
      {text}
      {icon && (
        <span className="ml-[0.01rem]">
          {icon && <Icon src={icon} alt={alt} />}
        </span>
      )}
    </a>
  );
};

export default CustomLink;
