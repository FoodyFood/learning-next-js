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
                <div className={styles.grid}>
                    <Card title="Fume Hood" link="/projects/project01" description="The fume hood I built for my home lab"/>
                    <Card title="Solvent Extraction" link="/projects/project02" description="Simple distilation of acetone from nail varnish remover"/>
                    <Card title="Synthesizing RFNA" link="/projects/project03" description="Creating concentrated nitric acid from a nitrate salt"/>
                    <Card title="Runaway Nitration" link="/projects/project04" description="Nitrating a solvent gone wrong"/>
                    <Card title="Laser Canon" link="/projects/project05" description="Shoulder mounted death ray of death"/>
                </div>
            </main>
        </div>
    )
}