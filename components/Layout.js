import Header from '@/components/Header.js'
import styles from '@/styles/Layout.module.css'

const Layout = ({children}) => {
  return (
    <>
        <Header></Header>

        <div>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    </>
  )
}

export default Layout