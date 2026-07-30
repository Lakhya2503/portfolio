import React from 'react';
import { 
  FaGraduationCap, 
  FaCode, 
  FaAward,
  FaCalendarAlt,
  FaUserGraduate
} from 'react-icons/fa';
import data from '../../portfolio';

const About = () => {
  const { education, certificationsAndAchievements, technicalSkills, experience } = data;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          About Me
        </span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Education */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <FaGraduationCap className="text-4xl text-cyan-400" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-cyan-400">{education.degree}</h3>
              <p className="text-gray-400">{education.institution}</p>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <FaCalendarAlt /> {education.duration}
                </span>
                <span className="flex items-center gap-1">
                  <FaUserGraduate /> {education.percentage}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <FaAward className="text-4xl text-yellow-400" />
            <h2 className="text-2xl font-bold">Certifications</h2>
          </div>
          <ul className="space-y-3">
            {certificationsAndAchievements.map((cert, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <span className="text-cyan-400 mt-1">✦</span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Skills Overview */}
        <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <FaCode className="text-4xl text-cyan-400" />
            <h2 className="text-2xl font-bold">Skills Overview</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <div key={category} className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-cyan-400 font-semibold capitalize mb-2">{category}</h3>
                <div className="flex flex-wrap gap-1">
                  {skills.map((skill) => (
                    <span key={skill} className="text-sm text-gray-300 bg-gray-600/50 px-2 py-0.5 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="lg:col-span-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/20">
          <h2 className="text-xl font-bold mb-4 text-center">Experience Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {experience.map((exp, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-4">
                <h3 className="text-cyan-400 font-semibold">{exp.position}</h3>
                <p className="text-gray-400 text-sm">{exp.company}</p>
                <p className="text-gray-500 text-xs">{exp.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;