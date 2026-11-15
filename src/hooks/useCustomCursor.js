import { useEffect, useState } from "react";

export default function useCustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
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

  return { cursorVariant, variants };
}
