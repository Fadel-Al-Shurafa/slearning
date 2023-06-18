import softwarequalityStyle from "../../styles/style.module.css";
import Image from "next/image";
import Link from "next/link";
const softwarequality = () => {
  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

      <div className={softwarequalityStyle.Space200}></div>

      <div className={softwarequalityStyle.body}>
        <h1 className="text-center"> Software Quality Assurance</h1>
        <div className={softwarequalityStyle.Space100}></div>
        <div className="container">
          <div className={softwarequalityStyle.fontSize130}>
            <div className={softwarequalityStyle.Space100}></div>
            <div className="d-flex justify-content-center">
              <img
                className="rounded mx-auto d-block"
                src="/images/quality-management-main 1.png"
                className={softwarequalityStyle.majorsCSSCimg}
              />
            </div>
            <div className={softwarequalityStyle.Space100}></div>
            <h3 data-aos="fade-right" data-aos-duration="1000">
              Software quality assurance focuses on:
            </h3>
            <ul>
              <li data-aos="fade-right" data-aos-duration="1000">
                software’s portability
              </li>

              <li data-aos="slide-up" data-aos-duration="1000">
                software’s usability
              </li>
              <li data-aos="slide-up" data-aos-duration="1000">
                software’s reusability
              </li>

              <li data-aos="slide-up" data-aos-duration="1000">
                software’s correctness
              </li>

              <li data-aos="slide-up" data-aos-duration="1000">
                software’s maintainability
              </li>

              <li data-aos="slide-up" data-aos-duration="1000">
                software’s error control
              </li>
            </ul>
            <div className={softwarequalityStyle.Space100}></div>
            <div data-aos="slide-up" data-aos-duration="1000">
              <h3>
                <b>Major Software Quality Assurance Activities:</b>
              </h3>
              <br />
              <p>
                <b>SQA Management Plan: </b>Make a plan for how you will carry
                out the sqa through out the project. Think about which set of
                software engineering activities are the best for project. check
                level of sqa team skills.
              </p>

              <br />

              <p>
                <b>Set The Check Points: </b>SQA team should set checkpoints.
                Evaluate the performance of the project on the basis of
                collected data on different check points.
              </p>
              <br />

              <p>
                <b>Multi testing Strategy: </b>Do not depend on a single testing
                approach. When you have a lot of testing approaches available
                use them.
              </p>
              <br />

              <p>
                <b>Measure Change Impact: </b>The changes for making the
                correction of an error sometimes re introduces more errors keep
                the measure of impact of change on project. Reset the new change
                to change check the compatibility of this fix with whole
                project.
              </p>
              <br />

              <p>
                <b>Manage Good Relations: </b> In the working environment
                managing good relations with other teams involved in the project
                development is mandatory. Bad relation of sqa team with
                programmers team will impact directly and badly on project.
                Don’t play politics.
              </p>
              <br />

              <p>
                <b>Attention to detail: </b>The role of a QA engineer involves
                being detail-oriented and thorough in order to spot issues or
                discrepancies in quality standards set for the product.
              </p>
              <br />
            </div>
            <br />
            <h3 data-aos="fade-right" data-aos-duration="1000">
                <b>Benefits of Software Quality Assurance (SQA):</b>
              </h3>
            <ul>

              <li data-aos="fade-right" data-aos-duration="1000">
                SQA produces high quality software.
              </li>
              <br />

              <li data-aos="slide-up" data-aos-duration="1000">
                High quality application saves time and cost.
              </li>
              <br />
              <li data-aos="slide-up" data-aos-duration="1000">
                SQA is beneficial for better reliability.
              </li>
              <br />

              <li data-aos="slide-up" data-aos-duration="1000">
                SQA is beneficial in the condition of no maintenance for a long
                time.{" "}
              </li>
              <br />

              <li data-aos="slide-up" data-aos-duration="1000">
                High quality commercial software increase market share of
                company.{" "}
              </li>
              <br />

              <li data-aos="slide-up" data-aos-duration="1000">
                Improving the process of creating software.{" "}
              </li>
              <br />
              <li>Improves the quality of the software.</li>
            </ul>

            <div className={softwarequalityStyle.Space100}></div>
          </div>
        </div>

        <div className={softwarequalityStyle.Space400}></div>
      </div>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </>
  );
};

export default softwarequality;
