// motionUtils.ts
import { Variants, Transition } from "framer-motion";

// Smooth page opening animation
export const pageTransition: Transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};

// Fade-in effect for elements
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

// Slide-in effect for elements
export const slideIn: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

// Staggered animation for child elements
export const staggeredContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Animation variants for the active image
export const imageVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

export const staggeredChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const pageVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: pageTransition,
  },
  exit: {
    opacity: 0,
    x: 50,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

// Fade-in animation for sections
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Fade-in animation for delayed sections (e.g., secondary content)
export const delayedFadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.6,
    },
  },
};

// Slide-in from left
export const slideInLeft: Variants = {
  hidden: { x: "-100vw" },
  visible: {
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Scale-in for images or cards
export const scaleIn: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Button hover effect (scaling up slightly)
export const buttonHover: Variants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 0.95,
  },
};

// Staggered animation for multiple elements (e.g., list items)
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Staggered fade-in for children elements
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Animation for entering modal dialogs or pop-ups
export const modalOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export const modalContent: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};
