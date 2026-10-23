import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Programs from './components/Programs.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Example from './components/Example.jsx'
import Dealers from './components/Dealers.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Programs />
        <HowItWorks />
        <Example />
        <Dealers />
      </main>
      <Footer />
    </>
  )
}
