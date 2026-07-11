import { motion } from "framer-motion";
import { useScrollProgress } from "../../hooks/useScrollProgress";

export function ScrollProgress() {
  const scaleX = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent z-[100] origin-left"
      style={{ scaleX }}
    />
  );
}
