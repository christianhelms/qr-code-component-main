import Head from 'next/head'

import QR from '../public/image-qr-code.png';

const Home = () => {
  return (
    <div className='bg-cyan-200' >
      <Head>
        <title>QR Code Practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid place-items-center h-screen'>
        <div className='relative w-66 h-96 bg-white'>
          <img className="mx-auto" src='../public/image-qr-code.png' width="100" height="100" alt="qr code" />
          <p className='font-outfit font-bold'>Improve your front-end skills by building projects</p>
          <p className='font-outift font-normal'>Scan the QR code to visit Front-End Mentor and take your coding skills to the next level.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
