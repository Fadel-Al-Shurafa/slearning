import SoftwareTestingStyle from "../../styles/style.module.css";
import Image from "next/image";
import Link from "next/link";
const SoftwareTesting = () => {
  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

      <div className={SoftwareTestingStyle.Space200}></div>

      <div className={SoftwareTesting.body}>
        <h1 className="text-center"> Software Testing</h1>
        <div className={SoftwareTestingStyle.Space100}></div>
        <div className="container">
          <div className={SoftwareTestingStyle.fontSize130}>
            <div className={SoftwareTestingStyle.Space100}></div>
            <div className="d-flex justify-content-center">
              <img
                className="rounded mx-auto d-block"
                src="/images/image 234.png"
                className={SoftwareTestingStyle.majorsCSSCimg}
              />
            </div>

            <h2 data-aos="fade-right" data-aos-duration="1000">
              {" "}
              <div className={SoftwareTestingStyle.Space100}></div>
            </h2>
            <p>
              Software testing is the process of evaluating and verifying that a
              software product or application does what it is supposed to do.
              The benefits of testing include preventing bugs, reducing
              development costs and improving performance.
            </p>

            <div className={SoftwareTestingStyle.Space200}></div>

            <div>

              <div className={SoftwareTestingStyle.containerFlexMajors}>
                <div className={SoftwareTestingStyle.MainMajorsLnks}>
                  <Link href="./Unit.testing">
                    <h2 className="text-center">Unit testing</h2>
                  </Link>
                </div>
                <div>
                  <div className={SoftwareTestingStyle.MainMajorsLnks}>
                    <Link href="./Integration.testing">
                      <h2 className="text-center">Integration testing</h2>
                    </Link>
                  </div>
                </div>

                <div className={SoftwareTestingStyle.MainMajorsLnks}>
                  <Link href="./end.to.end.testing">
                    <h2 className="text-center">end to end testing</h2>
                  </Link>
                </div>
                <div className={SoftwareTestingStyle.MainMajorsLnks}>
                  <Link href="./performance.testing">
                    <h2 className="text-center">Performance testing</h2>
                  </Link>
                </div>
              </div>
              <div className={SoftwareTestingStyle.Space400}></div>
            </div>
          </div>
          <div>
            <br />

            <br />
          </div>
        </div>

        <div className={SoftwareTestingStyle.Space400}></div>
      </div>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </>
  );
};

export default SoftwareTesting;
