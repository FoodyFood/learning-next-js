import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Common.module.css'
import {Head_, Header, Space, Footer} from "../components/Common.js"
import Picture from "../components/Picture.js"


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <Head_ />
      </Head>
      <Space/>

      <Header title="Welcome to FoodyFood's Hub"/>
      <Space/>

      <Picture image="cookiecutter-logo.jpeg" size="300" />

      <Main />

      <Footer />
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
      <Link href="/projects">
        <a>
          <h2>Projects&rarr;</h2>
        </a>
      </Link>
    </main>
  )
}