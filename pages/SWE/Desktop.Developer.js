import DesktopStyle from "../../styles/style.module.css";
import Image from "next/image";
import Link from "next/link";
const Desktop = () => {
  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

      <div className={DesktopStyle.body}>
        <div className="container">
          <div className={DesktopStyle.fontSize130}>
            <div className={DesktopStyle.Space100}></div>
            <div className="d-flex justify-content-center">
              <img
                className={DesktopStyle.webimg}
                src="/images/desk.png"
              />
            </div>
            <div className={DesktopStyle.Space100}></div>
          </div>
        </div>

        <div className={DesktopStyle.Space400}></div>
      </div>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </>
  );
};

export default Desktop;
