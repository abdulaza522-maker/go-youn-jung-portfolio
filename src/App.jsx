import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import RecentWorks from './components/RecentWorks'
import Services from './components/Services'
import Footer from './components/Footer'

export default function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#0d1116] text-white">
      <Navbar />
      <main>
        <Hero scrollY={scrollY} />
        <About />
        <RecentWorks />
        <Services />
        <Footer />
      </main>
    </div>
  )
}
