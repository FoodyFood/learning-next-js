import styles from '../styles/Common.module.css'
import Link from 'next/link'


export default function Card(props) {
    return(
        <Link href={props.link}>
          <a className={styles.card}>
            <h2>{props.title}&rarr;</h2>
            <p>{props.description}</p>
          </a>
        </Link>
    )
  }