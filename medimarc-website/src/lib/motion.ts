import type { Transition, Variants } from "framer-motion";

/** Entering or leaving. Starts fast so the interface feels responsive. */
export const EASE_OUT = [0.23, 1, 0.32, 1] as const;

/** Moving or morphing on screen. Accelerates then settles. */
export const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const;

/** Sheets and drawers. The slight overshoot reads as physical. */
export const EASE_DRAWER = [0.32, 0.72, 0, 1] as const;

export const DURATION = {
  press: 0.12,
  micro: 0.16,
  base: 0.22,
  enter: 0.3,
} as const;

export const spring: Transition = {
  type: "spring",
  duration: 0.5,
  bounce: 0.2,
};

/** Exit is always shorter than enter, so removal feels immediate. */
export const exitTransition: Transition = {
  duration: DURATION.base,
  ease: EASE_OUT,
};

/**
 * Scroll reveals. Starts at 0.96 rather than 0 - nothing in the physical
 * world arrives from nothing, and a near-invisible start reads as a pop.
 */
export const revealUp: Variants = {
  hidden: { opacity: 0, transform: "translateY(12px)" },
  visible: {
    opacity: 1,
    transform: "translateY(0)",
    transition: { duration: DURATION.enter, ease: EASE_OUT },
  },
};

export const revealFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.enter, ease: EASE_OUT },
  },
};

export const revealScale: Variants = {
  hidden: { opacity: 0, transform: "scale(0.96)" },
  visible: {
    opacity: 1,
    transform: "scale(1)",
    transition: { duration: DURATION.base, ease: EASE_OUT },
  },
};

/** 40ms per child. Long enough to read as a cascade, short enough not to block. */
export const stagger = (interval = 0.04, delay = 0.06): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: interval, delayChildren: delay },
  },
});

/** Wipes the image in from the bottom edge, hardware accelerated. */
export const revealClip: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.6, ease: EASE_IN_OUT },
  },
};
