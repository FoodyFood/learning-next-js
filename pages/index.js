import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FoodyFood</title>
        <meta name="description" content="FoodyFood is learning to use Next/js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CookiecutterLogo />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to FoodyFood's Hub
        </h1>

        < br />

        <div className={styles.grid}>
          <Link href="/test">
            <a className={styles.card}>
              <h2>Test&rarr;</h2>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>FoodyFood</p>
      </footer>
    </div>
  )
}

const CookiecutterLogo = () => (
  <div className={styles.center}>
    <Image
      src="/images/cookiecutter-logo.jpeg" // Route of the image file
      height={300} // Desired size with correct aspect ratio
      width={300} // Desired size with correct aspect ratio
      alt="Cookiecutter Logo"
    />
  </div>
)