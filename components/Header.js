import Image from 'next/image'
import HeaderStyles from '@/styles/Header.module.css'
const Header = () => {
  return (
    <div className={HeaderStyles.HeaderContainer}>

        <div className={HeaderStyles.headerFlexItems}>
            <h3>Sign up</h3>
            <h3>Login</h3>
            <h3>Engilsh/عربي</h3>
        </div>
        <div className={HeaderStyles.headerFlexItems}>
            <Image src='/images/SLearning_Logo.png' width={90} height={70} />
        </div>

    </div>
  )
}

export default Header