import { useState, useEffect } from "react";
import ViewPostsStyles from "../../styles/style.module.css";
import PostsStyles from "../../styles/posts.module.css";
import Image from "next/image";
import CreatePost from "../../components/CreatePost";
import prisma from "../../lib/prisma";
import { GetServerSideProps } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useSession, signIn, getSession } from "next-auth/react";
import AdminComp from "../../components/AdminComp";
import { Role } from "@prisma/client";
import Link from "next/link";

const PostQA = ({ QuestionPosts, Chat, user }: QAPosts) => {
  return (
    <>
      <div className={ViewPostsStyles.bodyViewPosts}>
        <div className={ViewPostsStyles.Space400}></div>

        <CreatePost />

        <div className={ViewPostsStyles.Space400}></div>
        <div>
          <div className={ViewPostsStyles.MenuBG}>
            <div className="d-flex justify-content-between align-items-center ">
              <div className="p-1">
                <div className="d-flex justify-content-around  ">
                  <div className={ViewPostsStyles.TextPadding}>
                    <Link href="/PostSection/PostQA">
                      {" "}
                      <h3 className={ViewPostsStyles.MenuText}> Q&A </h3>{" "}
                    </Link>
                  </div>
                  <div className={ViewPostsStyles.TextPadding}>
                    {" "}
                    <h3 className={ViewPostsStyles.MenuTextSelected}>
                      {" "}
                      Video{" "}
                    </h3>{" "}
                  </div>
                  <div className={ViewPostsStyles.TextPadding}>
                    <Link href="/PostSection/PostReasearch">
                      {" "}
                      <h3 className={ViewPostsStyles.MenuText}>
                        {" "}
                        Reasearch{" "}
                      </h3>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-light"></div>
        </div>
      </div>
      <div className={ViewPostsStyles.Space400}></div>
    </>
  );
};

export default PostQA;
