import React, { useState } from 'react'

function About() {
  const [expanded, setExpanded] = useState(false)
  const [expandedExtra, setExpandedExtra] = useState(false)

  return (
    <div className="page-wrapper">
      <div className="shape-corner top-left"></div>
      <div className="shape-corner top-right"></div>
      <div className="shape-corner bottom-left"></div>
      <div className="shape-corner bottom-right"></div>
      <h2 className="section-title">About Me</h2>
      <p>
        I'm Gavin Sharma, an Applied Computer Science student at Dalhousie (Expected Apr 2026),
        recognized on the Dean’s List (Winter 2024). I enjoy solving challenging problems and embracing
        modern tech stacks.
      </p>
      <p>
        I value collaborative work environments and have consistently met deadlines for academic, volunteer,
        and open-source projects. I look forward to opportunities where I can sharpen my skills and bring
        new ideas to life.
      </p>
      <div className="code-block">
        <p>aboutMe = &#123;</p>
        <p>&nbsp;&nbsp;coOpStatus: "Available (Sept 2025)",</p>
        <p>&nbsp;&nbsp;education: "BAppCS, Dalhousie University",</p>
        <p>&nbsp;&nbsp;technicalSkills: [ "React", "Node.js", "Docker", "AWS", "CI/CD", "Python", "C#", "Swift", "Java" ],</p>
        <p>&nbsp;&nbsp;softSkills: [ "Team Collaboration", "Problem-Solving", "Time Management", "Adaptability" ],</p>
        <p>&nbsp;&nbsp;location: "Halifax, NS",</p>
        <p>&nbsp;&nbsp;contact: &#123; phone: "902-989-5486", email: "Gavin.Sharma@dal.ca" &#125;</p>
        <p>&#125;</p>
      </div>
      {!expanded && (
        <a className="expand-toggle" onClick={() => setExpanded(true)}>
          More Background
        </a>
      )}
      {expanded && (
        <div className="collapsible-content">
          <p>
            Over the past semesters, I've contributed to legacy code refactoring, bug fixes,
            and feature expansions. I thrive on continuous learning, exploring new frameworks,
            and pushing boundaries in software development.<br></br>
            I’ve taken part in multiple Hackathons, focusing on accessibility and innovation.
                My approach emphasizes maintainable code, thorough testing, and user-centric design.
                When not coding, I enjoy reading up on AI advances, practicing guitar, and
                finding ways to automate everyday tasks.
          </p>
          
          
        </div>
      )}
    </div>
  )
}

export default About
