import React from 'react'
import { FaGithub, FaLinkedin, FaRocket, FaAward, FaCode, FaUserGraduate, FaBriefcase } from 'react-icons/fa'
import {  MdVerified, MdEmail, MdPhone, MdPerson } from 'react-icons/md'
// import { BiRocket, BiAward, BiSparkle } from 'react-icons/bi'
import { HiOutlineSparkles } from 'react-icons/hi'
import data from '../assets/portfolioData'
import { BiAward } from 'react-icons/bi'

const About: React.FC = () => {
  const { personalInformation, education, experience, certificationsAndAchievements, technicalSkills } = data

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-400/10 to-pink-400/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-400/10 to-indigo-400/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
        
        <div className="relative">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-4">
            <HiOutlineSparkles className="text-yellow-400 text-lg" />
            <span className="text-white/90 text-sm font-medium">About Me</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
            Know Me Better
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Passionate MERN Stack Developer building scalable web applications with modern technologies
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-pink-400 flex items-center justify-center border-2 border-white/20">
                <FaCode className="text-white text-xs" />
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 flex items-center justify-center border-2 border-white/20">
                <FaRocket className="text-white text-xs" />
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-red-400 flex items-center justify-center border-2 border-white/20">
                <FaAward className="text-white text-xs" />
              </div>
            </div>
            <span className="text-white/60 text-sm">3+ Years Experience</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Info - Enhanced */}
        <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-sm border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <MdPerson className="text-white text-xl" />
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Personal Information
            </h2>
          </div>
          
          <div className="space-y-4">
            <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="font-semibold text-gray-600 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></span>
                  Full Name
                </span>
                <span className="text-gray-800 font-medium">{personalInformation.fullName}</span>
              </div>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="font-semibold text-gray-600 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></span>
                  Title
                </span>
                <span className="text-gray-800 font-medium">{personalInformation.title}</span>
              </div>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="font-semibold text-gray-600 text-sm flex items-center gap-2">
                  <MdEmail className="text-indigo-600" />
                  Email
                </span>
                <a href={`mailto:${personalInformation.email}`} className="text-indigo-600 hover:text-purple-600 font-medium transition-colors flex items-center gap-1">
                  {personalInformation.email}
                </a>
              </div>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="font-semibold text-gray-600 text-sm flex items-center gap-2">
                  <MdPhone className="text-green-600" />
                  Phone
                </span>
                <a href={`tel:${personalInformation.phone}`} className="text-green-600 hover:text-emerald-600 font-medium transition-colors flex items-center gap-1">
                  {personalInformation.phone}
                </a>
              </div>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="font-semibold text-gray-600 text-sm flex items-center gap-2">
                  <FaGithub className="text-gray-700" />
                  GitHub
                </span>
                <a href={`https://${personalInformation.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 font-medium transition-colors flex items-center gap-1">
                  {personalInformation.github}
                </a>
              </div>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="font-semibold text-gray-600 text-sm flex items-center gap-2">
                  <FaLinkedin className="text-blue-600" />
                  LinkedIn
                </span>
                <a href={`https://${personalInformation.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium transition-colors flex items-center gap-1">
                  {personalInformation.linkedin}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Education - Enhanced */}
        <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-6 md:p-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-xl flex items-center justify-center shadow-lg">
              <FaUserGraduate className="text-gray-900 text-xl" />
            </div>
            <h2 className="text-xl font-bold text-white">Education</h2>
          </div>
          
          <div className="relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-yellow-400/50 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/5 to-pink-400/5 rounded-full blur-2xl"></div>
            <div className="relative">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-white">{education.degree}</h3>
                  <p className="text-yellow-400 font-medium">{education.institution}</p>
                </div>
                <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-pink-400 text-gray-900 text-xs rounded-full font-semibold">
                  {education.duration}
                </span>
              </div>
              <div className="flex items-center gap-3 mt-4 p-3 bg-white/5 rounded-lg border border-white/10">
                <div className="flex-1">
                  <p className="text-white/60 text-xs uppercase tracking-wider">Percentage</p>
                  <p className="text-3xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text">
                    {education.percentage}
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                  <MdVerified className="text-gray-900 text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications - Enhanced */}
        <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-sm border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-xl flex items-center justify-center shadow-lg">
              <BiAward className="text-gray-900 text-xl" />
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Certifications & Achievements
            </h2>
          </div>
          
          <ul className="space-y-3">
            {certificationsAndAchievements.map((item, index) => (
              <li key={index} className="group bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <MdVerified className="text-white text-sm" />
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Experience Overview - Enhanced */}
        <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-6 md:p-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-xl flex items-center justify-center shadow-lg">
              <FaBriefcase className="text-gray-900 text-xl" />
            </div>
            <h2 className="text-xl font-bold text-white">Experience Overview</h2>
          </div>
          
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index} className="group relative bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 hover:border-yellow-400/50 transition-all hover:shadow-xl hover:-translate-y-0.5">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-yellow-400 to-pink-400 rounded-l-xl"></div>
                <div className="pl-4">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-semibold text-white">{exp.position}</h3>
                    <span className="px-2 py-0.5 bg-gradient-to-r from-yellow-400 to-pink-400 text-gray-900 text-xs rounded-full font-semibold">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-yellow-400 font-medium">{exp.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Summary - Enhanced */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-sm border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <FaCode className="text-white text-xl" />
              </div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Technical Skills Summary
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div key={category} className="group bg-white/80 backdrop-blur-sm p-5 rounded-xl border border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <h4 className="font-semibold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text mb-3 capitalize flex items-center gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></span>
                    {category}
                    <span className="ml-auto text-xs text-gray-400">{skills.length}</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span key={index} className="px-3 py-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-sm rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About