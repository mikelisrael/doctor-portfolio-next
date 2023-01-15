import React from "react";
import Logo from "./Logo";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PublicIcon from "@mui/icons-material/Public";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Footer = () => {
  return (
    <footer>
      <div className="second_bg universal grid md:grid-cols-3 py-16 gap-16 md:gap-5">
        <section>
          <div className="mb-10">
            <Logo footer />
          </div>

          <div className="space-y-5">
            <p>
              As a doctor, people often think that we have all the answers, but
              the truth is, we're just really good at Googling symptoms and
              pretending we know what we're talking about.
            </p>

            <p>
              I am honored to have the opportunity to make a positive impact on
              the lives of my patients, and I am dedicated to providing the best
              care possible.
            </p>
          </div>
        </section>
        <section>
          <div className="mb-10 title_text font-bold text-xl">Learn more</div>

          <div className="space-y-5">
            <a
              href="https://www.health.harvard.edu/blog/3-easy-ways-to-eat-a-healthier-diet-2021010421673"
              target="_blank"
              rel="noreferrer"
              className="flex items-center md:items-start gap-1 hover:underline capitalize"
            >
              <KeyboardDoubleArrowRightIcon />
              <span>3 easy ways to eat a healthier diet</span>
            </a>
            <a
              href="https://www.everydayhealth.com/diet-and-nutrition/diet/us-news-best-diet-plans-mediterranean-dash-more/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center md:items-start gap-1 hover:underline capitalize"
            >
              <KeyboardDoubleArrowRightIcon />
              <span>Best and Worst Diets for 2023</span>
            </a>
            <a
              href="https://www.health.harvard.edu/diseases-and-conditions/preventing-the-spread-of-the-coronavirus"
              target="_blank"
              rel="noreferrer"
              className="flex items-center md:items-start gap-1 hover:underline capitalize"
            >
              <KeyboardDoubleArrowRightIcon />
              <span>Preventing the spread of the coronavirus</span>
            </a>
            <a
              href="https://www.proclinical.com/blogs/2022-4/top-10-new-medical-technologies-2022"
              target="_blank"
              rel="noreferrer"
              className="flex items-center md:items-start gap-1 hover:underline capitalize"
            >
              <KeyboardDoubleArrowRightIcon />
              <span>Top 10 new medical technologies 2022</span>
            </a>
          </div>
        </section>

        <section>
          <div className="mb-10 title_text font-bold text-xl">Contact Info</div>

          <div className="space-y-5">
            <p className="flex items-center md:items-start gap-3">
              <LocationOnIcon className="title_text" />
              <span>Grand Ave, Los Angeles, California, United States</span>
            </p>

            <p className="flex items-center md:items-start gap-3">
              <PhoneIcon className="title_text" />
              <span>+1 (704) 964-9448</span>
            </p>

            <p className="flex items-center md:items-start gap-3">
              <EmailIcon className="title_text" />{" "}
              <span>williamsdonaldson530 @gmail.com</span>
            </p>

            <p className="flex items-center md:items-start gap-3">
              <PublicIcon className="title_text" />{" "}
              <span className="break-all">williamsdonald.com</span>
            </p>
          </div>
        </section>
      </div>

      <div className="bg-white py-5 w-full">
        <center className="text-xs md:text-sm text-gray-400">
          © 2021 Williams Donaldson. All rights reserved.
        </center>
      </div>
    </footer>
  );
};

export default Footer;
