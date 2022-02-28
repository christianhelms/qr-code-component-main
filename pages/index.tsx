import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>QR Code Practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div><p className='bg-grey size-xl color-red'>Hello</p></div>
    </div>
  )
}

export default Home
