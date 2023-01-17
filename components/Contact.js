import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ contactRef }) => {
  const form = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0ze7jr8",
        "template_ypavds8",
        form.current,
        "Ukb46f94zYxhFtbZh"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully");
          form.current.reset();
        },
        (error) => {
          toast.error("Something went wrong");
        }
      );
  }

  return (
    <>
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
                Don't hesitate to reach out to me - I'm always happy to hear
                from you! <br /> Here's how you can get in touch with me:
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
              ref={form}
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col md:flex-row gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="youremail@example.com"
                  required
                />
              </div>

              <div className="space-y-5">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />

                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  className="resize-none"
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

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Contact;
