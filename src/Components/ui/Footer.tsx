import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import data from '../../assets/portfolioData'

const Footer: React.FC = () => {
  const { personalInformation } = data
  const currentYear: number = new Date().getFullYear()

  return (
    <footer className="bg-white/95 backdrop-blur-sm shadow-inner mt-8">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Laxman Shinde
            </h3>
            <p className="text-gray-600 text-sm">MERN Stack Developer building scalable web applications with modern technologies.</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-600 hover:text-indigo-600 transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700 mb-3">Connect</h4>
            <div className="flex gap-4">
              <a href={`https://${personalInformation.github}`} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 hover:bg-indigo-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center text-xl transition-all">
                <FaGithub />
              </a>
              <a href={`https://${personalInformation.linkedin}`} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 hover:bg-indigo-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center text-xl transition-all">
                <FaLinkedin />
              </a>
              <a href={`mailto:${personalInformation.email}`}
                className="w-10 h-10 bg-gray-100 hover:bg-indigo-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center text-xl transition-all">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-6 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {currentYear} {personalInformation.fullName}. All rights reserved.</p>
          <p>Built with React & ❤️</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer