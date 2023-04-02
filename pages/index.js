import Head from 'next/head'
import Image from 'next/image'
import homeStyle from '@/styles/style.module.css'
import Login from '../components/Login'



export default function Home() {
  return (
    <>
      <Head>
        <title>SLearning</title>
        <meta name='keywords' content='SWE418 project'/>
      </Head>
      
      
      <div className={homeStyle.WelcomePage}>
          <Image 
          src="/images/home.png" 
          width={1920} 
          height={1000}

          />
          
      </div>

      <div className={homeStyle.homeBody}>

          <div className={homeStyle.Why}>
              <h2>Why SPLearing?</h2>
              <p> We will help students who are about to graduate or start in their academic fields strengthening their abilities 
                  and honing them in accordance with the demands of the Saudi Arabian labor market.
                  We will focuses on offering educational programs and courses that will help students
                  grow and be highly competitive in the job market.
              </p>
          </div>

          <div className={homeStyle.LearnContainer}>
              <div className={homeStyle.learnFlex}>
                  <Image 
                    src="/images/learn-major.png"
                    width="600"
                    height="600"
                  />
              </div>
              <div className={homeStyle.learnFlex}>
                <div className={homeStyle.learnContent}>
                  <h3>Learn about  majors?</h3>
                </div>
              </div>

          </div>
          <div className={homeStyle.postContainer}>
              
              <div className={homeStyle.postFlex}>
                <div className={homeStyle.postContent}>
                  <h3>Post your problems</h3>
                </div>
              </div>
              <div className={homeStyle.postFlex}>
                  <Image 
                    src="/images/post-q.png"
                    width="600"
                    height="600"
                  />
              </div>

          </div>



          <Login />

      </div>

      
      
    
    
      
    </>
  )
}
