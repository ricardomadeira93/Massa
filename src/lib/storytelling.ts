import type { Transition, Variants } from 'framer-motion';

export const storyEase = [0.22, 1, 0.36, 1] as const;

export const storyViewport = {
  once: true,
  amount: 0.3,
};

export const storyTransition: Transition = {
  duration: 0.72,
  ease: storyEase,
};

export function revealUp(delay = 0, distance = 20): Variants {
  return {
    hidden: { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ...storyTransition,
        delay,
      },
    },
  };
}

export function revealScale(delay = 0, scale = 0.94): Variants {
  return {
    hidden: { opacity: 0, scale },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        ...storyTransition,
        delay,
      },
    },
  };
}

export function drawIn(delay = 0, inset = '0% 100% 0% 0%'): Variants {
  return {
    hidden: { opacity: 0, clipPath: `inset(${inset})` },
    visible: {
      opacity: 1,
      clipPath: 'inset(0% 0% 0% 0%)',
      transition: {
        duration: 0.9,
        delay,
        ease: storyEase,
      },
    },
  };
}
