import MobileDeveloperStyle from "../../styles/style.module.css";
import Image from "next/image";
import Link from "next/link";
const MobileDeveloper = () => {
  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

      <div className={MobileDeveloperStyle.body}>
        <div className="container">
          <div className={MobileDeveloperStyle.fontSize130}>
            <div className={MobileDeveloperStyle.Space100}></div>
            <div className="d-flex justify-content-center">
              <img
                className="rounded mx-auto d-block"
                src="/images/mobile.png"
                className={MobileDeveloperStyle.webimg}
              />
            </div>

            <div className={MobileDeveloperStyle.Space400}></div>
          </div>
        </div>
      </div>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </>
  );
};

export default MobileDeveloper;
