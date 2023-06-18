import SoftwareImplementationStyles from "../../styles/style.module.css";
import Image from "next/image";
import Link from "next/link";
const SoftwareImplementation = () => {
  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <div className={SoftwareImplementationStyles.body}>
        <div className={SoftwareImplementationStyles.Space200}></div>
        <div className={SoftwareImplementationStyles.Space100}></div>
        <div className={SoftwareImplementationStyles.containerFlexMajors}>
          <div>
            <div className={SoftwareImplementationStyles.FlexCulom}>
              <div className={SoftwareImplementationStyles.FlexCulomMargin}>
                <Image
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  src="/images/logo-website 1.png"
                  width="200"
                  height="200"
                />
              </div>
              <div className={SoftwareImplementationStyles.FlexCulomMargin}>
                <h3 className="text-center">
                  <Link href="/SWE/Web.Developer">Web Developer</Link>
                </h3>
              </div>
            </div>
          </div>

          <div>
            <div className={SoftwareImplementationStyles.FlexCulom}>
              <div className={SoftwareImplementationStyles.FlexCulomMargin}>
                <Image
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  src="/images/mobile-phone 1.png"
                  width="200"
                  height="200"
                />
              </div>
              <div className={SoftwareImplementationStyles.FlexCulomMargin}>
                <h3 className="text-center">
                  <Link href="/SWE/Mobile.Developer">Mobile Developer</Link>
                </h3>
              </div>
            </div>
          </div>

          <div className={SoftwareImplementationStyles.FlexCulom}>
            <div className={SoftwareImplementationStyles.FlexCulomMargin}>
              <Image
                data-aos="fade-right"
                data-aos-duration="1000"
                src="/images/PC logo 1.png"
                width="200"
                height="200"
              />
            </div>
            <div className={SoftwareImplementationStyles.FlexCulomMargin}>
              <h3 className="text-center">
                <Link href="/SWE/Desktop.Developer">Desktop Developer</Link>
              </h3>
            </div>
          </div>
        </div>
        <div className={SoftwareImplementationStyles.Space400}></div>
      </div>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </>
  );
};
export default SoftwareImplementation;
