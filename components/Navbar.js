import React, { useState } from "react";
import Logo from "./Logo";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = ({ views }) => {
  const [openNav, setOpenNav] = useState(false);
  const navLinks = [
    {
      name: "about",
      path: "#about",
      inView: views?.aboutView,
    },
    {
      name: "services",
      path: "#services",
      inView: views?.servicesView,
    },
    {
      name: "bookings",
      path: "#bookings",
      inView: views?.bookingsView,
    },
    {
      name: "contact",
      path: "#contact",
      inView: views?.contactView,
    },
  ];

  const handleNav = () => {
    if (window.scrollY === 0) {
      window.scrollTo(0, window.scrollY + 1);
    } else {
      window.scrollTo(0, window.scrollY - 1);
    }

    if (openNav) {
      setOpenNav(false);
    } else {
      setOpenNav(true);
    }
  };

  return (
    <nav className="universal py-7 flex justify-between items-center sticky top-0 bg-white shadow-sm z-[10]">
      <Logo />

      {/* links */}
      <ul className="hidden sm:flex justify-center items-center gap-10">
        {navLinks?.map((link, index) => {
          const { name, path, inView } = link;
          return (
            <li key={index}>
              <a
                href={path}
                className={`capitalize hover:text-[#ff6483] ${
                  inView && "text-[#4499cd]"
                }`}
              >
                {name}
              </a>
            </li>
          );
        })}
      </ul>

      {/* hamburger */}
      <div
        className="sm:hidden flex justify-center items-center cursor-pointer"
        onClick={handleNav}
      >
        <MenuIcon />
      </div>

      {/* mobile nav */}
      <div
        className={`${
          openNav ? "flex" : "hidden"
        } sm:hidden flex-col justify-center items-center h-full w-full fixed top-0 left-0 bg-white gap-10`}
        data-aos="zoom-out"
      >
        <div className="animate-pulse cursor-pointer" onClick={handleNav}>
          <CloseIcon />
        </div>

        <Logo handleNav={handleNav} />

        <ul className="flex flex-col justify-center items-center gap-10">
          {navLinks?.map((link, index) => {
            const { name, path, inView } = link;
            return (
              <li key={index}>
                <a
                  href={path}
                  className={`capitalize active:text-[#ff6483] ${
                    inView && "text-[#4499cd]"
                  }`}
                  onClick={handleNav}
                >
                  {name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* socials side by side */}
        <div className="mt-5 flex gap-3">
          <a href="#">
            <InstagramIcon className="active:text-[#ff6483]" fontSize="small" />
          </a>
          <a href="#">
            <FacebookIcon className="active:text-[#ff6483]" fontSize="small" />
          </a>
          <a href="#">
            <LinkedInIcon className="active:text-[#ff6483]" fontSize="small" />
          </a>
          <a href="#">
            <TwitterIcon className="active:text-[#ff6483]" fontSize="small" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
