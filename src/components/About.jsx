import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { profile, stats } from "../data/portfolioData";

const About = () => {
  return (
    <section id="about" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="mb-12 grid gap-6 border-t border-cream/10 pt-8 lg:grid-cols-[0.35fr_1fr]">
            <p className="text-xs uppercase tracking-[0.45em] text-electric">About / 01</p>
            <h2 className="font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.08em] text-cream md:text-7xl lg:text-8xl">
              Digital stories with clean code and polished motion.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="rounded-[2rem] border border-cream/10 bg-cream/[0.035] p-6 shadow-soft backdrop-blur-xl md:p-10">
            <p className="text-2xl font-semibold text-cream md:text-3xl">{profile.role}</p>
            <p className="mt-6 text-lg leading-relaxed text-cream/65">
              I am a fresher full-stack developer focused on building responsive, user-friendly and modern web applications. My work combines React.js frontend development, MERN stack fundamentals, clean layouts, and premium animated UI to create websites that feel professional and job-ready.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-cream/65">
              I enjoy transforming simple ideas into practical web experiences with smooth navigation, strong visual hierarchy, reusable components and clean code structure.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.08}>
                <motion.div
                  className="group h-full rounded-[2rem] border border-cream/10 bg-cream/[0.035] p-6 shadow-soft backdrop-blur-xl"
                  whileHover={{ y: -10, rotateX: 6, rotateY: -4 }}
                  transition={{ type: "spring", stiffness: 180, damping: 16 }}
                >
                  <span className="font-display text-5xl font-black tracking-[-0.08em] text-electric md:text-6xl">{stat.value}</span>
                  <p className="mt-6 text-sm uppercase tracking-[0.3em] text-cream/55">{stat.label}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
