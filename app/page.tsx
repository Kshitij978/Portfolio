import dynamic from 'next/dynamic'
import Work from 'components/Work/Work'
const Header = dynamic(() => import('components/Header/AlternateHeader'))

export default function Home() {
  return (
    <>
      <Header />
      <Work />
    </>
  )
}
