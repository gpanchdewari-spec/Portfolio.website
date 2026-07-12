import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import Reveal from "./Reveal";
import { profile } from "../data/portfolioData";

const Contact = () => {
  const contactLinks = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: FiMail,
    },
    {
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
      icon: FiPhone,
    },
    {
      label: "GitHub",
      value: "github.com/thakur9govind",
      href: profile.github,
      icon: FiGithub,
    },
    {
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/govind-thakur-0024bb388/",
      href: profile.linkedin,
      icon: FiLinkedin,
    },
    {
      label: "Portfolio",
      value: "govindthakurportfolio.netlify.app",
      href: profile.portfolio,
      icon: FiArrowUpRight,
    },
  ];

  return (
    <section id="contact" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="mb-12 border-t border-cream/10 pt-8">
            <p className="text-xs uppercase tracking-[0.45em] text-electric">Contact / 05</p>
            <h2 className="mt-5 max-w-5xl font-display text-6xl font-black uppercase leading-[0.86] tracking-[-0.1em] text-cream md:text-8xl lg:text-9xl">
              Let’s build your next web experience.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <motion.form
              className="rounded-[2rem] border border-cream/10 bg-cream/[0.035] p-6 shadow-soft backdrop-blur-xl md:p-8"
              whileHover={{ borderColor: "rgba(104,246,255,.28)" }}
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <input className="form-input" type="text" placeholder="Your Name" />
                <input className="form-input" type="email" placeholder="Your Email" />
              </div>
              <textarea className="form-input mt-4 min-h-44 resize-none" placeholder="Tell me about your project or opportunity" />
              <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-cream px-6 py-4 text-sm font-black uppercase tracking-[0.25em] text-ink transition hover:-translate-y-1 hover:bg-electric hover:shadow-glow">
                Send Message <FiArrowUpRight />
              </button>
            </motion.form>
          </Reveal>

          <div className="space-y-4">
            {contactLinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.label} delay={index * 0.06}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center justify-between gap-4 rounded-[1.5rem] border border-cream/10 bg-cream/[0.035] p-5 shadow-soft backdrop-blur-xl transition hover:-translate-y-1 hover:border-electric/30"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-electric">{item.label}</p>
                      <p className="mt-2 break-all text-lg text-cream/70">{item.value}</p>
                    </div>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-cream/10 bg-cream/5 text-cream transition group-hover:border-electric/30 group-hover:text-electric">
                      <Icon />
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
