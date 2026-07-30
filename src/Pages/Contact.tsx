import React, { useState, ChangeEvent, FormEvent } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import data from '../assets/portfolioData'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const Contact: React.FC = () => {
  const { personalInformation } = data
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact Me</h1>
        <p className="text-lg opacity-90">Have a question or want to work together? Let's connect!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contact Info */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Get in Touch</h2>
          <p className="text-gray-600 mb-6">I'm always interested in hearing about new opportunities, collaborations, or just having a chat!</p>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <FaEnvelope className="text-2xl text-indigo-600" />
              <div>
                <h4 className="text-sm text-gray-500">Email</h4>
                <a href={`mailto:${personalInformation.email}`} className="text-indigo-600 hover:underline">
                  {personalInformation.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <FaPhone className="text-2xl text-indigo-600" />
              <div>
                <h4 className="text-sm text-gray-500">Phone</h4>
                <a href={`tel:${personalInformation.phone}`} className="text-indigo-600 hover:underline">
                  {personalInformation.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <FaMapMarkerAlt className="text-2xl text-indigo-600" />
              <div>
                <h4 className="text-sm text-gray-500">Location</h4>
                <p className="text-gray-700">India</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-gray-700 font-semibold mb-3">Connect with me</h4>
            <div className="flex gap-4">
              <a href={`https://${personalInformation.github}`} target="_blank" rel="noopener noreferrer" 
                className="w-12 h-12 bg-gray-100 hover:bg-indigo-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center text-2xl transition-all">
                <FaGithub />
              </a>
              <a href={`https://${personalInformation.linkedin}`} target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 hover:bg-indigo-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center text-2xl transition-all">
                <FaLinkedin />
              </a>
              <a href={`mailto:${personalInformation.email}`}
                className="w-12 h-12 bg-gray-100 hover:bg-indigo-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center text-2xl transition-all">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter subject"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                placeholder="Your message here..."
              />
            </div>

            <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all">
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact