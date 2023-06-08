import { useState } from "react";
import ViewPostsStyles from "../../styles/style.module.css";
import PostsStyles from "../../styles/posts.module.css";
import Image from "next/image";
import Link from "next/link";
import CreatePost from "../../components/CreatePost";
import  prisma   from '../../lib/prisma'
import { GetServerSideProps } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faEnvelope } from '@fortawesome/free-solid-svg-icons'

interface QAPosts{
  posts: {
    id: string
    title: string
    createdAT: string
  }[]
}

const PostReasearch = ({posts}: QAPosts) => {
  return (
    <>
      <div className={ViewPostsStyles.bodyViewPosts}>
        <div className={ViewPostsStyles.Space400}></div>

        <CreatePost />

        <div className={ViewPostsStyles.Space400}></div>

        <div className={ViewPostsStyles.MenuBG}>
          <div className="d-flex justify-content-between align-items-center ">
            <div className="p-1">
              <div className="d-flex justify-content-around  ">
                <div className="p-5">
                  <Link href="/PostSection/PostQA">
                  <h3 className={ViewPostsStyles.MenuText}> Q&A </h3>
                  </Link>
                </div>
                <div className="p-5">
                  <Link href="/PostSection/PostVideos">
                    {" "}
                    <h3 className={ViewPostsStyles.MenuText}> Video </h3>{" "}
                  </Link>
                </div>
                <div className="p-5">
                  
                    {" "}
                    <h3 className={ViewPostsStyles.MenuTextSelected}>
                      {" "}
                      Reasearch{" "}
                    </h3>{" "}
                  
                </div>
              </div>
            </div>
            <div className="p-5">
              <form>
                <input
                  className={ViewPostsStyles.inputSearch}
                  type="text"
                  value="Search"
                />
              </form>
            </div>
          </div>
        </div>
        <div className=" p-5 bg-light">

          {posts.map(post => (

            <h3>PostReasearch</h3> 
 
          ))}
        
        </div>
        
        <div className="bg-light"></div>
      </div>
      <div className={ViewPostsStyles.Space400}></div>
    </>
  );
};

export default PostReasearch;

export const   getServerSideProps: GetServerSideProps = async () =>{
  const posts = await prisma.post.findMany({
    
    select: {
        title: true,
        id: true,
        //createdAT: true
    }
  })

    return {
      props:{
        posts
      }
    }

}