import SWEmajorsStyles from "../../styles/style.module.css";
import Image from "next/image";
import Link from "next/link";
const SWEmajors = () => {
  return (
    <>
      <div className={SWEmajorsStyles.body}>
        <div className="container">
          <div className={SWEmajorsStyles.Space200}></div>
          <h1 className="text-center">Software Engineering</h1>
          <div className={SWEmajorsStyles.Space200}></div>

          <div className="d-flex justify-content-center">
            <img
              src="/images/SWE-img.png"
              className={SWEmajorsStyles.majorsCSSCimg}
            />
          </div>
          <div className={SWEmajorsStyles.Space50}></div>
          <div className="p-5 m-5 col-12">
            <p>
              Software Engineers are responsible for designing and developing
              effective software solutions to meet their clients' requirements.
              Most Software Engineers specialize in a certain area and could be
              responsible for working on anything from web applications and
              content management systems to databases and operating systems.
              <br />
              Software Engineers get involved throughout the entire project life
              cycle.
              <br />
              Graduates can find their first employment in technical and support
              roles that relate to their area of study and skills, and can
              include supporting the design, development and management of
              hardware, software, multimedia and systems integration services.
            </p>
          </div>
        </div>
        <div className={SWEmajorsStyles.Space200}></div>

        <div className={SWEmajorsStyles.containerFlexMajors}>
          <div>
            <div className={SWEmajorsStyles.MajorsLnks}>
              <Link href='./Requirements.Analysis'>
                <h3 className="text-center"> Requirements and Analysis</h3>
              </Link>
            </div>
            <div className={SWEmajorsStyles.MajorsLnks}>
              <Link href='./System-Design'>
                <h3 className="text-center">System Design</h3>
              </Link>
            </div>
          </div>

          <div>
            <div className={SWEmajorsStyles.MajorsLnks}>
              <Link href='./Software.Implementation'>
                <h3 className="text-center">Software Development</h3>
              </Link>
            </div>
            <div>
              <div className={SWEmajorsStyles.MajorsLnks}>
                <Link href='./Software.Testing'>
                  <h3 className="text-center">Software Testing</h3>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className={SWEmajorsStyles.MajorsLnks}>
              <Link href='./Maintenance'>
                <h3 className="text-center">Maintenance</h3>
              </Link>
            </div>
            <div className={SWEmajorsStyles.MajorsLnks}>
              <Link href='./software.quality.assurance'>
                <h3 className="text-center">Software quality assurance</h3>
              </Link>
            </div>
          </div>
          <div>
            <div className="col-lg-3 col-md-4 col-sm-6 ">
              <div className={SWEmajorsStyles.MajorsLnks}>
                <Link href='./project.management'>
                  <h3 className="text-center">Project management</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={SWEmajorsStyles.Space400}></div>
    </>
  );
};

export default SWEmajors;
