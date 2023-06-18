import Image from "next/image";
import Link from "next/link";
import HeaderStyles from "../styles/Header.module.css";
import React from "react";
import { Role } from "@prisma/client";
import { useRouter } from "next/router";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { useSession, signIn, signOut, getSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  const handleLinkClick = () => {
    setShowMenu(false);
  };

  if (session) {
    return (
      <>
        <nav>
          <div className="menu-icon" onClick={handleMenuClick}>
            <i className="fa fa-bars fa-2x"></i>
          </div>
          <ul className={`menu ${showMenu ? "show" : ""}`}>
            <div className={HeaderStyles.HeaderContainer}>
              <div className={HeaderStyles.headerFlexItems}>
                <div className={HeaderStyles.H4Hide}>
                  {router.pathname === "/" && (
                    <div className={HeaderStyles.NavbarFlex}>
                      <h4>
                        <a href="http://localhost:3000/#Majors">
                          {" "}
                          Learn about majors?{" "}
                        </a>
                      </h4>
                    </div>
                  )}
                </div>
                <div className={HeaderStyles.H4Hide}>
                  {router.pathname === "/" && (
                    <div className={HeaderStyles.NavbarFlex}>
                      <h4>
                        <a href="#Posts"> Post your problems </a>
                      </h4>
                    </div>
                  )}
                </div>

                {session ? (
                  <div className={HeaderStyles.NavbarFlex}>
                    <h4>
                      <Link
                        onClick={handleMenuClick}
                        href="http://localhost:3000/Profile"
                      >
                        {" "}
                        Profile{" "}
                      </Link>
                    </h4>
                  </div>
                ) : (
                  <h4></h4>
                )}

                {router.pathname !== "/" && (
                  <div className={HeaderStyles.NavbarFlex}>
                    <h4>
                      <Link onClick={handleMenuClick} href="/">
                        {" "}
                        Home{" "}
                      </Link>
                    </h4>
                  </div>
                )}

                <div className={HeaderStyles.NavbarFlex}>
                  <h4>
                    <button
                      onClick={() => signOut()}
                      className={HeaderStyles.BTNnoneW}
                    >
                      <b> Sign Out</b>{" "}
                    </button>
                  </h4>
                </div>
                {session?.user.role === Role.ADMIN && (
                  <div className={HeaderStyles.NavbarFlex}>
                    <h4>
                      <Link
                        onClick={handleMenuClick}
                        href="http://localhost:3000/Admin"
                      >
                        {" "}
                        Admin{" "}
                      </Link>
                    </h4>
                  </div>
                )}
              </div>
              <div className={HeaderStyles.headerFlexItems}>
                <div className={HeaderStyles.NavbarFlex}>
                  <div className={HeaderStyles.Hide}>
                    <img
                      src="/images/SLearning_Logo.png"
                      width={100}
                      height={70}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </ul>
          <style jsx>{`
            ul {
              width: 100%;
              background-color: rgb(255, 255, 255);
              height: 96px;
              border-bottom: 2px solid rgb(126, 126, 126);
              box-shadow: 5px 1px 20px;
              margin: 0;
            }

            .menu-icon {
              display: none;
              font-size: 1.5rem;
              cursor: pointer;
            }
            @media (max-width: 800px) {
              ul {
                margin-top: 40px;
                height: 6000px;
                box-shadow: none;
                border-bottom: none;
              }
              .menu-icon {
                display: block;
                padding: 40px;
              }

              .menu {
                display: none;
                flex-direction: column;
                position: absolute;
                top: 4rem;
                left: 0;
                width: 100%;
                background-color: #fff;
                padding: 1rem;
                z-index: 1;
              }

              .menu.show {
                display: flex;
              }

              .menu li {
                margin: 0.5rem 0;
              }
            }
          `}</style>
        </nav>
      </>
    );
  }

  return (
    <>
      <nav>
        <div className="menu-icon" onClick={handleMenuClick}>
          <i className="fa fa-bars fa-2x"></i>
        </div>
        <ul className={`menu ${showMenu ? "show" : ""}`}>
          <div className={HeaderStyles.HeaderContainer}>
            <div className={HeaderStyles.headerFlexItems}>
              <div className={HeaderStyles.H4Hide}>
                {router.pathname === "/" && (
                  <div className={HeaderStyles.NavbarFlex}>
                    <h4>
                      <a href="http://localhost:3000/#Majors">
                        {" "}
                        Learn about majors?{" "}
                      </a>
                    </h4>
                  </div>
                )}
              </div>
              <div className={HeaderStyles.H4Hide}>
                {router.pathname === "/" && (
                  <div className={HeaderStyles.NavbarFlex}>
                    <h4>
                      <a href="#Posts"> Post your problems </a>
                    </h4>
                  </div>
                )}
              </div>

              {session ? (
                <div className={HeaderStyles.NavbarFlex}>
                  <h4>
                    <Link
                      onClick={handleMenuClick}
                      href="http://localhost:3000/Profile"
                    >
                      {" "}
                      Profile{" "}
                    </Link>
                  </h4>
                </div>
              ) : (
                <div className={HeaderStyles.H4Hide}></div>
              )}

              {router.pathname !== "/" && (
                <div className={HeaderStyles.NavbarFlex}>
                  <h4>
                    <Link onClick={handleMenuClick} href="/">
                      {" "}
                      Home{" "}
                    </Link>
                  </h4>
                </div>
              )}

              {router.pathname !== "/signin" && (
                <div className={HeaderStyles.NavbarFlex}>
                  <h4>
                    <Link onClick={handleMenuClick} href="/signin">
                      Login
                    </Link>
                  </h4>
                </div>
              )}
              {session?.user.role === Role.ADMIN && (
                <div className={HeaderStyles.NavbarFlex}>
                  <h4>
                    <Link
                      onClick={handleMenuClick}
                      href="http://localhost:3000/Admin"
                    >
                      {" "}
                      Admin{" "}
                    </Link>
                  </h4>
                </div>
              )}
            </div>
            <div className={HeaderStyles.headerFlexItems}>
              <div className={HeaderStyles.NavbarFlex}>
                <div className={HeaderStyles.Hide}>
                  <img
                    src="/images/SLearning_Logo.png"
                    width={100}
                    height={70}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </ul>
        <style jsx>{`
          ul {
            width: 100%;
            background-color: rgb(255, 255, 255);
            height: 96px;
            border-bottom: 2px solid rgb(126, 126, 126);
            box-shadow: 5px 1px 20px;
            margin: 0;
          }

          .menu-icon {
            display: none;
            font-size: 1.5rem;
            cursor: pointer;
          }
          @media (max-width: 800px) {
            ul {
              margin-top: 40px;
              height: 6000px;
              box-shadow: none;
              border-bottom: none;
            }
            .menu-icon {
              display: block;
              padding: 40px;
            }

            .menu {
              display: none;
              flex-direction: column;
              position: absolute;
              top: 4rem;
              left: 0;
              width: 100%;
              background-color: #fff;
              padding: 1rem;
              z-index: 1;
            }

            .menu.show {
              display: flex;
            }

            .menu li {
              margin: 0.5rem 0;
            }
          }
        `}</style>
      </nav>
    </>
  );
};

export default Header;
