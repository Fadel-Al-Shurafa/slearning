import Image from 'next/image'
import Link from 'next/link';
import HeaderStyles from '../styles/Header.module.css'
import React from 'react';
import { useSession, signIn, signOut, getSession } from 'next-auth/react'


const Header = () => {
  const {data: session} = useSession()

  
  if(session){

    return (
      <div className={HeaderStyles.HeaderContainer}>

        <div className={HeaderStyles.headerFlexItems}>
            
          <h4><a href='#Majors'>  Learn about majors? </a></h4>
          <h4><a href='#Posts'>   Post your problems </a></h4>
          <h4><button onClick={() => signOut()} className={HeaderStyles.BTNnoneW} ><b> Sign Out</b> </button></h4>
        </div>
        <div className={HeaderStyles.headerFlexItems}>
            <img src='/images/SLearning_Logo.png' width={100} height={70} alt='' />
        </div>

      </div>
    )
  }




  return (
    <>
      
      <div className={HeaderStyles.HeaderContainer}>

        <div className={HeaderStyles.headerFlexItems}>
            <h4><a href='#Majors'>  Learn about majors? </a></h4>
            <h4><a href='#Posts'>   Post your problems </a></h4>
            <Link href="/signin"><h4>Login</h4></Link>
            
        </div>
        <div className={HeaderStyles.headerFlexItems}>
            <img src='/images/SLearning_Logo.png' width={90} height={70} alt='' />
        </div>

    </div>
    </>
    
  )
}

export default Header

