import DataScientistStyle from '../../styles/style.module.css'
import Image from 'next/image'
import Link from 'next/link'
const DataScientist = () => {
  return (
    <>
      <div>
        <div className={DataScientistStyle.Space200}></div>

        <div>
          <h1 className="text-center"> What is Data Scientist?</h1>
          <div className={DataScientistStyle.Space100}></div>
          <div className="container">
            <div>
              <div className={DataScientistStyle.fontSize130}>
                  <p>
                     A data scientist is a professional who specializes in analyzing and interpreting data. They use their  to help organizations make better decisions and improve their operations. Data scientists typically have a strong background in mathematics, statistics, and computer science. They use this knowledge to analyze large data sets and find trends or patterns. Additionally, data scientists may develop new ways to collect and store data.
                  </p>
                  
                  <div className={DataScientistStyle.Space100}></div>
                  <h4><b>What does an data scientist do, exactly?</b></h4>
                  <p> 
                    Data scientists examine which questions need answering and where to find the related data. They have business acumen and analytical skills as well as the ability to mine, clean, and present data. Businesses use data scientists to source, manage, and analyze large amounts of unstructured data. Results are then synthesized and communicated to key stakeholders to drive strategic decision-making in the organization.
                  </p>
              </div>
              
            </div>
            
            
          </div>

          <div className={DataScientistStyle.Space200}></div>

            <div className='d-flex justify-content-center'>
                <Image 
                src="/images/DataScientist.png"
                width="1042"
                height="500"
                />
            </div>

          <div className={DataScientistStyle.Space200}></div>

          <div class="container">
          <h4><b>7 Skills to Become A Data Scientist</b></h4>
            <ol>
                <li>Gain database knowledge which is required to store and analyze data using tools such as Oracle® Database, MySQL®, Microsoft® SQL Server and Teradata®.</li>
                <br/>
                <li>Learn statistics, probability and mathematical analysis. Statistics is the science concerned with developing and studying methods for collecting, analyzing, interpreting and presenting empirical data. Probability is the measure of the likelihood that an event will occur.</li>
                <br/>
                <li>Mathematical analysis is the branch of mathematics dealing with limits and related theories, such as differentiation, integration, measure, infinite series, and analytic functions.</li>
                <br/>
                <li>Master at least one programming language. Programming tools such as R, Python, and SAS are very important when performing analytics in data.R is a free software environment for statistical computing and graphics, which supports most Machine Learning algorithms for Data Analytics such as regression, association, and clustering.</li>
                <li>Python is an open-source general-purpose programming language. Python libraries like NumPy and SciPy are used in Data Science.SAS can mine, alter, manage and retrieve data from a variety of sources as well as perform statistical analysis on the data.</li>
                <br/>
                <li>Learn Data Wrangling which involves cleaning, manipulating, and organizing data. Popular tools for data wrangling include R, Python, Flume, and Scoop.</li>
                <br/>
                <li>Master the concepts of Machine Learning. Providing systems with the ability to automatically learn and improve from experience without being explicitly programmed to. Machine Learning can be achieved through various algorithms such as Regressions, Naive Bayes, SVM, K Means Clustering, KNN, and Decision Tree algorithms to name a few.</li>
                <br/>
                <li>Having a working knowledge of Big Data tools such as Apache Spark, Hadoop, Talend, and Tableau, which are used to deal with large and complex data which can’t be dealt with using traditional data processing software.</li>
                <br/>
                <li>Develop the ability to visualize results. Data visualization integrating different data sets and creating a visual display of the results using diagrams, chart, and graphs</li>
            </ol>
          </div>
          <div className={DataScientistStyle.Space100}></div>
          <div class="container ">          
              <div className={DataScientistStyle.Space100}></div>
              <div>
              
                <h4><b>Courses to start Data Analysts</b></h4>
              <div className={DataScientistStyle.Space200}></div>

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

export default DataScientist