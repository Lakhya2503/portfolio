import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: 'What services do you offer?',
    a: 'I build full-stack web applications using the MERN stack — from responsive React frontends to Node.js/Express APIs with MongoDB or PostgreSQL databases. I also handle authentication (JWT, OAuth), payments (Razorpay), email (Brevo), and media storage (Cloudinary).',
  },
  {
    q: 'How can I get in touch with you?',
    a: 'You can reach me via the Contact page, email me at 25032002shindelaxman@gmail.com, or call +91 95797 31172. I usually respond within 24 hours.',
  },
  {
    q: 'Are you available for freelance work or full-time roles?',
    a: 'Yes — I\'m open to freelance projects, internships, and full-time MERN stack developer roles. Feel free to share your requirements through the Contact page.',
  },
  {
    q: 'How do I download your resume?',
    a: 'Click the "Download Resume" button on the Home or About page. It will download the latest PDF version directly.',
  },
  {
    q: 'Where can I see your projects?',
    a: 'The Home page highlights featured projects, and you can find more of my work and code on my GitHub profile linked in the Contact page.',
  },
  {
    q: 'What is your typical response time?',
    a: 'I aim to reply within 24 hours on weekdays. For urgent matters, calling or messaging on LinkedIn is the fastest way to reach me.',
  },
];

const Help = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Help & FAQ</h1>
        <p className="text-slate-400 mb-10">
          Answers to common questions about my work, availability, and how to
          get in touch.
        </p>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <div
              key={item.q}
              className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center px-5 py-4 text-left hover:bg-slate-750 transition"
              >
                <span className="font-medium">{item.q}</span>
                <span className="text-emerald-400 text-xl leading-none">
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 text-slate-400 text-sm leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-slate-800 rounded-xl border border-slate-700 text-center">
          <p className="mb-4 text-slate-300">Still have a question?</p>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Help;