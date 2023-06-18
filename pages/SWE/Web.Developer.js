import WebDeveloperStyle from "../../styles/style.module.css";
import Image from "next/image";
import Link from "next/link";
const WebDeveloper = () => {
  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

      <div className={WebDeveloperStyle.body}>
        <div className={WebDeveloperStyle.Space200}></div>
        <div className="container">
          <div className={WebDeveloperStyle.fontSize130}>
            <h1 data-aos="fade-right" data-aos-duration="1000">
              {" "}
              <b>What do web developer do?</b>
              <div className={WebDeveloperStyle.Space50}></div>
            </h1>

            <p
              className={WebDeveloperStyle.ParagraphLeft}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Web developers create and maintain websites. They are also
              responsible for the site's technical aspects, such as its
              performance and capacity, which are measures of a website's speed
              and how much traffic the site can handle. In addition, web
              developers may create content for the site.
            </p>

            <div className={WebDeveloperStyle.Space100}></div>
          </div>
          <div>
            <h1 data-aos="zoom-out-left" data-aos-duration="1000">
              <b>How can I become web developer?</b>
            </h1>
            <br />
            <h4 data-aos="slide-up" data-aos-duration="1000">
              {" "}
              <b>Websites consist of two parts:</b>
            </h4>

            <ul>
              <li data-aos="slide-up" data-aos-duration="1000">
                back-end
              </li>

              <li data-aos="slide-up" data-aos-duration="1000">
                front-end
              </li>
              <br />
              <li data-aos="slide-up" data-aos-duration="1000">
                <b>Front-end developers:</b> A design the visual aspects of
                websites for users to interact with, including colors, layout,
                and fonts.
              </li>
              <br />
              <li data-aos="slide-up" data-aos-duration="1000">
                <b>Back-end developers:</b> working on server-side software to
                ensure the website performs correctly, focusing on databases,
                back-end logic, application programming interface (APIs),
                architecture, and servers.
              </li>
              <br />
              <div className={WebDeveloperStyle.Space200}></div>
              <div className={WebDeveloperStyle.containerFlexMajors}>
                <div className={WebDeveloperStyle.FlexSpecific}>
                  <div className={WebDeveloperStyle.FlexCulom}>
                    <div className={WebDeveloperStyle.FlexCulomMargin}>
                      <div className="d-flex justify-content-center">
                        <Image
                          data-aos="fade-right"
                          data-aos-duration="1000"
                          src="/images/image 7.png"
                          width="200"
                          height="200"
                        />
                      </div>
                    </div>
                    <div className={WebDeveloperStyle.FlexCulomMargin}>
                      <p className={WebDeveloperStyle.Paragraph}>
                        How to become Front-end developers? What skill should
                        learn to get a job in suadi arabic?
                      </p>
                    </div>
                    <div className={WebDeveloperStyle.FlexCulomMargin}>
                      <div className="d-flex justify-content-center">
                        <h3 className={WebDeveloperStyle.FrontEndBTN}>
                          <Link href="./Front-end"> click here! </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={WebDeveloperStyle.FlexSpecific}>
                  <div className={WebDeveloperStyle.FlexCulom}>
                    <div className={WebDeveloperStyle.FlexCulomMargin}>
                      <div className="d-flex justify-content-center">
                        <Image
                          data-aos="fade-right"
                          data-aos-duration="1000"
                          src="/images/image 6.png"
                          width="200"
                          height="200"
                        />
                      </div>
                    </div>
                    <div className={WebDeveloperStyle.FlexCulomMargin}>
                      <p className={WebDeveloperStyle.Paragraph}>
                        How to become Back-end developers? What skill should
                        learn to get a job in suadi arabic?
                      </p>
                    </div>
                    <div className={WebDeveloperStyle.FlexCulomMargin}>
                      <div className="d-flex justify-content-center">
                        <h3 className={WebDeveloperStyle.BackEndBTN}>
                          <Link href="./Back-end"> click here! </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>

        <div className={WebDeveloperStyle.Space400}></div>
      </div>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </>
  );
};

export default WebDeveloper;
