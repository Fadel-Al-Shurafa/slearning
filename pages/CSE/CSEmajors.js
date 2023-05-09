import SWEmajorsStyles from '@/styles/SWEmajors.module.css'
import Image from 'next/image'
const SWEmajors = () => {
  return (
    <>

        <div className={SWEmajorsStyles.SWEmajorsBody}>
        <div className={SWEmajorsStyles.Space}></div>
            <h1 className={SWEmajorsStyles.H1text}>Software Engineering</h1>

            <div className={SWEmajorsStyles.ContainerContent}>
                <div className={SWEmajorsStyles.FlexContent}>
                    <Image 
                    src="/images/SWE-img.png"
                    width="400"
                    height="400"
                    />
                </div>
                <div className={SWEmajorsStyles.FlexContent}>
                    <p> 
                        Software Engineers are responsible for designing and developing effective software solutions
                        to meet their clients' requirements. Most Software Engineers specialize in a certain area
                        and could be responsible for working on anything from web applications and content
                        management systems to databases and operating systems. 
                        <br/>
                        Software Engineers get involved throughout the entire project life cycle. 
                        <br/>
                        Graduates can find their first employment in technical and support roles that relate to their
                        area of study and skills, and can include supporting the design, development and management of hardware,
                        software, multimedia and systems integration services.
                    </p>
                </div>
            </div>

            <div className="container">
                <div className={SWEmajorsStyles.Space}></div>
                <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 ">
                    <div className="col-6" >
                        <div className="p-3 border bg-light" style={{ width: '18rem', height: '16rem'}}>
                            <div className="justify-content-sm-center">
                                <h2 className="text-center">SWE</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div classID={SWEmajorsStyles.majors}  className="p-3 border bg-light" style={{ width: '18rem', height: '16rem'}}>
                            <h2 className="text-center">CSE</h2>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="p-3 border bg-light" style={{ width: '18rem', height: '16rem'}}>
                            <h2 className="text-center">Cyber</h2>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="p-3 border bg-light" style={{ width: '18rem', height: '16rem'}}>
                            <h2 className="text-center">Data Science</h2>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="p-3 border bg-light" style={{ width: '18rem', height: '16rem'}}>
                            <h2 className="text-center">Data Science</h2>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="p-3 border bg-light" style={{ width: '18rem', height: '16rem'}}>
                            <h2 className="text-center">Data Science</h2>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="p-3 border bg-light" style={{ width: '18rem', height: '16rem'}}>
                            <h2 className="text-center">Data Science</h2>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="p-3 border bg-light" style={{ width: '18rem', height: '16rem'}}>
                            <h2 className="text-center">Data Science</h2>
                        </div>
                    </div>
                </div>
                

            </div>

        </div>

    </>
    
  )
}

export default SWEmajors