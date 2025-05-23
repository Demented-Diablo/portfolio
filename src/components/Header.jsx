import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation();
  const isOnHomePage = location.pathname === '/';

  return (
    <nav className="navbar navbar-expand-md fixed-top shadow-sm custom-navbar">
      <div className="container">
        {isOnHomePage ? (
          <a className="navbar-brand" href="#home">Gavin Sharma</a>
        ) : (
          <Link className="navbar-brand" to="/">Gavin Sharma</Link>
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
                <a className="nav-link" href="#home">Home</a>
              ) : (
              <Link className="nav-link" to="/#home">Home</Link>
              )}
            </li>
            <li className="nav-item">
              {isOnHomePage ? (
                <a className="nav-link" href="#about">About</a>
              ) : (
              <Link className="nav-link" to="/#about">About</Link>
              )}
            </li>
            <li className="nav-item">
              {isOnHomePage ? (
                <a className="nav-link" href="#projects">Projects</a>
              ) : (
              <Link className="nav-link" to="/#projects">Projects</Link>
              )}
            </li>
            <li className="nav-item">
              {isOnHomePage ? (
                <a className="nav-link" href="#contact">Contact</a>
              ) : (
              <Link className="nav-link" to="/#contact">Contact</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
