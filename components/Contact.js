import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Contact = ({ contactRef }) => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="universal">
      <section
        id="contact"
        className="py-28 flex items-center justify-center"
        ref={contactRef}
      >
        <div className="w-full xl:w-3/4 flex flex-col gap-10 md:gap-12">
          <div className="flex flex-col gap-3 md:items-center justify-center">
            <h2 className="text-3xl lg:text-4xl font-bold mt-2 title_text">
              Get in touch!
            </h2>

            <p className="md:text-center">
              Don't hesitate to reach out to me - I'm always happy to hear from
              you! <br /> Here's how you can get in touch with me:
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-2 w-full">
            <div className="space-y-2 flex items-center self-start md:flex-col gap-x-3 w-full md:text-center">
              <LocationOnIcon className="title_text" />
              <p>Grand Ave, Los Angeles, California, United States</p>
            </div>

            <div className="space-y-2 flex items-center self-start md:flex-col gap-x-3 w-full md:text-center">
              <EmailIcon className="title_text" />
              <p>williamsdonaldson530 @gmail.com</p>
            </div>

            <div className="space-y-2 flex items-center self-start md:flex-col gap-x-3 w-full md:text-center">
              <PhoneIcon className="title_text" />
              <p>+1 (704) 964-9448</p>
            </div>
          </div>

          <form
            className="contact_box w-full p-5 md:p-10 space-y-5"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col md:flex-row gap-5">
              <input
                type="text"
                name="name"
                placeholder="Full name"
                value={formFields.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="youremail@example.com"
                value={formFields.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-5">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formFields.subject}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
                className="resize-none"
                value={formFields.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              className="main_btn filled_blue font-semibold !px-10 xl:!px-16"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
