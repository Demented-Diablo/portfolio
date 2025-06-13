// src/components/Footer.jsx
import React from 'react'
function Footer() {
  return (
    <footer className="footer text-center py-4">
      <div className="footer-content">
        <p>
          <span className="footer-icon">⚡</span> © {new Date().getFullYear()} Gavin Sharma • Built with React + Vite
        </p>
        <p>
          Designed with ❤️ and powered by Supabase, GSAP, AWS cloud magic (S3, Route 53, HTTPS), and a bit of caffeine-fueled creativity.
        </p>
      </div>
    </footer>
  )
}

export default Footer
