import Image from 'next/image'
import HeaderStyles from '@/styles/Header.module.css'
const Header = () => {
  return (
    <div className={HeaderStyles.HeaderContainer}>

        <div className={HeaderStyles.headerFlexItems}>
            <h4>Sign up</h4>
            <h4>Login</h4>
            <h4>Engilsh/عربي</h4>
        </div>
        <div className={HeaderStyles.headerFlexItems}>
            <Image src='/images/SLearning_Logo.png' width={90} height={70} />
        </div>

    </div>
  )
}

export default Header