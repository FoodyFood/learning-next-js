// Next.js  Imports
import Head from 'next/head'

// Components
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'

// Styles
import '../styles/globals.css'


function FoodyFood({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>FoodyFood</title>
        <meta name="description" content="FoodyFood" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <Component {...pageProps} />

      <Footer />
    </>
  )
}

export default FoodyFood
