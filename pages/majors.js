import majorsStyles from "../styles/style.module.css";
import Link from "next/link";
import Image from "next/image";
const majors = () => {
  return (
    <>
      <div>
        <div className={majorsStyles.Space400}></div>

        <div className={majorsStyles.containerFlexMajors}>
          <div className={majorsStyles.MainMajorsLnks}>
            <Link href="/SWE/SWEmajors">
              <h2 className="text-center">SWE</h2>
            </Link>
          </div>
          <div>
            <div className={majorsStyles.MainMajorsLnks}>
              <Link href="/CSE/CSEmajors">
                <h2 className="text-center">CSE</h2>
              </Link>
            </div>
          </div>

          <div className={majorsStyles.MainMajorsLnks}>
            <Link href="/Cyber/Cybermajors">
              <h2 className="text-center">Cyber</h2>
            </Link>
          </div>
          <div className={majorsStyles.MainMajorsLnks}>
            <Link href="/DataS/DataSmajors">
              <h2 className="text-center">Data Science</h2>
            </Link>
          </div>
        </div>
        <div className={majorsStyles.Space400}></div>
      </div>
    </>
  );
};

export default majors;
