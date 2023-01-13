import React from "react";
import Logo from "./Logo";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PublicIcon from "@mui/icons-material/Public";

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A modi
              ipsa voluptate dolorem earum consequatur distinctio amet dolorum
              doloremque cupiditate!
            </p>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, et?
            </p>
          </div>
        </section>
        <section>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          possimus laboriosam ad, illum tenetur culpa aut consequatur neque?
          Illo atque odit quasi repellendus fuga illum obcaecati blanditiis, quo
          reprehenderit recusandae maxime. Quas tempore quia nesciunt beatae
          impedit, excepturi nostrum commodi voluptas veniam cum aperiam eius
          fugit laborum ex in doloremque aspernatur odio omnis nulla optio,
          earum perspiciatis harum voluptatem? Dolores perspiciatis, voluptas
          recusandae at explicabo fugiat ullam nihil doloribus maiores
          architecto consequatur ex voluptates animi praesentium obcaecati
          officia est esse mollitia placeat sed. Ad minima nemo, corrupti soluta
          beatae voluptatum nesciunt consequuntur distinctio omnis officia quos
          nihil esse odio praesentium!
        </section>{" "}
        <section>
          <div className="mb-10 title_text font-bold text-xl">Contact Info</div>

          <div className="space-y-5">
            <p className="flex gap-3">
              <LocationOnIcon className="title_text" />
              <span>Grand Ave, Los Angeles, California, United States</span>
            </p>

            <p className="flex gap-3">
              <PhoneIcon className="title_text" />
              <span>+1 (704) 964-9448</span>
            </p>

            <p className="flex gap-3">
              <EmailIcon className="title_text" />{" "}
              <span className="break-all">williamsdonaldson530@gmail.com</span>
            </p>

            <p className="flex gap-3">
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
