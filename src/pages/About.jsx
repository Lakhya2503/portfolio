import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot, Float } from '@react-three/drei';
import { avatar, GITHUB_URL, LINKEDIN_URL, resumePdf } from '../assets/index';
import {
  SiReact, SiJavascript, SiTypescript, SiRedux, SiHtml5,
  SiTailwindcss, SiShadcnui,
  SiNodedotjs, SiExpress, SiSocketdotio,
  SiMongodb, SiRedis, SiPostgresql,
  SiPassport, SiGoogle, SiJsonwebtokens,
  SiRazorpay, SiBrevo, SiCloudinary,
  SiGit, SiGithub,
} from 'react-icons/si';
import { FaLinkedin, FaGraduationCap, FaBriefcase, FaCode, FaRocket, FaHeart, FaArrowRight, FaCss3 } from 'react-icons/fa';
import { SpiralScene } from '../ui/Spiral';



/* ---------------- Inline 3D Light Torus ---------------- */
function LightTorus() {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.18;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.25;
    }
  });
  return (
    <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1}>
      <TorusKnot ref={meshRef} args={[1, 0.28, 128, 24]} scale={1.05}>
        <meshStandardMaterial
          color="#c7d2fe"
          emissive="#a5f3fc"
          emissiveIntensity={0.55}
          roughness={0.35}
          metalness={0.6}
          transparent
          opacity={0.85}
        />
      </TorusKnot>
    </Float>
  );
}


const skillGroups = [
  { label: 'Frontend', color: '#06B6D4', items: [
    { name: 'React.js', icon: SiReact, color: '#61DAFB' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Redux', icon: SiRedux, color: '#764ABC' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3, color: '#1572B6' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'shadcn/ui', icon: SiShadcnui, color: '#F8FAFC' },
  ]},
  { label: 'Backend', color: '#6366F1', items: [
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Express.js', icon: SiExpress, color: '#CBD5E1' },
    { name: 'WebSocket', icon: SiSocketdotio, color: '#F8FAFC' },
  ]},
  { label: 'Database', color: '#47A248', items: [
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  ]},
  { label: 'Auth & Security', color: '#D63AFF', items: [
    { name: 'Passport.js', icon: SiPassport, color: '#34E27A' },
    { name: 'Google OAuth', icon: SiGoogle, color: '#4285F4' },
    { name: 'JWT', icon: SiJsonwebtokens, color: '#D63AFF' },
  ]},
  { label: 'Integrations', color: '#06B6D4', items: [
    { name: 'Razorpay', icon: SiRazorpay, color: '#0C2451' },
    { name: 'Brevo', icon: SiBrevo, color: '#0B996E' },
    { name: 'Cloudinary', icon: SiCloudinary, color: '#3448C5' },
  ]},
  { label: 'Tools', color: '#F8FAFC', items: [
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', icon: SiGithub, color: '#F8FAFC' },
  ]},
];

const experience = [
  { role: 'MERN Stack Intern', company: 'ATHENURA', period: 'Feb 2026 – Present', color: '#6366F1', bullets: [
    'Develop responsive interfaces using React.js, JavaScript, and Tailwind CSS.',
    'Collaborate with design and backend teams on full-stack features.',
    'Integrate Brevo API and Cloudinary; implement cryptography for secure document handling.',
  ]},
  { role: 'MERN Stack Intern', company: 'Unified Mentor', period: 'May 2025 – Jun 2025', color: '#06B6D4', bullets: [
    'Developed and enhanced website interfaces with HTML, CSS, and JavaScript.',
    'Implemented maintainable, responsive, and usable frontend functionality.',
  ]},
];

const milestones = [
  { value: '4+', label: 'Projects Built', icon: FaCode, color: '#6366F1' },
  { value: '2', label: 'Internships', icon: FaBriefcase, color: '#06B6D4' },
  { value: '15+', label: 'Technologies', icon: FaRocket, color: '#6366F1' },
  { value: '7.9', label: 'MCA CGPA', icon: FaGraduationCap, color: '#06B6D4' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.08, ease: 'easeOut' } }),
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const AnimationStyles = () => (
  <style>{`
    @keyframes float { 0%,100%{transform:translateY(0) rotate(0)} 50%{transform:translateY(-18px) rotate(6deg)} }
    @keyframes pulseGlow { 0%,100%{opacity:.35;transform:scale(1)} 50%{opacity:.7;transform:scale(1.06)} }
    @keyframes spinSlow { from{transform:rotate(0)} to{transform:rotate(360deg)} }
    .anim-float{animation:float 6s ease-in-out infinite}
    .anim-pulse-glow{animation:pulseGlow 5s ease-in-out infinite}
    .anim-spin-slow{animation:spinSlow 22s linear infinite}
  `}</style>
);

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative min-h-screen py-20 bg-[#0B1020] text-[#CBD5E1] overflow-hidden">
      <AnimationStyles />

      {/* Light 3D Torus (subtle, top-right) */}
      <div className="pointer-events-none absolute top-10 right-0 w-[380px] h-[380px] hidden lg:block opacity-70">
        <SpiralScene />
      </div>

      {/* Orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#6366F1] opacity-20 blur-[120px] anim-pulse-glow" />
      <div className="pointer-events-none absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-[#06B6D4] opacity-20 blur-[120px] anim-pulse-glow" style={{ animationDelay: '1.5s' }} />

      {/* Floating shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-[8%] hidden md:block anim-float">
          <div className="relative h-20 w-20 anim-spin-slow">
            <div className="absolute inset-0 border border-[#6366F1]/50 rounded-md" />
            <div className="absolute inset-0 border border-[#06B6D4]/50 rounded-md" style={{ transform: 'rotate(45deg)' }} />
          </div>
        </div>
        <div className="absolute bottom-1/3 left-[5%] hidden lg:block anim-float" style={{ animationDelay: '2s' }}>
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#6366F1] to-[#06B6D4] opacity-70 blur-sm shadow-2xl shadow-[#6366F1]/40" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        {/* HERO HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-white/[0.07] border border-white/[0.19] backdrop-blur-xl p-8 sm:p-10 mb-10 shadow-xl shadow-black/20"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Tilt glareEnable glareMaxOpacity={0.25} glareColor="#06B6D4" tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} className="!rounded-full">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6366F1] to-[#06B6D4] blur-2xl opacity-50 anim-pulse-glow" />
                <div className="absolute -inset-2 rounded-full border border-dashed border-[#06B6D4]/40 anim-spin-slow" />
                <img
                  src={avatar}
                  alt="Laxman Shinde"
                  className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-white/[0.19]"
                  style={{ transform: `translateY(${scrollY * 0.03}px)` }}
                />
              </div>
            </Tilt>

            <div className="text-center md:text-left flex-1">
              <motion.p className="text-[#06B6D4] text-sm font-medium mb-1 tracking-widest uppercase" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
                Get to know me
              </motion.p>
              <motion.h1 className="text-3xl md:text-5xl font-bold text-[#F8FAFC] mb-2" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
                About Laxman
              </motion.h1>
              <motion.p className="text-lg bg-gradient-to-r from-[#6366F1] to-[#06B6D4] bg-clip-text text-transparent font-semibold mb-4" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
                MERN Stack Developer · Remote
              </motion.p>
              <motion.div className="flex items-center justify-center md:justify-start gap-3" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="flex items-center justify-center h-11 w-11 rounded-xl bg-white/[0.07] border border-white/[0.19] text-[#F8FAFC] hover:text-[#06B6D4] hover:border-[#06B6D4]/60 hover:scale-110 transition">
                  <FaLinkedin size={18} />
                </a>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                  className="flex items-center justify-center h-11 w-11 rounded-xl bg-white/[0.07] border border-white/[0.19] text-[#F8FAFC] hover:text-[#06B6D4] hover:border-[#06B6D4]/60 hover:scale-110 transition">
                  <SiGithub size={18} />
                </a>
                <a href={resumePdf} download
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#06B6D4] shadow-lg shadow-[#6366F1]/30 hover:shadow-[#06B6D4]/40 hover:scale-[1.03] transition">
                  Resume
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* MILESTONES */}
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          {milestones.map((m) => {
            const Icon = m.icon;
            return (
              <motion.div key={m.label} variants={fadeUp}
                className="rounded-2xl bg-white/[0.07] border border-white/[0.19] backdrop-blur-xl p-5 text-center shadow-lg shadow-black/20 hover:border-[#06B6D4]/50 hover:-translate-y-1 transition">
                <div className="flex items-center justify-center h-10 w-10 rounded-xl mx-auto mb-2" style={{ background: `linear-gradient(135deg, ${m.color}30, #06B6D430)`, border: '1px solid rgba(255,255,255,0.12)' }}>
                  <Icon size={18} style={{ color: m.color }} />
                </div>
                <p className="text-2xl font-bold bg-gradient-to-r from-[#6366F1] to-[#06B6D4] bg-clip-text text-transparent">{m.value}</p>
                <p className="text-xs text-[#CBD5E1]/80 mt-0.5">{m.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* BIO */}
        <motion.section
          className="rounded-3xl bg-white/[0.07] border border-white/[0.19] backdrop-blur-xl p-8 mb-8 shadow-xl shadow-black/20"
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="flex items-center justify-center h-9 w-9 rounded-xl bg-gradient-to-br from-[#6366F1]/30 to-[#06B6D4]/30 border border-white/[0.19] text-[#06B6D4]"><FaHeart size={14} /></span>
            <h2 className="text-xl font-bold text-[#F8FAFC]">My Story</h2>
          </div>
          <p className="leading-relaxed mb-4">
            I'm <span className="text-[#F8FAFC] font-semibold">Laxman Shinde</span>, a MERN Stack Developer passionate about building products that solve real problems. My journey started with curiosity about how websites work, and it has grown into a full-stack skill set covering everything from sleek React UIs to secure Node.js APIs.
          </p>
          <p className="leading-relaxed mb-4">
            Currently pursuing an <span className="text-[#06B6D4] font-medium">MCA at Jain University (Online)</span> and interning at <span className="text-[#06B6D4] font-medium">ATHENURA</span>, I contribute to responsive interfaces, full-stack architecture, API integrations, and cryptography-based secure document handling.
          </p>
          <p className="leading-relaxed">
            I love turning ideas into working software — whether it's a task manager, restaurant platform, or real-time collaborative editor. Clean code, thoughtful UX, and continuous learning are what I optimize for.
          </p>
        </motion.section>

        {/* EXPERIENCE */}
        <motion.section
          className="rounded-3xl bg-white/[0.07] border border-white/[0.19] backdrop-blur-xl p-8 mb-8 shadow-xl shadow-black/20"
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center h-9 w-9 rounded-xl bg-gradient-to-br from-[#6366F1]/30 to-[#06B6D4]/30 border border-white/[0.19] text-[#6366F1]"><FaBriefcase size={14} /></span>
            <h2 className="text-xl font-bold text-[#F8FAFC]">Experience</h2>
          </div>
          <div className="space-y-5">
            {experience.map((exp) => (
              <div key={exp.company} className="relative pl-5" style={{ borderLeft: `2px solid ${exp.color}60` }}>
                <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full" style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}80` }} />
                <div className="flex justify-between flex-wrap gap-2 mb-1">
                  <h3 className="font-semibold text-[#F8FAFC]">{exp.role} — {exp.company}</h3>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-md" style={{ background: `${exp.color}20`, color: exp.color, border: `1px solid ${exp.color}40` }}>{exp.period}</span>
                </div>
                <ul className="list-disc list-inside text-sm space-y-1 text-[#CBD5E1]">
                  {exp.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* EDUCATION */}
        <motion.section
          className="rounded-3xl bg-white/[0.07] border border-white/[0.19] backdrop-blur-xl p-8 mb-8 shadow-xl shadow-black/20"
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="flex items-center justify-center h-9 w-9 rounded-xl bg-gradient-to-br from-[#6366F1]/30 to-[#06B6D4]/30 border border-white/[0.19] text-[#06B6D4]"><FaGraduationCap size={16} /></span>
            <h2 className="text-xl font-bold text-[#F8FAFC]">Education</h2>
          </div>
          <div className="flex justify-between flex-wrap gap-2 mb-1">
            <h3 className="font-semibold text-[#F8FAFC]">MCA — Jain University (Online)</h3>
            <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-[#06B6D4]/20 text-[#06B6D4] border border-[#06B6D4]/40">Sep 2022 – Mar 2025</span>
          </div>
          <p className="text-sm mb-2"><span className="text-[#F8FAFC] font-medium">CGPA:</span> 7.933</p>
          <p className="text-sm">Coursework: Advanced Web Programming, Design &amp; Analysis of Algorithms</p>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          className="rounded-3xl bg-white/[0.07] border border-white/[0.19] backdrop-blur-xl p-8 mb-10 shadow-xl shadow-black/20"
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}
        >
          <h2 className="text-xl font-bold text-[#F8FAFC] mb-6">Technical Skills</h2>
          <div className="space-y-6">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="text-sm font-semibold mb-3" style={{ color: group.color }}>{group.label}</p>
                <motion.div className="flex flex-wrap gap-3" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.div key={item.name} variants={fadeUp}
                        className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.05] border border-white/[0.12] hover:border-[#06B6D4]/60 hover:bg-white/[0.08] hover:-translate-y-0.5 transition">
                        <Icon size={18} style={{ color: item.color }} className="transition-transform group-hover:scale-110 group-hover:rotate-6" />
                        <span className="text-xs text-[#CBD5E1] group-hover:text-[#F8FAFC] transition">{item.name}</span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          className="rounded-3xl bg-gradient-to-br from-[#6366F1]/15 to-[#06B6D4]/15 border border-white/[0.19] backdrop-blur-xl p-8 text-center shadow-xl shadow-black/20"
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">Let's build something together</h3>
          <p className="text-sm mb-5">Open to freelance, internships, and full-time roles.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#06B6D4] shadow-lg shadow-[#6366F1]/30 hover:shadow-[#06B6D4]/40 hover:scale-[1.03] transition">
            Get in touch <FaArrowRight size={12} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;