import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Common.module.css'
import {Head_, Header, Space, Footer} from "../components/Common.js"


const pictures=["image1", "image2", "image3"]

export default function Projects() {
    return (
        <div className={styles.container}>
            <Head>
                <Head_ />
            </Head>
            <Space />

            <Header title="My Projects" />
            
            <main className={styles.main}>
                <Link href="/">
                    <a>
                        <h2>Home&rarr;</h2>
                    </a>
                </Link>

                
                <Link href="/projects/project01">
                    <a>
                        <h2>Fume Hood&rarr;</h2>
                    </a>
                </Link>

            </main>

            <Footer />
        </div>
    )
}