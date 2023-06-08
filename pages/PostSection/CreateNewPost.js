import { useEffect, useState } from "react";
import styles from "../../styles/style.module.css";
import CreateNewPoststyles from "../../styles/posts.module.css";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";

// import  prisma   from '../../lib/prisma'
// import { GetServerSideProps } from 'next'


// interface User{
//   user: {
//     id: string
//   }[]
// }
// {user}: User
const CreateNewPost = () => {
  const [status, setStatus] = useState(0); // 0: no show, 1: show yes, 2: show no.
  const [SoftwareEngineering, setSoftwareEngineering] = useState("");
  const [ComputerScience, setComputerScience] = useState(false);
  const [CyberSecurity, setCyberSecurity] = useState(false);
  const [DataScience, setDataScience] = useState(false);

  const [title, setTitle] = useState("");
  const [Qimage, setQimage] = useState("");
  const [file, setFile] = useState("");
  const [content, setcontent] = useState("");
  const [PostQuestion, setPostQuestion] = useState("");
  const [QuestionText, setQuestionText] = useState("");
  
  
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
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

 


  const onSubmitPost = async (e) => {

    e.preventDefault();

    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch('../api/image/imageUplod', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Handle success
    } else {
      // Handle error
    }
    
  
    
    if (SoftwareEngineering === true){
      try {
        const body = { title, Qimage, content };
        await fetch(`../api/PostQaAPI`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body),
        });
      } catch (error) {
          console.error(error);
      }
    } else {
        setError("All fields are required");
        return;
      } 
  }
  return (
    <>
    <div className={styles.HomeBody}>

    <div className={styles.PaddingL}>

    
        <div className={styles.Space400}></div>
        
        <div className={styles.CreateNewPostbody}>
        <form action="./PostQA" onSubmit={onSubmitPost}>
            <div className="d-flex justify-content-left">
              <div className="p-4">
                <div className={styles.UserIMG}></div>
              </div>
              <div className="p-4">
                <h1>User name</h1>
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
                    onChange={(e) => setSoftwareEngineering(e = true)}
                  />
                  <label className="p-2" >
                    {" "}
                    Software Engineering{" "}
                  </label>
                  <br />
                  <input
                    className={styles.raidoInput}
                    type="radio"
                    name="Target"
                    id="CSE"
                    value="ComputerScience"
                    onChange={(e) => setComputerScience(e.target.value)}
                  />
                  <label className="p-2" >
                    {" "}
                    Computer Science
                  </label>
                  <br />
                  <input
                    className={styles.raidoInput}
                    type="radio"
                    name="Target"
                    id="cyber"
                    value="CyberSecurity"
                    onChange={(e) => setCyberSecurity(e.target.value)}
                  />
                  <label className="p-2" >
                    {" "}
                    Cyber Security
                  </label>
                  <br />
                  <input
                    className={styles.raidoInput}
                    type="radio"
                    name="Target"
                    id="DataS"
                    value="DataScience"
                    onChange={(e) => setDataScience(e.target.value)}
                  />
                  <label className="p-2" >
                    {" "}
                    Data Science
                  </label>
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
                  <label className="p-2" >
                    {" "}
                    Question
                  </label>
                  <br />
                  <input
                    className={styles.raidoInput}
                    type="radio"
                    id="Video"
                    value="Video"
                    name="Posts"
                    onClick={(e) => radioHandler(2)}
                  />
                  <label className="p-2" >
                    {" "}
                    Video
                  </label>
                  <br />
                  <input
                    className={styles.raidoInput}
                    type="radio"
                    id="Resource"
                    value="Resource"
                    name="Posts"
                    onClick={(e) => radioHandler(3)}
                  />
                  <label className="p-2" >
                    {" "}
                    Research{" "}
                  </label>
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
                  <div className={styles.PaddingLR60}>
                    <br/>
                    <input
                      className={styles.BTNnoneWightB}
                      type="file"
                      id="fileImg"
                      name="fileImg"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </div>

                  <div className={styles.Space200}></div>

                  <h1> Explain more here </h1>
                  <div className={styles.PaddingLR60}>
                    <br/>
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
            <div className='d-flex justify-content-center'>
              <div className={CreateNewPoststyles.BtnFlex}>
                <button type="submit" className={CreateNewPoststyles.CreatePostBotton}>
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


// export const   getServerSideProps: GetServerSideProps = async () =>{
//   const user = await prisma.user.findMany({
    
//     select: {
//         id: true,
//         //createdAT: true
//     },
//   })

//     return {
//       props:{
//         user
//       }
//     }

// }
