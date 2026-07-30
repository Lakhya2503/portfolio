import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import data from '../../portfolio';

const Footer = () => {
  const { personalInformation } = data;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/95 border-t border-gray-800 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} {personalInformation.fullName}. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>

          <div className="flex gap-4">
            <a
              href={personalInformation.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href={personalInformation.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href={`mailto:${personalInformation.email}`}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <FaEnvelope className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;