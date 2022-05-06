// Next.js Imports
import Link from 'next/link'

// Components
import Title from "../../components/Title.js"
import Blurb from "../../components/Blurb.js"
import Picture from "../../components/Picture.js"

// Styles
import styles from '../../styles/Common.module.css'


const pictures=["image01", "image02", "image03", "image04", "image05", "image06"]

export default function Project02() {
    return (
        <div className={styles.container}>
            <Title title="Solvent Extraction" />

            <Blurb text="Simple distilation of acetone from nail varnish remover. Useful solvent to have in the lab." />
            
            <main className={styles.main}>
                <Picture image={"/projects/project02/" + pictures[0] + ".jpg"} size="600"/>
                <Picture image={"/projects/project02/" + pictures[1] + ".jpg"} size="600"/>
                <Picture image={"/projects/project02/" + pictures[2] + ".jpg"} size="600"/>
                <Picture image={"/projects/project02/" + pictures[3] + ".jpg"} size="600"/>
                <Picture image={"/projects/project02/" + pictures[4] + ".jpg"} size="600"/>
                <Picture image={"/projects/project02/" + pictures[5] + ".jpg"} size="600"/>
            </main>
        </div>
    )
}