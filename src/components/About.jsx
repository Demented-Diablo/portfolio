import React, { useState } from 'react'
import '../styles/LandingPage.css'
import '../styles/About.css'

function About() {

  const [expanded, setExpanded] = useState(false)

  return (
    <div className="about-section">
      <div className="about-content">

        <h2 className="about-heading">About Me</h2>

        {/* ALWAYS VISIBLE */}
        <p>
          Hi, I am Gavin Sharma, a Bachelor of Applied Computer Science student at Dalhousie University graduating in May 2026. 
          I focus on backend development, cloud infrastructure, and building practical software systems that solve real problems. 
          I am currently seeking full-time Software Engineering opportunities starting Summer 2026.
        </p>

        {/* COLLAPSIBLE PART */}
        <div className={`about-extra ${expanded ? "open" : ""}`}>

          <p>
            I enjoy designing and building clean, scalable, full-stack applications. My experience includes technologies such as React, Node.js, Java, C#, Docker, and AWS. 
            I have worked in team-based environments where I contributed to backend architecture, API integrations, deployment pipelines, and cloud infrastructure.
          </p>

          <p>
            I served as a senior developer on the TranSECT citizen science platform where I built backend services, integrated external APIs, and deployed the full-stack system on a Linux server. 
            I also contributed to the Gambit project, a Unity based game that explores accessibility through EEG based brain computer interface input.
          </p>

          <p>
            Recently I have been working on DeeBug, a platform that allows users to run and inspect machine learning pipelines in an interactive execution environment. 
            My work focuses on dataset persistence, backend APIs, and system architecture that allows experiments and datasets to be reused across sessions.
          </p>

          <p>
            I also enjoy building practical developer tools such as Resume Radar, a project that analyzes resumes and extracts useful insights using lightweight NLP techniques.
          </p>

          <p>
            Outside of programming I enjoy gaming, photography, and learning electric guitar. 
            Games such as Valorant, GTA V, Genshin Impact, and Palworld originally sparked my interest in technology and eventually led me into computer science.
          </p>

        </div>

        <button
          className="about-toggle"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Read More"}
        </button>

      </div>
    </div>
  )
}

export default About