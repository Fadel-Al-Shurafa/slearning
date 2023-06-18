import React from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import LoginStyles from "../styles/Login.module.css";

const Signin = () => {
  const { data: session } = useSession();

  const handleSignIn = () => {
    signIn("google", { callbackUrl: "http://localhost:3000/" });
  };
  if (session) {
    return (
      <div>
        <p> welcome, {session.user.name}</p>
        <button onClick={() => signOut()}> Sign Out </button>
      </div>
    );
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
                <button className={LoginStyles.Botton} onClick={handleSignIn}>
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <di>Login</di>;
};

export default Signin;
