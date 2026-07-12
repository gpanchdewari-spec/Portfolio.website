import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";
import { projects } from "../data/portfolioData";

const Projects = () => {
  return (
    <section id="work" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="mb-10 grid gap-6 border-t border-cream/10 pt-8 lg:grid-cols-[0.35fr_1fr]">
            <p className="text-xs uppercase tracking-[0.45em] text-electric">Work / 03</p>
            <div>
              <h2 className="font-display text-6xl font-black uppercase leading-[0.86] tracking-[-0.1em] text-cream md:text-8xl lg:text-9xl">
                Selected Projects
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/60">
                A project index built in an editorial creative-developer style with bold numbering, smooth reveals and premium hover interactions.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="space-y-5">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <motion.article
                className="project-card group relative overflow-hidden rounded-[2rem] border border-cream/10 bg-cream/[0.035] p-5 shadow-soft backdrop-blur-xl md:p-7 lg:p-8"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 180, damping: 16 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-electric/0 via-electric/[0.06] to-violet-600/0 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative z-10 grid gap-8 lg:grid-cols-[0.16fr_0.47fr_0.37fr] lg:items-center">
                  <div className="flex items-center justify-between lg:block">
                    <span className="font-display text-5xl font-black tracking-[-0.1em] text-cream/25 transition group-hover:text-electric md:text-6xl">
                      {project.number}
                    </span>
                    <span className="rounded-full border border-cream/10 bg-cream/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-cream/55 lg:mt-6 lg:inline-block">
                      {project.label}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-4xl font-black uppercase leading-[0.9] tracking-[-0.08em] text-cream md:text-6xl">
                      {project.title}
                    </h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="rounded-full border border-cream/10 bg-cream/5 px-3 py-1 text-xs text-cream/60">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-base leading-relaxed text-cream/60 md:text-lg">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a href={project.github} className="project-link">
                        GitHub <FiArrowUpRight />
                      </a>
                      <a href={project.live} className="project-link">
                        Live Demo <FiArrowUpRight />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
