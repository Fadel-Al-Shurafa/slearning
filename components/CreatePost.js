
import ViewPostsStyles from "../styles/style.module.css";
import Link from "next/link";

const CreatePost = () => {
  return (
    
        <div className={"text-center"}>
          <Link href="/PostSection/CreateNewPost"><span className={ViewPostsStyles.BTNa}> Create Post </span></Link>  
        </div>

  )
}

export default CreatePost