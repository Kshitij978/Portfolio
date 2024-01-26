import 'styles/globals.css'
import 'remixicon/fonts/remixicon.css'
// import Navbar from 'components/Navbar/Navbar'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
// import Contact from './contact'
// import { useEffect, useRef } from 'react'
// import Lenis from '@studio-freight/lenis'

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 1.2,
  //     easing: function (t) {
  //       return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
  //     },
  //     smoothTouch: false,
  //     touchMultiplier: 2,
  //   })
  //   // {

  //   //   smoothWheel: true,
  //   //   touchInertiaMultiplier: 1.2,
  //   //   duration: 0.8,
  //   //   wheelMultiplier: 1.2,
  //   // }
  //   function raf(time) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }

  //   requestAnimationFrame(raf)
  // }, [])

  const router = useRouter()
  const pageKey = router.asPath

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      {/* <Navbar /> */}
      <AnimatePresence initial={false} mode="popLayout">
        <Component key={pageKey} {...pageProps} />
      </AnimatePresence>
      {/* <Contact /> */}
    </>
  )
}

export default MyApp
