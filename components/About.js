import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SchoolIcon from "@mui/icons-material/School";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

const About = ({ aboutRef }) => {
  return (
    <div className="universal">
      <section id="about" className="py-28" ref={aboutRef}>
        <div className="flex items-start justify-center xl:px-24 gap-10 about_grid">
          <div className="flex-shrink">
            <h3>Service has started since 2010 </h3>

            <h2 className="text-3xl lg:text-4xl font-bold mt-2 title_text">
              Get to know me
            </h2>

            <p className="mt-7 text-justify">
              I am an adept medical doctor with 10+ years of practice
              experience. I am dedicated to exemplary patient outcomes and
              following all necessary medical procedures with the use of the
              latest industry equipment and technology. I have a strong focus on
              listening to and addressing patient concerns and answering all
              questions in terms patients can easily understand.
            </p>

            <p className="mt-5 text-justify">
              I possess a strong willingness to work with all members of the
              medical team and listen to their suggestions and input to improve
              results and maximize patient satisfaction. I specialized as a
              general internist during residency, providing me with knowledge of
              a range of health issues that impact internal organs.
            </p>

            <p className="mt-5 text-justify">
              Currently working as a General Practitioner at DIGNITY HEALTH -
              CALIFORNIA HOSPITAL MEDICAL CENTER, LOS ANGELES, CA
            </p>

            <div className="mt-10 space-y-2">
              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="title_text" />}
                  >
                    <h2 className="flex items-center gap-2">
                      <VolunteerActivismIcon />
                      <span>Core qualifications</span>
                    </h2>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="list-disc ml-5">
                      <li>Information management</li>
                      <li>Test result interpretation</li>
                      <li>Patient assessments</li>
                      <li>Equipment management</li>
                      <li>Infection control</li>
                      <li>Pain management</li>
                      <li>HIPAA regulations</li>
                      <li>Communication and empathy</li>
                    </ul>
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
                      M.D.: Clinical Medicine Illinois International University
                      - Chicago, IL Bachelor of Science: Biological Sciences
                      University of Illinois - Chicago, IL
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
                    <p className="text-justify">
                      To lead a healthy lifestyle, engage in regular physical
                      activity, eat a well-balanced diet, take precautions to
                      avoid injury, don't smoke and drink in moderation, use
                      condoms for sexual protection, maintain good dental
                      hygiene, protect yourself from the sun and seek help if
                      you have any addiction issues.
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
    </div>
  );
};

export default About;
