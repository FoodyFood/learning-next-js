// Next.js Imports
import Link from 'next/link'

// Components
import Title from "../../components/Title.js"
import Picture from "../../components/Picture.js"

// Styles
import styles from '../../styles/Common.module.css'


const pictures=["image1", "image2", "image3"]

export default function Project01() {
    return (
        <div className={styles.container}>
            <Title title="Fume Hood" />
            
            <main className={styles.main}>
                <Picture image={"./projects/project01/" + pictures[0] + ".jpg"} size="600"/>
                <Picture image={"./projects/project01/" + pictures[1] + ".jpg"} size="600"/>
                <Picture image={"./projects/project01/" + pictures[2] + ".jpg"} size="600"/>
            </main>
        </div>
    )
}