import RequirementStyles from "../../styles/style.module.css";
import Image from "next/image";
import Link from "next/link";
const RequirementsAnalysis = () => {
  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <div className={RequirementStyles.body}>
        <div className={RequirementStyles.Space200}></div>

        <div className="container">
          <div>
            <div className="d-flex justify-content-center">
              <img
                data-aos="fade-right"
                data-aos-duration="1000"
                className={RequirementStyles.majorsCSSCimg}
                src="/images/Requriment-Analysis 1.png"
              />
            </div>
            <div className={RequirementStyles.Space100}></div>
            <p>
              Requirements analysis involves frequent communication with system
              users to determine specific feature expectations, resolution of
              conflict or ambiguity in requirements as demanded by the various
              users or groups of users, avoidance of feature creep and
              documentation of all aspects of the project development process
              from start to finish. Energy should be directed towards ensuring
              that the final system or product conforms to client needs rather
              than attempting to mold user expectations to fit the requirements.
            </p>
          </div>
          <div className={RequirementStyles.Space100}></div>

          <div className="d-flex justify-content-center">
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              className={RequirementStyles.majorsCSSCimg}
              src="/images/software-engineering-requirement-analysis 1.png"
            />
          </div>
          <div className={RequirementStyles.Space100}></div>
          <h1 className="text-center"> What is Data Analyst?</h1>
          <div className={RequirementStyles.Space100}></div>
          <div className="container">
            <div>
              <div className={RequirementStyles.fontSize130}>
                <p data-aos="fade-right" data-aos-duration="1000">
                  {" "}
                  Draw the context diagram: The context diagram is a simple
                  model that defines the boundaries and interfaces of the
                  proposed systems with the external world. It identifies the
                  entities outside the proposed system that interact with the
                  system.
                </p>
                <p data-aos="fade-right" data-aos-duration="1000">
                  {" "}
                  Development of a Prototype (optional): One effective way to
                  find out what the customer wants is to construct a prototype,
                  something that looks and preferably acts as part of the system
                  they say they want.
                </p>
                <p data-aos="fade-right" data-aos-duration="1000">
                  {" "}
                  Model the requirements: This process usually consists of
                  various graphical representations of the functions, data
                  entities, external entities, and the relationships between
                  them. The graphical view may help to find incorrect,
                  inconsistent, missing, and superfluous requirements. Such
                  models include the Data Flow diagram, Entity-Relationship
                  diagram, Data Dictionaries, State-transition diagrams.
                </p>
                <div className={RequirementStyles.Space100}></div>
                <p data-aos="fade-right" data-aos-duration="1000">
                  {" "}
                  Finalise the requirements: After modeling the requirements, we
                  will have a better understanding of the system behavior. The
                  inconsistencies and ambiguities have been identified and
                  corrected. The flow of data amongst various modules has been
                  analyzed. Elicitation and analyze activities have provided
                  better insight into the system. Now we finalize the analyzed
                  requirements, and the next step is to document these
                  requirements in a prescribed format.
                </p>
              </div>
            </div>
            <div className={RequirementStyles.Space100}></div>
          </div>

          <div className={RequirementStyles.Space200}></div>

          <div className="container">
            <div className="row">
              <div className="col"></div>
              <div className={RequirementStyles.Space100media}></div>
            </div>
          </div>
          <div className={RequirementStyles.Space100}></div>
        </div>
      </div>

      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </>
  );
};

export default RequirementsAnalysis;
