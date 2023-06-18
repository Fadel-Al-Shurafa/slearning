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

interface Chat {
  id: string;
  email: string;
  QuestionPostID: string;
  chat: string;
  image: string;
}

interface QuestionPost {
  id: string;
  email: string;
  name: string;
  image: string;
  title: string;
  content: string;
  Chats?: {
    id: string;
    email: string;
    QuestionPostID: string;
    chat: string;
    image: string;
  }[];
}

const PostQA = ({ QuestionPosts, Chat, user }: QAPosts) => {
  const { data: session } = useSession();

  const [status, setStatus] = useState(0);
  const [showInput, setShowInput] = useState(true);
  const [chatMassge, setchatMassge] = useState("");

  const [error, setError] = useState("");

  // useEffect(() => {
  //   async function fetchMessages() {
  //     const res = await fetch('/api/messages')
  //     const data = await res.json()
  //     setMessages(data)
  //   }

  //   // Fetch messages initially
  //   fetchMessages()

  //   // Listen for new messages via WebSocket
  //   socket.on('newMessage', (chat: Chat) => {
  //     setMessages((prevMessages) => [...prevMessages, message])
  //   })

  //   // Clean up the WebSocket listener on unmount
  //   return () => socket.off('newMessage')
  // }, [])

  const handleInputClick = () => {
    setShowInput(false);
    setStatus(1);
  };
  const handleInputClickBack = () => {
    setShowInput(true);
    setStatus(0);
  };
  const handleChangeTextChat = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setchatMassge(event.target.value);
  };

  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  async function deletePost(id: string) {
    console.log({ id });
    try {
      fetch(`../api/post/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      }).then(() => {
        refreshData();
      });
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmitTextChatQA: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    setchatMassge("");

    console.log(chatMassge);
  };

  async function sendToChat(id: string) {
    console.log({ id });
    try {
      
      const userEmail = session.user?.email;
      const image = session.user?.image;
      const body = { image, userEmail, chatMassge };
      await fetch(`../api/post/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).then(() => {
        refreshData();
      });
    } catch (error) {
      console.error(error);
    }
  }

 

  const [isDeleting, setIsDeleting] = useState(false);

  async function deleteChat(id: string) {
    console.log({ id });
    try {
      const response = await fetch(`../api/post/chat/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      });
      if (response.ok) {
        router.replace(router.asPath); // Refresh the page to update the chat messages
      } else {
        console.error(await response.json());
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleClick() {
    if (!session) {
      alert('You need to be signed in to do that!');
      signIn('google');
    } else {
      alert('You clicked the button!');
    }
  }

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
                    <h3 className={ViewPostsStyles.MenuTextSelected}> Q&A </h3>
                  </div>
                  <div className={ViewPostsStyles.TextPadding}>
                    <Link href="/PostSection/PostVideos">
                      {" "}
                      <h3 className={ViewPostsStyles.MenuText}> Video </h3>{" "}
                    </Link>
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
          <div className={PostsStyles.QAPostsBody}>
            {session?.user.role === Role.ADMIN && (
              <div>
                <div className={ViewPostsStyles.Space200}></div>
                <h1 className="text-center">You are an administrator! </h1>
              </div>
            )}
            <div className={PostsStyles.QAPostsBodyBG}>
              {QuestionPosts.map((questionPost) => (
                <div key={questionPost.id} className={PostsStyles.UserQAPosts}>
                  <div className={PostsStyles.UserProile}>
                    <div className={PostsStyles.containerUserProile}>
                      <div>
                        <img
                          className={PostsStyles.UserImg}
                          src={questionPost.image}
                          alt="Profile picture"
                        />
                      </div>
                      <div>
                        <h3>{questionPost.name} </h3>
                      </div>
                    </div>

                    <div className="p-5">
                      {session?.user.role === Role.ADMIN && (
                        <button
                          key={questionPost.id}
                          className="btn btn-warning"
                          onClick={() => deletePost(questionPost.id)}
                        >
                          {" "}
                          delete post by Admin{" "}
                        </button>
                      )}
                    </div>
                  </div>

                  <div className={PostsStyles.UserQA}>
                    <ul>
                      <h2 className="">
                        <div className="justify-content-between">
                          <div className="flex-1 ">
                            <div className="d-flex justify-content-between">
                              <div className="flex-1">
                                <h2>{questionPost.title}</h2>
                              </div>
                              <div className="flex-1 p-1 ">
                                {session?.user?.email === questionPost.email ? (
                                  <button
                                    key={questionPost.id}
                                    className="btn btn-danger"
                                    onClick={() => deletePost(questionPost.id)}
                                  >
                                    {" "}
                                    delete post{" "}
                                  </button>
                                ) : (
                                  <div key={questionPost.id}> </div>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className={ViewPostsStyles.Space100}></div>

                          <div></div>

                          <div className={ViewPostsStyles.Space100}></div>

                          <div>
                            {" "}
                            <h3>{questionPost.content}</h3>
                          </div>

                          <div className={ViewPostsStyles.Space200}></div>

                          <div className="flex-1">
                            {showInput && (
                              <div>
                                <button
                                  className={ViewPostsStyles.BTNnoneW}
                                  onClick={handleInputClick}
                                >
                                  comments{" "}
                                  <FontAwesomeIcon icon={faCommentDots} />
                                </button>
                              </div>
                            )}
                          </div>

                          {status == 1 ? (
                            <div className={PostsStyles.Chatbody}>
                              {questionPost.Chats && (
                                <div>
                                  {questionPost.Chats.map((chat) => (
                                    <div
                                      className={PostsStyles.Containerimgchat}
                                      key={chat.id}
                                    >
                                      <div className={PostsStyles.Fleximgchat}>
                                        <img
                                          className={PostsStyles.UserImg}
                                          src={chat.image}
                                          alt="Profile picture"
                                        />
                                      </div>

                                      <div className={PostsStyles.FlexMsgchat}>
                                        {session?.user?.email === chat.email ? (
                                          <div
                                            className={PostsStyles.MysendToChat}
                                          >
                                            <div
                                              className={PostsStyles.TextChat}
                                            >
                                              <h3
                                                className={
                                                  PostsStyles.paddingrighth3
                                                }
                                              >
                                                {" "}
                                                {chat.chat}{" "}
                                              </h3>
                                            </div>

                                            <div>
                                              <button
                                                className="btn btn-dark"
                                                onClick={() =>
                                                  deleteChat(chat.id)
                                                }
                                              >
                                                X
                                              </button>
                                            </div>
                                          </div>
                                        ) : (
                                          <div
                                            className={PostsStyles.sendToChat}
                                          >
                                            <div
                                              className={PostsStyles.TextChat}
                                            >
                                              <h3> {chat.chat} </h3>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                      {session?.user.role === Role.ADMIN && (
                                        <button
                                          className="btn btn-warning"
                                          onClick={() => deleteChat(chat.id)}
                                        >
                                          delete chat by admin
                                        </button>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}

                              <div className={PostsStyles.inputbody}>
                                <div className={PostsStyles.borderBottom}></div>
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
                                      <textarea
                                        className={PostsStyles.inputChat}
                                        type="textarea"
                                        id="TextQ"
                                        name="TextQ"
                                        placeholder="reply!"
                                        value={chatMassge}
                                        onChange={handleChangeTextChat}
                                        required
                                      />
                                    </div>
                                    <div>
                                      {session ? (
                                        <button
                                          type="submit"
                                          className={PostsStyles.BTNsend}
                                          onClick={() =>
                                            sendToChat(questionPost.id)
                                          }
                                        >
                                          Send
                                        </button>
                                      ) : (
                                        <button
                                          type="submit"
                                          className={PostsStyles.BTNsend}
                                          onClick={handleClick}
                                        >
                                          Send
                                        </button>
                                      )}
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
          </div>

          <div className="bg-light"></div>
        </div>
      </div>
      <div className={ViewPostsStyles.Space400}></div>
    </>
  );
};

export default PostQA;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const QuestionPosts = await prisma.questionPost.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      image: true,
      title: true,
      content: true,
      Chats: {
        select: {
          id: true,
          QuestionPostID: true,
          email: true,
          chat: true,
          image: true,
        },
      },
    },
  });

  const Chat = await prisma.chatText.findMany({
    select: {
      id: true,
      QuestionPostID: true,
      image: true,
      email: true,
      chat: true,
      //createdAT: true
    },
  });

  const session = await getSession(context);

  if (!session) {
    redirect: {
      destination: "/signin";
    }
  }


  return {
    props: {
      QuestionPosts,
      Chat,
    },
  };
};
