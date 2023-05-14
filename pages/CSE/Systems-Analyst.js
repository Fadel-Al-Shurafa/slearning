import SWEmajorsStyles from '@/styles/SWEmajors.module.css'
import Image from 'next/image'
import Link from 'next/link'
const SysAnalyst = () => {
  return (
    <>
      <div className={SWEmajorsStyles.SWEmajorsBody}>
        <div className={SWEmajorsStyles.Space}></div>
        <div>
          <h1 className="text-center">Systems Analyst</h1>
          <div className={SWEmajorsStyles.Space100}></div>
          <div className="container">
            <div>
              <div className={SWEmajorsStyles.fontSize130}>
                <div className={SWEmajorsStyles.Space100}></div>
                <h3><b>What is a Systems Analyst?</b></h3>
                <p>
                  Systems analysts implement, maintain, and support IT and informations systems to meet the business needs
                  of organizations and scale as organizations grow. They analyze and create tests, and develop specifications
                  and requirements for developers and programmers to follow. They usually are not involved directly in software
                  or hardware development.
                  <br /> <br />
                  Most systems analysts will be required to have a Bachelor's degree in the field of
                  computer science, information technology, engineering, or information systems. Systems analysts oftentimes
                  advance into project management roles. The best systems analysts have excellent analytical skills and are
                  creative problem solvers.
                </p>
                <div className={SWEmajorsStyles.Space100}></div>
                <h3><b>What Does a Systems Analyst Do?</b></h3>
                <p>
                  Computer systems analysts, or system architects, work with companies, institutions, and independent clients. They survey and diagnose database
                  program issues, resolve user issues, and advise management about systems innovations to improve productivity. Whether formally associated with
                  corporations or acting as freelance consultants, systems analysts work with program users and platforms to gauge issues. This role requires
                  communication and interpersonal skills, plus an understanding of standard and new technologies.
                  <br /> <br />
                  Systems analysts research the latest technologies in database and system design to upgrade infrastructures and train employees, clients, and patients
                  to access systems efficiently. These analysts can also specialize in finance technology, engineering, or educational privacy law (known as FERPA)
                  to cater to client needs. The U.S. Bureau of Labor Statistics (BLS) projects computer systems analyst jobs to grow faster than the national average at 9%,
                  making systems analysis a solid bet for stable employment.
                </p>
                <div className={SWEmajorsStyles.Space100}></div>
                <h3><b>How to Become a Systems Analyst</b></h3>
                <p>
                  The educational foundation for systems analyst careers varies. For most positions, a bachelor's degree in computer science or a related field suffices.
                  However, because analyst roles require interpersonal skills, liberal arts majors tend to suit these positions. Liberal arts majors may consider taking
                  continuing education courses to gain a foundation in information technology and computer coding or programming. Large-scale corporations and
                  financial centers often look for candidates with an additional master's degree in business administration.
                </p>
                <div className={SWEmajorsStyles.Space100}></div>
                <h3><b>Gain Experience</b></h3>
                <p>
                  Most companies expect candidates to hold a bachelor's degree in a computer- or information technology-related field. Some jobs require 1-4 years of prior
                  professional experience in IT service or analysis. Other companies, particularly those in finance or business, often require an MBA.
                </p>
                <div className={SWEmajorsStyles.Space100}></div>
                <h3><b>Earn Credentials</b></h3>
                <p>
                  Many systems analysts maintain company-provided certifications, like those from Microsoft, IBM, and Adobe. Employers do not always require these
                  certifications, but they prepare professionals to assess and troubleshoot issues. They also provide access to company support systems and resolutions.
                  Such certifications can boost analysts' earning potential by increasing their skill sets and setting them apart from competitors.
                </p>
                <div className={SWEmajorsStyles.Space100}></div>
                <div class="container">
                  <div class="row">

                    <div class="col">
                      <div>
                        <Image
                          src="/images/systems-analyst.png"
                          width="600"
                          height="500"
                        />
                      </div>
                    </div>
                    <div class="col">
                      <h4><b>Key Hard Skills</b></h4>
                      <h5>
                        <p>
                          Hard skills hinge on learning rather than inherent personality traits. For example,
                          systems analysts must demonstrate proficiency in Microsoft Office and programming
                          languages like Structured Query Language (SQL).
                        </p> <br />
                      </h5>
                      <ul>
                        <h6>
                          <li><b>Microsoft Office: </b>The Microsoft Office suite of computer programs is the dominant system for professional and educational centers worldwide. Learn to use these programs and their underlying structural coding language to identify and isolate issues and provide programming resolutions. Programs include Microsoft Word, Excel, PowerPoint, Access, OneNote, Outlook, and Publisher.</li> <br />
                          <li><b>SQL: </b>SQL supports and orients all data management systems and programs, including Microsoft Office products. SQL allows programmers to build websites and connect datasets and web programs to provide compatible, complex search engines and platforms for company and institutional innovation.</li> <br />
                          <li><b>Systems Administration: </b>Whether at a company, school, or government branch, these professionals monitor computer systems, including software and program configurations. They also oversee user access, and security. They help community members access computer systems, troubleshoot issues as they arise, and upgrade or install new systems and translate relevant information or metadata among programs.</li>
                        </h6>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={SWEmajorsStyles.Space100}></div>
                <p> <b>Where Can I Work as a Systems Analyst?</b>
                </p>
                <p>Desired by large corporations and small start-ups alike, systems analysts work across diverse organizations and industries. They may handle systems
                  analysis for a single company or work for larger organizations with multiple clients. Some systems analysts work as self-employed freelancers,
                  consulting with companies of various sizes.</p>
              </div>
            </div>
          </div>
          <div className={SWEmajorsStyles.Space200}></div>


          {/* stoping here */}

          <div class="container ">
            <div>
              <h4><b>Courses to start Data Analysts</b></h4>
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
export default SysAnalyst