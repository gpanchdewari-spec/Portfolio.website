import { motion } from "framer-motion";
import { profile } from "../data/portfolioData";

const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-ink"
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="relative flex flex-col items-center gap-8">
        <motion.div
          className="text-[18vw] font-black leading-none tracking-[-0.12em] text-cream md:text-[10vw]"
          initial={{ opacity: 0, y: 40, filter: "blur(16px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {profile.initials}
        </motion.div>
        <div className="h-[1px] w-72 overflow-hidden rounded-full bg-cream/15">
          <motion.div
            className="h-full bg-gradient-to-r from-electric via-cream to-cyan-300"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.3, repeat: 1, ease: "easeInOut" }}
          />
        </div>
        <motion.p
          className="text-xs uppercase tracking-[0.55em] text-cream/55"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Creative Developer Portfolio
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;
