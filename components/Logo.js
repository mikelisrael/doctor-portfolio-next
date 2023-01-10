import React from "react";

const Logo = ({ handleNav }) => {
  return (
    <a
      href="#home"
      className="logo capitalize py-3 px-4 w-max cursor-pointer"
      onClick={handleNav}
    >
      DR. WILLIAM
    </a>
  );
};

export default Logo;
