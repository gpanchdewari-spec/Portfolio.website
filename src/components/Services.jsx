import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";
import { services } from "../data/portfolioData";

const Services = () => {
  return (
    <section id="services" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="mb-12 flex flex-col justify-between gap-6 border-t border-cream/10 pt-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-electric">Services / 04</p>
              <h2 className="mt-5 font-display text-6xl font-black uppercase leading-[0.9] tracking-[-0.09em] text-cream md:text-8xl">
                What I Build
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-cream/60">
              Development services designed for modern portfolios, business websites, dashboards and full-stack web applications.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 0.08}>
              <motion.div
                className="group relative min-h-72 overflow-hidden rounded-[2rem] border border-cream/10 bg-cream/[0.035] p-7 shadow-soft backdrop-blur-xl"
                whileHover={{ y: -10, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 160, damping: 16 }}
              >
                <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-electric/10 blur-3xl transition group-hover:bg-electric/20" />
                <div className="relative z-10 flex h-full flex-col justify-between gap-12">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.35em] text-electric">{service.number}</span>
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-cream/10 bg-cream/5 text-cream transition group-hover:border-electric/30 group-hover:text-electric">
                      <FiArrowUpRight />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl font-black uppercase leading-none tracking-[-0.06em] text-cream md:text-4xl">
                      {service.title}
                    </h3>
                    <p className="mt-5 text-base leading-relaxed text-cream/60">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
