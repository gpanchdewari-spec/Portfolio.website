import { profile } from "../data/portfolioData";

const Footer = () => {
  return (
    <footer className="px-4 pb-8 md:px-8">
      <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-5 border-t border-cream/10 pt-8 text-sm text-cream/50 md:flex-row md:items-center">
        <p>© 2026 Govind Thakur. All Rights Reserved.</p>
        <div className="flex flex-wrap gap-4">
          <a className="transition hover:text-electric" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="transition hover:text-electric" href={profile.portfolio} target="_blank" rel="noreferrer">Portfolio</a>
          <a className="transition hover:text-electric" href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
