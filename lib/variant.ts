export const textVariant = {
  hidden: { opacity: 0, y: 60, filter: "blur(20px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.4 },
  },
};

export const hover = { scale: 1.03, transition: { duration: 0.1 } };
export const tap = { scale: 0.97, transition: { duration: 0.1 } };

export const scaleInVariant = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2 },
  },
};

export const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
};
