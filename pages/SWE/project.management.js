import projectmanagementStyle from "../../styles/style.module.css";
import Image from "next/image";
import Link from "next/link";
const projectmanagement = () => {
  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

      <div className={projectmanagementStyle.Space200}></div>

      <div className={projectmanagementStyle.body}>
        <h1 className="text-center"> Software project management</h1>
        <div className={projectmanagementStyle.Space100}></div>
        <div className="container">
          <div className={projectmanagementStyle.fontSize130}>
            <p data-aos="fade-right" data-aos-duration="1000">
              Software in project management is dedicated to the planning,
              scheduling, resource allocation, execution, tracking, and delivery
              of software and web projects.
            </p>
            <p data-aos="fade-right" data-aos-duration="1000">
              Project management in software engineering is distinct from
              traditional project management — software in project management
              has a unique life cycle process that requires multiple rounds of
              testing, updating, and customer feedback.
            </p>
            <p data-aos="fade-right" data-aos-duration="1000">
              Most IT-related projects are managed in the Agile style to keep up
              with the increasing pace of business and iterate based on customer
              and stakeholder feedback.
            </p>

            <div className={projectmanagementStyle.Space100}></div>
            <div className={projectmanagementStyle.container}>
              <img
                className="rounded mx-auto d-block"
                src="/images/proman.png"
                className={projectmanagementStyle.majorsCSSCimg}
              />
              <h5>
                Agile is a project management approach developed as a more
                flexible and efficient way to get products to market. The word
                ‘agile’ refers to the ability to move quickly and easily.
                Therefore, an Agile approach enables project teams to adapt
                faster and easier compared to other project methodologies.
              </h5>
            </div>
            <div className={projectmanagementStyle.Space200}></div>
            <div className={projectmanagementStyle.containerFlexMajors}>
              <div className={projectmanagementStyle.FlexSpecific}>
                <div className={projectmanagementStyle.FlexCulom}>
                  <div className={projectmanagementStyle.FlexCulomMargin}>
                    <div className="d-flex justify-content-center">
                      <Image
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        src="/images/image 11.png"
                        width="500"
                        height="300"
                      />
                    </div>
                  </div>
                  <div className={projectmanagementStyle.FlexCulomMargin}>
                    <div className="d-flex justify-content-center">
                      <h3 className={projectmanagementStyle.FrontEndBTN}>
                        <Link href="./lifecycle"> click here! </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className={projectmanagementStyle.FlexSpecific}>
                <div className={projectmanagementStyle.FlexCulom}>
                  <div className={projectmanagementStyle.FlexCulomMargin}>
                    <div className="d-flex justify-content-center">
                      <Image
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        src="/images/projm.png"
                        width="500"
                        height="300"
                      />
                    </div>
                  </div>
                </div>
                <div className={projectmanagementStyle.FlexCulomMargin}>
                  <div className="d-flex justify-content-center">
                    <h3 className={projectmanagementStyle.BackEndBTN}>
                      <Link href="./ManagementTriangle"> click here! </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className={projectmanagementStyle.Space100}></div>
          </div>
          <div></div>
        </div>

        <div className={projectmanagementStyle.Space400}></div>
      </div>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </>
  );
};

export default projectmanagement;
