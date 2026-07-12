import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (event) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/10 blur-2xl md:block"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 120, damping: 22, mass: 0.3 }}
    />
  );
};

export default CursorGlow;
