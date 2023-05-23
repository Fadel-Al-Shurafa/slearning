import SWEmajorsStyles from '@/styles/SWEmajors.module.css'
import Image from 'next/image'
import Link from 'next/link'
const AIEng = () => {
  return (
    <>
      <div className={SWEmajorsStyles.SWEmajorsBody}>
        <div className={SWEmajorsStyles.Space}></div>
        <div>
          <h1 className="text-center">Artificial Intelligencs Engineer</h1>
          <div className={SWEmajorsStyles.Space100}></div>
          <div className="container">
            <div>
              <div className={SWEmajorsStyles.fontSize130}>
                <div className={SWEmajorsStyles.Space100}></div>
                <h3><b>Who is Artificial Install engineers ?</b></h3>
                <p>
                  Artificial intelligence engineers are individuals who use AI and machine learning techniques to develop applications
                  and systems that can help organizations increase efficiency, cut costs, increase profits, and make better business
                  decisions.<br /><br />AI engineering focuses on developing the tools, systems, and processes that enable artificial intelligence to be
                  applied in the real world. Any application where machines mimic human functions, such as solving problems and
                  learning, can be considered artificial intelligence. Algorithms are “trained” by data, which helps them to learn and
                  perform better.<br /><br />You may have encountered the results of AI engineering when you use Netflix, Spotify, or YouTube, where machine
                  learning customized suggestions based on your behavior. Another popular example is in transportation, where
                  self-driving cars are driven by AI and machine learning technology. It’s especially useful in the health care industry
                  because AI can power robots to perform surgery and generate automated image diagnoses.
                </p>
                <div className={SWEmajorsStyles.Space100}></div>
                <h3><b>AI engineer responsibilities</b></h3>
                <p>
                  AI engineers play an important role in organizations that use AI. They chart the AI strategy and define the problems to be solved with AI. <br />
                  They’re in charge of building AI development and production infrastructure, and then implementing them. Here are some specific tasks and
                  responsibilities of an AI engineer:
                </p>
                <ul>
                  <li>Create and manage the AI development and production infrastructure</li>
                  <li>Conduct statistical analysis and interpret the results to guide and optimize the organization’s decision-making process</li>
                  <li>Automate AI infrastructures for the data science team</li>
                  <li>Build AI models from scratch and help product managers and other stakeholders with analysis and implementation</li>
                  <li>Transform machine learning models into APIs that can be integrated with other applications</li>
                  <li>Collaborate across teams to help with AI adoption and best practices</li>
                </ul>
                <br />
                <div className={SWEmajorsStyles.Space100}></div>
                <h3><b>How to become an AI engineer</b></h3>
                <p>Becoming an AI engineer requires basic computer, information technology (IT), and math skills, as these are critical to maneuvering
                  artificial intelligence programs. Here’s how you can get started in AI engineering. </p>


                <div className={SWEmajorsStyles.Space100}></div>
                <div class="container">
                  <div class="row">

                    <div class="col">
                      <div>
                        <Image
                          src="/images/ai-machine-learning.png"
                          width="550"
                          height="450"
                        />
                      </div>
                    </div>
                    <div class="col">
                      <h4><b>Learn the skills needed.</b></h4> <br />
                      <ul>
                        <h6>
                          <li><b>Programming: </b>  You’ll want to learn programming languages such as Python, R, Java, and C++ so you can build and implement models.</li> <br />
                          <li><b>Probability, statistics, and linear algebra:</b>  These are needed to implement different AI and machine learning models.</li> <br />
                          <li><b>Account management:</b> Tracks network utilization to bill and estimate the usage of various departments of an organization. In smaller organizations, billing may be irrelevant. However, monitoring utilization helps spot specific trends and inefficiencies.</li> <br />
                          <li><b>Big data technologies: </b>  AI engineers work with large amounts of data, so you’ll be required to know Apache Spark, Hadoop, and MongoDB to manage it all.</li> <br />
                          <li><b>Algorithms and frameworks:</b>  You’ll want to understand machine learning algorithms such as linear regression and Naïve Bayes, as well as deep learning algorithms such as recurrent neural networks and generative adversarial networks, and be able to implement them with a framework. Common AI frameworks include Theano, TensorFlow, Caffe, Keras, and PyTorch.</li> <br />
                        </h6>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={SWEmajorsStyles.Space100}></div>




                {/* Stopping Here */}
                <h3><b>Earn experience</b></h3>
                <ol>
                  <li>There are several ways to earn related experience before working as an AI engineer. Gaining experience gives 
you practical knowledge of how to implement AI solutions in various ways and can help you 
build a stronger resume.</li>
                  <li>One way to earn relevant experience is through an internship. Many college degree programs require an internship, 
but even if yours doesn't, completing an internship voluntarily can provide you with experience.</li>
                  <li>
Another way to gain experience is through a part-time job. Look for organizations that have AI engineers in need 
of part-time assistance. While you may not work directly on AI projects, you can still observe how AI engineers work 
and the type of projects they complete.</li>
                  <li>Building your own AI projects helps you to discover what areas to improve on and how to optimize the development process. You can then use this project to highlight your abilities with AI during a job interview.</li>
                </ol> 
              </div>
            </div>
          </div>
          <div className={SWEmajorsStyles.Space200}></div>

          {/* stoping here */}

          <div class="container ">
            <div>
              <h4><b>Courses to start Artificial Intelligencs</b></h4>
              <div className={SWEmajorsStyles.Space200}></div>
              <div className='d-flex justify-content-around'>
                <div class="p-2">
                  <div className='Centerimg'>
                    <Image
                      src="/images/Udemy_logo.png"
                      width="200"
                      height="100"
                    />
                  </div>
                  <div className='contantWith'>
                    <p>Udemy website will help you to learn Data Analysts from beginning step by step.</p>
                    <h5>Website</h5>
                  </div>
                </div>
                <div class="p-2">
                  <div className='Centerimg' >
                    <Image
                      src="/images/Youtube_logo.png"
                      width="200"
                      height="100"
                    />
                  </div>

                  <div className='contantWith'>
                    <p>Here some YouTube channel will help to learn Data Analysts from the beginning step by step.</p>
                    <h5>Channel</h5>
                  </div>
                </div>

                <style jsx>{`
                          .Centerimg {
                            margin: 0 0 100px 100px;
                            
                          }
                          .contantWith{
                            width: 400px;
                          }
                          
                        `}</style>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AIEng