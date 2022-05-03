import styles from '../styles/Common.module.css'


export function Head_() {
  return (
    <>
      <title>FoodyFood</title>
      <meta name="description" content="FoodyFood" />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}


export function Space() {
  return(
    <>
      <br />
      <br />
    </>
  )
}


export function Footer() {
  return (
    <footer 
      className={styles.footer} 
      //style={{position: 'absolute', bottom: 0, marginTop: '40px', height :'40px}'}}
    >
      FoodyFood {new Date().getFullYear()}
    </footer>
  )
}