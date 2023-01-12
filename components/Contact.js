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

  return (
    <div className="universal">
      <section
        id="contact"
        className="pt-28 flex flex-col gap-12 items-center justify-center"
        ref={contactRef}
      >
        <div className="flex flex-col gap-3 items-center justify-center">
          <h2 className="text-3xl lg:text-4xl font-bold mt-2 title_text">
            Get in touch!
          </h2>

          <p className="text-center">
            Don't hesitate to reach out to me - I'm always happy to hear from
            you! <br /> Here's how you can get in touch with me:
          </p>
        </div>

        <div className="flex justify-between items-center gap-4 w-full max-w-4xl">
          <div className="space-y-2 flex items-center self-start flex-col w-full text-center">
            <LocationOnIcon fontSize="large" className="title_text" />
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="space-y-2 flex items-center self-start flex-col w-full text-center">
            <EmailIcon fontSize="large" className="title_text" />
            <p className="break-all">williamsdonaldson530@gmail.com</p>
          </div>

          <div className="space-y-2 flex items-center self-start flex-col w-full text-center">
            <PhoneIcon fontSize="large" className="title_text" />
            <p>+1 (704) 964-9448</p>
          </div>
        </div>

        <form className="second_bg max-w-4xl p-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          ipsam voluptatum provident beatae autem ipsa omnis ducimus quam
          deleniti sequi, dolorum repellat cumque id, qui consequuntur
          laudantium necessitatibus amet quos. Minus mollitia amet aliquid
          eveniet, minima excepturi itaque, iste quidem adipisci inventore, sunt
          porro natus. Officia exercitationem possimus tempore quae blanditiis
          doloribus molestias reprehenderit. Soluta, facilis laborum minus eos,
          ut officia unde nesciunt qui iure harum tempora ipsam laboriosam.
          Harum est at numquam, error possimus nemo modi dolor ipsa quisquam
          assumenda earum? Itaque autem commodi dolorum temporibus numquam
          facilis vel, et laboriosam eius velit minima error eum debitis natus
          saepe similique, vitae delectus voluptates deserunt optio repellat
          beatae explicabo maiores praesentium! Ducimus assumenda nisi labore
          commodi totam accusantium deserunt provident mollitia illum! Dicta
          laborum earum veritatis impedit eius provident amet quas facilis!
          Doloribus incidunt sit ex consequuntur quasi debitis provident placeat
          eius consectetur aperiam, delectus sint deleniti rem pariatur illum ut
          autem nobis consequatur recusandae! Corrupti, molestiae at. Earum
          distinctio non explicabo, maxime placeat deleniti dolores quod omnis.
          Eligendi excepturi aperiam rerum hic, nulla ipsam quas sequi quaerat
          minus repellendus neque voluptatum odit soluta iusto vero maxime, odio
          amet in nemo officia laudantium. Aspernatur qui quia fuga iusto eaque
          molestiae.
        </form>
      </section>
    </div>
  );
};

export default Contact;
