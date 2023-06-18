import DataScientistStyle from '../../styles/style.module.css'
import Image from 'next/image'
import Link from 'next/link'
const DataScientist = () => {
  return (
    <>
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <div className={DataScientistStyle.body}>
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
                  <h4 data-aos="flip-up" data-aos-duration="1000"><b>What does an data scientist do, exactly?</b></h4>
                  <p data-aos="flip-up" data-aos-duration="1000"> 
                    Data scientists examine which questions need answering and where to find the related data. They have business acumen and analytical skills as well as the ability to mine, clean, and present data. Businesses use data scientists to source, manage, and analyze large amounts of unstructured data. Results are then synthesized and communicated to key stakeholders to drive strategic decision-making in the organization.
                  </p>
              </div>
              
            </div>
            
            
          </div>

          <div className={DataScientistStyle.Space200}></div>

            <div className='d-flex justify-content-center'>
                <Image data-aos="flip-up" data-aos-duration="1000"  className={DataScientistStyle.ImageMajros}
                src="/images/DataScientist.png"
                width="1042"
                height="500"
                />
            </div>

          <div className={DataScientistStyle.Space200}></div>

          <div className="container">
          <h4 data-aos="flip-up" data-aos-duration="1000" ><b>7 Skills to Become A Data Scientist</b></h4>
            <ol >
                <li data-aos="flip-up" data-aos-duration="1000">Gain database knowledge which is required to store and analyze data using tools such as Oracle® Database, MySQL®, Microsoft® SQL Server and Teradata®.</li>
                <br/>
                <li data-aos="flip-up" data-aos-duration="1000">Learn statistics, probability and mathematical analysis. Statistics is the science concerned with developing and studying methods for collecting, analyzing, interpreting and presenting empirical data. Probability is the measure of the likelihood that an event will occur.</li>
                <br/>
                <li data-aos="flip-up" data-aos-duration="1000">Mathematical analysis is the branch of mathematics dealing with limits and related theories, such as differentiation, integration, measure, infinite series, and analytic functions.</li>
                <br/>
                <li data-aos="flip-up" data-aos-duration="1000">Master at least one programming language. Programming tools such as R, Python, and SAS are very important when performing analytics in data.R is a free software environment for statistical computing and graphics, which supports most Machine Learning algorithms for Data Analytics such as regression, association, and clustering.</li>
                <li data-aos="flip-up" data-aos-duration="1000">Python is an open-source general-purpose programming language. Python libraries like NumPy and SciPy are used in Data Science.SAS can mine, alter, manage and retrieve data from a variety of sources as well as perform statistical analysis on the data.</li>
                <br/>
                <li data-aos="flip-up" data-aos-duration="1000">Learn Data Wrangling which involves cleaning, manipulating, and organizing data. Popular tools for data wrangling include R, Python, Flume, and Scoop.</li>
                <br/>
                <li data-aos="flip-up" data-aos-duration="1000">Master the concepts of Machine Learning. Providing systems with the ability to automatically learn and improve from experience without being explicitly programmed to. Machine Learning can be achieved through various algorithms such as Regressions, Naive Bayes, SVM, K Means Clustering, KNN, and Decision Tree algorithms to name a few.</li>
                <br/>
                <li data-aos="flip-up" data-aos-duration="1000">Having a working knowledge of Big Data tools such as Apache Spark, Hadoop, Talend, and Tableau, which are used to deal with large and complex data which can’t be dealt with using traditional data processing software.</li>
                <br/>
                <li data-aos="flip-up" data-aos-duration="1000">Develop the ability to visualize results. Data visualization integrating different data sets and creating a visual display of the results using diagrams, chart, and graphs</li>
            </ol>
          </div>
          <div className={DataScientistStyle.Space400}></div>
          
        </div>
        
      </div>
        
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
              <script>
                AOS.init();
              </script>
    </>
    
  )
}

export default DataScientist