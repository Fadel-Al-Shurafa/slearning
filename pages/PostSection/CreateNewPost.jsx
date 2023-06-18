import { useEffect, useState } from "react";
import styles from "../../styles/style.module.css";
import CreateNewPoststyles from "../../styles/posts.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { useSession, getSession } from "next-auth/react";

const CreateNewPost = ({ onSuccess, onError }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const [status, setStatus] = useState(0); // 0: no show, 1: show yes, 2: show no.
  const [SoftwareEngineering, setSoftwareEngineering] = useState("");
  const [ComputerScience, setComputerScience] = useState(false);
  const [CyberSecurity, setCyberSecurity] = useState(false);
  const [DataScience, setDataScience] = useState(false);

  const [title, setTitle] = useState("");
  const [Qimage, setQimage] = useState("");
  // const [selectedFile, setSelectedFile] = useState(null);
  // const [imageUrl, setImageUrl] = useState(null);
  const [content, setcontent] = useState("");
  const [PostQuestion, setPostQuestion] = useState("");
  const [QuestionText, setQuestionText] = useState("");

  // const [imageUploaded, setImageUploaded] = useState();

  const [error, setError] = useState("");

  const radioHandler = (status) => {
    setStatus(status);
  };

  useEffect(() => {
    setQuestionText("");
  }, [QuestionText]);

  // console.log(ComputerScience)
  // console.log(CyberSecurity)
  // console.log(DataScience)
  const handleChange = (event) => {
    setImageUploaded(event.target.files[0]);
  };

  const onSubmitPost = async (e) => {
    e.preventDefault();

    // const formData = new FormData();
    // formData.append("image", selectedFile);

    // const response = await fetch("../api/upload", {
    //   method: "POST",
    //   body: formData,
    // });

    // if (response.ok) {
    //   const imageUrl = await response.text();
    //   setSelectedFile(null);
    //   setImageUrl(imageUrl);
    // }
    
    const userEmail = session.user.email;

    if (
      SoftwareEngineering === true ||
      ComputerScience === true ||
      CyberSecurity === true ||
      DataScience === true
    ) {
      try {
        const userEmail = session.user.email;
        const body = { userEmail, title, content };
        await fetch(`../api/PostQaAPI`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      setError("All fields are required");
      return;
    }
    router.push({
      pathname: "./PostQA",
    });

  };
  
  if (session) {
    return (
      <>
        <div className={styles.HomeBody}>
          <div className={styles.PaddingL}>
            <div className={styles.Space400}></div>
            <div className={styles.CreateNewPostbody}>
              <form encType="multipart/form-data" onSubmit={onSubmitPost}>
                <div className="d-flex justify-content-left">
                  <div className="p-4">
                    <img
                      className={styles.CreateUserImg}
                      src={session?.user?.image}
                      alt="Profile picture"
                    />
                  </div>
                  <div className="d-flex align-items-center p-4">
                    <h3>{session?.user?.name} </h3>
                  </div>
                </div>

                <div className={styles.Space200}></div>

                <div>
                  <h1>What is your target?</h1>
                  <div className={styles.fontSize130}>
                    <div className={styles.PaddingLR60}>
                      <input
                        className={styles.raidoInput}
                        type="radio"
                        name="Target"
                        id="SWE"
                        value="SoftwareEngineering"
                        onChange={(e) => setSoftwareEngineering((e = true))}
                      />
                      <label className="p-2"> Software Engineering </label>
                      <br />
                      <input
                        className={styles.raidoInput}
                        type="radio"
                        name="Target"
                        id="CSE"
                        value="ComputerScience"
                        onChange={(e) => setComputerScience((e = true))}
                      />
                      <label className="p-2"> Computer Science</label>
                      <br />
                      <input
                        className={styles.raidoInput}
                        type="radio"
                        name="Target"
                        id="cyber"
                        value="CyberSecurity"
                        onChange={(e) => setCyberSecurity((e = true))}
                      />
                      <label className="p-2"> Cyber Security</label>
                      <br />
                      <input
                        className={styles.raidoInput}
                        type="radio"
                        name="Target"
                        id="DataS"
                        value="DataScience"
                        onChange={(e) => setDataScience((e = true))}
                      />
                      <label className="p-2"> Data Science</label>
                      <br />
                    </div>
                  </div>

                  <div className={styles.Space100}></div>

                  <h1>Which Type of Post?</h1>
                  <div className={styles.fontSize130}>
                    <div className={styles.PaddingLR60}>
                      <input
                        className={styles.raidoInput}
                        type="radio"
                        id="Question"
                        name="Posts"
                        onClick={(e) => radioHandler(1)}
                        value="PostQuestion"
                        onChange={(e) => setPostQuestion(e.target.value)}
                      />
                      <label className="p-2"> Question</label>
                      <br />
                      <input
                        className={styles.raidoInput}
                        type="radio"
                        id="Video"
                        value="Video"
                        name="Posts"
                        onClick={(e) => radioHandler(2)}
                      />
                      <label className="p-2"> Video</label>
                      <br />
                      <input
                        className={styles.raidoInput}
                        type="radio"
                        id="Resource"
                        value="Resource"
                        name="Posts"
                        onClick={(e) => radioHandler(3)}
                      />
                      <label className="p-2"> Research </label>
                      <br />
                    </div>
                    <div></div>
                  </div>
                  <div className={styles.Space200}></div>

                  {status == 1 ? (
                    <div className="p-4">
                      <h1> Q&A </h1>
                      <div className={styles.PaddingLR60}>
                        <input
                          className={styles.BTNnoneWightB}
                          type="text"
                          id="TextQ"
                          name="TextQ"
                          placeholder="What is your Problem?"
                          maxLength={100}
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          required
                        />
                        <div className={styles.BorderText}></div>
                      </div>
                      {/* <div className={styles.Space200}></div>
                      <h1> Share your image if you want </h1>
                      <div>
                        <br />
                        <input
                          onChange={handleChange}
                          accept=".jpg, .png, .gif, .jpeg"
                          type="file"
                        ></input>
                      </div> */}

                      <div className={styles.PaddingLR60}></div>

                      <div className={styles.Space200}></div>

                      <h1> Explain more here </h1>
                      <div className={styles.PaddingLR60}>
                        <br />
                        <textarea
                          className={styles.textarea}
                          id="content"
                          name="content"
                          value={content}
                          onChange={(e) => setcontent(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  ) : null}

                  {status == 2 ? (
                    <div className="p-4">
                      <h1> Video </h1>
                      <div className={styles.PaddingLR60}>
                        <input
                          className={styles.BTNnoneWightB}
                          type="text"
                          id="TextVideo"
                          name="TextVideo"
                          placeholder="What is your Title?"
                          maxLength={100}
                        />
                        <div className={styles.BorderText}></div>
                      </div>
                    </div>
                  ) : null}

                  {status == 3 ? (
                    <div className="p-4">
                      <h1> Research </h1>
                      <div className={styles.PaddingLR60}>
                        <input
                          className={styles.BTNnoneWightB}
                          type="text"
                          id="TextResearch"
                          name="TextResearch"
                          placeholder="What is your Title?"
                          maxLength={100}
                          required
                        />
                        <div className={styles.BorderText}></div>
                      </div>
                    </div>
                  ) : null}

                  <div className={styles.Space100}></div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className={CreateNewPoststyles.BtnFlex}>
                    <button
                      type="submit"
                      className={CreateNewPoststyles.CreatePostBotton}
                    >
                      Create
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className={styles.Space400}></div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className={styles.HomeBody}>
        <div className={styles.PaddingL}>
          <div className={styles.Space400}></div>

          <div className={styles.CreateNewPostbody}>
            <form onSubmit={onSubmitPost}>
              <div className="d-flex justify-content-left">
                <div className="p-4">
                  <div className={styles.UserIMG}></div>
                </div>
                <div className="p-4">
                  <h1>User name</h1>
                  <p> your not login </p>
                </div>
              </div>

              <div className={styles.Space200}></div>

              <div>
                <h1>What is your target?</h1>
                <div className={styles.fontSize130}>
                  <div className={styles.PaddingLR60}>
                    <input
                      className={styles.raidoInput}
                      type="radio"
                      name="Target"
                      id="SWE"
                      value="SoftwareEngineering"
                      onChange={(e) => setSoftwareEngineering((e = true))}
                    />
                    <label className="p-2"> Software Engineering </label>
                    <br />
                    <input
                      className={styles.raidoInput}
                      type="radio"
                      name="Target"
                      id="CSE"
                      value="ComputerScience"
                      onChange={(e) => setComputerScience((e = true))}
                    />
                    <label className="p-2"> Computer Science</label>
                    <br />
                    <input
                      className={styles.raidoInput}
                      type="radio"
                      name="Target"
                      id="cyber"
                      value="CyberSecurity"
                      onChange={(e) => setCyberSecurity((e = true))}
                    />
                    <label className="p-2"> Cyber Security</label>
                    <br />
                    <input
                      className={styles.raidoInput}
                      type="radio"
                      name="Target"
                      id="DataS"
                      value="DataScience"
                      onChange={(e) => setDataScience((e = true))}
                    />
                    <label className="p-2"> Data Science</label>
                    <br />
                  </div>
                </div>

                <div className={styles.Space100}></div>

                <h1>Which Type of Post?</h1>
                <div className={styles.fontSize130}>
                  <div className={styles.PaddingLR60}>
                    <input
                      className={styles.raidoInput}
                      type="radio"
                      id="Question"
                      name="Posts"
                      onClick={(e) => radioHandler(1)}
                      value="PostQuestion"
                      onChange={(e) => setPostQuestion(e.target.value)}
                    />
                    <label className="p-2"> Question</label>
                    <br />
                    <input
                      className={styles.raidoInput}
                      type="radio"
                      id="Video"
                      value="Video"
                      name="Posts"
                      onClick={(e) => radioHandler(2)}
                    />
                    <label className="p-2"> Video</label>
                    <br />
                    <input
                      className={styles.raidoInput}
                      type="radio"
                      id="Resource"
                      value="Resource"
                      name="Posts"
                      onClick={(e) => radioHandler(3)}
                    />
                    <label className="p-2"> Research </label>
                    <br />
                  </div>
                  <div></div>
                </div>
                <div className={styles.Space200}></div>

                {status == 1 ? (
                  <div className="p-4">
                    <h1> Q&A </h1>
                    <div className={styles.PaddingLR60}>
                      <input
                        className={styles.BTNnoneWightB}
                        type="text"
                        id="TextQ"
                        name="TextQ"
                        placeholder="What is your Problem?"
                        maxLength={100}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <div className={styles.BorderText}></div>
                    </div>

                    <div className={styles.Space200}></div>

                    <h1> Share your image if you want </h1>
                    {/* <div className={styles.PaddingLR60}>
                      <br />
                      <input
                        className={styles.BTNnoneWightB}
                        type="file"
                        onChange={handleFileChange}
                      />
                    </div> */}
                    <div className={styles.Space200}></div>

                    <h1> Explain more here </h1>
                    <div className={styles.PaddingLR60}>
                      <br />
                      <textarea
                        className={styles.textarea}
                        id="content"
                        name="content"
                        value={content}
                        onChange={(e) => setcontent(e.target.value)}
                      />
                    </div>
                  </div>
                ) : null}

                {status == 2 ? (
                  <div className="p-4">
                    <h1> Video </h1>
                    <div className={styles.PaddingLR60}>
                      <input
                        className={styles.BTNnoneWightB}
                        type="text"
                        id="TextVideo"
                        name="TextVideo"
                        placeholder="What is your Title?"
                        maxLength={100}
                      />
                      <div className={styles.BorderText}></div>
                    </div>
                  </div>
                ) : null}

                {status == 3 ? (
                  <div className="p-4">
                    <h1> Research </h1>
                    <div className={styles.PaddingLR60}>
                      <input
                        className={styles.BTNnoneWightB}
                        type="text"
                        id="TextResearch"
                        name="TextResearch"
                        placeholder="What is your Title?"
                        maxLength={100}
                      />
                      <div className={styles.BorderText}></div>
                    </div>
                  </div>
                ) : null}

                <div className={styles.Space100}></div>
              </div>
              <div className="d-flex justify-content-center">
                <div className={CreateNewPoststyles.BtnFlex}>
                  <button
                    type="submit"
                    className={CreateNewPoststyles.CreatePostBotton}
                  >
                    Create
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className={styles.Space400}></div>
        </div>
      </div>
    </>
  );
};

export default CreateNewPost;
