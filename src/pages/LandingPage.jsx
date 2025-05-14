import React from 'react'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import AboutExtras from './AboutExtras'
import './LandingPage.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function LandingPage() {
  return (
    <>
      <section id="home" className="min-vh-100 text-white">
        <Home />
      </section>

      <section id="about" className="min-vh-100 text-white">
        <About />
      </section>

      <section id="about-extras" className="min-vh-100 text-white">
        <AboutExtras />
      </section>

      <section id="projects" className="min-vh-100 text-white">
        <Projects />
      </section>

      <section id="contact" className=" min-vh-100 text-white">
          <Contact />

      </section>
    </>
  )
}

export default LandingPage
