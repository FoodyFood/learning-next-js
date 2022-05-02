import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'



export default function Test() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <p>Hello Next Page</p>,
                <Link href="/">
                    <a className={styles.card}>
                        <h2>Home&rarr;</h2>
                    </a>
                </Link>
            </main>

            <footer className={styles.footer}>
                <p>FoodyFood</p>
            </footer>
        </div>
    )
}