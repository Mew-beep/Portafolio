import { useEffect, useState } from "react";
import "../styles/SparkleIntro.css";
import gatoMago from "../assets/gatoMago.svg";

export default function SparkleIntro() {
  const [visible, setVisible] = useState(true);
  const [sparkles] = useState(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: 48 + Math.random() * 20 + "%",
      top: 25 + Math.random() * 20 + "%",
      delay: Math.random() * 0.5 + "s",
      size: 12 + Math.random() * 14,
    })),
  );

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="sparkle-overlay">
      <div className="contenedorGatoMago">
        <img className="GatoMago" src={gatoMago} alt="Gato mago" />
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
