import Head from 'next/head'
import Link from 'next/link'

import styles from '../../styles/Common.module.css'
import {Head_, Header, Space, Footer} from "../../components/Common.js"
import Picture from "../../components/Picture.js"

const pictures=["image1", "image2", "image3"]

export default function Project01() {
    return (
        <div className={styles.container}>
            <Head>
                <Head_ />
            </Head>
            <Space />

            <Header title="Fume Hood" />
            
            <main className={styles.main}>
                <Link href="/">
                    <a>
                        <h2>Home&rarr;</h2>
                    </a>
                </Link>

                <Picture image={"./projects/project01/" + pictures[0] + ".jpg"} size="600"/>
                <Space />
                <Picture image={"./projects/project01/" + pictures[1] + ".jpg"} size="600"/>
                <Space />
                <Picture image={"./projects/project01/" + pictures[2] + ".jpg"} size="600"/>
            </main>

            <Footer />
        </div>
    )
}