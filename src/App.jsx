import { Routes, Route, useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import AboutExtrasPage from './pages/AboutExtrasPage'
import ResumePage from './pages/ResumePage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function App() {
  const { pathname } = useLocation()
  const isResumePage = pathname === '/resume'

  return (
    <>
      <ScrollToTop />
      {!isResumePage && <Header />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/extras" element={<AboutExtrasPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {!isResumePage && <Footer />}
    </>
  )
}

export default App
