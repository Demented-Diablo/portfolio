import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import '../styles/LandingPage.css'

function LandingPage() {
  return (
    <>
      <section id="home" className="min-vh-100 text-white">
        <Home />
      </section>

      <section id="projects" className="min-vh-100 text-white">
        <Projects />
      </section>

      <section id="about" className="about-section min-vh-100 text-white">
        <div className="about-wrapper">
          <About />
          <a href="/extras" className="toggle-btn">
            See More About Me
          </a>
        </div>
      </section>

      <section id="contact" className="min-vh-100 text-white">
        <Contact />
      </section>
    </>
  )
}

export default LandingPage
