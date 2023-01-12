import React from "react";

const NeedHelp = () => {
  return (
    <div className="hero h-[20vh] universal flex items-center py-2">
      <div className="w-full flex flex-wrap items-center justify-start gap-8 md:justify-between xl:px-24">
        <div>
          <h3 className="text-white">Do you need emergency medical care? </h3>

          <h2 className="text-3xl lg:text-4xl font-bold mt-2 title_text !text-white">
            Do you have health problems?
          </h2>
        </div>

        <button>
          <a
            href="#contact"
            className="main_btn filled font-semibold !px-10 xl:!px-16"
          >
            I Need Help
          </a>
        </button>
      </div>
    </div>
  );
};

export default NeedHelp;
