import React, { useState } from 'react'

function Projects() {
  const [transectOpen, setTransectOpen] = useState(false)
  const [zeuronOpen, setZeuronOpen] = useState(false)
  const [otherOpen, setOtherOpen] = useState(false)
  const [dalOpen, setDalOpen] = useState(false)

  return (
    <div className="page-wrapper">
      <div className="shape-corner top-left"></div>
      <div className="shape-corner top-right"></div>
      <div className="shape-corner bottom-left"></div>
      <div className="shape-corner bottom-right"></div>
      <h2 className="section-title">Projects</h2>
      <div className="code-block">
        <p>const zeuronGaming = &#123;</p>
        <p>&nbsp;&nbsp;title: "Gambit Accessibility Project (Zeuron)",</p>
        <p>&nbsp;&nbsp;timeFrame: "Summer 2024",</p>
        <p>&nbsp;&nbsp;techFocus: "C#, Docker, Unity, EEG Technology"</p>
        <p>&#125;</p>
      </div>
      {!zeuronOpen && (
        <a className="expand-toggle" onClick={() => setZeuronOpen(true)}>
          Expand Gambit
        </a>
      )}
      {zeuronOpen && (
        <div className="collapsible-content">
          <p>
            Working with Hamid Mandi and the team was incredible. We pushed gaming accessibility using EEG tech.
            I refactored C# respawn mechanics, developed Docker + Unity pipelines, fixed critical software bugs,
            and created JSON configs for streamlined testing. We introduced a maze level template for variety
            without fall risks, showcased during the project pitch. I learned the value of CI/CD pipelines in
            large-scale game dev and how to optimize a legacy codebase.
          </p>
        </div>
      )}
      <div className="code-block">
        <p>const transectProject = &#123;</p>
        <p>&nbsp;&nbsp;title: "Transect — Data Entry & Automation",</p>
        <p>&nbsp;&nbsp;focus: "API Integrations, MongoDB, Node.js, React"</p>
        <p>&#125;</p>
      </div>
      {!transectOpen && (
        <a className="expand-toggle" onClick={() => setTransectOpen(true)}>
          Expand Transect
        </a>
      )}
      {transectOpen && (
        <div className="collapsible-content">
          <p>
            Backend Development & API Integration: Wunderground (day/hour/month),
            PlantNet for plant identification, CoCoRaHS for shoreline data, and more.
            MongoDB database schemas for weather/plant data, Express.js endpoints, and
            React.js for image uploads/data visualization. Branch management, merges, debugging,
            and final tasks completed on schedule.
          </p>
        </div>
      )}
      <div className="code-block">
        <p>const dalSocialApp = &#123;</p>
        <p>&nbsp;&nbsp;title: "Dalhousie Social Media App",</p>
        <p>&nbsp;&nbsp;techStack: [ "Spring Boot", "React", "Real-Time Chat" ],</p>
        <p>&#125;</p>
      </div>
      {!dalOpen && (
        <a className="expand-toggle" onClick={() => setDalOpen(true)}>
          Expand Dal App
        </a>
      )}
      {dalOpen && (
        <div className="collapsible-content">
          <p>
            Built in a team of 6 to connect Dalhousie students with real-time chat, post sharing,
            and campus-specific features. Earned an A+ for the robust functionality and user-friendly
            UI. My role included React component structures, chat logic, and bug fixing in the backend.
          </p>
        </div>
      )}
      <div className="code-block">
        <p>const otherProjects = &#123;</p>
        <p>&nbsp;&nbsp;artPortfolio: "HTML, CSS, JS gallery",</p>
        <p>&nbsp;&nbsp;parkourRxJava: "Open source contributions & code reviews"</p>
        <p>&#125;</p>
      </div>
      {!otherOpen && (
        <a className="expand-toggle" onClick={() => setOtherOpen(true)}>
          Expand Other
        </a>
      )}
      {otherOpen && (
        <div className="collapsible-content">
          <p>
            I’ve supported a family member’s art portfolio with a responsive frontend and contributed
            to open-source Java-based projects, collaborating through Git and feature requests.
          </p>
        </div>
      )}
    </div>
  )
}

export default Projects
