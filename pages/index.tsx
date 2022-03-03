import Head from 'next/head'
import Image from 'next/image'

const Home = () => {
  return (
    <div className='bg-cyan-200' >
      <Head>
        <title>QR Code Practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid place-items-center h-screen'>
        <div className='relative w-66 h-96 bg-white rounded-2xl	p-5 pb-10'>
          <Image
            src={'/public/image-qr-code.png'}
            width={150}
            height={300}
            priority
           />
          <p className='font-outfit font-bold text-center'>Improve your front-end skills by building projects</p>
          <p className='font-outift font-normal text-center'>Scan the QR code to visit Front-End Mentor and take your coding skills to the next level.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
