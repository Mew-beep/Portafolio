import { useEffect, useState } from "react";

import gatoMago from "../assets/gato-mago.svg";
import "../styles/SparkleIntro.css";

const SPARKLE_COUNT = 12;

function createSparkles() {
  return Array.from({ length: SPARKLE_COUNT }, (_, i) => ({
    id: i,
    left: 48 + Math.random() * 20 + "%",
    top: 25 + Math.random() * 20 + "%",
    delay: Math.random() * 0.5 + "s",
    size: 12 + Math.random() * 14,
  }));
}

export default function SparkleIntro() {
  const [visible, setVisible] = useState(true);
  const [sparkles] = useState(createSparkles);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="sparkle-overlay">
      <div className="contenedor-gato-mago">
        <img className="gato-mago" src={gatoMago} alt="Gato mago" />
      </div>

      <div className="sparkle-glow" />
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="sparkle"
          style={{
            left: s.left,
            top: s.top,
            fontSize: s.size,
            animationDelay: s.delay,
          }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}
