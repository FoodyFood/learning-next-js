// Next.js Imports
import Link from 'next/link'

// Components
import Title from "../components/Title.js"

// Styles
import styles from '../styles/Common.module.css'


export default function Projects() {
    return (
        <div className={styles.container}>

            <Title title="My Projects" />
            
            <main className={styles.main}>  
                <Link href="/projects/project01">
                    <a>
                        <h2>Fume Hood&rarr;</h2>
                    </a>
                </Link>
            </main>
        </div>
    )
}