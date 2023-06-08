import majorsStyles from '../styles/style.module.css'
import Link from 'next/link'
import Image from 'next/image'
const majors = () => {
  return (
    <>

        <div>
            <div className={majorsStyles.Space400}></div>

            <div className="d-flex justify-content-around">
                <div className='p-2'>
                    <div className={majorsStyles.SWE}>
                        <Link href='/SWE/SWEmajors'><h2 className={majorsStyles.text}>SWE</h2></Link>
                    </div>
                    <div className={majorsStyles.Space200}></div>
                    <div className={majorsStyles.CSE}>
                        <Link href='/CSE/CSEmajors'><h2 className={majorsStyles.text}>CSE</h2></Link>
                    </div>
                </div>
                <div className={majorsStyles.SpaceW200}></div>
                <div className='p-2'>
                    <div className={majorsStyles.Cyber}>
                        <Link href='/Cyber/Cybermajors'><h2 className={majorsStyles.text}>Cyber</h2></Link>
                    </div>
                    <div className={majorsStyles.Space200}></div>
                    <div className={majorsStyles.DataS}>
                        <Link href='/DataS/DataSmajors'><h2 className={majorsStyles.text}>Data Science</h2></Link>
                    </div>
                </div>
            </div>
            <div className={majorsStyles.Space400}></div>
        </div>

    </>
    
  )
}

export default majors