import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import '../styles/Projects.css'
import 'devicon/devicon.min.css'

const projects = [
  {
    title: 'TranSECT – Coastal Automation',
    image: 'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images//transect.png',
    description: 'Automated weather and plant data processing for citizen scientists on Nova Scotia’s Eastern Shore.',
    techStack: ['Node.js', 'React', 'MongoDB', 'API Integration'],
    github: 'https://github.com/Demented-Diablo/transect',
    live: '',
    objective: 'Automate and simplify coastal data collection, plant identification, and weather logging for citizen scientists.',
    role: 'Senior Developer — 8-member team (4 juniors, 2 seniors, 1 tech director, 1 scrum master)',
    features: [
      `As a senior developer on the TranSECT project, my goal was to empower citizen scientists on Nova Scotia’s Eastern Shore by making coastal data collection seamless, automated, and user-friendly.`,
      `My first priority was backend development. I set up an Express.js server, hosted on a Linux-based VPS, using PM2 for process management and SSH/SCP for deployment. This involved configuring routes, middleware, and database models using Mongoose.`,
      `I integrated the Wunderground API to automate weather data collection. This included logic to fetch hourly and daily readings like rainfall and temperature and transform that into a clean MongoDB schema. The data was parsed and stored with timestamps for later visualization.`,
      `For the flora data pipeline, I integrated the PlantNet API. Users uploaded plant images, which were processed via Multer. My backend logic then sent those images to the PlantNet endpoint, parsed the returned confidence scores, and only stored high-confidence matches into MongoDB, alongside metadata like scientific name and image ID.`,
      `I designed and documented the following API routes:
        - /api/weather (automated fetch and save)
        - /api/plants/upload (handle image uploads)
        - /api/plants/identify (query PlantNet)
        - /api/data/save (store valid identifications)`,
      `I mentored junior developers by creating a GitHub onboarding task. I initialized the repo with a main and development branch, walked them through Git Bash commands (clone, branch, commit, push, PR), and helped them resolve merge conflicts. This was my first formal experience mentoring — and it paid off.`,
      `While the frontend was not my main focus, I assisted in making the plant upload interface more responsive and ensured backend integration went smoothly. I debugged a few form issues and helped sync expectations between teams.`,
      `All environment variables were stored in .env, but due to project constraints, I temporarily hardcoded API keys — with approval. I completed backend deployment and wrote a full deployment manual.`
    ],
    skills: [
      'API Integration (Wunderground + PlantNet)',
      'Express Routing + MongoDB Modeling',
      'Backend Deployment (SSH, PM2)',
      'File Upload Handling (Multer)',
      'Mentoring & GitHub Practices',
      'Cross-Team Debugging & Documentation'
    ]
  },
  {
    title: 'Gambit – Brain-Controlled Gaming for Accessibility',
    image: 'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images//gambit.png',
    description: `An EEG-controlled Unity game developed for users with limited mobility, allowing brainwave interaction using Muse and OpenMaze.`,
    techStack: ['Unity', 'C#', 'Docker', 'OpenMaze', 'LSL', 'Git', 'CI/CD'],
    github: '',
    live: '',
    objective: 'To explore the power of brain-computer interface (BCI) technology in gaming accessibility by enabling interaction through EEG signals.',
    role: 'Junior Developer — 8-member team (4 juniors, 2 seniors, 1 technical director, 1 scrum master)',
    features: [
      `In the first two weeks, I was onboarded into a large, multi-semester Unity project. My first task was to thoroughly read and understand the legacy codebase, OpenMaze architecture, and Lab Streaming Layer (LSL) documentation. This early immersion helped me develop a strong grasp on scene isolation practices, configuration standards, and collaboration conventions.`,
      `Once I became familiar with the project structure, I focused on debugging critical errors in the Unity console. I resolved multiple instances of NullReferenceException, UnassignedReferenceException, and MissingComponentException. For example, I fixed one NullReferenceException caused by an unassigned Tilemap object and another by attaching a missing CharacterController to the wall object. I maintained detailed notes for every bug resolved to support future contributors.`,
      `To improve testing efficiency, I created JSON config files that allowed developers to jump directly into Levels 2 and 3. Previously, the only way to reach these levels was to play through the game from the beginning. My configurations significantly accelerated our workflow.`,
      `One major task involved reworking Level 1, as requested by the client. The original design was too convoluted, so I redesigned it to be more linear and player-friendly while maintaining its platforming identity. This work required thoughtful placement of terrain and obstacles and extensive playtesting.`,
      `To enhance gameplay, I introduced a gem-based checkpoint system. These collectible gems served as save points — when players fell, they would respawn at the last collected gem rather than starting from the beginning. This improved user experience and showcased my understanding of persistent data in Unity.`,
      `Later, I proposed and designed a completely new level — a true 3D maze. Unlike other levels that relied on linear platforming, my maze level promoted spatial exploration and pathfinding. The team accepted my proposal, and I implemented it from scratch.`,
      `To make the maze more challenging, I added patrolling enemy assets. They had basic movement and rotation behaviors, forcing players to time their movements and avoid collisions.`,
      `I also contributed to our CI/CD setup. I containerized the Unity build process using Docker, which allowed us to test and deploy builds from any branch reliably. I managed branches such as ‘bugFix’, ‘configFiles’, and ‘levelRedesign’, and followed Git best practices to ensure clean version control.`
    ],
    skills: [
      'Unity Debugging & Scene Architecture',
      'OpenMaze Integration & Scene Configuration',
      'Level Design & UX Reworking',
      'Game Mechanics: Checkpoints, Enemies',
      'CI/CD Pipeline with Docker',
      'Documentation & Collaboration',
      'Git Branching & Version Control'
    ]
  },
  {
    title: 'Dal Social App',
    image: 'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images//dalsm.png',
    description: 'Private social platform for Dalhousie students built using Spring Boot and React.',
    techStack: ['React', 'Spring Boot', 'WebSockets', 'MySQL'],
    github: 'https://github.com/Demented-Diablo/DalSM',
    live: '',
    objective: 'Enable Dalhousie students to connect, share posts, and interact in a secure, campus-specific environment.',
    role: 'Full-stack Developer — team of 6',
    features: [
      `This project was a semester-long full-stack collaboration to build a closed community social platform for Dalhousie University students.`,
      `On the backend, I built a Spring Boot REST API to handle login, signup, post creation, and post retrieval. I also implemented secure user authentication, ensuring only valid students could register and participate. Spring Security and JPA/Hibernate were key tools here.`,
      `For the frontend, I designed the entire flow in React. I built reusable components like PostCard, FeedPage, LoginPage, etc., and integrated them with the backend via fetch/axios. I managed user state carefully to reflect authenticated vs. unauthenticated behavior.`,
      `I handled key debugging challenges such as CORS errors, misconfigured API routes, broken form validations, and login failures. These helped strengthen my full-stack development problem-solving.`,
      `Midway through the project, we faced a major issue. One of our teammates delayed their feature for over a month. During the final push, they attempted to merge their long-stale branch without first pulling from the updated develop branch. This introduced numerous conflicts that risked breaking the main project.`,
      `To resolve the issue, I worked overnight with my teammate Ishant. We assessed what could be salvaged, reviewed all merge conflicts, and carefully synced the branches. The next day, in our team meeting, we established clear Git rules and a merge protocol moving forward — including daily commits and mandatory pulls before pushing.`
    ],
    skills: [
      'Full-stack Development (React + Spring Boot)',
      'REST API Design + Authentication',
      'State Management & Component Architecture',
      'Debugging (CORS, Routing, Auth)',
      'Git Conflict Resolution & Team Coordination'
    ]
  },
  {
    title: 'Resume Radar – Smart Resume Analyzer',
    image: 'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images//resumeRadar.png',
    description: 'A web tool that analyzes resumes against job descriptions using keyword matching and ATS scoring to improve hiring outcomes.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/Demented-Diablo/ResumeRadar',
    live: '',
    objective: 'Help job seekers tailor their resumes for specific jobs by comparing content against job descriptions using intelligent analysis.',
    role: 'Solo Developer — 2 linked GitHub repositories (app + minified parser module)',
    features: [
      'Users can upload resumes in PDF or DOCX formats and paste or upload job descriptions.',
      'A parsing module extracts keywords and matches them between the resume and job post.',
      'The tool outputs an ATS-style match score and suggests missing skills or sections.',
      'Frontend built in React with animated sections and intuitive UI.',
      'Backend API built in Express processes documents and returns analysis data.',
      'Two separate GitHub repos: one for the main app, one for the modular keyword engine.',
      'Still ongoing — future plans include NLP-based semantic scoring and login system.'
    ],
    skills: [
      'File Parsing (PDF/DOCX)',
      'Frontend Design (React + Tailwind)',
      'Backend API Routing (Express)',
      'Keyword Matching & Resume Analysis',
      'Repo Modularity & Documentation'
    ]
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    image: 'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images//certificate.png', 
    description: 'Official certificate earned from Amazon Web Services for foundational cloud knowledge.',
    techStack: ['AWS', 'Cloud Fundamentals', 'S3', 'EC2', 'IAM'],
    github: '',
    live: 'https://www.credly.com/badges/de1b30bb-4430-4b0e-aa7c-dbbd70cefd4f', // optional, link to Credly badge
    objective: 'Showcase foundational understanding of AWS services, cloud deployment, and architecture best practices.',
    role: 'Individual Achievement — Certified by Amazon Web Services',
    features: [
      `Earned the AWS Certified Cloud Practitioner credential by demonstrating foundational knowledge of AWS services and global infrastructure.`,
      `Studied cloud concepts, core AWS services like EC2, S3, and RDS, and best practices related to security, billing, and support.`,
      `Used these skills to deploy personal projects using S3 static hosting, Route 53 DNS, and IAM-based secure configurations.`,
      `Received official digital badge and PDF certificate from AWS via Credly.`
    ],
    skills: [
      'Cloud Concepts & Global Infrastructure',
      'S3, EC2, Route 53, IAM',
      'Deployment & Permissions',
      'AWS Billing & Pricing Models',
      'Security & Shared Responsibility Model'
    ]
  }
]

const skills = [
  { name: 'React', icon: 'react-original' },
  { name: 'Node.js', icon: 'nodejs-plain' },
  { name: 'Express', icon: 'express-original' },
  { name: 'MongoDB', icon: 'mongodb-plain' },
  { name: 'Spring Boot', icon: 'spring-original' },
  { name: 'MySQL', icon: 'mysql-plain' },
  { name: 'C#', icon: 'csharp-line' },
  { name: 'Tailwind CSS', icon: 'tailwindcss-plain' },
  { name: 'Git', icon: 'git-plain' },
  { name: 'Docker', icon: 'docker-plain' },
  { name: 'JavaScript', icon: 'javascript-plain' },
  { name: 'HTML5', icon: 'html5-plain' },
  { name: 'CSS3', icon: 'css3-plain' }
];

function ProjectsAndSkills() {
  const [activeProject, setActiveProject] = useState(null)
  const overlayRef = useRef(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = activeProject ? 'hidden' : 'auto'
  }, [activeProject])

  useEffect(() => {
    if (activeProject) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
        pointerEvents: 'auto'
      })
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.4,
        ease: 'power2.in',
        pointerEvents: 'none'
      })
    }
  }, [activeProject])

  return (
    <div className="projects-section">
      <h2 className="section-title">🚀 Projects & More</h2>
      <div className="carousel-wrapper">
        <div className="carousel" ref={scrollRef}>
          {projects.map((proj, idx) => (
            <div className="project-card" key={idx} onClick={() => setActiveProject(proj)}>
              <img src={proj.image} alt={proj.title} />
              <h3>{proj.title}</h3>
              <p className="click-to-know">Click to know more</p>
            </div>
          ))}
        </div>
        <div className="carousel-nav left" onClick={() => scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })}>
          ◀
        </div>
        <div className="carousel-nav right" onClick={() => scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })}>
          ▶
        </div>
      </div>
      {activeProject && (
        <button className="back-btn-fixed" onClick={() => setActiveProject(null)}>← Back</button>
      )}

      <div className="project-overlay" ref={overlayRef}>
        {activeProject && (
          <div className="overlay-content">
            <h2 className="overlay-title">{activeProject.title}</h2>
            <img className="overlay-image" src={activeProject.image} alt={activeProject.title} />
            <p className="project-description">{activeProject.description}</p>

            <div className="project-section">
              <h3>🎯 Objective</h3>
              <p>{activeProject.objective}</p>
            </div>

            <div className="project-section">
              <h3>🧠 Role & Team</h3>
              <p>{activeProject.role}</p>
            </div>

            <div className="project-section">
              <h3>📖 Project Narrative</h3>
              {activeProject.features.map((para, i) => (
                <p key={i} style={{ marginBottom: '1rem' }}>{para}</p>
              ))}
            </div>

            <div className="project-section">
              <h3>📈 Skills Gained</h3>
              <ul>
                {activeProject.skills.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="links">
              {activeProject.live && (
                <a href={activeProject.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
              )}
              {activeProject.github ? (
                <a href={activeProject.github} target="_blank" rel="noopener noreferrer">
                  GitHub Repo
                </a>
              ) : (
                <span className="disabled-link">Private Repo (NDA)</span>
              )}
            </div>
          </div>
        )}
      </div>

      <h2 className="section-title">🛠️ Skills</h2>
      <div className="carousel marquee">
        <div className="marquee-content">
          {skills.concat(skills).map((skill, i) => (
            <div className="project-card skill-icon" key={i}>
              <i className={`devicon-${skill.icon} colored`} style={{ fontSize: '2.5rem' }}></i>
            </div>
          ))}
        </div>
      </div>

      <div className="project-section skills-highlight">
        <h3>💡 Skill Highlights (with Context)</h3>
        <ul>
          <li>
            <strong>Full-Stack Development (React, Node.js, Spring Boot, MongoDB, MySQL):</strong>
            Built and deployed multiple full-stack applications — including the <em>Dal Social App</em> (React + Spring Boot + MySQL) and <em>Resume Radar</em> (React + Node.js + MongoDB) — with secure authentication and dynamic data flow between client and server.
          </li>
          <li>
            <strong>API Integration & Data Automation:</strong>
            Integrated Wunderground and PlantNet APIs in the <em>TranSECT</em> project to automate weather and flora data processing. Used Multer for file handling, added validation layers, and persisted data using Mongoose.
          </li>
          <li>
            <strong>CI/CD & DevOps (Git, Docker, PM2, SSH):</strong>
            Set up Docker-based CI/CD pipelines in <em>Gambit</em> to automate Unity game builds. Deployed the <em>TranSECT</em> backend to a Linux server using SSH, PM2 for process management, and `.env` files for environment configs.
          </li>
          <li>
            <strong>Game Development (Unity, C#, OpenMaze):</strong>
            Redesigned level architecture and debugging workflows in the <em>Gambit</em> EEG-controlled game. Implemented custom checkpoint logic, enemy pathfinding, and dynamic level loading through JSON config files.
          </li>
          <li>
            <strong>Resume Analysis & NLP:</strong>
            Developed <em>Resume Radar</em>, a smart job preparation tool that parses PDF/DOCX resumes, compares them with job descriptions using keyword scoring, and outputs match analysis — showcasing frontend logic, backend parsing, and modular architecture.
          </li>
          <li>
            <strong>Teamwork & Mentoring:</strong>
            Acted as a senior developer and mentor in the <em>TranSECT</em> project, onboarding 4 junior developers. Led Git training sessions and conflict resolution practices to streamline collaboration in a multi-branch setup.
          </li>
          <li>
            <strong>AWS & Cloud Skills:</strong>
             Earned the <em>AWS Certified Cloud Practitioner</em> certificate and currently applying cloud deployment practices in personal projects, including use of S3, Route 53, and `.env` configuration on hosted apps.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProjectsAndSkills;