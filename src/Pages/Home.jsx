import React from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaCode,
  FaDatabase,
  FaServer,
  FaCloud,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaArrowRight,
  FaStar,
  FaBriefcase,
  FaProjectDiagram,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiPostgresql, 
  SiRedis, 
  SiTypescript, 
  SiTailwindcss, 
  SiRedux,
  SiExpress,
  SiJavascript,
  SiPython,
  // SiJava,
  SiCplusplus
} from 'react-icons/si';
import data from '../../portfolio';

const Home = () => {
  const { personalInformation, professionalSummary, technicalSkills, experience, projects } = data;

  // Expanded skill icons mapping
  const skillIcons = {
    // Frontend
    React: <FaReact className="text-cyan-400 text-lg" />,
    Redux: <SiRedux className="text-purple-400 text-lg" />,
    'Tailwind CSS': <SiTailwindcss className="text-blue-400 text-lg" />,
    'JavaScript': <SiJavascript className="text-yellow-400 text-lg" />,
    'TypeScript': <SiTypescript className="text-blue-500 text-lg" />,
    'HTML/CSS': <FaCode className="text-orange-400 text-lg" />,
    
    // Backend
    'Node.js': <FaNodeJs className="text-green-500 text-lg" />,
    'Express.js': <SiExpress className="text-white text-lg" />,
    'Python': <SiPython className="text-blue-400 text-lg" />,
    
    // Databases
    'MongoDB': <SiMongodb className="text-green-400 text-lg" />,
    'PostgreSQL': <SiPostgresql className="text-blue-400 text-lg" />,
    'Redis': <SiRedis className="text-red-400 text-lg" />,
    'MySQL': <FaDatabase className="text-blue-500 text-lg" />,
    
    // Tools
    'Docker': <FaDocker className="text-blue-400 text-lg" />,
    'Git': <FaGitAlt className="text-orange-500 text-lg" />,
    'AWS': <FaCloud className="text-yellow-500 text-lg" />,
    'Kubernetes': <FaCloud className="text-blue-400 text-lg" />,
  };

  const categoryIcons = {
    languages: <FaCode className="text-purple-400 text-xl" />,
    frontend: <FaReact className="text-cyan-400 text-xl" />,
    backend: <FaServer className="text-green-400 text-xl" />,
    databases: <FaDatabase className="text-yellow-400 text-xl" />,
    tools: <FaCloud className="text-blue-400 text-xl" />,
  };

  const categoryColors = {
    languages: 'from-purple-500 to-pink-500',
    frontend: 'from-cyan-500 to-blue-500',
    backend: 'from-green-500 to-emerald-500',
    databases: 'from-yellow-500 to-orange-500',
    tools: 'from-blue-500 to-indigo-500',
  };

  const categoryBorderColors = {
    languages: 'hover:border-purple-500',
    frontend: 'hover:border-cyan-500',
    backend: 'hover:border-green-500',
    databases: 'hover:border-yellow-500',
    tools: 'hover:border-blue-500',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          {/* Hero Section */}
          <section className="flex flex-col lg:flex-row items-center gap-12 mb-32">
            {/* Avatar Column */}
            <div className="flex-1 flex justify-center lg:justify-start">
              <div className="relative group">
                {/* Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20 group-hover:opacity-50 transition-all duration-700 group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-all duration-700"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                {/* Avatar Image */}
                <img
                  src={personalInformation?.avatar || "https://res.cloudinary.com/qnf2f4fq/image/upload/v1785390133/ChatGPTImageJul14202608_54_02A_ulbqbb.jpg"}
                  alt={personalInformation?.fullName || "Developer"}
                  className="w-full h-90 rounded-2xl object-cover border-4 border-cyan-500 shadow-2xl shadow-cyan-500/30 relative z-10 group-hover:scale-105 transition-all duration-500 group-hover:shadow-cyan-500/50 group-hover:border-cyan-400"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/256x256/1a1a2e/00d4ff?text=Dev";
                  }}
                />
              </div>
            </div>
            
            {/* Content Column */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              {/* Availability Badge */}
              <div className="inline-block px-5 py-2 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                <span className="text-cyan-400 text-sm font-semibold flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Open to Opportunities
                </span>
              </div>
              
              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-300% hover:from-purple-400 hover:via-blue-400 hover:to-cyan-400 transition-all duration-1000">
                  {personalInformation?.fullName || "Developer"}
                </span>
              </h1>
              
              {/* Title */}
              <h2 className="text-xl md:text-2xl lg:text-3xl text-cyan-400 font-semibold flex items-center gap-3 justify-center lg:justify-start">
                <span className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></span>
                {personalInformation?.title || "Full Stack Developer"}
                <span className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-500"></span>
              </h2>
              
              {/* Description */}
              <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 border-l-4 border-cyan-500 pl-4 md:pl-6 py-2 bg-gradient-to-r from-cyan-500/5 to-transparent rounded-r-lg">
                {professionalSummary || "Passionate developer crafting innovative digital solutions and building amazing web experiences that make a difference."}
              </p>
              
              {/* Social Links */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
                {personalInformation?.email && (
                  <a
                    href={`mailto:${personalInformation.email}`}
                    className="group flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1 font-semibold text-white relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <FaEnvelope className="relative z-10 group-hover:animate-bounce" />
                    <span className="relative z-10">Email</span>
                  </a>
                )}
                
                {personalInformation?.github && (
                  <a
                    href={personalInformation.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl hover:shadow-2xl hover:shadow-gray-700/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1 font-semibold text-white relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <FaGithub className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="relative z-10">GitHub</span>
                  </a>
                )}
                
                {personalInformation?.linkedin && (
                  <a
                    href={personalInformation.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-blue-700 to-blue-600 rounded-xl hover:shadow-2xl hover:shadow-blue-600/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1 font-semibold text-white relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <FaLinkedin className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    <span className="relative z-10">LinkedIn</span>
                  </a>
                )}
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-32">
            <div className="text-center mb-14">
              <div className="inline-block">
                <span className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full text-cyan-400 text-sm font-semibold mb-3">
                  My Expertise
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Technical Skills
                  </span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full mt-3 mx-auto"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(technicalSkills || {}).map(([category, skills]) => (
                <div 
                  key={category} 
                  className={`group bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl p-7 border border-gray-700 ${categoryBorderColors[category] || 'hover:border-cyan-500'} transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 relative overflow-hidden`}
                >
                  {/* Background Glow */}
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Category Header */}
                  <h3 className="text-lg font-semibold text-cyan-400 mb-5 capitalize flex items-center gap-3 relative">
                    <span className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      {categoryIcons[category] || <FaCode className="text-gray-400" />}
                    </span>
                    <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {category}
                    </span>
                    <span className="ml-auto text-xs px-3 py-1.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full text-cyan-400 font-bold border border-cyan-500/20">
                      {Array.isArray(skills) ? skills.length : 0}
                    </span>
                  </h3>
                  
                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2.5 relative">
                    {Array.isArray(skills) && skills.map((skill) => (
                      <span
                        key={skill}
                        className="group/skill flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-700/80 to-gray-600/80 rounded-xl text-sm hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300 hover:scale-105 cursor-default border border-gray-600 hover:border-cyan-400/50 shadow-lg hover:shadow-cyan-500/20"
                      >
                        <span className="group-hover/skill:rotate-12 transition-transform duration-300">
                          {skillIcons[skill] || <FaCode className="text-gray-400 group-hover/skill:text-cyan-400 transition-colors" />}
                        </span>
                        <span className="text-gray-200 group-hover/skill:text-white transition-colors font-medium">
                          {skill}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-32">
            <div className="text-center mb-14">
              <div className="inline-block">
                <span className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full text-cyan-400 text-sm font-semibold mb-3">
                  Career Journey
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Professional Experience
                  </span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full mt-3 mx-auto"></div>
              </div>
            </div>
            
            <div className="space-y-8 relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 hidden md:block"></div>
              
              {Array.isArray(experience) && experience.map((exp, index) => (
                <div 
                  key={index} 
                  className="group bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2 ml-0 md:ml-16 relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-4 top-8 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-4 border-gray-900 hidden md:flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                    <FaBriefcase className="text-white text-xs" />
                  </div>
                  
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-5 gap-4">
                    <div className="space-y-2">
                      <h3 className="text-xl lg:text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        {exp.position || "Position"}
                      </h3>
                      <p className="text-gray-400 flex items-center gap-3 text-lg">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                        {exp.company || "Company"}
                      </p>
                    </div>
                    <span className="text-sm bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 px-5 py-2 rounded-full border border-cyan-500/30 text-cyan-300 font-semibold whitespace-nowrap backdrop-blur-sm">
                      {exp.duration || "Duration"}
                    </span>
                  </div>
                  
                  {/* Responsibilities */}
                  <ul className="space-y-3">
                    {Array.isArray(exp.responsibilities) && exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300 group-hover:text-gray-200 transition-colors">
                        <span className="text-cyan-400 mt-1 font-bold text-lg">▸</span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-32">
            <div className="text-center mb-14">
              <div className="inline-block">
                <span className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full text-cyan-400 text-sm font-semibold mb-3">
                  Portfolio
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Featured Projects
                  </span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full mt-3 mx-auto"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.isArray(projects) && projects.map((project, index) => (
                <div 
                  key={index} 
                  className="group bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl p-7 border border-gray-700 hover:border-cyan-500 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer relative overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Project Icon */}
                  <div className="flex items-center gap-4 mb-5 relative">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <FaProjectDiagram className="text-cyan-400 text-2xl group-hover:text-cyan-300 transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      {project.name || "Project"}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors mb-5 line-clamp-3 leading-relaxed relative">
                    {project.description || "Project description"}
                  </p>
                  
                  {/* Action */}
                  <div className="flex items-center gap-3 text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-0 translate-x-2">
                    <span className="text-sm font-semibold">View Project</span>
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="relative overflow-hidden bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl p-10 md:p-16 text-center border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 group">
            {/* Animated Background */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-700"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-pink-500/5 rounded-full blur-2xl animate-pulse delay-1500"></div>
              <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-indigo-500/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
              
              {/* Floating Particles */}
              <div className="absolute top-10 left-10 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-10 right-10 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-300"></div>
              <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-700"></div>
              <div className="absolute bottom-20 left-20 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-1000"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center gap-3 mb-6">
                <FaStar className="text-cyan-400 animate-pulse text-xl" />
                <FaStar className="text-blue-400 animate-pulse delay-300 text-xl" />
                <FaStar className="text-purple-400 animate-pulse delay-700 text-xl" />
                <FaStar className="text-pink-400 animate-pulse delay-500 text-xl" />
                <FaStar className="text-indigo-400 animate-pulse delay-900 text-xl" />
              </div>
              
              {/* Heading */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Let's Connect!
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                I'm always open to exciting new opportunities, collaborations, and interesting conversations. 
                Let's create something amazing together!
              </p>
              
              {/* CTA Button */}
              <a
                href="/contact"
                className="group/btn inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-2 font-semibold text-white relative overflow-hidden text-lg"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                <FaEnvelope className="relative z-10 group-hover/btn:animate-bounce" />
                <span className="relative z-10">Get in Touch</span>
                <FaArrowRight className="relative z-10 group-hover/btn:translate-x-2 transition-transform duration-300" />
              </a>
            </div>
          </section>
        </div>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-gray-800/50 mt-12">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} {personalInformation?.fullName || "Developer"}. Built with ❤️ using React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
};

export default Home;