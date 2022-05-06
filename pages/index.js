// Next.js Imports
import Link from 'next/link'

// Components
import Picture from "../components/Picture.js"

// Styles
import styles from '../styles/Common.module.css'


export default function Home() {
  return (
    <div className={styles.container}>

      <Picture image="cookiecutter-logo.jpeg" size="300" />

      <Main />
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