import React, { useState, useEffect } from 'react';
import { ReactTyped } from 'react-typed'
import '../styles/Home.css'

function Home() {
 const fonts = [
  "'Bebas Neue', sans-serif",           // Tall, uppercase
  "'Press Start 2P', cursive",          // Pixel retro
  "'DM Serif Display', serif",          // Classic elegant
  "'Monoton', cursive",                 // Bold single-line stroke
  "'Orbitron', sans-serif",             // Futuristic
  "'Rubik Glitch', cursive",            // Glitch effect
  "'Staatliches', sans-serif",          // Bold and structured
  "'Major Mono Display', monospace",    // Wide mono
  "'Creepster', cursive",               // Halloween-horror
  "'Zilla Slab Highlight', cursive",    // Highlight marker style
  "'Audiowide', cursive",               // Electro-modern
  "'Black Ops One', sans-serif"         // Bold, blocky military look
];
const [fontIndex, setFontIndex] = useState(0);
useEffect(() => {
  const interval = setInterval(() => {
    setFontIndex((prev) => (prev + 1) % fonts.length);
  }, 250); 
  return () => clearInterval(interval);
}, []);
  return (
    <section id="home" className="hero-banner">
      <div className="overlay"></div>

      <div className="content position-relative">
        <h1 className="fw-bold mb-4" style={{ fontSize: '4rem',fontFamily: fonts[fontIndex],transition: 'font-family 0.5s ease-in-out' }}>
          Gavin
        </h1>

        <h2 className="fw-light" style={{ color: '#FBA435', fontSize: '3rem', minHeight: '20rem' }}>
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
