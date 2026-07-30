import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa'
import { MdWork, MdSchool, MdCode } from 'react-icons/md'
import data from '../data/portfolioData'

const Home: React.FC = () => {
  const { personalInformation, professionalSummary, experience, education, technicalSkills, projects } = data

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-xl">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-shrink-0">
            <img 
              src="/avatar.png" 
              alt={personalInformation.fullName}
              className="w-48 h-48 rounded-full object-cover border-4 border-indigo-500 shadow-xl"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              {personalInformation.fullName}
            </h1>
            <h2 className="text-xl text-gray-600 font-medium mb-3">{personalInformation.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-5">{professionalSummary}</p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a href="/resume.pdf" download className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all">
                <FaDownload /> Download Resume
              </a>
              <a href={`https://${personalInformation.github}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-indigo-600 text-indigo-600 rounded-full font-semibold hover:bg-indigo-600 hover:text-white transition-all">
                <FaGithub /> GitHub
              </a>
              <a href={`https://${personalInformation.linkedin}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-indigo-600 text-indigo-600 rounded-full font-semibold hover:bg-indigo-600 hover:text-white transition-all">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform">
          <MdWork className="text-4xl text-indigo-600 mx-auto mb-2" />
          <h3 className="text-3xl font-bold text-gray-800">{experience.length}+</h3>
          <p className="text-gray-600">Experiences</p>
        </div>
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform">
          <MdCode className="text-4xl text-indigo-600 mx-auto mb-2" />
          <h3 className="text-3xl font-bold text-gray-800">{projects.length}</h3>
          <p className="text-gray-600">Projects</p>
        </div>
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform">
          <MdSchool className="text-4xl text-indigo-600 mx-auto mb-2" />
          <h3 className="text-3xl font-bold text-gray-800">{education.percentage}</h3>
          <p className="text-gray-600">MCA Graduate</p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experience.map((exp, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 border-l-4 border-indigo-500 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-gray-800">{exp.position}</h3>
              <h4 className="text-indigo-600 font-medium">{exp.company}</h4>
              <p className="text-gray-500 text-sm mb-3">{exp.duration}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(technicalSkills).map(([category, skills]) => (
            <div key={category} className="bg-gray-50 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-indigo-600 mb-3 capitalize">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-all border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center shadow-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Let's Work Together</h2>
        <p className="text-gray-600 mb-6">I'm always open to new opportunities and collaborations</p>
        <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all">
          Get In Touch
        </a>
      </section>
    </div>
  )
}

export default Home