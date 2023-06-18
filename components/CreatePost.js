import ViewPostsStyles from "../styles/style.module.css";
import Link from "next/link";
import { useSession, signIn, getSession } from "next-auth/react";

const CreatePost = () => {
  const { data: session } = useSession();

  function handleClick() {
    if (!session) {
      alert('You need to be signed in to do that!');
      signIn('google');
    } else {
      alert('You clicked the button!');
    }
  }
  
  if (session) {
    return (
      <div className={"text-center"}>
        <Link href="/PostSection/CreateNewPost">
          <span className={ViewPostsStyles.BTNaNone}> Create Post </span>
          
        </Link>
      </div>
    );
  }
  return (
    <div className={"text-center"}>
      <Link href="/PostSection/CreateNewPost">
        <button className={ViewPostsStyles.BTNaNone} onClick={handleClick}>
          Create Post{" "}
        </button>{" "}
      </Link>
    </div>
  );
};

export default CreatePost;

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
