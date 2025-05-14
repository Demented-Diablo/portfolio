import React from 'react'
import './LandingPage.css'
import './About.css'

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
          I build clean, responsive full-stack applications that actually work — no bloated UI, no broken APIs.
          From leading a team on the TranSECT project to designing browser tools like Resume Radar, I’ve worked
          across the stack using tools like React, Node.js, Java, C#, Docker, and AWS.
        </p>
        <p>
          But I’m not just code and caffeine. I’m a gamer who unwinds with Valorant, GTA V, Genshin Impact,
          and Palworld. I’m learning electric guitar after years with an acoustic, and I enjoy capturing life
          through my lens — you’ll find my shots on VSCO.
        </p>
        <p>
          This site is more than a portfolio — it’s a space where my work and interests meet. If you're looking
          for a developer who codes with curiosity and creates with personality, scroll on.
        </p>
      </div>
    </div>
  )
}

export default About
