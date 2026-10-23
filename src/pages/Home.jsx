import React, { useEffect, useState, useRef, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot, Environment, Float } from '@react-three/drei';
import Tilt from 'react-parallax-tilt';
import {
  SiReact, SiJavascript, SiTypescript, SiRedux,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql,
  SiTailwindcss, SiJsonwebtokens, SiSocketdotio, SiGithub,
} from 'react-icons/si';
import { FaLinkedin, FaCode, FaRocket, FaDatabase } from 'react-icons/fa';
import { avatar, GITHUB_URL, LINKEDIN_URL, resumePdf } from '../assets/index';

/* ---------------- Data ---------------- */
const skills = [
  { name: 'React.js', icon: SiReact, color: '#61DAFB' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Redux', icon: SiRedux, color: '#764ABC' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express.js', icon: SiExpress, color: '#CBD5E1' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'JWT', icon: SiJsonwebtokens, color: '#D63AFF' },
  { name: 'WebSocket', icon: SiSocketdotio, color: '#F8FAFC' },
];

const featured = [
  {
    title: 'Task Management System',
    desc: 'Monday.com / ClickUp–inspired workflow platform with RBAC for Super Admin, Admin, Manager, and Intern roles.',
    tech: 'MERN · Context API · Brevo · Cloudinary',
    icon: FaCode,
  },
  {
    title: 'Restaurant Management System',
    desc: 'Full-stack restaurant app with menu browsing, ordering, Razorpay payments, and Google OAuth.',
    tech: 'MERN · TypeScript · Passport.js · Razorpay',
    icon: FaRocket,
  },
  {
    title: 'LOR Generation System',
    desc: 'Generates Letters of Recommendation with automated email delivery and secure document storage.',
    tech: 'MERN · Brevo API · Cloudinary',
    icon: FaDatabase,
  },
  {
    title: 'Real-Time Collaborative Document System',
    desc: 'Collaborative editor with WebSocket sync for simultaneous multi-user editing.',
    tech: 'MERN · TypeScript · WebSocket',
    icon: FaCode,
  },
];

/* ---------------- R3F 3D Object ---------------- */
function FloatingTorus() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
      <TorusKnot ref={meshRef} args={[1, 0.3, 128, 32]} scale={1.1}>
        <meshStandardMaterial
          color="#6366F1"
          emissive="#06B6D4"
          emissiveIntensity={0.35}
          roughness={0.2}
          metalness={0.8}
        />
      </TorusKnot>
    </Float>
  );
}

/* ---------------- Inline keyframes (extra CSS anims) ---------------- */
const AnimationStyles = () => (
  <style>{`
    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-22px) rotate(8deg); }
    }
    @keyframes floatSlow {
      0%, 100% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(24px, -30px) scale(1.08); }
    }
    @keyframes spinSlow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes spinReverse {
      from { transform: rotate(360deg); }
      to { transform: rotate(0deg); }
    }
    @keyframes pulseGlow {
      0%, 100% { opacity: 0.35; transform: scale(1); }
      50% { opacity: 0.75; transform: scale(1.08); }
    }
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    @keyframes orbit {
      from { transform: rotate(0deg) translateX(140px) rotate(0deg); }
      to { transform: rotate(360deg) translateX(140px) rotate(-360deg); }
    }
    @keyframes orbitReverse {
      from { transform: rotate(360deg) translateX(180px) rotate(-360deg); }
      to { transform: rotate(0deg) translateX(180px) rotate(0deg); }
    }
    .anim-float { animation: float 6s ease-in-out infinite; }
    .anim-float-slow { animation: floatSlow 12s ease-in-out infinite; }
    .anim-spin-slow { animation: spinSlow 22s linear infinite; }
    .anim-spin-reverse { animation: spinReverse 30s linear infinite; }
    .anim-pulse-glow { animation: pulseGlow 5s ease-in-out infinite; }
    .anim-orbit { animation: orbit 12s linear infinite; }
    .anim-orbit-reverse { animation: orbitReverse 16s linear infinite; }
    .shimmer-text {
      background: linear-gradient(90deg, #6366F1, #06B6D4, #6366F1);
      background-size: 200% auto;
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      animation: shimmer 4s linear infinite;
    }
  `}</style>
);

/* ---------------- Framer Motion variants ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ---------------- Home ---------------- */
const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Framer Motion scroll progress for hero heading
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.6]);

  return (
    <div className="relative min-h-screen py-10 bg-[#0B1020] text-[#CBD5E1] overflow-hidden">
      <AnimationStyles />

      {/* ---------- Ambient gradient orbs ---------- */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-full rounded-full bg-[#6366F1] opacity-20 blur-[120px] anim-pulse-glow" />
      <div
        className="pointer-events-none absolute top-1/3 -right-40 h-96 w-full rounded-full bg-[#06B6D4] opacity-20 blur-[120px] anim-pulse-glow"
        style={{ animationDelay: '1.5s' }}
      />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-full rounded-full bg-[#6366F1] opacity-10 blur-[100px]" />

      {/* ---------- Full-page 3D background canvas (R3F) ---------- */}
      <div className="pointer-events-none absolute inset-0 hidden md:block opacity-60">
        <Canvas camera={{ position: [0, 0, 5], fov: 55 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={1.2} color="#6366F1" />
          <pointLight position={[-5, -5, 5]} intensity={1} color="#06B6D4" />
          <Suspense fallback={null}>
            <FloatingTorus />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>

      {/* ---------- Floating CSS shapes (foreground) ---------- */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-28 right-[8%] hidden md:block anim-float">
          <div className="relative h-24 w-full anim-spin-slow">
            <div className="absolute inset-0 border border-[#6366F1]/50 rounded-md" />
            <div className="absolute inset-0 border border-[#06B6D4]/50 rounded-md" style={{ transform: 'rotate(45deg)' }} />
            <div className="absolute inset-0 border border-[#06B6D4]/30 rounded-md" style={{ transform: 'rotate(90deg)' }} />
          </div>
        </div>

        <div className="absolute top-1/2 left-[4%] hidden lg:block anim-float-slow">
          <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-[#6366F1] to-[#06B6D4] opacity-80 shadow-2xl shadow-[#6366F1]/40">
            <div className="absolute top-2 left-3 h-4 w-4 rounded-full bg-white/60 blur-sm" />
          </div>
        </div>

        <div className="absolute bottom-24 right-[10%] hidden md:block anim-float" style={{ animationDelay: '2s' }}>
          <div className="relative h-28 w-28 rounded-full border-[3px] border-white/[0.15] anim-spin-reverse">
            <div className="absolute inset-2 rounded-full border-[2px] border-[#06B6D4]/40" />
            <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#06B6D4] shadow-lg shadow-[#06B6D4]/60" />
          </div>
        </div>

        <span className="absolute top-1/3 left-1/4 h-2 w-2 rounded-full bg-[#6366F1] shadow-lg shadow-[#6366F1]/60 anim-float" />
        <span className="absolute top-2/3 right-1/3 h-1.5 w-1.5 rounded-full bg-[#06B6D4] shadow-lg shadow-[#06B6D4]/60 anim-float" style={{ animationDelay: '1s' }} />
        <span className="absolute top-1/4 left-2/3 h-2 w-2 rounded-full bg-[#06B6D4] shadow-lg shadow-[#06B6D4]/60 anim-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10">
        {/* ---------- Hero ---------- */}
        <section className="max-w-6xl mx-auto px-6 pt-24 pb-16 flex flex-col-reverse md:flex-row items-center gap-12">
          <motion.div
            className="flex-1"
            style={{ opacity: heroOpacity }}
          >
            <motion.p
              className="text-[#06B6D4] font-medium mb-2 tracking-wide"
              variants={fadeUp} initial="hidden" animate="visible" custom={0}
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 text-[#F8FAFC]"
              variants={fadeUp} initial="hidden" animate="visible" custom={1}
            >
              Laxman Shinde
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl mb-6 font-semibold shimmer-text"
              variants={fadeUp} initial="hidden" animate="visible" custom={2}
            >
              MERN Stack Developer
            </motion.h2>
            <motion.p
              className="leading-relaxed mb-6 max-w-xl"
              variants={fadeUp} initial="hidden" animate="visible" custom={3}
            >
              I build responsive, full-stack web applications using React.js,
              Node.js, Express, and MongoDB. Currently interning at ATHENURA,
              working on secure document handling, API integrations, and
              real-time collaborative features.
            </motion.p>

            {/* Social icons */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              variants={fadeUp} initial="hidden" animate="visible" custom={4}
            >
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center h-11 w-11 rounded-xl bg-white/[0.07] border border-white/[0.19] backdrop-blur-md text-[#F8FAFC] hover:text-[#06B6D4] hover:border-[#06B6D4]/60 hover:scale-110 transition"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center justify-center h-11 w-11 rounded-xl bg-white/[0.07] border border-white/[0.19] backdrop-blur-md text-[#F8FAFC] hover:text-[#06B6D4] hover:border-[#06B6D4]/60 hover:scale-110 transition"
              >
                <SiGithub size={20} />
              </a>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={fadeUp} initial="hidden" animate="visible" custom={5}
            >
              <a
                href={resumePdf}
                download
                className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#06B6D4] shadow-lg shadow-[#6366F1]/30 hover:shadow-[#06B6D4]/40 hover:scale-[1.03] transition"
              >
                Download Resume
              </a>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl font-semibold text-[#F8FAFC] bg-white/[0.07] border border-white/[0.19] backdrop-blur-md hover:bg-white/[0.12] hover:border-white/[0.3] hover:scale-[1.03] transition"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          {/* ---------- Avatar with Tilt + 3D rotating rings + orbiting dots ---------- */}
          <motion.div
            className="flex-shrink-0 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <Tilt
              glareEnable
              glareMaxOpacity={0.25}
              glareColor="#06B6D4"
              glarePosition="all"
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              scale={1.02}
              transitionSpeed={1500}
              className="!rounded-full"
            >
              <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">
                <div className="absolute inset-6 rounded-full bg-gradient-to-br from-[#6366F1] to-[#06B6D4] blur-3xl opacity-40 anim-pulse-glow" />
                <div className="absolute inset-0 rounded-full border border-[#6366F1]/40 anim-spin-slow" />
                <div className="absolute inset-2 rounded-full border border-dashed border-[#06B6D4]/50 anim-spin-reverse" />
                <div className="absolute inset-6 rounded-full border border-white/[0.12]" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="absolute h-3 w-3 rounded-full bg-[#06B6D4] shadow-lg shadow-[#06B6D4]/80 anim-orbit" />
                  <span className="absolute h-2.5 w-2.5 rounded-full bg-[#6366F1] shadow-lg shadow-[#6366F1]/80 anim-orbit-reverse" />
                  <span className="absolute h-2 w-2 rounded-full bg-[#F8FAFC] shadow-lg shadow-white/40 anim-orbit" style={{ animationDelay: '4s' }} />
                </div>

                <div
                  className="relative h-48 w-48 md:h-56 md:w-56 rounded-full overflow-hidden border border-white/[0.19] backdrop-blur-md shadow-2xl"
                  style={{ transform: `translateY(${scrollY * 0.05}px)` }}
                >
                  <img src={avatar} alt="Laxman Shinde" className="h-full w-full object-cover" />
                </div>

                <div className="absolute -top-2 -right-4 hidden md:block anim-float">
                  <div className="rounded-xl bg-white/[0.07] border border-white/[0.19] backdrop-blur-xl px-3 py-2 shadow-xl shadow-black/20">
                    <span className="text-xs text-[#06B6D4] font-semibold">MERN</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-6 hidden md:block anim-float" style={{ animationDelay: '1.5s' }}>
                  <div className="rounded-xl bg-white/[0.07] border border-white/[0.19] backdrop-blur-xl px-3 py-2 shadow-xl shadow-black/20">
                    <span className="text-xs text-[#6366F1] font-semibold">Full-Stack</span>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        </section>

        {/* ---------- Skills (Framer stagger) ---------- */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <motion.div
            className="rounded-2xl bg-white/[0.07] border border-white/[0.19] backdrop-blur-xl p-8 shadow-xl shadow-black/20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-bold mb-6 text-[#F8FAFC]">Core Skills</h3>
            <motion.div
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    variants={fadeUp}
                    className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-white/[0.05] border border-white/[0.12] backdrop-blur-sm hover:border-[#06B6D4]/60 hover:bg-white/[0.08] hover:-translate-y-1 transition"
                  >
                    <Icon
                      size={28}
                      className="transition-transform group-hover:scale-110 group-hover:rotate-6"
                      style={{ color: skill.color }}
                    />
                    <span className="text-xs text-center text-[#CBD5E1] group-hover:text-[#F8FAFC] transition">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </section>

        {/* ---------- Featured Projects ---------- */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <h3 className="text-xl font-bold mb-6 text-[#F8FAFC]">Featured Projects</h3>
          <motion.div
            className="grid gap-6 md:grid-cols-2"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {featured.map((p) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.title} variants={fadeUp}>
                  <Tilt
                    glareEnable
                    glareMaxOpacity={0.15}
                    glareColor="#6366F1"
                    glarePosition="all"
                    tiltMaxAngleX={6}
                    tiltMaxAngleY={6}
                    scale={1.01}
                    transitionSpeed={1200}
                    className="!rounded-2xl"
                  >
                    <div className="group relative rounded-2xl bg-white/[0.07] border border-white/[0.19] backdrop-blur-xl p-6 shadow-xl shadow-black/20 hover:border-[#6366F1]/60 transition h-full">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6366F1]/0 to-[#06B6D4]/0 group-hover:from-[#6366F1]/10 group-hover:to-[#06B6D4]/10 transition" />
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-[#6366F1]/30 to-[#06B6D4]/30 border border-white/[0.19] text-[#F8FAFC] group-hover:scale-110 group-hover:rotate-6 transition">
                            <Icon size={18} />
                          </span>
                          <h4 className="text-lg font-semibold text-[#F8FAFC]">{p.title}</h4>
                        </div>
                        <p className="text-sm mb-3">{p.desc}</p>
                        <p className="text-xs text-[#06B6D4]">{p.tech}</p>
                      </div>
                    </div>
                  </Tilt>
                </motion.div>
              );
            })}
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Home;