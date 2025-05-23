import React from 'react'
import { ReactTyped } from 'react-typed'
import '../styles/Home.css'

function Home() {
  return (
    <section id="home" className="hero-banner">
      <div className="overlay"></div>

      <div className="content position-relative">
        <h1 className="fw-bold mb-4" style={{ fontSize: '8rem' }}>
          Gavin Sharma
        </h1>

        <h2 className="fw-light" style={{ color: '#FBA435', fontSize: '3rem' }}>
          <ReactTyped
            strings={[
              "Looking for a Fall 2025 co-op that actually challenges me",
              "I build full-stack apps that don’t fall apart under pressure",
              "Most productive when I’ve got code, coffee, and a controller nearby",
              "Not a fan of bloated UIs or broken APIs—so I fix them"
            ]}
            typeSpeed={30}
            backSpeed={20}
            backDelay={2500}
            loop
          />
        </h2>
      </div>

      <div className="scroll-cue position-absolute bottom-0 mb-4">
        <span className="scroll-arrow">↓</span>
      </div>
    </section>
  )
}

export default Home
