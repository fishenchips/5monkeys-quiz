import { useSpring } from "framer-motion";

export const formHover = {
  hover: {
    scaleX: 1.1,
    scaleY: 1.2,
    transition: {
      type: useSpring,
      stifness: 300,
    },
  },
};
