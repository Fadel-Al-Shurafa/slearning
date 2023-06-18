import ComputerScienceStyles from "../../styles/style.module.css";
import Image from "next/image";
import Link from "next/link";

const ComputerScience = () => {
  return (
    <>
      <div className={ComputerScienceStyles.body}>
        <div className="container">
          <div className={ComputerScienceStyles.Space200}></div>
          <h1 className="text-center">Computer Science</h1>

          <div className={ComputerScienceStyles.ContainerContent}>
            <div className={ComputerScienceStyles.Space200}></div>
            <div className="d-flex justify-content-center">
              <img
                src="/images/CompSc-mainpage.png"
                className={ComputerScienceStyles.majorsCSSCimg}
              />
            </div>
            <div className={ComputerScienceStyles.Space100}></div>
            <div className={ComputerScienceStyles.FlexContent}>
              <p>
                Computer science is the study of computers and computational
                systems. It is a broad field which includes everything from the
                algorithms that make up software to how software interacts with
                hardware to how well software is developed and designed.
              </p>
              <br />
              <p>
                Software Engineers get involved throughout the entire project
                life cycle.
              </p>

              <br />
              <p>
                Computer scientists use various mathematical algorithms, coding
                procedures, and their expert programming skills to study
                computer processes and develop new software and systems.
              </p>
            </div>
          </div>
        </div>
        <div className={ComputerScienceStyles.Space200}></div>
        <div className="container">
          <div className={ComputerScienceStyles.containerFlexMajors}>
            <div >
              <div className={ComputerScienceStyles.MajorsLnks}>
                <div className="justify-content-sm-center">
                  <Link href="/CSE/Information_Technology_Specialist">
                    <h3 className="text-center">
                      information technology specialist
                    </h3>
                  </Link>
                </div>
              </div>
              <div className={ComputerScienceStyles.MajorsLnks}>
                <Link href="/CSE/Machine-Learning-Engineering">
                  <h3 className="text-center">Machine Learning Engineering</h3>
                </Link>
              </div>
            </div>

            <div >
              <div className={ComputerScienceStyles.MajorsLnks}>
                <h3 className="text-center">Software Development</h3>
                {/*this section with Eng.Fadel*/}
              </div>
              <div className={ComputerScienceStyles.MajorsLnks}>
                <Link href="../DataS/SystemAnalyst">
                  <h3 className="text-center">Systems Analyst</h3>
                </Link>
                {/*this section with Eng.Fadel*/}
              </div>
            </div>

            <div >
              <div className={ComputerScienceStyles.MajorsLnks}>
                <Link href="/CSE/Network-Administrator">
                  <h3 className="text-center">Network Administrator</h3>
                </Link>
              </div>
              <div className={ComputerScienceStyles.MajorsLnks}>
                <Link href="/CSE/Information-Security-Analyst">
                  <h3 className="text-center">Information Security Analyst</h3>
                </Link>
              </div>
            </div>
            <div >
              <div className={ComputerScienceStyles.MajorsLnks}>
                <Link href="/CSE/Artificial-Intelligencs-Engineer">
                  <h3 className="text-center">
                    Artificial Intelligencs Engineer
                  </h3>
                </Link>
              </div>
              <div className={ComputerScienceStyles.MajorsLnks}>
                <Link href="/CSE/Computer-Hardware-Engineering">
                  <h3 className="text-center">Computer Hardware Engineering</h3>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className={ComputerScienceStyles.Space400}></div>
    </>
  );
};

export default ComputerScience;
