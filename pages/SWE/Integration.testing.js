import IntegrationtestingStyle from "../../styles/style.module.css";
import Image from "next/image";
import Link from "next/link";
const Integrationtesting = () => {
  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

      <div className={IntegrationtestingStyle.Space200}></div>

      <div className={Integrationtesting.body}>
        <h1 className="text-center"> Integration testing</h1>
        <div className={IntegrationtestingStyle.Space100}></div>
        <div className="container">
          <div className={IntegrationtestingStyle.fontSize130}>
            <p data-aos="fade-right" data-aos-duration="1000">
              Integration testing -- also known as integration and testing (I&T)
              -- is a type of software testing in which the different units,
              modules or components of a software application are tested as a
              combined entity. However, these modules may be coded by different
              programmers.
            </p>
            <p data-aos="fade-right" data-aos-duration="1000">
              The aim of integration testing is to test the interfaces between
              the modules and expose any defects that may arise when these
              components are integrated and need to interact with each other.
            </p>

            <div className={IntegrationtestingStyle.Space100}></div>

            <h2 data-aos="fade-right" data-aos-duration="1000">
              {" "}
              <b>Why integration testing is essential?</b>
              <div className={IntegrationtestingStyle.Space50}></div>
            </h2>
            <p data-aos="fade-right" data-aos-duration="1000">
              Integration testing is vital in today's IT and software
              development landscapes, especially when requirements are dynamic
              and deadlines are tight. Even when each module of the application
              is unit-tested, some errors may still exist. To identify these
              errors and ensure that the modules work well together after
              integration, integration testing is crucial.
            </p>
            <div className={IntegrationtestingStyle.Space100}></div>
            <div className="d-flex justify-content-center">
              <img
                className="rounded mx-auto d-block"
                src="/images/image 188.png"
                className={IntegrationtestingStyle.majorsCSSCimg}
              />
            </div>
            <div className={IntegrationtestingStyle.Space100}></div>
          </div>
          <div>
            <br />
            <h4 data-aos="slide-up" data-aos-duration="1000">
              {" "}
              Bottom-up testing: Bottom-up (also known as bottom-to-top)
              integration testing is the opposite of the top-down approach. It
              involves testing lower-level modules first, and then gradually
              progressing incrementally to higher-level modules. This approach
              is suitable when all units are available for testing
            </h4>
            <br />
            <h4 data-aos="slide-up" data-aos-duration="1000">
              {" "}
              Sandwich/hybrid testing: Sandwich or hybrid integration testing
              combines the top-down and bottom-up approaches. It uses both stubs
              and drivers.{" "}
            </h4>
          </div>
        </div>

        <div className={IntegrationtestingStyle.Space400}></div>
      </div>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </>
  );
};

export default Integrationtesting;
