import { motion } from "framer-motion";

import useCustomCursor from "../hooks/useCustomCursor.js";

export default function CustomCursor() {
  const { cursorVariant, variants } = useCustomCursor();
  const isClicked = cursorVariant === "clicked";

  return (
    <motion.div
      className={isClicked ? "cursor cursor-cerrada" : "cursor"}
      variants={variants}
      animate={cursorVariant}
      aria-hidden="true"
    />
  );
}
