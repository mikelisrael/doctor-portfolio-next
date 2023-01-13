import React from "react";

const Logo = ({ handleNav, footer }) => {
  const goToHome = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button
      href="#home"
      className={`logo ${
        footer && "colored font-bold"
      } capitalize py-3 px-4 w-max cursor-pointer`}
      onClick={() => {
        if (handleNav) {
          handleNav();
        }
        goToHome();
      }}
    >
      DR. WILLIAM
    </button>
  );
};

export default Logo;
