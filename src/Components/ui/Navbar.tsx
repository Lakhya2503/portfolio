import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

interface NavLink {
  path: string
  label: string
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const location = useLocation()

  const toggleMenu = (): void => {
    setIsOpen(!isOpen)
  }

  const navLinks: NavLink[] = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 max-w-7xl flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Laxman Shinde
        </Link>

        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes className="text-2xl text-gray-700" /> : <FaBars className="text-2xl text-gray-700" />}
        </div>

        <ul className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-4 md:p-0 gap-4 md:gap-8 items-center shadow-lg md:shadow-none transition-all duration-300`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`text-gray-600 hover:text-indigo-600 font-medium transition-colors relative ${
                  location.pathname === link.path ? 'text-indigo-600' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar