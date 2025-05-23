import React from 'react'
import '../styles/LandingPage.css'
import '../styles/About.css'

function About() {
  return (
    <div className="about-section">
      <div className="about-content">
        <h2 className="about-heading"> About Me</h2>
        <p>
          Hi, I'm Gavin Sharma, a Bachelor of Applied Computer Science student at Dalhousie University,
          actively looking for a 4-month co-op opportunity starting Fall 2025.
        </p>
        <p>
          I specialize in building responsive, full-stack applications that are clean, functional, and scalable — no bloated interfaces, no broken APIs.
          I’ve led backend deployment on the TranSECT project and created practical tools like Resume Radar, working with technologies like React, Node.js,
          Java, C#, Docker, and AWS.
        </p>
        <p>
          Outside of tech, I’m an avid gamer with a soft spot for titles like Valorant, GTA V, Genshin Impact, and Palworld.
          I’m also learning electric guitar, expanding from years of acoustic playing, and I enjoy photography —
          you can find some of my favorite captures on VSCO.
        </p>
        <p>
          This portfolio isn’t just a showcase of my skills — it’s a reflection of who I am.
          If you’re looking for a developer who brings both technical depth and personal creativity to the table,
          feel free to explore.
        </p>
      </div>
    </div>
  )
}

export default About
