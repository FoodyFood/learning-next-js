import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from "../components/Footer.js";

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

function Head_() {
  return (
    <>
      <title>FoodyFood</title>
      <meta name="description" content="FoodyFood" />
      <link rel="icon" href="/favicon.ico" />
    </>
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
    <CardStack />
    </main>
  )
}

function CardStack() {
  return(
    <div className={styles.grid}>
      <Card title="Home" link="/index" description="The Homepage"/>
      <Card title="Contact" link="/contact" description="Where To Get In Touch"/>
      <Card title="About Us" link="/aboutus" description="Where Are We Who Are We"/>
      <Card title="Deploy" link="/deploy" description="Deploy Our Solution"/>
      <Card title="Code" link="/code" description="The Code That Powers This"/>
    </div>
  )
}

function Card(props) {
  return(
      <Link href={props.link}>
        <a className={styles.card}>
          <h2>{props.title}&rarr;</h2>
          <p>{props.description}</p>
        </a>
      </Link>
  )
}


function Space() {
  return(
    <>
      <br />
      <br />
    </>
  )
}