import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaDownload,
} from "react-icons/fa";
import { MdWork, MdSchool, MdCode, MdStar } from "react-icons/md";
import { BiAward, BiRocket } from "react-icons/bi";
import data from "../assets/portfolioData";
import { avatarImage, resume } from "../assets";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const {
    personalInformation,
    professionalSummary,
    experience,
    education,
    technicalSkills,
    projects,
  } = data;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Section with gradient background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-6 md:p-10 shadow-2xl border border-white/20 backdrop-blur-sm">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl -ml-32 -mb-32"></div>

        <div className="relative flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-shrink-0 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <img
              src={`${avatarImage}`}
              alt={personalInformation.fullName}
              className="relative w-48 h-48 rounded-full object-cover border-4 border-white shadow-2xl group-hover:scale-105 transition-transform"
            />
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full p-2 border-2 border-white shadow-lg">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 shadow-lg">
              <MdStar className="text-yellow-300" /> Available for work
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              {personalInformation.fullName}
            </h1>
            <h2 className="text-xl text-gray-700 font-medium mb-3 flex items-center justify-center md:justify-start gap-2">
              <span className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full inline-block"></span>
              {personalInformation.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5 max-w-2xl">
              {professionalSummary}
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Link
                to={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg"
                download
              >
                <FaDownload /> Download Resume
              </Link>
              <a
                href={`https://${personalInformation.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-900 hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={`https://${personalInformation.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with gradient cards */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-center shadow-xl hover:scale-105 transition-transform duration-300 group">
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
          <MdWork className="text-5xl text-white/90 mx-auto mb-2 group-hover:rotate-12 transition-transform" />
          <h3 className="text-3xl font-bold text-white">
            {experience.length}+
          </h3>
          <p className="text-white/80">Experiences</p>
        </div>
        <div className="relative overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-center shadow-xl hover:scale-105 transition-transform duration-300 group">
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
          <MdCode className="text-5xl text-white/90 mx-auto mb-2 group-hover:rotate-12 transition-transform" />
          <h3 className="text-3xl font-bold text-white">{projects.length}</h3>
          <p className="text-white/80">Projects</p>
        </div>
        <div className="relative overflow-hidden bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl p-6 text-center shadow-xl hover:scale-105 transition-transform duration-300 group">
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
          <MdSchool className="text-5xl text-white/90 mx-auto mb-2 group-hover:rotate-12 transition-transform" />
          <h3 className="text-3xl font-bold text-white">
            {education.percentage}
          </h3>
          <p className="text-white/80">MCA Graduate</p>
        </div>
      </section>

      {/* Experience Section with colorful cards */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-6 md:p-8 shadow-2xl">
        <div className="flex items-center justify-center gap-3 mb-6">
          <MdWork className="text-3xl text-yellow-400" />
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
            Experience
          </h2>
          <MdWork className="text-3xl text-yellow-400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-yellow-400/50 transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-yellow-400 to-pink-400 rounded-l-xl"></div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {exp.position}
                  </h3>
                  <h4 className="text-yellow-400 font-medium">{exp.company}</h4>
                </div>
                <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-pink-400 text-white text-xs rounded-full font-semibold">
                  {exp.duration}
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                {exp.responsibilities.map((item, i) => (
                  <li key={i} className="hover:text-white transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section with gradient cards */}
      <section className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 rounded-2xl p-6 md:p-8 shadow-2xl">
        <div className="flex items-center justify-center gap-3 mb-6">
          <MdCode className="text-3xl text-indigo-600" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Technical Skills
          </h2>
          <MdCode className="text-3xl text-indigo-600" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(technicalSkills).map(([category, skills]) => (
            <div
              key={category}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-white/50"
            >
              <h3 className="text-lg font-semibold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text mb-3 capitalize flex items-center gap-2">
                <span className="w-2 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-sm rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section with gradient border cards */}
      <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-6 md:p-8 shadow-2xl">
        <div className="flex items-center justify-center gap-3 mb-6">
          <BiRocket className="text-3xl text-yellow-400" />
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
            Projects
          </h2>
          <BiRocket className="text-3xl text-yellow-400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-yellow-400/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded-full font-semibold">
                    {project.status}
                  </span>
                  <span className="px-2 py-1 bg-indigo-400/20 text-indigo-300 text-xs rounded-full font-semibold">
                    #{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                {project.technologies && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-white/10 text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 bg-white/10 text-gray-400 text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                )}

                {/* GitHub Link */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    <FaGithub className="text-sm" /> View Code
                  </a>
                )}

                <div className="mt-4 flex gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full"></span>
                  <span className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full"></span>
                  <span className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section with gradient background */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="relative">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BiAward className="text-4xl text-yellow-300" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Let's Work Together
            </h2>
            <BiAward className="text-4xl text-yellow-300" />
          </div>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Let's build
            something amazing together!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <FaEnvelope /> Get In Touch
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              <FaPhone /> Call Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
