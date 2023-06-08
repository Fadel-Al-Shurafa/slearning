
import Head from "next/head";
import Header from './Header'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
  return (
    <>
        <Head>
          <title>SLearning</title>
          <meta name="keywords" content="SWE418 project" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
            integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
            crossOrigin="anonymous"
          />
          <script src="https://kit.fontawesome.com/983d5c2a5a.js" crossorigin="anonymous"></script>
        </Head>
        <Header></Header>
        
        <div>
            <main className={styles.main}>
                {children}
            </main>
        </div>

        <Footer></Footer>

        
    </>
  )
}

export default Layout