import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Common.module.css'
import {Head_, Space, Footer} from "../components/Common.js"


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <Head_ />
      </Head>
      <Space/>

      <Header />
      <Space/>

      <CookiecutterLogo />

      <Main />

      <Footer />
    </div>
  )
}



function Header() {
  return(
    <h1 className={styles.title}>
      Welcome to FoodyFood's Hub
    </h1>
  )
}

function CookiecutterLogo(props) {
  return(
    <div className={styles.center}>
      <Image
        src="/images/cookiecutter-logo.jpeg" // Route of the image file
        height={300} // Desired size with correct aspect ratio
        width={300} // Desired size with correct aspect ratio
        alt="Cookiecutter Logo"
      />
    </div>
  )
}

function Main() {
  return(
    <main className={styles.main}>
      <Link href="/dashboard">
        <a>
          <h2>Dashboard&rarr;</h2>
        </a>
      </Link>
    </main>
  )
}