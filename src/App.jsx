import { useEffect, useRef } from 'react'
import SiteFooter from './components/SiteFooter'
import SupportWidget from './components/SupportWidget'
import HomeSections from './components/HomeSections'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Footer from './components/Footer'
import PageOrnaments from './components/PageOrnaments'
import About from './pages/About'
import ServicesPage from './pages/ServicesPage'
import Venues from './pages/Venues'
import Packages from './pages/Packages'
import Blog, { Article } from './pages/Blog'
import Contact from './pages/Contact'
import { useRoute } from './hooks/useRoute'
import './App.css'
import './pages.css'
import './site-shell.css'
const titles = {
  '/': 'One platform for every celebration',
  '/about': 'About us',
  '/services': 'Services',
  '/venues': 'Venues',
  '/packages': 'Packages',
  '/blog': 'Celebration journal',
  '/contact': 'Plan your celebration',
}
export default function App() {
  const route = useRoute()
  const [path, query = ''] = route.split('?')
  const main = useRef(null)
  const first = useRef(true)
  useEffect(() => {
    document.title = `${titles[path] || 'Celebration journal'} | Mangalyam`
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    if (first.current) {
      first.current = false
    } else {
      main.current?.focus({ preventScroll: true })
    }
  }, [path, route])
  let page
  switch (path) {
    case '/':
      page = (
        <>
          <Hero />
          <Services />
          <Footer />
          <HomeSections />
        </>
      )
      break
    case '/about':
      page = <About />
      break
    case '/services':
      page = <ServicesPage />
      break
    case '/venues':
      page = <Venues key={route} queryString={query} />
      break
    case '/packages':
      page = <Packages />
      break
    case '/blog':
      page = <Blog />
      break
    case '/contact':
      page = <Contact key={route} query={query} />
      break
    default:
      page = path.startsWith('/blog/') ? (
        <Article id={path.slice(6)} />
      ) : (
        <div className="empty-state">
          <h1>Page not found</h1>
          <a className="button" href="#/">
            Return home
          </a>
        </div>
      )
  }
  return (
    <div className={`page-frame ${path === '/' ? 'home-page' : 'inner-page'}`}>
      <a
        className="skip-link"
        href="#main-content"
        onClick={(e) => {
          e.preventDefault()
          main.current?.focus()
        }}
      >
        Skip to content
      </a>
      <PageOrnaments />
      <Header />
      <main id="main-content" ref={main} tabIndex="-1">
        {page}
      </main>
      <SiteFooter />
      <SupportWidget />
    </div>
  )
}
