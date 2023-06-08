import ViewPostsStyles from "../styles/style.module.css";
import Image from "next/image";
import Link from "next/link";
const ViewPosts = () => {
  return (
    <>
      <div className={ViewPostsStyles.bodyViewPosts}>
        <div className={ViewPostsStyles.Space400}></div>
        <div className={"text-center"}>
            <h1><a className={ViewPostsStyles.BTNa}>Create Post</a></h1>
        </div>

        <div className={ViewPostsStyles.Space400}></div>
        
        <div className={ViewPostsStyles.MenuBG}>
            <div className="d-flex justify-content-between align-items-center ">
                <div className="p-1">
                    <div className="d-flex justify-content-around  ">
                        <div className="p-5">
                            <h3 className={ViewPostsStyles.MenuText}> Q&A </h3>
                        </div>
                        <div className="p-5">
                            <h3 className={ViewPostsStyles.MenuText}> Videos </h3>
                        </div>
                        <div className="p-5">
                            <h3 className={ViewPostsStyles.MenuText}> Reasearch </h3>
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <form>
                        <input className={ViewPostsStyles.inputSearch} type="text" value="Search"/>
                    </form>
                    
                </div>
            </div>
        </div>
        <div className="bg-light">
            
        </div>
        
      </div>
      <div className={ViewPostsStyles.Space400}></div>
    </>
  );
};

export default ViewPosts;
