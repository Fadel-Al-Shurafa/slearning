import BackendStyle from "../../styles/style.module.css";
import Image from "next/image";
import Link from "next/link";
const Backend = () => {
  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

      <div className={BackendStyle.body}>
        <div className="container">
          <div className={BackendStyle.fontSize130}>
            <div className={BackendStyle.Space100}></div>
            <div className="d-flex justify-content-center">
              <img
                className="rounded mx-auto d-block"
                src="/images/back7.png"
                className={BackendStyle.webimg}
              />
            </div>
            <div className={BackendStyle.Space100}></div>
          </div>
        </div>
        <div className={BackendStyle.Space400}></div>
      </div>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </>
  );
};

export default Backend;
