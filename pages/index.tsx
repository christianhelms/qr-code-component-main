import type { NextPage } from 'next'
import Head from 'next/head'

const Home = () => {
  return (
    <div >
      <Head>
        <title>QR Code Practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div><p className='test bg-grey size-xl'>Hello, World!</p></div>
    </div>
  )
}

export default Home
