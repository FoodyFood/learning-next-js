// Next.js Imports
import Link from 'next/link'

// Components
import Picture from "../components/Picture.js"
import Card from "../components/Card.js"

// Styles
import styles from '../styles/Common.module.css'


export default function Home() {
  return (
    <div className={styles.container}>

      <Picture image="/cookiecutter-logo.jpeg" size="300" />

      <Main />
    </div>
  )
}


function Main() {
  return(
    <main className={styles.main}>
      <Card title="Dashboard" link="/dashboard" description="Status Dashboard For My Deployments"/>
      <Card title="Projects" link="/projects" description="See some of the projects I've done outside of coding"/>

    </main>
  )
}