import Head from 'next/head'

import styles from '../styles/Common.module.css'
import {Footer, Space, Head_} from "../components/Common.js"
import Card from "../components/Card.js"


export default function Contact() {
    return (
        <div className={styles.container}>
            <Head>
                <Head_ />
            </Head>
            <Space />

            <Header />
            
            <main className={styles.main}>
                <CardStack />
            </main>

            <Footer />
        </div>
    )
}

function Header() {
    return(
        <h1 className={styles.title}>
            Dashboard
        </h1>
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