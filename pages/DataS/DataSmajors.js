import DataSmajorsStyles from "../../styles/style.module.css";
import Image from "next/image";
import Link from "next/link";
const DataSmajors = () => {
  return (
    <>
      <div className={DataSmajorsStyles.body}>
        <div className={DataSmajorsStyles.Space200}></div>
        <h1 className="text-center">Data Science</h1>
        <div className={DataSmajorsStyles.Space200}></div>

        <div className="d-flex justify-content-center">
          <div className="p-2">
            <Image src="/images/Data-Science.png" width="1000" height="600" />
          </div>
        </div>
        <div className={DataSmajorsStyles.Space50}></div>
        <div className="p-5 m-5 col-9">
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

        <div className={DataSmajorsStyles.Space200}></div>
        <div className="container">
          <div className={DataSmajorsStyles.Space}></div>
          <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 ">
            <div className="col-6">
              <div
                className="p-3 border bg-light"
                style={{ width: "18rem", height: "16rem" }}
              >
                <div className="justify-content-sm-center">
                  <Link href="./DataScientist">
                    <h2 className="text-center">Data Scientist</h2>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div
                classID={DataSmajorsStyles.majors}
                className="p-3 border bg-light"
                style={{ width: "18rem", height: "16rem" }}
              >
                <Link href="./DataAnalyst">
                  <h2 className="text-center">Data Analyst</h2>
                </Link>
              </div>
            </div>
            <div className="col-6">
              <div
                className="p-3 border bg-light"
                style={{ width: "18rem", height: "16rem" }}
              >
                <Link href="./DataArchitect">
                  <h2 className="text-center">Data Architect</h2>
                </Link>
              </div>
            </div>
            <div className="col-6">
              <div
                className="p-3 border bg-light"
                style={{ width: "18rem", height: "16rem" }}
              >
                <Link href="./SystemAnalyst">
                  <h2 className="text-center">System Analyst</h2>
                </Link>
              </div>
            </div>
            <div className="col-6">
              <div
                className="p-3 border bg-light"
                style={{ width: "18rem", height: "16rem" }}
              >
                <Link href="./DataStoryteller">
                  <h2 className="text-center">Data Storyteller</h2>
                </Link>
              </div>
            </div>
            <div className="col-6">
              <div
                className="p-3 border bg-light"
                style={{ width: "18rem", height: "16rem" }}
              >
                <Link href="./MachineLearningScientist">
                  <h2 className="text-center">Machine Learning Scientist</h2>
                </Link>
              </div>
            </div>
            <div className="col-6">
              <div
                className="p-3 border bg-light"
                style={{ width: "18rem", height: "16rem" }}
              >
                <Link href="./DatabaseAdministrator">
                  <h2 className="text-center">Database Administrator</h2>
                </Link>
              </div>
            </div>
            <div className="col-6">
              <div
                className="p-3 border bg-light"
                style={{ width: "18rem", height: "16rem" }}
              >
                <Link href="./BusinessIntelligenceDeveloper">
                  <h2 className="text-center">
                    Business Intelligence Developer
                  </h2>
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
