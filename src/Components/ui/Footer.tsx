import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaYoutube, FaDev, FaHeart, FaRocket } from 'react-icons/fa'
import { MdCode, MdSchool, MdWork } from 'react-icons/md'
import { HiOutlineSparkles } from 'react-icons/hi'
import { BiRocket } from 'react-icons/bi'
import data from '../../assets/portfolioData.ts'

const Footer: React.FC = () => {
  const { personalInformation } = data
  const currentYear: number = new Date().getFullYear()

  return (
    <footer className="relative mt-16 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 shadow-2xl">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-400/10 to-purple-400/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-400/5 to-pink-400/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-12 max-w-7xl relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-lg flex items-center justify-center shadow-lg">
                <BiRocket className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                {personalInformation.fullName.split(' ')[0]}
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Building scalable web applications with modern technologies. Passionate about creating elegant solutions.
            </p>
            <div className="flex gap-2 mt-3">
              <span className="px-2 py-1 bg-white/10 text-yellow-400 text-xs rounded-full border border-white/10">
                🚀 Available
              </span>
              <span className="px-2 py-1 bg-white/10 text-green-400 text-xs rounded-full border border-white/10">
                ✨ Active
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-to-b from-yellow-400 to-pink-400 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-to-b from-yellow-400 to-pink-400 rounded-full"></span>
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              <a 
                href={`https://${personalInformation.github}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r from-indigo-500 to-purple-500 text-gray-300 hover:text-white rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 hover:shadow-xl border border-white/10 hover:border-transparent"
              >
                <FaGithub />
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  GitHub
                </span>
              </a>
              <a 
                href={`https://${personalInformation.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r from-blue-500 to-blue-600 text-gray-300 hover:text-white rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 hover:shadow-xl border border-white/10 hover:border-transparent"
              >
                <FaLinkedin />
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  LinkedIn
                </span>
              </a>
              <a 
                href={`mailto:${personalInformation.email}`}
                className="group relative w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r from-red-500 to-pink-500 text-gray-300 hover:text-white rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 hover:shadow-xl border border-white/10 hover:border-transparent"
              >
                <FaEnvelope />
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Email
                </span>
              </a>
              <a 
                href="#"
                className="group relative w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r from-purple-500 to-pink-500 text-gray-300 hover:text-white rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 hover:shadow-xl border border-white/10 hover:border-transparent"
              >
                <FaTwitter />
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Twitter
                </span>
              </a>
              <a 
                href="#"
                className="group relative w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r from-red-600 to-red-700 text-gray-300 hover:text-white rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 hover:shadow-xl border border-white/10 hover:border-transparent"
              >
                <FaYoutube />
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  YouTube
                </span>
              </a>
            </div>
          </div>

          {/* Newsletter / Stats */}
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-to-b from-yellow-400 to-pink-400 rounded-full"></span>
              Stats
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="flex items-center gap-2">
                  <MdCode className="text-yellow-400 text-lg" />
                  <span className="text-gray-300 text-sm">Projects</span>
                </div>
                <span className="text-white font-bold">5+</span>
              </div>
              <div className="flex items-center justify-between bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="flex items-center gap-2">
                  <MdWork className="text-yellow-400 text-lg" />
                  <span className="text-gray-300 text-sm">Experience</span>
                </div>
                <span className="text-white font-bold">2+ Years</span>
              </div>
              
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>&copy; {currentYear}</span>
            <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
            <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent font-semibold">
              {personalInformation.fullName}
            </span>
            <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
            <span>All rights reserved</span>
          </div>
          
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Privacy</a>
            <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Terms</a>
            <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
            <div className="flex items-center gap-1 text-gray-400">
              <span>Built with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>using</span>
              <span className="text-cyan-400 font-semibold">React</span>
              <HiOutlineSparkles className="text-yellow-400" />
            </div>
          </div>
        </div>

        {/* Decorative floating elements */}
        <div className="absolute bottom-20 right-10 animate-bounce opacity-20">
          <BiRocket className="text-6xl text-yellow-400" />
        </div>
        <div className="absolute top-20 left-10 animate-pulse opacity-20">
          <HiOutlineSparkles className="text-4xl text-pink-400" />
        </div>
      </div>
    </footer>
  )
}

export default Footer