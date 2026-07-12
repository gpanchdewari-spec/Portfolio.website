import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
} from "react-icons/si";

import { FaCss3Alt } from "react-icons/fa";
import { FiServer } from "react-icons/fi";

export const profile = {
  name: "Govind Thakur",
  initials: "G./",
  role: "Full Stack Developer / React Developer",
  location: "Kanpur, Uttar Pradesh, India",
  email: "Thakur9govind@gmail.com",
  phone: "+91 8873910631",
  github: "https://github.com/thakur9govind",
  linkedin: "#", // Replace # with your real LinkedIn URL
  portfolio: "https://govindthakurportfolio.netlify.app",
  resume: "/Govind_Thakur_Resume.pdf",
};

export const roles = [
  "Full Stack Developer",
  "React Developer",
  "MERN Stack Developer",
  "Frontend Developer",
];

export const stats = [
  { value: "12+", label: "Tech Skills" },
  { value: "04", label: "Featured Projects" },
  { value: "100%", label: "Responsive UI" },
];

export const skills = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React.js", icon: SiReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "REST API", icon: FiServer },
];

export const projects = [
  {
    number: "01",
    title: "AI Hospital Management System",
    label: "Healthcare Web App",
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    description:
      "A smart healthcare web application with appointment booking, doctor details, responsive UI, and backend database integration.",
    github: "#",
    live: "#",
  },
  {
    number: "02",
    title: "E-commerce Website",
    label: "Shopping Experience",
    stack: ["HTML", "CSS", "JavaScript"],
    description:
      "A responsive online shopping website with product cards, cart system, checkout layout, and a modern user interface.",
    github: "#",
    live: "#",
  },
  {
    number: "03",
    title: "School Website",
    label: "Education Website",
    stack: ["HTML", "CSS", "JavaScript"],
    description:
      "A professional school website with responsive layout, navbar, image slider, academic sections, and clean design.",
    github: "#",
    live: "#",
  },
  {
    number: "04",
    title: "React Portfolio Website",
    label: "Personal Brand",
    stack: ["React.js", "Tailwind CSS", "Framer Motion"],
    description:
      "A modern personal portfolio website with animated sections, project showcase, contact form, and responsive design.",
    github: "#",
    live: "#",
  },
];

export const services = [
  {
    number: "01",
    title: "Responsive Web Design",
    description:
      "Clean, mobile-first websites that look premium on every device.",
  },
  {
    number: "02",
    title: "React Frontend Development",
    description:
      "Interactive React interfaces with reusable components and smooth user flow.",
  },
  {
    number: "03",
    title: "MERN Stack Web Applications",
    description:
      "Full-stack applications using MongoDB, Express, React, and Node.js.",
  },
  {
    number: "04",
    title: "Portfolio & Landing Page Design",
    description:
      "High-converting portfolio and landing pages for personal brands and startups.",
  },
  {
    number: "05",
    title: "UI/UX Website Design",
    description:
      "Modern layouts with strong hierarchy, polished spacing, and recruiter-friendly presentation.",
  },
  {
    number: "06",
    title: "API Integration",
    description:
      "Frontend and backend integration with clean REST API structure.",
  },
];
