import SWEmajorsStyles from '@/styles/SWEmajors.module.css'
import Image from 'next/image'
import Link from 'next/link'
const SysDesign = () => {
    return (
        <>
            <div className={SWEmajorsStyles.SWEmajorsBody}>
                <div className={SWEmajorsStyles.Space}></div>
                <div>
                    <h1 className="text-center">System Design</h1>
                    <div className={SWEmajorsStyles.Space100}></div>

                    <div class="container">

                        <div class="d-flex justify-content-center" >
                            <Image
                                src="/images/Sys-Design.png"
                                width="1100"
                                height="580"
                            />
                        </div>
                    </div>


                    <div className="container">
                        <div>
                            <div className={SWEmajorsStyles.fontSize130}>
                                <div className={SWEmajorsStyles.Space100}></div>
                                <h3><b>What is the Software Design ?</b></h3>
                                <p>
                                    Software design is the process of creating a detailed plan or blueprint for how a software
                                    system or application will be developed, specifying its structure, behavior, and functionality.
                                    It involves making decisions and defining the design elements and characteristics of the software
                                    system to meet its intended purpose and requirements. <br /> <br />
                                    Software design typically follows the requirements analysis phase, where the requirements of the
                                    software system are identified and documented. During the software design phase, the requirements are
                                    further elaborated and translated into a design that can be implemented by developers. Software design
                                    encompasses several aspects, including:
                                </p>
                                <ul>
                                    <li><b>Architectural design:</b> This involves defining the high-level structure and organization of the software system, including the arrangement of components or modules, their relationships, and interactions.</li>
                                    <li> <b>Interface design:</b> This involves specifying the interfaces and interactions between different components or modules of the software system, including data flows, control flows, and communication protocols.</li>
                                    <li><b>Data design:</b> This involves defining the data structures, databases, and data flows within the software system, including data models, data storage, and data processing.</li>
                                    <li><b>Component design:</b> This involves specifying the detailed design of individual components or modules, including their internal structure, algorithms, and logic.</li>
                                    <li><b>interface design:</b> This involves designing the <b>graphical user interface (GUI)</b> or <b>user experience (UX)</b> of the software system, including screen layouts, navigation, and user interactions.</li>
                                </ul>
                                <div className={SWEmajorsStyles.Space100}></div>


                                <div className="container">
                                    <div className={SWEmajorsStyles.Space}></div>
                                    <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 ">
                                        <div className="col-6" >
                                            <div className="p-3 border bg-light" style={{ width: '12rem', height: '7rem' }}>
                                                <div className="justify-content-sm-center">
                                                <Link href='/SWE/System-Design/Architectural-Design'><h3 className="text-center">Architectural design</h3></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6" >
                                            <div className="p-3 border bg-light" style={{ width: '12rem', height: '7rem' }}>
                                                <div className="justify-content-sm-center">
                                                <Link href='/SWE/System-Design/UI-UX-Design'><h3 className="text-center">UI / UX design</h3></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6" >
                                            <div className="p-3 border bg-light" style={{ width: '12rem', height: '7rem' }}>
                                                <div className="justify-content-sm-center">
                                                <Link href='/SWE/System-Design/Component-Design'><h3 className="text-center">Component design</h3></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6" >
                                            <div className="p-3 border bg-light" style={{ width: '12rem', height: '7rem' }}>
                                                <div className="justify-content-sm-center">
                                                <Link href='/SWE/System-Design/Data-Design'><h3 className="text-center">Data design</h3></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                        </div>
                    </div>
                </div>
                <div className={SWEmajorsStyles.Space200}></div>

                {/* stoping here */}

                <div class="container ">
                    <div>
                        <h4><b>Courses to start Information Security Analyst</b></h4>
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
        </div >
        </>
    )
}
export default SysDesign