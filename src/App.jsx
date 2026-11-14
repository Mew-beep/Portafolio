import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import SparkleIntro from "./components/SparkleIntro.jsx";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setCursorVariant("clicked");
    const handleMouseUp = () => setCursorVariant("default");

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
    },
    clicked: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
    },
  };

  const isClicked = cursorVariant === "clicked";
  const cursorClass = isClicked ? "cursor cursor-cerrada" : "cursor";

  return (
    <>
      <SparkleIntro />
      <main>
        <h1>Holaaaaa</h1>
      </main>
      <motion.div
        className={cursorClass}
        variants={variants}
        animate={cursorVariant}
      ></motion.div>
    </>
  );
}

export default App;
