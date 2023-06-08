import DataArchitecttStyles from '../../styles/style.module.css'
import Image from 'next/image'
import Link from 'next/link'
const DataArchitect = () => {
  return (
    <>
      <div>
        <div className={DataArchitecttStyles.Space200}></div>

        <div>
          <h1 className="text-center"> What is Data Architect?</h1>
          <div className={DataArchitecttStyles.Space100}></div>
          <div className="container">
            <div>
              <div className={DataArchitecttStyles.fontSize130}>
                  <p> 
                      Data architects are IT professionals who leverage their computer science and design skills to review and analyze the data infrastructure 
                      of an organization, plan future databases, and implement solutions to store and manage data for organizations and their users.
                  </p>
                  <p> 
                     Since almost every company uses data, data architects can work in nearly any industry, including technology, entertainment, health care, finance, and government.
                  </p>
                  
                  <div className={DataArchitecttStyles.Space100}></div>
                  <p> <b>What does an data scientist do, exactly?</b></p>
                  <p>
                     Much like traditional architects draw up blueprints for the framework used to create structures, data architects design the blueprints that 
                     organizations use for their data management systems. This includes drafting a data management framework to meet business and technology requirements 
                     while ensuring data security and compliance with regulations. Data architects work in a variety of industries, including the technology sector, entertainment, health care, finance, and government.
                  </p>
              </div>
                  <div className={DataArchitecttStyles.Space100}></div>
                  <p> <b>Data Architect tasks and responsibilities</b></p>
                  <p>
                     Typical responsibilities range from evaluating the current data architecture to keeping databases secure. Depending on your organization and industry, your day-to-day tasks might include:
                  </p>
                <ul>
                  <li>Translating business requirements into databases, data warehouses, and data streams</li>
                  <li>Creating procedures to ensure data accuracy and accessibility</li>
                  <li>Analyzing, planning, and defining data architecture framework, including security, reference data, metadata, and master data</li>
                  <li>Creating and implementing data management processes and procedures</li>
                  <li>Collaborating with other teams within the organization to devise and implement data strategies, build models, and assess shareholder needs and goals</li>
                  <li>Researching data acquisition opportunities</li>
                  <li>Developing application programming interfaces (APIs) to retrieve data</li>
                </ul>

            </div>
            <div className={DataArchitecttStyles.Space100}></div>
            
          </div>

          <div className={DataArchitecttStyles.Space200}></div>

          <div class="container">
            <div class="row">
              <div class="col">
                <div>
                    <Image 
                    src="/images/Data-Architect.png"
                    width="600"
                    height="500"
                    />
                </div>
              </div>
              <div class="col">
              <h4><b>Data architect skills</b></h4>
                <p> 
                    To become a data architect, you’ll need a mix of job-specific and more general workplace 
                    skills that empower you to leverage data tools and technologies to help data drive business goals. Here are some of the useful skills you’ll need:
                </p>
                <div className={DataArchitecttStyles.Space50}></div>
                <p><b>Technical data architect skills</b></p>
                <ul>
                    <li>Data mining to uncover patterns, anomalies, and correlations in large data sets</li>
                    <li>Data management to efficiently and cost-effectively collect, store, and use data</li>
                    <li>Coding languages like Python and Java to develop applications for data analysis</li>
                    <li>Machine learning to build scalable systems for handling big data</li>
                    <li>Structured query language (SQL) to manipulate data</li>
                    <li>Data modeling tools like ERWin or Visio to visualize metadata and database schema</li>
                </ul> 
              </div>
            </div>
          </div>
          <div className={DataArchitecttStyles.Space100}></div>
          <div className={DataArchitecttStyles.Space100}></div>
          <div class="container ">
            <div>
              
              <h4><b>Types of Data Architect</b></h4>
                <p> 
                    The volume of data that businesses and organizations deal with every day continues to grow rapidly. It's a critical element for business leaders who rely on data to make sound decisions. It's also 
                    important to consumers who want to make sure that their data is kept safe.
                   
                </p>
                <p>
                    <b>There are multiple ways that data architects can use their skills and a variety of roles they may fill. Examples include:</b>
                </p>
                
                  <ul>
                    <li>Data architects define an organization's data vision and put it into practice.</li>
                    <li>Project managers oversee projects associated with the planning and building of data architecture.</li>
                    <li>Cloud architects employ company data in a cloud environment for optimal performance.</li>
                    <li>Security architects design and employ safeguards to ensure data confidentiality, integrity, and availability.</li>
                    <li>Machine learning architects design scalable systems for use with machine learning and artificial intelligence (AI) models.</li>
                  </ul>

              </div>
              <div className={DataArchitecttStyles.Space100}></div>
              <div>
              
                <h4><b>Courses to start Data Analysts</b></h4>
              <div className={DataArchitecttStyles.Space200}></div>

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
                          <p>Udemy website will help you to learn Data Architect from beginning step by step.</p>
                          <h5>Website: https://www.udemy.com/course/salesforce-certified-data-architect-course/</h5>
                        </div>
                      
                    </div>
                    <div class="p-2">
                        <div className='Centerimg' >
                        <Image 
                            src="/images/coursera.png"
                            width="200"
                            height="200"
                          />
                        </div>
                        
                        <div className='contantWith'>
                          <p>Coursra website will help you to learn Data Architect from beginning step by step.</p>
                          <h5>website:</h5>
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
        
      <div className={DataArchitecttStyles.Space400}></div>
    </>
    
  )
}

export default DataArchitect