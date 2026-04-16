import React from 'react'
import '../styles/ResumePage.css'

function ResumePage() {
  return (
    <div className="resume-page">
      <div className="resume-toolbar">
        <a href="/" className="resume-back-btn">← Back to Portfolio</a>
        <a href="/Resume.pdf" download="Gavin_Sharma_Resume.pdf" className="resume-download-btn">
          ↓ Download
        </a>
      </div>

      <div className="resume-viewer">
        <iframe
          src="/Resume.pdf"
          title="Gavin Sharma Resume"
          className="resume-iframe"
        />
      </div>
    </div>
  )
}

export default ResumePage
