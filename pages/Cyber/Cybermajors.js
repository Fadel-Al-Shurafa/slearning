import CybermajorsStyles from "../../styles/style.module.css";
import Image from "next/image";
import Link from "next/link";

const Cybermajors = () => {
  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

      <div className={CybermajorsStyles.body}>
        <div className={CybermajorsStyles.Space200}></div>
        <h1 className="text-center">Cyber Security</h1>
        <div className={CybermajorsStyles.Space200}></div>

        <div className="d-flex justify-content-center">
          <img
            src="/images/cyberimg.png"
            className={CybermajorsStyles.majorsCSSCimg}
          />
        </div>
        <div className={CybermajorsStyles.Space100}></div>

        <div className="container">
          <p data-aos="fade-right" data-aos-duration="1000">
            <b>Cyber security</b> is the practice of defending computers,
            servers, mobile devices, electronic systems, networks, and data from
            malicious attacks. It's also known as information technology
            security or electronic information security. The term applies in a
            variety of contexts, from business to mobile computing, and can be
            divided into a few common categories.
          </p>
          <div className={CybermajorsStyles.Space100}></div>
          <div className={CybermajorsStyles.containerFlexMajors}>
            <div>
              <div className={CybermajorsStyles.MajorsLnks}>
                <h3 className="text-center">
                  <Link href="/Cyber/Chief.Information.Security.Officer">
                    Chief Information Security Officer
                  </Link>
                </h3>
              </div>
              <div className={CybermajorsStyles.MajorsLnks}>
                <h3 className="text-center">
                  <Link href="/Cyber/Security.Architect">
                    Security Architect
                  </Link>
                </h3>
              </div>
            </div>
            <div>
              <div className={CybermajorsStyles.MajorsLnks}>
                <h3 className="text-center">
                  <Link href="/Cyber/Cybersecurity.Engineer">
                    Cybersecurity Engineer
                  </Link>
                </h3>
              </div>
              <div className={CybermajorsStyles.MajorsLnks}>
                <h3 className="text-center">
                  <Link href="/Cyber/Malware.Analyst">Malware Analyst</Link>{" "}
                </h3>
              </div>
            </div>

            <div>
              <div className={CybermajorsStyles.MajorsLnks}>
                <h3 className="text-center">
                  <Link href="/Cyber/Penetration.Tester">
                    Penetration Tester
                  </Link>
                </h3>
              </div>
              <div className={CybermajorsStyles.MajorsLnks}>
                <h3 className="text-center">
                  {" "}
                  <Link href="/Cyber/Computer.Forensics.Analyst">
                    Computer Forensics Analyst
                  </Link>
                </h3>
              </div>
            </div>

            <div>
              <div className={CybermajorsStyles.MajorsLnks}>
                <h3 className="text-center">
                  {" "}
                  <Link href="/Cyber/Application.Security.Engineer">
                    Application Security Engineer
                  </Link>{" "}
                </h3>
              </div>
              <div className={CybermajorsStyles.MajorsLnks}>
                <h3 className="text-center">
                  <Link href="../DataS/DatabaseAdministrator">
                    Database Administrator
                  </Link>{" "}
                </h3>
              </div>
            </div>

            <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
            <script>AOS.init();</script>
          </div>
        </div>
      </div>
      <div className={CybermajorsStyles.Space400}></div>
    </>
  );
};

export default Cybermajors;
