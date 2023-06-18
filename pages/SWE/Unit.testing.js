import UnittestingStyle from "../../styles/style.module.css";
import Image from "next/image";
import Link from "next/link";
const Unittesting = () => {
  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

      <div className={UnittestingStyle.Space200}></div>

      <div className={Unittesting.body}>
        <h1 className="text-center">
          {" "}
          What is Unit Testing?
        </h1>
        <div className={UnittestingStyle.Space100}></div>
        <div className="container">
          <div className={UnittestingStyle.fontSize130}>
            <p data-aos="fade-right" data-aos-duration="1000">
            Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that
             each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers
            . Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.
            </p>
            <div className={UnittestingStyle.Space50}></div>
           <h3><b>Why perform Unit Testing?</b></h3>
           <p>Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate 
            unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing 
            after application is built. If proper unit testing is done in early development, then it saves time and money in the end.</p>

            <div className={UnittestingStyle.Space100}></div>
            <div className="d-flex justify-content-center"

            >
              <img
                className="rounded mx-auto d-block"
                src="/images/testingimg.png"
                className={UnittestingStyle.majorsCSSCimg}
              />
            </div>
            <div className={UnittestingStyle.Space100}></div>
            <h3 data-aos="fade-right" data-aos-duration="1000">
              {" "}
              <b>Unit Testing Techniques</b>
              <div className={UnittestingStyle.Space50}></div>
            </h3>
            <p data-aos="fade-right" data-aos-duration="1000">
              The Unit Testing Techniques are mainly categorized into three parts which are Black box testin
               that involves testing of user interface along with input and output, White box testing
               that involves testing the functional behaviour of the software application 
               and Gray box testing that is used to execute test suites, test methods, test cases and performing risk analysis.
              </p>
              <br />
            <ul>
              

              <li data-aos="fade-right" data-aos-duration="1000">
                <b>Statement Coverage</b>
              </li>
              <br />

              <li data-aos="slide-up" data-aos-duration="1000">
              <b>Decision Coverage</b>
              </li>
              <br />
              <li data-aos="slide-up" data-aos-duration="1000">
              <b>Branch Coverage</b>
              </li>
              <br />

              <li data-aos="slide-up" data-aos-duration="1000">
               <b>Condition Coverage</b>
              </li>
              <br />
              <li data-aos="slide-up" data-aos-duration="1000">
                <b>Finite State Machine Coverage</b>
              </li>

              

             
             
             
             
             
            </ul>
            <div className={UnittestingStyle.Space100}></div>
          </div>
         
        </div>

        <div className={UnittestingStyle.Space400}></div>
      </div>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </>
  );
};

export default Unittesting;
