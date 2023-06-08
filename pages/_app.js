import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import {SessionProvider} from 'next-auth/react'


export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Layout>
        
          <Component {...pageProps} />
        
      </Layout>
    </SessionProvider>
    
  )
}