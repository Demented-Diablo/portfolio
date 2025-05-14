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
          Designed with ❤️ and powered by Supabase, GSAP, and creativity.
        </p>
      </div>
    </footer>
  )
}

export default Footer
