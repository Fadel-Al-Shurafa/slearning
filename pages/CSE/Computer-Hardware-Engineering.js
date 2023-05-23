import SWEmajorsStyles from '@/styles/SWEmajors.module.css'
import Image from 'next/image'
import Link from 'next/link'
const CompHardware = () => {
  return (
    <>
      <div className={SWEmajorsStyles.SWEmajorsBody}>
        <div className={SWEmajorsStyles.Space}></div>
        <div>
          <h1 className="text-center">Computer Hardware Engineer</h1>
          <div className={SWEmajorsStyles.Space100}></div>
          <div className="container">
            <div>
              <div className={SWEmajorsStyles.fontSize130}>
                <div className={SWEmajorsStyles.Space100}></div>
                <h3><b>What is a Computer Hardware Engineer?</b></h3>
                <p>
                  A computer hardware engineer is responsible for designing, developing, and testing computer hardware
                  components such as processors, memory, and motherboards. These engineers work on the physical components
                  of computer systems, ensuring that they function properly and are compatible with other components.
                  They may also design custom hardware solutions for specific applications.
                  <br /> <br />Computer hardware engineers typically have a strong background in electrical engineering, with a focus on digital
                  and analog circuit design. They must also be knowledgeable in computer architecture, microprocessors, and digital
                  signal processing. In addition to design work, computer hardware engineers may be responsible for troubleshooting
                  and diagnosing hardware problems, and for recommending and implementing hardware upgrades. They may work
                  for companies that manufacture computer hardware or for organizations that use computer systems in their
                  operations, such as government agencies or financial institutions.
                </p>
                <div className={SWEmajorsStyles.Space100}></div>
                <h3><b>What Does a Hardware Engineer Do?</b></h3>
                <p>
                  Hardware engineers usually work on computer systems, components, and computerized products
                  for consumer markets. Their main duties include testing, modifying, and maintaining the products they build.
                  <br /> <br />

                  Most components must work alongside networking and software tools. Ensuring compatibility with networked
                  systems and specialized applications adds an additional level of complexity to their work.
                </p>

                <div className={SWEmajorsStyles.Space100}></div>
                <div class="container">
                  <div class="row">

                    <div class="col">
                      <div>
                        <Image
                          src="/images/comp-Hardware-eng.png"
                          width="600"
                          height="500"
                        />
                      </div>
                    </div>
                    <div class="col">
                      <h3><b>Key Hard Skills for Hardware Engineers</b></h3> <br/>
                      <ul>
                        <h5>
                          <li><b>Computer-Aided Design: </b>Computer engineers make extensive use of CAD
                            platforms to visualize designs and prototypes.</li> <br />
                          <li><b>Operating Systems: </b>Common examples of operating systems include Windows,
                            iOS, Linux, and Unix. Components and units manufactured for niche purposes
                            and industries may involve uncommon and special-purpose operating systems.</li> <br />
                          <li><b>SComputing Languages: </b> Hardware engineers often use familiar programming
                            languages such as C and C++. Their work also involves a unique class
                            of languages known as hardware description languages (HDLs).</li> <br/>
                          <li><b>Circuit Design: </b>Computer engineering focuses heavily on designing and integrating computer circuitry into parent systems. Advanced circuit design and development proficiencies are a requirement among many employers.</li>
                        </h5>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={SWEmajorsStyles.Space100}></div>
                <h3> <b>How to Become a Computer Hardware Engineer</b> </h3>
                <p>Hardware engineers usually prepare for their careers by earning bachelor's degrees from accredited computer science or computer engineering programs.
                  Learners interested in particular engineering specializations sometimes continue studying at the graduate level.</p>
                <p>Many computer hardware engineers also hold industry certifications. These credentials can help engineers broaden their appeal to prospective employers.
                  Leading organizations offering hardware engineering certifications include Apple, BISCI, Cisco, and CompTIA</p>
                <p>Some accomplished computer engineers are self-taught, while others combine on-the-job training with tech bootcamps or other self-directed education.
                  Individuals with strong technical aptitudes are generally more likely to follow these alternative paths. In such cases, certifications are strongly
                  recommended as they provide an additional level of skills validation.</p> <br />
                  <div className={SWEmajorsStyles.Space50}></div>

                <h4> <b>Types of Computer Hardware Engineers</b> </h4>
                <h5>
                  <ul>
                    <li><b>Systems Architects: </b>Systems architects design and develop the overall architecture of computer systems, including the hardware components,
                      operating systems, and applications.</li>
                    <li><b>Network Architects: </b>Network architects design and develop computer networks, including the hardware components, software, and protocols
                      that are used to transmit data.</li>
                  </ul>
                </h5>

                <div className={SWEmajorsStyles.Space100}></div>
                <h3> <b>What the differences computer hardware engineers and computer engineers?</b></h3>
                <p>Hardware engineering focuses on computer hardware components, while software engineering focuses on programs and applications.
                  Understanding the difference between these two fields can help you determine which one you want to implement in your future career</p>
              </div>
            </div>
          </div>
          <div className={SWEmajorsStyles.Space200}></div>


          {/* stoping here */}

          <div class="container ">
            <div>
              <h4><b>Courses to start Systems Analyst</b></h4>
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
export default CompHardware