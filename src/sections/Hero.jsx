import { motion } from "framer-motion";

import perfil from "../assets/perfil.svg";
import "../styles/Hero.css";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const popIn = {
  hidden: { opacity: 0, scale: 0.9, rotate: -3 },
  visible: { opacity: 1, scale: 1, rotate: 0 },
};

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="hero__badge">
            ¡ Si puedes imaginarlo, puedes programarlo !
          </p>

          <h1 className="hero__title">
            <span className="hero__name">Aracely Hdz</span>
          </h1>

          <p className="hero__role">Desarrolladora Full Stack</p>

          <div className="hero__bubble">
            <p>
              Desarrolladora Full Stack enfocada en el desarrollo de
              aplicaciones web. Disfruto construir soluciones donde la
              funcionalidad y el diseño trabajan juntos.
            </p>
          </div>

          <div className="hero__actions">
            <a className="hero__btn hero__btn--primary" href="#proyectos">
              Ver proyectos <span aria-hidden="true">→</span>
            </a>
            <a className="hero__btn hero__btn--ghost" href="#contacto">
              Contáctame
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__art"
          variants={popIn}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.7,
            ease: [0.34, 1.56, 0.64, 1],
            delay: 0.15,
          }}
        >
          <div className="hero__sticker">
            <span className="hero__tape hero__tape--left" aria-hidden="true" />
            <span className="hero__tape hero__tape--right" aria-hidden="true" />

            <div className="hero__sticker-inner">
              <img className="hero__perfil" src={perfil} alt="perfil" />
            </div>
          </div>
        </motion.div>
      </div>

      <svg
        className="hero__wave"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 48C180 88 360 6 540 30C720 54 900 96 1080 64C1260 32 1350 20 1440 40V90H0Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
