import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Common.module.css'
import {Head_, Header, Space, Footer} from "../components/Common.js"
import Picture from "../components/Picture.js"

const pictures=["1", "2", "3"]

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

                <Picture image={"./projects/project01/" + pictures[0] + ".jpg"} size="600"/>
                <Space />
                <Picture image={"./projects/project01/" + pictures[0] + ".jpg"} size="600"/>
                <Space />
                <Picture image={"./projects/project01/" + pictures[0] + ".jpg"} size="600"/>
            </main>

            <Footer />
        </div>
    )
}