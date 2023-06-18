import SysDesignStyles from "../../styles/style.module.css";
import Image from "next/image";
import Link from "next/link";
const SysDesign = () => {
  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <div className={SysDesignStyles.body}>
        <div className={SysDesignStyles.Space200}></div>
        <div>
          <h1 className="text-center">System Design</h1>
          <div className={SysDesignStyles.Space100}></div>

          <div className="container">
            <div className="d-flex justify-content-center">
              <img
                src="/images/Sys-Design.png"
                className={SysDesignStyles.majorsCSSCimg}
              />
            </div>
          </div>

          <div className="container">
            <div>
              <div className={SysDesignStyles.fontSize130}>
                <div className={SysDesignStyles.Space100}></div>
                <h3 data-aos="fade-right" data-aos-duration="1000">
                  <b>What is the Software Design ?</b>
                </h3>
                <p>
                  Software design is the process of creating a detailed plan or
                  blueprint for how a software system or application will be
                  developed, specifying its structure, behavior, and
                  functionality. It involves making decisions and defining the
                  design elements and characteristics of the software system to
                  meet its intended purpose and requirements. <br /> <br />
                  Software design typically follows the requirements analysis
                  phase, where the requirements of the software system are
                  identified and documented. During the software design phase,
                  the requirements are further elaborated and translated into a
                  design that can be implemented by developers. Software design
                  encompasses several aspects, including:
                </p>
                <ul>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    <b>Architectural design:</b> This involves defining the
                    high-level structure and organization of the software
                    system, including the arrangement of components or modules,
                    their relationships, and interactions.
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    {" "}
                    <b>Interface design:</b> This involves specifying the
                    interfaces and interactions between different components or
                    modules of the software system, including data flows,
                    control flows, and communication protocols.
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    <b>Data design:</b> This involves defining the data
                    structures, databases, and data flows within the software
                    system, including data models, data storage, and data
                    processing.
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    <b>Component design:</b> This involves specifying the
                    detailed design of individual components or modules,
                    including their internal structure, algorithms, and logic.
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    <b>interface design:</b> This involves designing the{" "}
                    <b>graphical user interface (GUI)</b> or{" "}
                    <b>user experience (UX)</b> of the software system,
                    including screen layouts, navigation, and user interactions.
                  </li>
                </ul>
                <div className={SysDesignStyles.Space100}></div>

                <div className={SysDesignStyles.containerFlexMajors}>
                  <div className={SysDesignStyles.MainMajorsLnks}>
                    <Link href="./architecture.Design">
                      <h3 className="text-center">Architectural design</h3>
                    </Link>
                  </div>
                  <div>
                    <div className={SysDesignStyles.MainMajorsLnks}>
                      <Link href="./UX.jsdesign">
                        <h3 className="text-center">UI / UX design</h3>
                      </Link>
                    </div>
                  </div>

                  <div className={SysDesignStyles.MainMajorsLnks}>
                    <Link href="./Component.design">
                      <h3 className="text-center">Component design</h3>
                    </Link>
                  </div>
                  <div className={SysDesignStyles.MainMajorsLnks}>
                    <Link href="./Data.design">
                      <h3 className="text-center">Data design</h3>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={SysDesignStyles.Space200}></div>
        </div>
      </div>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </>
  );
};
export default SysDesign;
