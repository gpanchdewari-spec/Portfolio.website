import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { profile } from "../data/portfolioData";

const navLinks = ["Home", "About", "Skills", "Work", "Services", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getHref = (link) => (link === "Home" ? "#home" : `#${link.toLowerCase()}`);

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-50 px-4 py-4 transition-all duration-500 md:px-8 ${
        scrolled ? "bg-ink/70 backdrop-blur-2xl" : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between rounded-full border border-cream/10 bg-cream/[0.035] px-4 py-3 shadow-soft backdrop-blur-xl md:px-6">
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full border border-electric/30 bg-electric/10 font-display text-sm font-black text-electric shadow-glow transition group-hover:scale-105">
            {profile.initials}
          </span>
          <span className="hidden text-xs uppercase tracking-[0.32em] text-cream/70 sm:block">
            Full Stack Developer
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-cream/10 bg-ink/45 p-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={getHref(link)}
              className="rounded-full px-5 py-2 text-xs uppercase tracking-[0.22em] text-cream/65 transition hover:bg-cream/10 hover:text-cream"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href={profile.email ? `mailto:${profile.email}` : "#contact"}
          className="hidden rounded-full border border-cream/15 bg-cream px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-ink transition hover:-translate-y-0.5 hover:bg-electric md:inline-flex"
        >
          Hire Me
        </a>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="grid h-11 w-11 place-items-center rounded-full border border-cream/15 bg-cream/10 text-xl text-cream lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mx-4 mt-3 overflow-hidden rounded-3xl border border-cream/10 bg-ink/95 p-4 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={getHref(link)}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-4 text-sm uppercase tracking-[0.25em] text-cream/75 hover:bg-cream/10 hover:text-cream"
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
