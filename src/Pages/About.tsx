import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import { MdSchool, MdWork, MdCode, MdVerified } from 'react-icons/md'
import data from '../assets/portfolioData'

const About: React.FC = () => {
  const { personalInformation, education, experience, certificationsAndAchievements, technicalSkills } = data

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">About Me</h1>
        <p className="text-lg opacity-90">Passionate MERN Stack Developer building scalable web applications</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Info */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
          <h2 className="text-xl font-bold text-indigo-600 mb-4 flex items-center gap-2">
            <MdCode /> Personal Information
          </h2>
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-200 pb-2">
              <span className="font-semibold text-gray-700">Full Name:</span>
              <span className="text-gray-600">{personalInformation.fullName}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-200 pb-2">
              <span className="font-semibold text-gray-700">Title:</span>
              <span className="text-gray-600">{personalInformation.title}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-200 pb-2">
              <span className="font-semibold text-gray-700">Email:</span>
              <a href={`mailto:${personalInformation.email}`} className="text-indigo-600 hover:underline flex items-center gap-1">
                <FaEnvelope /> {personalInformation.email}
              </a>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-200 pb-2">
              <span className="font-semibold text-gray-700">Phone:</span>
              <a href={`tel:${personalInformation.phone}`} className="text-indigo-600 hover:underline flex items-center gap-1">
                <FaPhone /> {personalInformation.phone}
              </a>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-200 pb-2">
              <span className="font-semibold text-gray-700">GitHub:</span>
              <a href={`https://${personalInformation.github}`} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline flex items-center gap-1">
                <FaGithub /> {personalInformation.github}
              </a>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <span className="font-semibold text-gray-700">LinkedIn:</span>
              <a href={`https://${personalInformation.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline flex items-center gap-1">
                <FaLinkedin /> {personalInformation.linkedin}
              </a>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
          <h2 className="text-xl font-bold text-indigo-600 mb-4 flex items-center gap-2">
            <MdSchool /> Education
          </h2>
          <div className="bg-gray-50 rounded-xl p-5">
            <h3 className="text-xl font-semibold text-gray-800">{education.degree}</h3>
            <p className="text-gray-600">{education.institution}</p>
            <p className="text-gray-500 text-sm">{education.duration}</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-gray-600">Percentage:</span>
              <span className="text-2xl font-bold text-indigo-600">{education.percentage}</span>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
          <h2 className="text-xl font-bold text-indigo-600 mb-4 flex items-center gap-2">
            <MdVerified /> Certifications & Achievements
          </h2>
          <ul className="space-y-2">
            {certificationsAndAchievements.map((item, index) => (
              <li key={index} className="flex items-start gap-2 bg-gray-50 p-3 rounded-lg">
                <MdVerified className="text-indigo-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Experience Overview */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
          <h2 className="text-xl font-bold text-indigo-600 mb-4 flex items-center gap-2">
            <MdWork /> Experience Overview
          </h2>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <h3 className="font-semibold text-gray-800">{exp.position}</h3>
                <p className="text-indigo-600 font-medium">{exp.company}</p>
                <p className="text-gray-500 text-sm">{exp.duration}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Summary */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl lg:col-span-2">
          <h2 className="text-xl font-bold text-indigo-600 mb-4 flex items-center gap-2">
            <MdCode /> Technical Skills Summary
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <div key={category} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-600 mb-2 capitalize">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">
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
  )
}

export default About