import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <nav className="navbar">
      <div className="logo">
        <span>J</span>u<span>a</span>n D<span>e</span>v
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/Aboutme" onClick={toggleMenu}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="/Skills" onClick={toggleMenu}>
            Education Timeline
          </Link>
        </li>
        <li>
          <Link to="/Proyects" onClick={toggleMenu}>
            Proyects
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
