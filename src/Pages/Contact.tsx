import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaRocket, FaUser, FaBriefcase } from 'react-icons/fa'
import { MdEmail, MdPhone, MdLocationOn, MdStar } from 'react-icons/md'
import { HiOutlineSparkles } from 'react-icons/hi'
import data from '../assets/portfolioData'

const Contact: React.FC = () => {
  const { personalInformation } = data

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header with gradient */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-400/10 to-pink-400/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-400/10 to-indigo-400/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
        
        <div className="relative">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-4">
            <HiOutlineSparkles className="text-yellow-400 text-lg" />
            <span className="text-white/90 text-sm font-medium">Let's Connect</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
            Get In Touch
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Let's connect and create something amazing!
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-pink-400 flex items-center justify-center border-2 border-white/20">
                <MdStar className="text-white text-xs" />
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 flex items-center justify-center border-2 border-white/20">
                <FaUser className="text-white text-xs" />
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-red-400 flex items-center justify-center border-2 border-white/20">
                <FaBriefcase className="text-white text-xs" />
              </div>
            </div>
            <span className="text-white/60 text-sm">Available for work</span>
          </div>
        </div>
      </div>

      {/* Contact Information - Full Width */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Contact Card */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-8 md:p-10 shadow-2xl h-full backdrop-blur-sm border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <FaRocket className="text-white text-2xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Contact Information
                </h2>
                <p className="text-gray-500 text-sm">I'd love to hear from you</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              I'm always interested in hearing about new opportunities, collaborations, or just having a chat! Feel free to reach out through any of the channels below.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="group relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-2xl"></div>
                <div className="flex items-center gap-4 relative">
                  <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <MdEmail className="text-3xl text-white" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</h4>
                    <a href={`mailto:${personalInformation.email}`} className="text-indigo-600 hover:text-purple-600 font-medium transition-colors text-sm break-all">
                      {personalInformation.email}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="group relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-full blur-2xl"></div>
                <div className="flex items-center gap-4 relative">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <MdPhone className="text-3xl text-white" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Phone</h4>
                    <a href={`tel:${personalInformation.phone}`} className="text-green-600 hover:text-emerald-600 font-medium transition-colors">
                      {personalInformation.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] md:col-span-2">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/5 to-pink-500/5 rounded-full blur-2xl"></div>
                <div className="flex items-center gap-4 relative">
                  <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <MdLocationOn className="text-3xl text-white" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Location</h4>
                    <p className="text-gray-700 font-medium">India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <p className="text-sm font-medium text-green-700">Available for freelance work</p>
                  <p className="text-xs text-green-600">Usually responds within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links Sidebar */}
        <div>
          <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 shadow-2xl h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-xl flex items-center justify-center shadow-lg">
                <FaUser className="text-gray-900 text-xl" />
              </div>
              <h2 className="text-xl font-bold text-white">Connect</h2>
            </div>
            
            <p className="text-white/70 text-sm mb-6">Follow me on social media for updates and more</p>
            
            <div className="space-y-4">
              <a href={`https://${personalInformation.github}`} target="_blank" rel="noopener noreferrer" 
                className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] border border-white/10 hover:border-transparent">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl text-white group-hover:scale-110 transition-transform">
                  <FaGithub />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">GitHub</p>
                  <p className="text-white/50 text-xs">View my code</p>
                </div>
                <span className="text-white/30 group-hover:text-white transition-colors">→</span>
              </a>

              <a href={`https://${personalInformation.linkedin}`} target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] border border-white/10 hover:border-transparent">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl text-white group-hover:scale-110 transition-transform">
                  <FaLinkedin />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">LinkedIn</p>
                  <p className="text-white/50 text-xs">Professional network</p>
                </div>
                <span className="text-white/30 group-hover:text-white transition-colors">→</span>
              </a>

              <a href={`mailto:${personalInformation.email}`}
                className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r from-red-500 to-pink-500 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] border border-white/10 hover:border-transparent">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl text-white group-hover:scale-110 transition-transform">
                  <FaEnvelope />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">Email</p>
                  <p className="text-white/50 text-xs">Direct message</p>
                </div>
                <span className="text-white/30 group-hover:text-white transition-colors">→</span>
              </a>

              <a href="#"
                className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r from-yellow-400 to-pink-400 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] border border-white/10 hover:border-transparent">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl text-white group-hover:scale-110 transition-transform">
                  <FaMapMarkerAlt />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">Location</p>
                  <p className="text-white/50 text-xs">India</p>
                </div>
                <span className="text-white/30 group-hover:text-white transition-colors">→</span>
              </a>
            </div>

            {/* Quick response note */}
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10 text-center">
              <p className="text-white/60 text-xs">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Usually responds in 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact