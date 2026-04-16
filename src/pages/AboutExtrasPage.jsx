import React from 'react'
import AboutExtras from '../components/AboutExtras.jsx'
import '../styles/AboutExtras.css'

function AboutExtrasPage() {
  return (
    <>
      {/* Background lives here, completely outside the GSAP-animated element,
          so transform on .extras-section never breaks position:fixed */}
      <div className="extras-bg" aria-hidden="true" />

      <div className="extras-section min-vh-100 text-white">
        <div style={{ padding: '1rem', alignItems: 'center', textAlign: 'center' }}>
          <a href="/" className="toggle-btn">
            ← Back to Portfolio
          </a>
        </div>
        <AboutExtras />
      </div>
    </>
  )
}

export default AboutExtrasPage