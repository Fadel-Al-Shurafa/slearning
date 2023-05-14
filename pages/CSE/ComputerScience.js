import SWEmajorsStyles from '@/styles/SWEmajors.module.css'
import Image from 'next/image'
import Link from 'next/link'
const ComputerScience  = () => {
  return (
    <>

        <div className={SWEmajorsStyles.SWEmajorsBody}>
        <div className={SWEmajorsStyles.Space}></div>
            <h1 className={SWEmajorsStyles.H1text}>Computer Science</h1>

            <div className={SWEmajorsStyles.ContainerContent}>
                <div className={SWEmajorsStyles.FlexContent}>
                    <Image 
                    src="/images/CompSc-mainpage.png"
                    width="550"
                    height="300"
                    />
                </div>
                <div className={SWEmajorsStyles.FlexContent}>
                    <p> 
                    Computer science is the study of computers and computational systems. It is a
                    broad field which includes everything from the algorithms that make up software 
                    to how software interacts with hardware to how well software is developed and designed.  
                        <br/>
                        Software Engineers get involved throughout the entire project life cycle. 
                        <br/>
                        Computer scientists use various mathematical algorithms, coding procedures, 
                        and their expert programming skills to study computer processes and develop
                        new software and systems.
                    </p>
                </div>
            </div>

            <div className="container">
                <div className={SWEmajorsStyles.Space}></div>
                <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 ">
                    <div className="col-6" >
                        <div className="p-3 border bg-light" style={{ width: '18rem', height: '16rem'}}>
                            <div className="justify-content-sm-center">
                            <Link href='/CSE/Information_Technology_Specialist'><h2 className="text-center">information technology specialist</h2></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div classID={SWEmajorsStyles.majors}  className="p-3 border bg-light" style={{ width: '18rem', height: '16rem'}}>
                            <Link href='/CSE/Machine-Learning-Engineering'><h2 className="text-center">Machine Learning Engineering</h2></Link>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="p-3 border bg-light" style={{ width: '18rem', height: '16rem'}}>
                            <h2 className="text-center">Software Development</h2>
                            {/*this section with Eng.Fadel*/}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="p-3 border bg-light" style={{ width: '18rem', height: '16rem'}}>
                        <Link href='/CSE/Systems-Analyst.'><h2 className="text-center">Systems Analyst</h2></Link>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="p-3 border bg-light" style={{ width: '18rem', height: '16rem'}}>
                        <Link href='/CSE/Network-Administrator'><h2 className="text-center">Network Administrator</h2></Link>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="p-3 border bg-light" style={{ width: '18rem', height: '16rem'}}>
                        <Link href='/CSE/Information-Security-Analyst'><h2 className="text-center">Information Security Analyst</h2></Link>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="p-3 border bg-light" style={{ width: '18rem', height: '16rem'}}>
                            <h2 className="text-center">AI Engineer</h2>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="p-3 border bg-light" style={{ width: '18rem', height: '16rem'}}>
                            <h2 className="text-center">Computer Hardware Engineering</h2>
                        </div>
                    </div>
                </div>
                

            </div>

        </div>

    </>
    
  )
}

export default ComputerScience