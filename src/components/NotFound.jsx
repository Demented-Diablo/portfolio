import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="page-wrapper d-flex flex-column align-items-center justify-content-center" style={{ textAlign: 'center' }}>
      <div className="shape-corner top-left"></div>
      <div className="shape-corner top-right"></div>
      <div className="shape-corner bottom-left"></div>
      <div className="shape-corner bottom-right"></div>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="btn btn-primary mt-3">Go Home</Link>
    </div>
  )
}

export default NotFound