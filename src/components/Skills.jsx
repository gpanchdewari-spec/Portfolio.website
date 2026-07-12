import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { skills } from "../data/portfolioData";

const Skills = () => {
  return (
    <section id="skills" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="mb-12 flex flex-col justify-between gap-6 border-t border-cream/10 pt-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-electric">Skills / 02</p>
              <h2 className="mt-5 font-display text-6xl font-black uppercase leading-[0.9] tracking-[-0.09em] text-cream md:text-8xl">
                Tech Stack
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-cream/60">
              A focused skill set for building responsive frontend interfaces, MERN applications, clean APIs and recruiter-friendly web projects.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Reveal key={skill.name} delay={(index % 4) * 0.06}>
                <motion.div
                  className="group relative overflow-hidden rounded-[1.6rem] border border-cream/10 bg-cream/[0.035] p-6 shadow-soft backdrop-blur-xl"
                  whileHover={{ y: -10, rotate: index % 2 ? -1 : 1 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                >
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-electric/80 to-transparent opacity-0 transition group-hover:opacity-100" />
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-electric/10 blur-2xl transition group-hover:bg-electric/20" />
                  <Icon className="relative z-10 text-4xl text-cream transition group-hover:scale-110 group-hover:text-electric" />
                  <h3 className="relative z-10 mt-8 font-display text-2xl font-bold tracking-[-0.04em] text-cream">{skill.name}</h3>
                  <p className="relative z-10 mt-3 text-sm uppercase tracking-[0.25em] text-cream/45">Skill</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
