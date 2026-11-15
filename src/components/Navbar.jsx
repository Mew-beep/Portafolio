import { useState } from "react";

import "../styles/Navbar.css";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <a className="navbar__brand" href="#inicio" onClick={closeMenu}>
        <img
          className="navbar__logo"
          src="/garrita-abierta.png"
          alt=""
          aria-hidden="true"
        />
        Ari
      </a>

      <button
        type="button"
        className="navbar__toggle"
        onClick={() => setOpen((isOpen) => !isOpen)}
        aria-expanded={open}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
      >
        {open ? "✕" : "☰"}
      </button>

      <nav className={`navbar__links${open ? " navbar__links--open" : ""}`}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
