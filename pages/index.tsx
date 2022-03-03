import Head from 'next/head'
import Image from 'next/image'

const Home = () => {
  return (
    <main>
      <div className='bg-gray-blue' >
        <Head>
          <title>QR Code Practice</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='grid place-items-center h-screen'>
          <div className='w-64 h-96 bg-white rounded-2xl	p-3 pb-10'>
            <Image
              className='rounded-2xl'
              alt={'QR Code for Front-End Mentor'}
              src={'/image-qr-code.png'}
              width={400}
              height={400}
              priority
            />
            <p className='font-outfit font-bold text-center pb-2'>Improve your front-end skills by building projects</p>
            <p className='font-outift font-normal text-light-gray text-center text-sm'>Scan the QR code to visit Front-End Mentor and take your coding skills to the next level.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
