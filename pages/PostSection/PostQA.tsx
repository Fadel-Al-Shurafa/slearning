import { useState, useEffect  } from "react";
import ViewPostsStyles from "../../styles/style.module.css";
import PostsStyles from "../../styles/posts.module.css";
import Image from "next/image";
import Link from "next/link";
import CreatePost from '../../components/CreatePost';
import  prisma   from '../../lib/prisma'
import { GetServerSideProps } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from "next/router";





interface QAPosts{
  QuestionPosts: {
    id: string
    title: string
    content: string
    // createdAT: string
  }[],
  Chat: {
    id: string
    chat: string
    // createdAT: string
  }[]
}

type Image = {
  id: number;
  name: string;
};
type Props = {
  images: Image[];
};


const PostQA = ({QuestionPosts, Chat }: QAPosts) => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null)
  const [status, setStatus] = useState(0)
  const [showInput, setShowInput] = useState(true);
  const [chatMassge, setchatMassge] = useState(""); 

  const [error, setError] = useState("");

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
  };

  const handleInputClick = () => {
    setShowInput(false);
    setStatus(1);
  };
  const handleInputClickBack = () => {
    setShowInput(true);
    setStatus(0);
  };
  const handleChangeTextChat = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setchatMassge(event.target.value);
  };


  const imageId = 1; // Replace with the image ID you want to display


  const router = useRouter()

  const refreshData = () => {
    router.replace(router.asPath)
  }

async function deletePost(id: string) {
  console.log({id})
  try{
    fetch(`../api/post/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: 'DELETE'
    }).then(() => {
      refreshData()
    })
  }catch (error){
    console.log(error)
  }
  
}

const onSubmitTextChatQA: React.FormEventHandler<HTMLFormElement> = async (event) => {
  event.preventDefault();
  
  
  
  setchatMassge("");

  console.log(chatMassge);
};
async function sendToChat(id: string) {
  console.log({id})
  try {
    const body = { chatMassge };
    await fetch(`../api/post/chatTextQA`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body),
    }).then(() => {
      refreshData()
    })
  } catch (error) {
      console.error(error);
  }
}
useEffect(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}, [0]);

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
                  <h3 className={ViewPostsStyles.MenuTextSelected}> Q&A </h3>
                </div>
                <div className="p-5">
                  <Link href="/PostSection/PostVideos">
                    {" "}
                    <h3 className={ViewPostsStyles.MenuText}> Video </h3>{" "}
                  </Link>
                </div>
                <div className="p-5">
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

          {QuestionPosts.map(questionPost => (

            <div className={PostsStyles.UserQAPosts}>

            <div className={PostsStyles.UserProile}>
                <div className={PostsStyles.UserImg}></div>
                <h3 key={questionPost.id} >User name {questionPost.id} </h3>

            </div>

            <div className={PostsStyles.UserQA}>
              <ul>
                <h2 key={questionPost.id} className="">
                  <div className="justify-content-between">
                    <div className="flex-1 ">
                      <div className="d-flex justify-content-between">
                        <div className="flex-1">
                          <h3 className="font-blod">{questionPost.title}</h3>
                        </div>
                        <div className="flex-1 p-1 ">
                          <button 
                          className="btn btn-danger" 
                          onClick={() => deletePost(questionPost.id)}> delete post </button>
                        </div>
                      </div>
                    </div>

                      <div className={ViewPostsStyles.Space200}></div>

                      {/* <div>
                        {images.map((image) => (
                          <div key={image.id} onClick={() => handleImageClick(image)}>
                            <img src={`../api/images/${image.id}`} alt={image.name} width={300} height={200} />
                          </div>
                        ))}

                        {selectedImage && (
                          <div>
                            <img src={`../api/images/${selectedImage.id}`} alt={selectedImage.name} width={600} height={400} />
                          </div>
                        )}
                      </div> */}

                      <div className={ViewPostsStyles.Space200}></div>

                    <div>
                      {questionPost.content}
                    </div>

                      <div className={ViewPostsStyles.Space200}></div>

                    <div className="flex-1">
                    
                    {showInput && (
                      <div>
                        <button 
                          className={ViewPostsStyles.BTNnoneW}
                          onClick={handleInputClick}
                          >
                            
                          <FontAwesomeIcon icon={faCommentDots}/>
                        </button>
                      </div>
                    )}
                    </div>
                    
                    {status == 1 ? (
                      
                      <div className={PostsStyles.Chatbody}>
                      
                        {Chat.map(chatText => (
                          <div className={PostsStyles.sendToChat}>
                            <div className={PostsStyles.TextChat}>{chatText.chat}</div>
                          </div>
                                          
                        ))}
                        <div className={PostsStyles.inputbody}>
                          <form onSubmit={onSubmitTextChatQA}>
                            
                            <div className={PostsStyles.containerChatQA}>
                              <div>
                                  <button 
                                    className={PostsStyles.BTNback}
                                    onClick={handleInputClickBack}
                                    >
                                      Back
                                  </button>
                              </div>
                              <div>
                                <input
                                  className={PostsStyles.inputChat}
                                  type="text"
                                  id="TextQ"
                                  name="TextQ"
                                  placeholder="reply!"
                                  value={chatMassge}
                                  onChange={handleChangeTextChat}
                                  required
                                  
                                />
                              </div>
                              <div>
                                  <button  
                                    className={PostsStyles.BTNsend}
                                    type="submit"
                                    onClick={() => sendToChat(questionPost.id)}
                                    >
                                      Send
                                  </button>
                              </div>

                            </div>
                          </form>
                       
                        </div>
                      
          
                      </div>
                    ) : null}


                    
                  </div>

                </h2>
              </ul>
            </div>

            </div>
 
          ))}
        
        </div>
        
        <div className="bg-light"></div>
      </div>
      <div className={ViewPostsStyles.Space400}></div>
    </>
  );
};

export default PostQA;

export const   getServerSideProps: GetServerSideProps = async () =>{
  const QuestionPosts = await prisma.questionPost.findMany({
    
    select: {
        title: true,
        id: true,
        content: true,
        // Chats: {
        //   select: {
        //     id: true,
        //     chat: true
        //   },
        // },
    },
    
  });
  const Chat = await prisma.chatText.findMany({
    
    select: {
        id: true,
        chat: true
        //createdAT: true
    },
  });

    return {
      props:{
        QuestionPosts,
        Chat
      }
    }
    

}