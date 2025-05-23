import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import AboutExtrasPage from './pages/AboutExtrasPage' 

function App() {
  return (
    <>
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/extras" element={<AboutExtrasPage />} /> {/* ✅ New Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
