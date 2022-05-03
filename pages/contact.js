import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Footer from "../components/Footer.js";



export default function Contact() {
    return (
        <div className={styles.container}>
            <Head>
                <title>FoodyFood</title>
                <meta name="description" content="FoodyFood" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <main className={styles.main}>
                <h1>Contact Page</h1>
                <p>Hello Contact Page</p>,
                <Link href="/">
                    <a className={styles.card}>
                        <h2>Home&rarr;</h2>
                    </a>
                </Link>
            </main>

            <Footer />
        </div>
    )
}