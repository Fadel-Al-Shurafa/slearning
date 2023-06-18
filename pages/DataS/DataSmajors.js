import DataSmajorsStyles from "../../styles/style.module.css";
import Image from "next/image";
import Link from "next/link";
const DataSmajors = () => {
  return (
    <>
      <div className={DataSmajorsStyles.body}>
        <div className="container">
          <div className={DataSmajorsStyles.Space200}></div>
          <h1 className="text-center">Data Science</h1>
          <div className={DataSmajorsStyles.Space200}></div>

          <div className="d-flex justify-content-center">
            <img
              src="/images/Data-Science.png"
              className={DataSmajorsStyles.majorsCSSCimg}
            />
          </div>
          <div className={DataSmajorsStyles.Space50}></div>
          <div className="p-5 m-5 col-12">
            <p>
              <b>Data science</b> is the study of data to extract meaningful
              insights for business. It is a multidisciplinary approach that
              combines principles and practices from the fields of mathematics,
              statistics, artificial intelligence, and computer engineering to
              analyze large amounts of data
            </p>
            <div className={DataSmajorsStyles.Space50}></div>
            <p>
              <b> Why is data science important? </b>
              <br />
              Data science is important because it combines tools, methods, and
              technology to generate meaning from data. Modern organizations are
              inundated with data; there is a proliferation of devices that can
              automatically collect and store information. Online systems and
              payment portals capture more data in the fields of e-commerce,
              medicine, finance, and every other aspect of human life. We have
              text, audio, video, and image data available in vast quantities.
            </p>
          </div>
        </div>
        <div className={DataSmajorsStyles.Space200}></div>

        <div className={DataSmajorsStyles.containerFlexMajors}>
          <div>
            <div className={DataSmajorsStyles.MajorsLnks}>
              <Link href="./DataScientist">
                <h3 className="text-center">Data Scientist</h3>
              </Link>
            </div>
            <div className={DataSmajorsStyles.MajorsLnks}>
              <Link href="./DataAnalyst">
                <h3 className="text-center">Data Analyst</h3>
              </Link>
            </div>
          </div>

          <div>
            <div className={DataSmajorsStyles.MajorsLnks}>
              <Link href="./DataArchitect">
                <h3 className="text-center">Data Architect</h3>
              </Link>
            </div>
            <div>
              <div className={DataSmajorsStyles.MajorsLnks}>
                <Link href="./SystemAnalyst">
                  <h3 className="text-center">System Analyst</h3>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className={DataSmajorsStyles.MajorsLnks}>
              <Link href="./DataStoryteller">
                <h3 className="text-center">Data Storyteller</h3>
              </Link>
            </div>
            <div className={DataSmajorsStyles.MajorsLnks}>
              <Link href="./MachineLearningScientist">
                <h3 className="text-center">Machine Learning Scientist</h3>
              </Link>
            </div>
          </div>
          <div>
            <div className="col-lg-3 col-md-4 col-sm-6 ">
              <div className={DataSmajorsStyles.MajorsLnks}>
                <Link href="./DatabaseAdministrator">
                  <h3 className="text-center">Database Administrator</h3>
                </Link>
              </div>
            </div>
            <div>
              <div className={DataSmajorsStyles.MajorsLnks}>
                <Link href="./BusinessIntelligenceDeveloper">
                  <h3 className="text-center">
                    Business Intelligence Developer
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={DataSmajorsStyles.Space400}></div>
    </>

  );
};

export default DataSmajors;
