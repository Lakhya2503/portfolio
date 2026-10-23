import React, { useState, useRef, Suspense } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Canvas, useFrame } from "@react-three/fiber";
import { TorusKnot, Float } from "@react-three/drei";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { SpiralScene } from "../ui/Spiral";
import { GITHUB_URL, LINKEDIN_URL } from "../assets";

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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: "easeOut" },
  }),
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

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

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.19] backdrop-blur-sm text-[#F8FAFC] placeholder-[#CBD5E1]/50 focus:border-[#06B6D4] focus:ring-1 focus:ring-[#06B6D4]/50 outline-none transition";

  const contactItems = [
    {
      icon: FaPhoneAlt,
      label: "Phone",
      value: "+91 95797 31172",
      href: "tel:9579731172",
      color: "#6366F1",
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "25032002shindelaxman@gmail.com",
      href: "mailto:25032002shindelaxman@gmail.com",
      color: "#06B6D4",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Sinnar, Nashik, Maharashtra, India",
      href: null,
      color: "#6366F1",
    },
  ];

  const socials = [
    {
      label: "LinkedIn",
      href: LINKEDIN_URL,
      icon: FaLinkedin,
      color: "#0A66C2",
    },
    { label: "GitHub", href: GITHUB_URL, icon: SiGithub, color: "#F8FAFC" },
  ];

  return (
    <div className="relative min-h-screen py-20 bg-[#0B1020] text-[#CBD5E1] overflow-hidden">
      <AnimationStyles />

      {/* Light 3D Torus (subtle, top-left) */}
      <div className="pointer-events-none absolute top-10 -left-10 w-[380px] h-[380px] hidden lg:block opacity-70">
        <SpiralScene />
      </div>

      {/* Orbs */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#6366F1] opacity-20 blur-[120px] anim-pulse-glow" />
      <div
        className="pointer-events-none absolute bottom-0 -left-40 h-96 w-96 rounded-full bg-[#06B6D4] opacity-20 blur-[120px] anim-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Floating shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-[6%] hidden lg:block anim-float">
          <div className="relative h-20 w-20 anim-spin-slow">
            <div className="absolute inset-0 border border-[#6366F1]/50 rounded-md" />
            <div
              className="absolute inset-0 border border-[#06B6D4]/50 rounded-md"
              style={{ transform: "rotate(45deg)" }}
            />
          </div>
        </div>
        <div
          className="absolute bottom-1/4 right-[8%] hidden md:block anim-float"
          style={{ animationDelay: "2s" }}
        >
          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#6366F1] to-[#06B6D4] opacity-70 blur-sm shadow-2xl shadow-[#6366F1]/40" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* HEADER */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#06B6D4] text-sm font-medium mb-2 tracking-widest uppercase">
            Get in touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-[#F8FAFC]">
            Let's Talk
          </h1>
          <p className="max-w-xl mx-auto">
            Have a project, opportunity, or just want to say hi? Fill in the
            form or reach out directly — I reply within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* INFO SIDE */}
          <motion.div
            className="lg:col-span-2 space-y-5"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {contactItems.map((c, i) => {
              const Icon = c.icon;
              const content = (
                <div className="flex items-center gap-4">
                  <span
                    className="flex items-center justify-center h-12 w-12 rounded-xl flex-shrink-0"
                    style={{
                      background: `${c.color}20`,
                      border: `1px solid ${c.color}40`,
                      color: c.color,
                    }}
                  >
                    <Icon size={18} />
                  </span>
                  <div className="min-w-0">
                    <p
                      className="text-xs uppercase tracking-wide mb-0.5"
                      style={{ color: c.color }}
                    >
                      {c.label}
                    </p>
                    <p className="text-[#F8FAFC] text-sm break-all">
                      {c.value}
                    </p>
                  </div>
                </div>
              );
              return (
                <motion.div key={c.label} variants={fadeUp} custom={i}>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="block rounded-2xl bg-white/[0.07] border border-white/[0.19] backdrop-blur-xl p-5 shadow-lg shadow-black/20 hover:border-white/[0.3] hover:-translate-y-1 transition"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="rounded-2xl bg-white/[0.07] border border-white/[0.19] backdrop-blur-xl p-5 shadow-lg shadow-black/20">
                      {content}
                    </div>
                  )}
                </motion.div>
              );
            })}

            {/* Socials */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="rounded-2xl bg-white/[0.07] border border-white/[0.19] backdrop-blur-xl p-5 shadow-lg shadow-black/20"
            >
              <p className="text-xs uppercase tracking-wide mb-3 text-[#06B6D4]">
                Follow Me
              </p>
              <div className="flex gap-3">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex items-center justify-center h-12 w-12 rounded-xl bg-white/[0.07] border border-white/[0.19] text-[#F8FAFC] hover:text-[#06B6D4] hover:border-[#06B6D4]/60 hover:scale-110 transition"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Availability card */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="rounded-2xl bg-gradient-to-br from-[#6366F1]/15 to-[#06B6D4]/15 border border-white/[0.19] backdrop-blur-xl p-5 shadow-lg shadow-black/20"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                </span>
                <p className="text-sm font-semibold text-[#F8FAFC]">
                  Available for work
                </p>
              </div>
              <p className="text-xs text-[#CBD5E1]/80">
                Open to freelance, internships, and full-time roles.
              </p>
            </motion.div>
          </motion.div>

          {/* FORM SIDE */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Tilt
              glareEnable
              glareMaxOpacity={0.1}
              glareColor="#06B6D4"
              tiltMaxAngleX={3}
              tiltMaxAngleY={3}
              scale={1.005}
              transitionSpeed={1500}
              className="!rounded-3xl"
            >
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl bg-white/[0.07] border border-white/[0.19] backdrop-blur-xl p-8 shadow-xl shadow-black/20 space-y-5"
              >
                <h2 className="text-xl font-bold text-[#F8FAFC]">
                  Send a Message
                </h2>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm text-emerald-400 bg-emerald-400/10 border border-emerald-400/30 rounded-xl px-4 py-3"
                  >
                    <FaCheckCircle size={14} /> Thanks! Your message has been
                    received.
                  </motion.div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2 text-[#F8FAFC]">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-[#F8FAFC]">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-[#F8FAFC]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="6"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#06B6D4] shadow-lg shadow-[#6366F1]/30 hover:shadow-[#06B6D4]/40 hover:scale-[1.01] transition"
                >
                  <FaPaperPlane size={14} /> Send Message
                </button>

                <p className="text-xs text-center text-[#CBD5E1]/60">
                  Your info is safe — I'll never share it.
                </p>
              </form>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
