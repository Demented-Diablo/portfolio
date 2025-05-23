import React, { useState } from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import AboutExtras from '../components/AboutExtras'
import '../styles/LandingPage.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

function LandingPage() {
  const [showExtras, setShowExtras] = useState(false)
  const toggleExtras = () => setShowExtras(!showExtras)

  return (
    <>
      <section id="home" className="min-vh-100 text-white">
        <Home />
      </section>

      <section id="about" className="about-section min-vh-100 text-white">
        <div className="about-wrapper">
          <About />
          <Link to="/extras" className="toggle-btn">
          See More About Me
          </Link>
        </div>
      </section>


      <section id="projects" className="min-vh-100 text-white">
        <Projects />
      </section>

      <section id="contact" className="min-vh-100 text-white">
        <Contact />
      </section>
    </>
  )
}

export default LandingPage
