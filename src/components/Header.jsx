import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const isOnHomePage = location.pathname === '/'

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])

  return (
    <nav className="navbar navbar-expand-md fixed-top shadow-sm custom-navbar">
      <div className="container">

        {isOnHomePage ? (
          <a className="navbar-brand" href="#home" onClick={() => setIsOpen(false)}>
            Gavin Sharma
          </a>
        ) : (
          <Link className="navbar-brand" to="/" onClick={() => setIsOpen(false)}>
            Gavin Sharma
          </Link>
        )}

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              {isOnHomePage ? (
                <a className="nav-link" href="#home" onClick={() => setIsOpen(false)}>
                  Home
                </a>
              ) : (
                <Link className="nav-link" to="/#home" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              )}
            </li>

            <li className="nav-item">
              {isOnHomePage ? (
                <a className="nav-link" href="#about" onClick={() => setIsOpen(false)}>
                  About
                </a>
              ) : (
                <Link className="nav-link" to="/#about" onClick={() => setIsOpen(false)}>
                  About
                </Link>
              )}
            </li>

            <li className="nav-item">
              {isOnHomePage ? (
                <a className="nav-link" href="#projects" onClick={() => setIsOpen(false)}>
                  Projects
                </a>
              ) : (
                <Link className="nav-link" to="/#projects" onClick={() => setIsOpen(false)}>
                  Projects
                </Link>
              )}
            </li>

            <li className="nav-item">
              {isOnHomePage ? (
                <a className="nav-link" href="#contact" onClick={() => setIsOpen(false)}>
                  Contact
                </a>
              ) : (
                <Link className="nav-link" to="/#contact" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              )}
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header