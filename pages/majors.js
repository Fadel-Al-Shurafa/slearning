import majorsStyles from '@/styles/majors.module.css'
import Link from 'next/link'
const majors = () => {
  return (
    <>

        <div className={majorsStyles.majorsBody}>
            

            <div className={majorsStyles.majorsContainer}>

                <div className={majorsStyles.majorsFlexItems}>
                    <div className={majorsStyles.SWE}>
                        <Link href='/SWEmajors'><h2 className={majorsStyles.text}>SWE</h2></Link>
                    </div>
                </div>
                <div className={majorsStyles.majorsFlexItems}>
                    <div className={majorsStyles.CSE}>
                        <h2 className={majorsStyles.text}>CSE</h2>
                    </div>
                </div>
                <div className={majorsStyles.majorsFlexItems}>
                    <div className={majorsStyles.Cyber}>
                        <h2 className={majorsStyles.text}>Cyber</h2>
                    </div>
                </div>
                <div className={majorsStyles.majorsFlexItems}>
                    <div className={majorsStyles.DataS}>
                        <h2 className={majorsStyles.text}>Data Science</h2>
                    </div>
                </div>

            </div>

        </div>

    </>
    
  )
}

export default majors