
import DataAnalystStyles from '../../styles/style.module.css'
import Image from 'next/image'
import Link from 'next/link'
const DataAnalyst = () => {
  return (
    <>
      <div>
        <div className={DataAnalystStyles.Space200}></div>

        <div>
          <h1 className="text-center"> What is Data Analyst?</h1>
          <div className={DataAnalystStyles.Space100}></div>
          <div className="container">
            <div>
              <div className={DataAnalystStyles.fontSize130}>
                <p> A data analyst collects, cleans, and interprets data sets in order to answer a question or solve a problem. 
                      They work in many industries, including business, finance, criminal justice, science, medicine, and government.
                  </p>
                  <p> What kind of customers should a business target in its next ad campaign? What age group is most vulnerable to a 
                      particular disease? What patterns in behavior are connected to financial fraud?
                  </p>
                  <p> These are the types of questions you might be pressed to answer as a data analyst. Read on to find out more about 
                      what a data analyst is, what skills you'll need, and how you can start on a path to become one.
                  </p>
                  <div className={DataAnalystStyles.Space100}></div>
                  <p> <b>Data analysis is the process of gleaning insights from data to inform better business decisions. The process of 
                      analyzing data typically moves through five iterative phases:</b>
                  </p>
              </div>
              
                <ul>
                  <li>Identify the data you want to analyze</li>
                  <li>Collect the data</li>
                  <li>Clean the data in preparation for analysis</li>
                  <li>Analyze the data</li>
                  <li>Interpret the results of the analysis</li>
                  
                </ul>

                <p> Data analysis can take different forms, depending on the question you’re trying to answer. You can read more about the 
                    types of data analysis here. Briefly, descriptive analysis tells us what happened, diagnostic analysis tells us why it happened, 
                    predictive analytics forms projections about the future, and prescriptive analysis creates actionable advice on what actions to take.
                </p>
            </div>
            <div className={DataAnalystStyles.Space100}></div>
            <div>
                <h4><b>Data Analyst tasks and responsibilities</b></h4>
                <p> A data analyst is a person whose job is to gather and interpret data in order to solve a specific problem. The role includes plenty of 
                    time spent with data but entails communicating findings too.
                </p>
                <p><b>Here’s what many data analysts do on a day-to-day basis:</b></p>

                <ul>
                  <li><b>Gather data:</b> Analysts often collect data themselves. This could include conducting surveys, tracking visitor characteristics on a company website, or buying datasets from data collection specialists.</li>
                  <li><b>Clean data:</b> Raw data might contain duplicates, errors, or outliers. Cleaning the data means maintaining the quality of data in a spreadsheet or through a programming language so that your interpretations won’t be wrong or skewed.</li>
                  <li><b>Model data:</b> This entails creating and designing the structures of a database. You might choose what types of data to store and collect, establish how data categories are related to each other, and work through how the data actually appears.</li>
                  <li><b>Interpret data:</b> Interpreting data will involve finding patterns or trends in data that could answer the question at hand.</li>
                  <li><b>Present:</b> Communicating the results of your findings will be a key part of your job. You do this by putting together visualizations like charts and graphs, writing reports, and presenting information to interested parties.</li>
                  
                </ul>
                
            </div>
          </div>

          <div className={DataAnalystStyles.Space200}></div>

          <div class="container">
            <div class="row">
              <div class="col">
                <div>
                    <Image 
                    src="/images/data-analytics.png"
                    width="600"
                    height="500"
                    />
                </div>
              </div>
              <div class="col">
              <h4><b>What skill is required Data Analysts?</b></h4>
                <p> Data Analysts require a variety of technical and soft skills to collect, process, analyze, and interpret data to support business decision-making. 
                    Some of the key skills required by Data Analysts include:
                </p>
                
                  <ol>
                    <li><b>Data analysis and manipulation:</b> Data Analysts must have expertise in data analysis and manipulation techniques such as SQL, Python, R, or Excel to </li>
                    <li><b>Statistical analysis:</b> Data Analysts must have a strong foundation in statistics to correctly analyze and interpret data. This includes knowledge of statistical tests, probability theory, and data sampling methods.</li>
                    <li><b>Data visualization:</b> Data Analysts must have expertise in data visualization tools and techniques to create visualizations that effectively communicate data insights to stakeholders.</li>
                    <li><b>Business acumen:</b> Data Analysts must have a strong understanding of the business context and the goals of the organization. This involves understanding the business problem being addressed and ensuring that the data insights presented align with the organization's goals.</li>
                    <li><b>Communication skills:</b> Data Analysts must have strong communication skills to effectively present data insights to a non-technical audience. This includes being able to explain complex data concepts in a clear and concise manner.</li>
                    <li><b>Problem-solving:</b> Data Analysts must have strong analytical and problem-solving skills to identify trends, patterns, and insights in data and to troubleshoot problems with data quality or analysis.</li>
                    <li><b>Time management:</b> Data Analysts must be able to manage their time effectively to meet project deadlines and ensure that data analysis tasks are completed on time.</li>
                    <li><b>Attention to detail:</b> Data Analysts must have a strong attention to detail to ensure that data is accurately collected, processed, and analyzed.</li>
                    <li><b>Collaboration:</b> Data Analysts must have strong collaboration skills to work effectively with other team members, such as Data Scientists, Business Analysts, and IT professionals.</li>
                  </ol>
                
                
              </div>
            </div>
          </div>
          <div className={DataAnalystStyles.Space100}></div>
          <div class="container ">
            <div>
              
              <h4><b>Types of Data Analysts</b></h4>
                <p> As advancing technology has rapidly expanded the types and amount of information we can collect, knowing how to gather, sort, and analyze data has become a crucial part of almost any industry. You’ll find data analysts in the criminal justice, fashion, food, technology, business, environment, and public sectors—among many others.
                    People who perform data analysis might have other titles such as:
                </p>
                
                  <ul>
                    <li>Medical and health care analyst</li>
                    <li>Market research analyst</li>
                    <li>Business analyst</li>
                    <li>Business intelligence analyst</li>
                    <li>Operations research analyst</li>
                    <li>Intelligence analyst</li>
                  </ul>

              </div>
              <div className={DataAnalystStyles.Space100}></div>
              <div>
              
                <h4><b>Courses to start Data Analysts</b></h4>
              <div className={DataAnalystStyles.Space200}></div>

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

export default DataAnalyst