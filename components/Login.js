import React from "react";
import { useSession, signIn, getSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import LoginStyles from "../styles/Login.module.css";
import Image from "next/image";
import Link from "next/link";

const login = () => {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return <div></div>;
  } else {
    return (
      <div className={LoginStyles.Loginbody}>
        <div className={LoginStyles.loginContainer}>
          <div className={LoginStyles.loginFlex}>
            <div className="fade-in-left">
              <img
                className={LoginStyles.loginIMG}
                src="/images/loginIMG.png"
              />
            </div>
          </div>
          <div className={LoginStyles.loginFlex}>
            <div className={LoginStyles.BtnContainer}>
              <div className={LoginStyles.BtnFlex}>
                <h1> Sign in with Google Account </h1>
              </div>
              <div className={LoginStyles.BtnFlex}>
                <button className={LoginStyles.Botton} onClick={() => signIn()}>
                  Sign{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className={LoginStyles.Loginbody}>
        <div className={LoginStyles.loginContainer}>
          <div className={LoginStyles.loginFlex}>
            <div className="fade-in-left">
              <img
                className={LoginStyles.loginIMG}
                src="/images/loginIMG.png"
              />
            </div>
          </div>
          <div className={LoginStyles.loginFlex}>
            <div className={LoginStyles.BtnContainer}>
              <div className={LoginStyles.BtnFlex}>
                <h1> Sign in with Google Account </h1>
              </div>
              <div className={LoginStyles.BtnFlex}>
                <button className={LoginStyles.Botton} onClick={() => signIn()}>
                  Sign {" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    redirect: {
      destination: "/signin";
    }
  }

  return {
    props: { session },
  };
};
