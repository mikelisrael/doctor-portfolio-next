import React from "react";

const Services = ({ servicesRef }) => {
  return (
    <div className="second_bg services_area universal">
      <section id="services" className="mt-28 py-28 xl:px-24" ref={servicesRef}>
        <div className="w-full md:w-3/4">
          <h3>Full range of my </h3>

          <h2 className="text-2xl lg:text-3xl font-bold mt-2 title_text">
            Services Department
          </h2>

          <p className="mt-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            eum odio accusamus cupiditate reiciendis sint eveniet, maxime quam
            architecto minima nam fugit! Culpa minima deleniti doloremque, iusto
            nulla quidem modi.
          </p>

          <div className="mt-20 grid grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-3">
              <img
                src="/stethoscope.png"
                alt=""
                className="w-[50px] md:w-[100px]"
              />
              <h2 className="title_text text-xl font-semibold">
                Electrophysiology lab
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti eum odio accusamus cupiditate reiciendis sint eveniet.
              </p>
            </div>

            <div className="space-y-3">
              <img
                src="/human-heart.png"
                alt=""
                className="w-[35px] md:w-[70px]"
              />

              <h2 className="title_text text-xl font-semibold">
                Cardiac Testing
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti eum odio accusamus cupiditate reiciendis sint eveniet.
              </p>
            </div>

            <div className="space-y-3">
              <img
                src="/syringe.png"
                alt=""
                className="w-[50px] md:w-[100px]"
              />

              <h2 className="title_text text-xl font-semibold">Vaccination</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti eum odio accusamus cupiditate reiciendis sint eveniet.
              </p>
            </div>

            <div className="space-y-3">
              <img
                src="/heart-attack.png"
                alt=""
                className="w-[50px] md:w-[100px]"
              />

              <h2 className="title_text text-xl font-semibold">
                Nutritional support
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti eum odio accusamus cupiditate reiciendis sint eveniet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
