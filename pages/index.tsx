import dynamic from 'next/dynamic'
import About from 'components/About/About'
import Work from 'components/Work/Work'
import Head from 'next/head'
import PageTransitionLayout from 'components/PageTransitionLayout'
const Header = dynamic(() => import('components/Header/AlternateHeader'))

export default function Home() {
  return (
    <PageTransitionLayout>
      <Head>
        <title>Kshitij Srivastava</title>
      </Head>
      <Header />
      <About />
      <Work />
    </PageTransitionLayout>
  )
}
