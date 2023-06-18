import Image from "next/image";
import homeStyle from "../styles/style.module.css";
import Login from "../components/Login";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  return (
    <>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      ></script>

      <div className={homeStyle.homeimg}>
        <h1 className={homeStyle.homeH1}>
          <b>Welcome to Slearning Platform</b>{" "}
        </h1>
      </div>
      <div className={homeStyle.Space400}></div>

      <div className={homeStyle.HomeBody}>
        <div className="justify-content-center">
          <div className="p-2">
            <h2 className="text-center">Why SPLearing?</h2>
          </div>
          <div className={homeStyle.Space50}></div>
          <div className="p-2">
            <p className={homeStyle.Paragraph}>
              We will help students who are about to graduate or start in their
              academic fields strengthening their abilities and honing them in
              accordance with the demands of the Saudi Arabian labor market. We
              will focuses on offering educational programs and courses that
              will help students grow and be highly competitive in the job
              market.
            </p>
          </div>
        </div>

        <div className={homeStyle.Space400}></div>

        <div id="Majors" className={homeStyle.container}>
          <div className="p-5">
            <img
              className={homeStyle.ImageMajros}
              src="/images/learn-major.png"
              alt=""
            />
          </div>

          <div className="p-5">
            <div>
              <div className={homeStyle.Space50}></div>
              <div>
                <h3>Learn about majors?</h3>
              </div>
              <div className={homeStyle.Space50}></div>
              <ul>
                <li className="col-8">
                  Four distinct areas within the field of computers are
                  presented: software engineering, computer science,
                  cybersecurity, and data science.
                </li>
                <br />
                <li className="col-8">
                  Experts are available to provide insights into each
                  specialization.
                </li>
                <br />
                <li className="col-8">
                  Resources are available to help those interested in gaining a
                  comprehensive understanding or simply learning more about
                  these areas.
                </li>
                <br />
                <li>
                  There are many exciting opportunities within the field of
                  computers.
                </li>
              </ul>
              <div className={homeStyle.Space100}></div>
              <div className={homeStyle.BtnMjors}>
                <Link href="/majors">
                  {" "}
                  <h5>Learn more</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={homeStyle.Space200}></div>

        <div id="Posts" className={homeStyle.container}>
          <div className="p-5">
            <img
              src="/images/post-q.png"
              className={homeStyle.ImageMajros}
              alt=""
            />
          </div>
          <div className="p-5">
            <div>
              <div className={homeStyle.Space50}></div>
              <div>
                <h3>Post your problem?</h3>
              </div>
              <div className={homeStyle.Space50}></div>
              <ul>
                <li className="col-8">
                  In this section I will help you to share your problem and
                  communicate with people to solve it
                </li>
                <br />
                <li className="col-8">
                  also you can teach by sharing videos and you can share pdf
                  file if you Reasearch 
                </li>
                <br />
              </ul>
              <div className={homeStyle.Space100}></div>
              <div className={homeStyle.BtnMjors}>
                <Link href="/PostSection/PostQA">
                  {" "}
                  <h5>Learn more</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={homeStyle.Space400}></div>
        <Login />

        <div className={homeStyle.Space400}></div>
      </div>
    </>
  );
};

export default Home;
