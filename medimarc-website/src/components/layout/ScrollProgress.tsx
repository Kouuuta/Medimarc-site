import { motion } from "framer-motion";
import { useScrollProgress } from "../../hooks/useScrollProgress";

export function ScrollProgress() {
  const scaleX = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-[3px] origin-left bg-gradient-to-r from-brand-500 to-accent-500"
      style={{ scaleX }}
    />
  );
}
