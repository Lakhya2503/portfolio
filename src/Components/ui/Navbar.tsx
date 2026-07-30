import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaHome, FaUser, FaEnvelope, FaRocket } from 'react-icons/fa'

interface NavLink {
  path: string
  label: string
  icon: React.ReactNode
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = (): void => {
    setIsOpen(!isOpen)
  }

  const closeMenu = (): void => {
    setIsOpen(false)
  }

  const navLinks: NavLink[] = [
    { path: '/', label: 'Home', icon: <FaHome className="text-sm" /> },
    { path: '/about', label: 'About', icon: <FaUser className="text-sm" /> },
    { path: '/contact', label: 'Contact', icon: <FaEnvelope className="text-sm" /> }
  ]

  return (
    <nav 
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gradient-to-r from-indigo-900/95 via-purple-900/95 to-pink-900/95 backdrop-blur-xl shadow-2xl' 
          : 'bg-white/95 backdrop-blur-md shadow-lg'
      }`}
    >
      {/* Animated gradient line */}
      <div className="h-0.5 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 animate-gradient-x"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 text-xl sm:text-2xl font-bold"
            onClick={closeMenu}
          >
            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
              scrolled 
                ? 'bg-gradient-to-r from-yellow-400 to-pink-400 shadow-lg' 
                : 'bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg'
            }`}>
              <FaRocket className="text-white text-sm sm:text-lg" />
            </div>
            <span className={`font-bold transition-colors duration-300 ${
              scrolled 
                ? 'bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'
            }`}>
              Laxman
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`relative px-3 lg:px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 group ${
                      isActive
                        ? scrolled
                          ? 'text-yellow-400 bg-white/10'
                          : 'text-indigo-600 bg-indigo-50'
                        : scrolled
                          ? 'text-gray-300 hover:text-white hover:bg-white/10'
                          : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                    }`}
                  >
                    <span className={`transition-transform duration-300 group-hover:scale-110 ${
                      isActive ? 'text-yellow-400' : scrolled ? 'text-gray-400' : 'text-gray-400'
                    }`}>
                      {link.icon}
                    </span>
                    <span>{link.label}</span>
                    
                    {isActive && (
                      <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 rounded-full ${
                        scrolled ? 'bg-gradient-to-r from-yellow-400 to-pink-400' : 'bg-gradient-to-r from-indigo-600 to-purple-600'
                      }`}></span>
                    )}
                    
                    {!isActive && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full transition-all duration-300 group-hover:w-6"></span>
                    )}
                  </Link>
                </li>
              )
            })}
            
            {/* CTA Button */}
            <li className="ml-2">
              <Link
                to="/contact"
                className={`px-4 lg:px-6 py-2 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 group ${
                  scrolled
                    ? 'bg-gradient-to-r from-yellow-400 to-pink-400 text-gray-900 hover:shadow-xl hover:scale-105'
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-xl hover:scale-105'
                }`}
              >
                <FaRocket className="group-hover:translate-x-1 transition-transform text-sm" />
                <span>Hire Me</span>
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className={`md:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
              scrolled
                ? 'text-white hover:bg-white/10'
                : 'text-gray-700 hover:bg-indigo-50'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes className="text-xl sm:text-2xl" />
            ) : (
              <FaBars className="text-xl sm:text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`px-4 sm:px-6 py-4 border-t ${
          scrolled ? 'border-white/10 bg-indigo-900/95' : 'border-gray-100 bg-white/95'
        } backdrop-blur-xl`}>
          <ul className="space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      isActive
                        ? scrolled
                          ? 'bg-white/10 text-yellow-400'
                          : 'bg-indigo-50 text-indigo-600'
                        : scrolled
                          ? 'text-gray-300 hover:bg-white/10 hover:text-white'
                          : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                    }`}
                    onClick={closeMenu}
                  >
                    <span className={`text-lg ${
                      isActive ? scrolled ? 'text-yellow-400' : 'text-indigo-600' : 'text-gray-400'
                    }`}>
                      {link.icon}
                    </span>
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-pink-400"></span>
                    )}
                  </Link>
                </li>
              )
            })}
            
            {/* Mobile CTA */}
            <li className="pt-2">
              <Link
                to="/contact"
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  scrolled
                    ? 'bg-gradient-to-r from-yellow-400 to-pink-400 text-gray-900'
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                }`}
                onClick={closeMenu}
              >
                <FaRocket /> Hire Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar