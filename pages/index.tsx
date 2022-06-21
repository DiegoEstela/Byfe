import type { NextPage } from 'next'
import {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/navBar'
import TabBar from '../components/tabBar'
import MainMobile from '../components/mainMobile'




const Home: NextPage = () => {
  const [active, setActive] = useState(false);
  console.log(active)
  return (
  <div>
      <Head>
        <title>Byfe</title>
        <meta name="google-site-verification" content="_3h0DQ916hXdTNP6QyMHOMdG7rsT6PuMNX1xDshYAm0" />
        <meta name="byfe consultora" content="servicios digitales" />
        <meta name="descripción" content="Consultora de servicios digitales"/>
        <link rel="icon" href="/logoByFe.png" />
      </Head>
      <NavBar  Active={active} setActive={setActive}/>
      <MainMobile/>
      <TabBar/>
      <main className={styles.main}  onClick={()=> setActive(true)}>
        <h1 >
          Welcome to <a href="https://nextjs.org">Byfe</a>
        </h1>
       </main>
     

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span >
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
   
    </div>
  )
}

export default Home
