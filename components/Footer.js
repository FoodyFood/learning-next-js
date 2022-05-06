import styles from '../styles/Common.module.css'


export default function Footer() {
    return (
      <footer 
        className={styles.footer} 
      >
        FoodyFood {new Date().getFullYear()}
      </footer>
    )
  }