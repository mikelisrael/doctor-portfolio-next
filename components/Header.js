import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Header = () => {
  return (
    <header>
      <section className="hero relative h-[80vh] md:h-[90vh] flex gap-0 xl:gap-10 px-12 lg:px-32 overflow-hidden">
        <div className="w-full hidden md:flex items-end justify-end">
          <div className="w-[350px] lg:w-[450px]">
            <img src="/doc-portrait.png" className="w-full" alt="" />
          </div>
        </div>

        <div className="w-full self-center">
          <h3 className="second_font text-3xl text-white">Hi, I am</h3>
          <h1 className="text-6xl font-black text-white mt-2">DR. John Doe</h1>

          <blockquote className="w-full text-lg text-white mt-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </blockquote>

          <div className="mt-8 w-max flex flex-col sm:flex-row gap-3">
            <button className="main_btn transparent">Book Appointment</button>
            <button className="main_btn filled">More Information</button>
          </div>

          {/* socials side by side */}
          <div className="mt-10 flex gap-3">
            <a href="#" className="text-white">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="#" className="text-white">
              <FacebookIcon fontSize="large" />
            </a>
            <a href="#" className="text-white">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="#" className="text-white">
              <TwitterIcon fontSize="large" />
            </a>
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
