import SWEmajorsStyles from "../styles/style.module.css"
import Image from 'next/image'
const SWEmajors = () => {
  return (
    <>

        <div>
            <div className={SWEmajorsStyles.Space200}></div>
            <h1 className="text-center">Software Engineering</h1>
            <div className={SWEmajorsStyles.Space200}></div>

            <div className="d-flex justify-content-center">
                <div className="p-2">
                <Image src="/images/SWE-img.png" width="400" height="400" />
                </div>
                <div className="p-5 m-5 col-4">
                <p>
                    A data scientist is a professional who specializes in analyzing
                    and interpreting data. They use their to help organizations make
                    better decisions and improve their operations. Data scientists
                    typically have a strong background in mathematics, statistics, and
                    computer science. They use this knowledge to analyze large data
                    sets and find trends or patterns. Additionally, data scientists
                    may develop new ways to collect and store data.
                </p>
                </div>
            </div>
            <div className={SWEmajorsStyles.Space200}></div>

            <div className="container">
                <div className={SWEmajorsStyles.Space200}></div>
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
        <div className={SWEmajorsStyles.Space400}></div>

    </>
    
  )
}

export default SWEmajors