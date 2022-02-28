import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>QR Code Practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello</h1>
    </div>
  )
}

export default Home
