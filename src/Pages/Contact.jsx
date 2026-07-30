import React from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaGithub, 
  FaLinkedin,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import data from '../../portfolio';

const Contact = () => {
  const { personalInformation } = data;

  const contactInfo = [
    { icon: <FaEnvelope />, label: 'Email', value: personalInformation.email, link: `mailto:${personalInformation.email}` },
    { icon: <FaPhone />, label: 'Phone', value: personalInformation.phone, link: `tel:${personalInformation.phone}` },
    { icon: <FaGithub />, label: 'GitHub', value: 'GitHub Profile', link: personalInformation.github },
    { icon: <FaLinkedin />, label: 'LinkedIn', value: 'LinkedIn Profile', link: personalInformation.linkedin },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Get In Touch
        </span>
      </h1>

      <div className="max-w-3xl mx-auto">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 text-center">Contact Information</h2>
          <p className="text-gray-300 mb-8 text-center">
            I'm always interested in hearing about new opportunities, 
            collaboration ideas, or just having a chat. Feel free to reach out!
          </p>

          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10 group"
              >
                <div className="text-2xl text-cyan-400 group-hover:text-blue-400 transition-colors">
                  {info.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-400">{info.label}</p>
                  <p className="text-white font-medium">{info.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
            <div className="flex items-center justify-center gap-3">
              <FaMapMarkerAlt className="text-2xl text-cyan-400" />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white font-medium">Available for Remote Work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;