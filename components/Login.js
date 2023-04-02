
import LoginStyles from '@/styles/Login.module.css'
import Link from 'next/link'

const login = () => {
  return (
    <div className={LoginStyles.Loginbody}>
        <div className={LoginStyles.loginContainer}>
            <div className={LoginStyles.Flex}>
                <div className={LoginStyles.empty}></div>
            </div>
            <div className={LoginStyles.Flex}>
                <input className={LoginStyles.input} type="text" value="Enter Your Name or Email"/>
                <br/>
                <input className={LoginStyles.input} type="text" value="Enter Your Password"/>
                <div className={LoginStyles.BtnContainer}>
                  <div className={LoginStyles.BtnFlex}>
                      <button className={LoginStyles.Botton}>Login</button>
                  </div>
                  <div className={LoginStyles.BtnFlex}>
                      <a>Create Account</a>
                  </div>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default login