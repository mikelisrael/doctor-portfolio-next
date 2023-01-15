import React from "react";

const Services = ({ servicesRef }) => {
  return (
    <div className="second_bg services_area universal">
      <section id="services" className="py-28 xl:px-24" ref={servicesRef}>
        <div className="w-full md:w-3/4">
          <h3>Full range of my </h3>

          <h2 className="text-2xl lg:text-3xl font-bold mt-2 title_text">
            Services Department
          </h2>

          <p className="mt-7 text-justify">
            I provide comprehensive medical care including diagnosis, treatment,
            and management of a wide range of illnesses and injuries. My
            services include preventative care, routine check-ups, and ongoing
            management of chronic conditions. I am dedicated to providing
            personalized, high-quality care to all of my patients
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
                State of the art equipment such as mapping systems, catheters
                and other relevant tools.
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
                Ultra-modern diagnostic procedures to evaluate the structure of
                the heart and blood system.
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
                I provide COVID-19 vaccination services for the protection and
                well-being of my patients and the community.
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
                I offer nutritional support to aid in the overall well-being and
                health of my patients. I provide personalized plans and guidance
                to help individuals achieve optimal nutrition and improve their
                overall health
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
