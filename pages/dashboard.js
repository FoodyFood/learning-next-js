import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Common.module.css'
import {Head_, Header, Space, Footer} from "../components/Common.js"
import {Card} from "../components/Card.js"


export default function Dashboard() {
    return (
        <div className={styles.container}>
            <Head>
                <Head_ />
            </Head>
            <Space />

            <Header title="Dashboard" />
            
            <main className={styles.main}>
                <Link href="/">
                    <a>
                        <h2>Home&rarr;</h2>
                    </a>
                </Link>

                <CardStack />
            </main>

            <Footer />
        </div>
    )
}


function CardStack() {
    return(
        <div className={styles.grid}>
            <Card title="One" link="/one" description="One"/>
            <Card title="Two" link="/two" description="Two"/>
            <Card title="Three" link="/three" description="Three"/>
            <Card title="Four" link="/four" description="Four"/>
            <Card title="One" link="/one" description="One"/>
            <Card title="Two" link="/two" description="Two"/>
            <Card title="Three" link="/three" description="Three"/>
            <Card title="Four" link="/four" description="Four"/>
            <Card title="One" link="/one" description="One"/>
            <Card title="Two" link="/two" description="Two"/>
            <Card title="Three" link="/three" description="Three"/>
            <Card title="Four" link="/four" description="Four"/>
            <Card title="One" link="/one" description="One"/>
            <Card title="Two" link="/two" description="Two"/>
            <Card title="Three" link="/three" description="Three"/>
            <Card title="Four" link="/four" description="Four"/>
        </div>
    )
}