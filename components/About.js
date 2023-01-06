import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HistoryIcon from "@mui/icons-material/History";
import SchoolIcon from "@mui/icons-material/School";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";

const About = ({ aboutRef }) => {
  return (
    <section id="about" className="pt-28" ref={aboutRef}>
      <div className="flex items-start justify-center xl:px-24 gap-10 about_grid">
        <div className="flex-shrink">
          <h3>Service has started since 2014</h3>

          <h1 className="text-3xl lg:text-4xl font-bold mt-2 title_text">
            Get to know me
          </h1>

          <p className="mt-7">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature.
          </p>

          <p className="mt-5">
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero.
          </p>

          <div className="mt-10 space-y-2">
            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="title_text" />}
                >
                  <h2 className="flex items-center gap-2">
                    <HistoryIcon />
                    <span>Know my medical history</span>
                  </h2>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </p>
                </AccordionDetails>
              </Accordion>
            </div>

            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="title_text" />}
                >
                  <h2 className="flex items-center gap-2">
                    <SchoolIcon />
                    <span>My education</span>
                  </h2>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </p>
                </AccordionDetails>
              </Accordion>
            </div>

            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="title_text" />}
                >
                  <h2 className="flex items-center gap-2">
                    <MedicalInformationIcon />
                    <span>How to keep the doctor away</span>
                  </h2>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </p>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="picture_about"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
