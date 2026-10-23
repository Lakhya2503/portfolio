import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaHeart } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';
import { GITHUB_URL, LINKEDIN_URL } from '../assets';


const Footer = () => {
  return (
    <footer className="relative mt-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6366F1]/40 to-transparent" />
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="rounded-2xl bg-white/[0.05] border border-white/[0.12] backdrop-blur-xl p-6 sm:p-8 shadow-xl shadow-black/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <div className="text-center md:text-left">
              <Link to="/" className="inline-flex items-center gap-2 mb-2">
                <span className="flex items-center justify-center h-9 w-9 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#06B6D4] text-white font-bold text-sm shadow-lg shadow-[#6366F1]/40">
                  LS
                </span>
                <span className="text-[#F8FAFC] font-semibold">
                  Laxman<span className="text-[#06B6D4]">.</span>
                </span>
              </Link>
              <p className="text-xs text-[#CBD5E1]/70 max-w-xs">
                MERN Stack Developer building fast, secure, and delightful web experiences.
              </p>
            </div>

            {/* Links (only 3) */}
            <ul className="flex items-center gap-5 text-sm">
              <li><Link to="/" className="text-[#CBD5E1] hover:text-[#06B6D4] transition">Home</Link></li>
              <li><Link to="/about" className="text-[#CBD5E1] hover:text-[#06B6D4] transition">About</Link></li>
              <li><Link to="/contact" className="text-[#CBD5E1] hover:text-[#06B6D4] transition">Contact</Link></li>
            </ul>

            {/* Socials */}
            <div className="flex items-center gap-2">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="flex items-center justify-center h-10 w-10 rounded-xl bg-white/[0.07] border border-white/[0.19] text-[#F8FAFC] hover:text-[#06B6D4] hover:border-[#06B6D4]/60 hover:scale-105 transition">
                <FaLinkedin size={18} />
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="flex items-center justify-center h-10 w-10 rounded-xl bg-white/[0.07] border border-white/[0.19] text-[#F8FAFC] hover:text-[#06B6D4] hover:border-[#06B6D4]/60 hover:scale-105 transition">
                <SiGithub size={18} />
              </a>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#CBD5E1]/70">
            <p>© {new Date().getFullYear()} Laxman Shinde. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Crafted with <FaHeart className="text-[#06B6D4]" size={10} /> using MERN &amp; React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;