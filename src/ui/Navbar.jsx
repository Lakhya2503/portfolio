import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaFileDownload } from 'react-icons/fa';

/* Each link gets its own accent color */
const links = [
  { to: '/', label: 'Home', color: '#6366F1', glow: 'rgba(99,102,241,0.55)' },     // indigo
  { to: '/about', label: 'About', color: '#06B6D4', glow: 'rgba(6,182,212,0.55)' }, // cyan
  { to: '/contact', label: 'Contact', color: '#EC4899', glow: 'rgba(236,72,153,0.55)' }, // pink
];

/* ── Reusable animated button with shine sweep + magnetic pull + color cycling ── */
const AnimatedCTA = ({ href, children, download, onNavigate, className = '' }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

  const handleMove = (e) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 8;
    const y = (e.clientY - rect.top - rect.height / 2) / 8;
    setPos({ x, y });
  };

  const handleLeave = () => setPos({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      href={href}
      download={download}
      onClick={onNavigate}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.4 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={`relative overflow-hidden group inline-flex items-center gap-2 px-5 py-3 text-base font-semibold rounded-xl text-white shadow-lg transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] ${className}`}
      style={{ boxShadow: '0 10px 30px -5px rgba(99,102,241,0.5)' }}
    >
      {/* Animated cycling gradient background */}
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(120deg, #6366F1, #06B6D4, #EC4899, #F59E0B, #6366F1)',
          backgroundSize: '300% 300%',
        }}
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />

      {/* Shine sweep */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/50 to-transparent"
      />

      {/* Pulsing multi-color glow ring */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-xl blur-xl -z-20 opacity-0 group-hover:opacity-60 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(120deg, #6366F1, #06B6D4, #EC4899)',
        }}
      />

      <motion.span
        aria-hidden="true"
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FaFileDownload size={14} />
      </motion.span>
      <span className="relative">{children}</span>
    </motion.a>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastScrollY.current && y > 120);
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -120 : 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div
        className={`w-full mx-auto transition-all duration-300 px-4 sm:px-6 ${
          scrolled ? 'pt-3' : 'pt-5'
        }`}
      >
        <nav
          aria-label="Main navigation"
          className={`flex items-center justify-between rounded-2xl px-5 sm:px-7 py-4 border backdrop-blur-xl transition-all duration-300 ${
            scrolled
              ? 'bg-white/[0.09] border-white/[0.19] shadow-xl shadow-black/30'
              : 'bg-white/[0.05] border-white/[0.12]'
          }`}
        >
          {/* Logo — animated + color-shifting glow */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <Link
              to="/"
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] rounded-xl"
              aria-label="Laxman — home"
            >
              <motion.span
                className="relative flex items-center justify-center h-11 w-11 rounded-xl text-white font-bold text-base shadow-lg overflow-hidden"
                whileHover={{ rotate: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                {/* Cycling gradient behind badge */}
                <motion.span
                  className="absolute inset-0 -z-10"
                  style={{
                    background:
                      'linear-gradient(135deg, #6366F1, #06B6D4, #EC4899, #F59E0B, #6366F1)',
                    backgroundSize: '300% 300%',
                  }}
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                />
                <span className="relative">LS</span>
                <motion.span
                  className="absolute inset-0 rounded-xl blur-md -z-20"
                  style={{ background: 'linear-gradient(135deg, #6366F1, #06B6D4, #EC4899)' }}
                  animate={{ opacity: [0.35, 0.7, 0.35] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.span>
              <span className="text-[#F8FAFC] font-semibold text-lg tracking-wide hidden sm:block">
                Laxman
                <motion.span
                  className="inline-block"
                  animate={{ color: ['#06B6D4', '#EC4899', '#F59E0B', '#06B6D4'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                >
                  .
                </motion.span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop links — each with its own color */}
          <ul className="hidden md:flex items-center gap-2">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className="relative block px-6 py-3 text-base font-semibold rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]"
                >
                  {({ isActive }) => (
                    <>
                      {/* Active pill — colored per link */}
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-xl border -z-10"
                          style={{
                            background: `${l.color}22`,
                            borderColor: `${l.color}66`,
                            boxShadow: `0 0 24px -4px ${l.glow}`,
                          }}
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      {/* Hover background tint */}
                      {!isActive && (
                        <motion.span
                          aria-hidden="true"
                          className="absolute inset-0 rounded-xl -z-10 opacity-0"
                          style={{ background: `${l.color}18` }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                      {/* Underline grow */}
                      {!isActive && (
                        <span
                          aria-hidden="true"
                          className="absolute bottom-1.5 left-1/2 h-[2px] w-0 rounded-full -translate-x-1/2 transition-all duration-300 group-hover:w-[60%]"
                          style={{ background: `linear-gradient(90deg, ${l.color}, ${l.color}88)` }}
                        />
                      )}
                      <motion.span
                        className="relative inline-block"
                        style={{ color: isActive ? '#F8FAFC' : '#CBD5E1' }}
                        whileHover={{ y: -1, color: l.color }}
                        transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                      >
                        {l.label}
                      </motion.span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-2.5">
            <AnimatedCTA
              href="/resume.pdf"
              download
              className="hidden sm:inline-flex"
            >
              Resume
            </AnimatedCTA>

            {/* Colorful hamburger toggle */}
            <motion.button
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              className="md:hidden relative flex items-center justify-center h-12 w-12 rounded-xl text-[#F8FAFC] overflow-hidden border border-white/[0.19] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]"
            >
              <motion.span
                className="absolute inset-0 -z-10"
                style={{
                  background:
                    'linear-gradient(135deg, #6366F1, #06B6D4, #EC4899, #F59E0B, #6366F1)',
                  backgroundSize: '300% 300%',
                }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              />
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <HiX size={24} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <HiMenuAlt3 size={24} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="md:hidden mt-2 rounded-2xl bg-white/[0.09] border border-white/[0.19] backdrop-blur-xl p-3 shadow-xl shadow-black/30"
            >
              <ul className="flex flex-col gap-1.5">
                {links.map((l, i) => (
                  <motion.li
                    key={l.to}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ delay: 0.04 * i, duration: 0.22 }}
                  >
                    <NavLink
                      to={l.to}
                      end={l.to === '/'}
                      onClick={() => setOpen(false)}
                      className="block px-5 py-3.5 rounded-xl text-base font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] border"
                      style={({ isActive }) => ({
                        background: isActive ? `${l.color}22` : 'transparent',
                        borderColor: isActive ? `${l.color}66` : 'transparent',
                        color: isActive ? '#F8FAFC' : '#CBD5E1',
                        boxShadow: isActive ? `0 0 24px -6px ${l.glow}` : 'none',
                      })}
                    >
                      {l.label}
                    </NavLink>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ delay: 0.04 * links.length, duration: 0.22 }}
                >
                  <AnimatedCTA
                    href="/resume.pdf"
                    download
                    onNavigate={() => setOpen(false)}
                    className="w-full justify-center"
                  >
                    Download Resume
                  </AnimatedCTA>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;