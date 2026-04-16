import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import '../styles/Projects.css'
import 'devicon/devicon.min.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useLocation } from 'react-router-dom'

const projects = [
  {
    title: 'DeeBug - ML Pipeline Debugger',
    image: 'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/Deebug.jpg',
    description: 'Platform for executing and inspecting machine learning pipelines with dataset persistence and reusable execution environments.',
    techStack: ['React', 'Python', 'Flask', 'Supabase', 'Docker'],
    github: '',
    live: 'https://deebug.dev/',
    objective: 'Enable developers to run and inspect machine learning pipelines while managing datasets across experiments.',
    role: 'Development Director in a multi member engineering team responsible for system architecture and backend design.',
    features: [
      'Designed dataset persistence architecture allowing datasets to be reused across experiments.',
      'Implemented backend APIs that manage dataset lifecycle states such as selected, unsaved, and saved.',
      'Integrated Supabase storage to persist datasets and retrieve them during execution.',
      'Collaborated with a multi member team using GitLab and Agile sprint planning.',
      'Focused on system architecture for machine learning experimentation environments.'
    ],
    skills: [
      'Backend Architecture',
      'API Design',
      'Supabase Storage',
      'Dataset Persistence Systems',
      'Agile Development'
    ]
  },
  {
    title: 'TranSECT - Coastal Data Automation',
    image: 'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/transect.png',
    description: 'Automated weather and plant data processing platform built for citizen scientists on Nova Scotia’s Eastern Shore.',
    techStack: ['Node.js', 'React', 'MongoDB', 'API Integration'],
    github: 'https://github.com/Demented-Diablo/transect',
    live: '',
    objective: 'Automate coastal data collection, plant identification, and weather logging for citizen scientists.',
    role: 'Senior Developer in an 8 member team responsible for backend services, API integrations, and deployment.',
    features: [
      'Built the Express.js backend and designed MongoDB data models for weather and plant datasets.',
      'Integrated the Wunderground API to automatically collect rainfall and temperature data.',
      'Implemented plant identification workflow using the PlantNet API and image uploads handled through Multer.',
      'Designed backend API routes for weather ingestion, plant uploads, and validated data storage.',
      'Deployed backend services on a Linux server using SSH and PM2 for process management.',
      'Mentored junior developers by creating Git onboarding tasks and establishing branching workflows.'
    ],
    skills: [
      'API Integration with Wunderground and PlantNet',
      'Express Backend Architecture',
      'MongoDB Data Modeling with Mongoose',
      'Linux Deployment using SSH and PM2',
      'File Upload Processing with Multer',
      'Team Mentoring and Git Workflow Management'
    ]
  },
  {
    title: 'Gambit - Brain Controlled Accessibility Game',
    image: 'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/gambit.png',
    description: 'EEG controlled Unity game that allows players to interact using brainwave signals through Muse and OpenMaze.',
    techStack: ['Unity', 'C#', 'Docker', 'OpenMaze', 'LSL', 'Git', 'CI/CD'],
    github: '',
    live: '',
    objective: 'Explore how brain computer interface technology can improve gaming accessibility for players with limited mobility.',
    role: 'Junior Developer in an 8 member team contributing to debugging, level design, and CI workflows.',
    features: [
      'Debugged major Unity runtime errors including NullReferenceException and MissingComponentException.',
      'Studied OpenMaze and Lab Streaming Layer architecture to understand EEG data flow and scene interaction.',
      'Created JSON configuration files that allowed developers to quickly load Levels 2 and 3 for testing.',
      'Redesigned Level 1 to improve navigation and reduce unnecessary complexity.',
      'Implemented gameplay features including checkpoint gems and respawn mechanics.',
      'Designed and built a new 3D maze level with patrolling enemy behavior.',
      'Helped implement Docker based CI workflows for automated Unity builds.'
    ],
    skills: [
      'Unity Debugging and Scene Architecture',
      'OpenMaze and EEG Integration',
      'Level Design and Gameplay Mechanics',
      'CI Workflows with Docker',
      'Git Branching and Version Control',
      'Technical Documentation and Collaboration'
    ]
  },
  {
    title: 'Dal Social - Student Social Platform',
    image: 'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/dalsm.png',
    description: 'Private social platform built for Dalhousie students using React and Spring Boot.',
    techStack: ['React', 'Spring Boot', 'WebSockets', 'MySQL'],
    github: 'https://github.com/Demented-Diablo/DalSM',
    live: '',
    objective: 'Enable Dalhousie students to connect, share posts, and interact in a secure campus specific environment.',
    role: 'Full stack developer in a 6 member team responsible for backend APIs and frontend integration.',
    features: [
      'Built Spring Boot REST APIs for authentication, post creation, and post retrieval.',
      'Implemented secure user login and registration using Spring Security and JPA.',
      'Developed React components for feed pages, login flows, and post interactions.',
      'Connected frontend and backend using API requests and managed authenticated user state.',
      'Debugged issues including CORS errors, broken API routes, and form validation problems.',
      'Resolved major Git merge conflicts during the final integration phase and helped establish better team Git workflows.'
    ],
    skills: [
      'Full stack development with React and Spring Boot',
      'REST API design and authentication systems',
      'State management and component architecture',
      'Debugging CORS and API integration issues',
      'Git collaboration and conflict resolution'
    ]
  },
  {
    title: 'DownloadSorter - Python File Automation Tool',
    image: 'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/Sorter.png',
    description: 'Python automation tool that monitors the Downloads folder and organizes files into categorized directories.',
    techStack: ['Python', 'Watchdog', 'Win10Toast', 'File System Automation'],
    github: 'https://github.com/Demented-Diablo/DownloadSorter',
    live: '',
    objective: 'Automatically organize files in the Downloads folder to keep the workspace clean and structured.',
    role: 'Solo Developer responsible for automation logic, file classification, and system notifications.',
    features: [
      'Implemented real time file monitoring using the watchdog library.',
      'Automatically categorizes files into folders such as PDFs, Images, Videos, Documents, and Archives.',
      'Added one time cleanup mode for organizing existing files in the Downloads directory.',
      'Integrated toast notifications to inform users when files are moved.',
      'Implemented collision handling to prevent file overwrites and maintain safe operations.'
    ],
    skills: [
      'Python Automation',
      'File System Monitoring',
      'Event Driven Programming',
      'Desktop Notifications',
      'Utility Tool Development'
    ]
  },
  {
    title: 'Eng2Term - English to Terminal Command Tool',
    image: 'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/EngTerm.jpg',
    description: 'Web tool that converts plain English instructions into Linux terminal commands.',
    techStack: ['React', 'Node.js', 'OpenRouter API', 'GPT-3.5 Turbo', 'Render'],
    github: 'https://github.com/Demented-Diablo/eng2term',
    live: 'https://lnkd.in/emSvMJff',
    objective: 'Help developers quickly translate natural language instructions into terminal commands they may not remember.',
    role: 'Solo Developer responsible for API integration, prompt logic, and deployment.',
    features: [
      'Built a minimal web interface that converts natural language instructions into terminal commands.',
      'Integrated GPT-3.5 Turbo through OpenRouter to generate accurate command outputs.',
      'Designed prompt structure to produce concise and executable Linux commands.',
      'Deployed the tool using Render for public access and testing.'
    ],
    skills: [
      'LLM API Integration',
      'Prompt Design',
      'Node.js Backend Development',
      'Frontend Interface Design',
      'Cloud Deployment with Render'
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
  const location = useLocation()

  useEffect(() => {
  setActiveProject(null)
}, [location])

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
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1400: { slidesPerView: 4 }
        }}
      >
        {projects.map((proj, idx) => (
          <SwiperSlide key={idx}>
            <div className="project-card" onClick={() => setActiveProject(proj)}>
              <img
                src={proj.image}
                alt={proj.title}
                style={{ opacity: 0, transition: 'opacity 0.4s ease' }}
                onLoad={e => { e.currentTarget.style.opacity = 1 }}
              />
              <h3>{proj.title}</h3>
              <p className="click-to-know">Click to know more</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {activeProject && (
        <button className="back-btn-fixed" onClick={() => setActiveProject(null)}>← Back</button>
      )}

      <div className="project-overlay" ref={overlayRef}>
        {activeProject && (
          <div className="overlay-content">
            <h2 className="overlay-title">{activeProject.title}</h2>
            <img
                className="overlay-image"
                src={activeProject.image}
                alt={activeProject.title}
                style={{ opacity: 0, transition: 'opacity 0.4s ease' }}
                onLoad={e => { e.currentTarget.style.opacity = 1 }}
              />
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
        <h3> Skill Highlights</h3>
        <ul>

          <li>
            <strong>Full Stack Development (React, Node.js, Spring Boot, MongoDB, MySQL):</strong>
            Built and deployed multiple full stack applications including <em>Dal Social App</em> (React + Spring Boot + MySQL) and <em>Resume Radar</em> (React + Node.js + MongoDB) with secure authentication and dynamic client server data flow.
          </li>

          <li>
            <strong>API Integration and Data Automation:</strong>
            Integrated Wunderground and PlantNet APIs in the <em>TranSECT</em> platform to automate weather and flora data processing. Implemented file uploads with Multer and persisted structured data using Mongoose.
          </li>

          <li>
            <strong>DevOps and Deployment (Git, Docker, PM2, SSH):</strong>
            Built Docker based CI workflows in <em>Gambit</em> and deployed the <em>TranSECT</em> backend to a Linux server using SSH and PM2 with environment configuration through .env variables.
          </li>

          <li>
            <strong>Game Development (Unity, C#, OpenMaze):</strong>
            Redesigned level architecture and debugging workflows in the <em>Gambit</em> EEG controlled game. Implemented checkpoint systems, enemy movement logic, and JSON based level loading.
          </li>

          <li>
            <strong>AI Tools and NLP Applications:</strong>
            Built projects such as <em>Resume Radar</em> and <em>Eng2Term</em> that analyze text inputs and generate structured outputs using keyword analysis and language model APIs.
          </li>

          <li>
            <strong>Team Leadership and Mentoring:</strong>
            Served as a senior developer in the <em>TranSECT</em> project mentoring four junior developers and establishing Git workflows and collaboration practices for a multi branch team environment.
          </li>

          <li>
            <strong>AWS and Cloud Infrastructure:</strong>
            Earned the <em>AWS Certified Cloud Practitioner</em> certification and applied cloud deployment practices using S3 hosting, Route 53 DNS configuration, and environment variable management.
          </li>

        </ul>
      </div>
    </div>
  )
}

export default ProjectsAndSkills;