import FrontendStyle from "../../styles/style.module.css";
import Image from "next/image";
import Link from "next/link";
const Frontend = () => {
  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

      <div className={FrontendStyle.body}>
        <div className="container">
          <div className={FrontendStyle.fontSize130}>
            <div className={FrontendStyle.Space100}></div>
            <div className="d-flex justify-content-center">
              <img
                className="rounded mx-auto d-block"
                src="/images/fornt.png"
                className={FrontendStyle.webimg}
              />
            </div>
            <div className={FrontendStyle.Space100}></div>
            <div className={FrontendStyle.Space100}></div>
          </div>
          <div></div>
        </div>

        <div className={FrontendStyle.Space400}></div>
      </div>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </>
  );
};

export default Frontend;
