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

export const clickedKey = {
  press: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    boxShadow: "0px 0px 8px rgb(245, 245, 245)",
    textShadow: "0px 0px 8px rgb(245, 245, 245)",
  },
};
