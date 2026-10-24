import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Footer from './components/Footer'
import PageOrnaments from './components/PageOrnaments'
import './App.css'

export default function App() {
  return (
    <div id="home" className="page-frame">
      <PageOrnaments />
      <Header />

      <main>
        <Hero />
        <Services />
      </main>

      <Footer />
    </div>
  )
}