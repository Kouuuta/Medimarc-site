import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/**
 * A 2px reading-progress hairline. Sits under the fixed header rather than
 * over the content, so it never competes with the nav labels.
 */
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 32,
    mass: 0.3,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="no-print pointer-events-none fixed inset-x-0 top-0 z-60 h-[2px] origin-left bg-cobalt"
      style={{ scaleX: reduce ? undefined : scaleX, opacity: reduce ? 0 : 1 }}
    />
  );
}
