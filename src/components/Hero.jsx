import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowDownRight, FiDownload, FiMapPin } from "react-icons/fi";
import { profile, roles } from "../data/portfolioData";

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-4 pb-16 pt-32 md:px-8 md:pt-40">
      <motion.div
        className="absolute left-[6%] top-24 h-64 w-64 rounded-full bg-electric/20 blur-3xl"
        animate={{ x: [0, 40, -20, 0], y: [0, 25, -15, 0], scale: [1, 1.15, 0.96, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[8%] top-[22%] h-72 w-72 rounded-full bg-violet-600/20 blur-3xl"
        animate={{ x: [0, -45, 20, 0], y: [0, -25, 35, 0], scale: [1, 0.95, 1.12, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <motion.div
            className="mb-10 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.25em] text-cream/60"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="rounded-full border border-cream/15 bg-cream/5 px-4 py-2">Portfolio 2026</span>
            <span className="flex items-center gap-2"><FiMapPin /> {profile.location}</span>
          </motion.div>

          <motion.p
            className="mb-4 font-display text-sm uppercase tracking-[0.6em] text-electric"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            Hi, I’m Govind Thakur
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              className="font-display text-[17vw] font-black uppercase leading-[0.78] tracking-[-0.11em] text-cream sm:text-[14vw] lg:text-[9.2vw]"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.55, ease: [0.76, 0, 0.24, 1] }}
            >
              Govind
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              className="font-display text-[17vw] font-black uppercase leading-[0.83] tracking-[-0.11em] text-outline sm:text-[14vw] lg:text-[9.2vw]"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.7, ease: [0.76, 0, 0.24, 1] }}
            >
              Thakur
            </motion.h1>
          </div>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <span className="text-lg text-cream/60">Currently crafting as</span>
            <motion.span
              key={roles[roleIndex]}
              initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0 }}
              className="rounded-full border border-electric/25 bg-electric/10 px-5 py-2 font-display text-lg font-bold text-electric shadow-glow"
            >
              {roles[roleIndex]}
            </motion.span>
          </motion.div>
        </div>

        <motion.div
          className="relative rounded-[2rem] border border-cream/10 bg-cream/[0.035] p-6 shadow-soft backdrop-blur-2xl md:p-8"
          initial={{ opacity: 0, y: 40, rotateX: 12 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
        >
          <div className="absolute -right-8 -top-8 grid h-28 w-28 place-items-center rounded-full border border-electric/20 bg-electric/10 text-xs uppercase tracking-[0.22em] text-electric animate-pulseGlow">
            Available
          </div>
          <p className="mb-8 text-xl leading-relaxed text-cream/75 md:text-2xl">
            I build modern, responsive and user-friendly web applications with React.js, MERN stack, clean UI and smooth animated experiences.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            <a href={`mailto:${profile.email}`} className="premium-btn bg-cream text-ink hover:bg-electric">
              Hire Me <FiArrowDownRight />
            </a>
            <a href={profile.resume} className="premium-btn border border-cream/15 bg-cream/5 text-cream hover:border-electric/60 hover:text-electric" download>
              Resume <FiDownload />
            </a>
            <a href="#work" className="premium-btn border border-cream/15 bg-cream/5 text-cream hover:border-electric/60 hover:text-electric">
              Projects <FiArrowDownRight />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="marquee mt-20 border-y border-cream/10 py-5">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, groupIndex) => (
            <div key={groupIndex} className="flex shrink-0 items-center gap-8 pr-8 font-display text-2xl font-black uppercase tracking-[-0.03em] text-cream/75 md:text-4xl">
              <span>Movement</span><span className="text-electric">React</span><span>Emotion</span><span>Storytelling</span><span className="text-electric">MERN</span><span>Intention</span><span>Premium UI</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
