import React from "react";

const Header = () => {
  return (
    <header>
      <section className="hero relative flex gap-0 xl:gap-10 px-12 lg:px-32 overflow-hidden">
        <div className="w-full hidden md:flex items-end justify-end">
          <div className="w-[350px] lg:w-[450px] img_container">
            <img src="/doc-portrait.png" className="w-full" alt="" />
          </div>
        </div>

        <div className="w-full self-center">
          <h3 className="second_font text-3xl text-white">Hi, I am</h3>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2">
            Dr. William Donaldson
          </h1>

          <blockquote className="max-w-[300px] md:max-w-[600px] lg:max-w-full text-lg text-white mt-4">
            Highly motivated and committed General Practitioner with 10+ years
            experience in public and private practice.
          </blockquote>

          <div className="mt-8 w-max flex flex-col sm:flex-row gap-3">
            <button className="main_btn transparent">Book Appointment</button>
            <a href="#about" className="main_btn filled">
              More Information
            </a>
          </div>

          {/* help positioning */}
          <div className="mt-10 flex flex-wrap gap-3 link_icons">
            <div className="h-8 w-8"></div>
            <div className="h-8 w-8"></div>
            <div className="h-8 w-8"></div>
            <div className="h-8 w-8"></div>
          </div>
        </div>

        <div className="img_small w-[250px] sm:w-[250px] absolute block md:hidden bottom-[-35px] right-0">
          <img src="/doc-portrait.png" className="w-full" alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;
