import React from 'react'
import AboutExtras from '../components/AboutExtras.jsx' // adjust path if needed
import '../styles/AboutExtras.css'
import { Link } from 'react-router-dom'

function AboutExtrasPage() {
  return (
    <div className="extras-section min-vh-100 text-white">
      <div style={{ padding: '1rem' }}>
        <Link to="/" className="toggle-btn">
          ← Back to Portfolio
        </Link>
      </div>
      <AboutExtras />
    </div>
  )
}

export default AboutExtrasPage