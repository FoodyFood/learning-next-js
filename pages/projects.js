// Next.js Imports
import Link from 'next/link'

// Components
import Title from "../components/Title.js"
import Card from "../components/Card.js"

// Styles
import styles from '../styles/Common.module.css'


export default function Projects() {
    return (
        <div className={styles.container}>

            <Title title="Projects" />
            
            <main className={styles.main}>  
                <Card title="Fume Hood" link="/projects/project01" description="The fume hood I built for my home lab"/>
                <Card title="Solvent Extraction" link="/projects/project02" description="Simple distilation of acetone from nail varnish remover"/>
            </main>
        </div>
    )
}