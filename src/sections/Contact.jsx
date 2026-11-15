import SectionTitle from "../components/SectionTitle.jsx";
import "../styles/Contact.css";

const socials = [
  { label: "GitHub", href: "https://github.com/tu-usuario" },
  { label: "LinkedIn", href: "https://linkedin.com/in/tu-usuario" },
  { label: "Instagram", href: "https://instagram.com/tu-usuario" },
];

export default function Contact() {
  return (
    <section id="contacto" className="section">
      <div className="container">
        <div className="contact">
          <SectionTitle
            eyebrow="Contacto"
            title="¿Hacemos algo juntos?"
            description="Si tienes una idea, una propuesta o simplemente quieres saludar, escríbeme. Respondo tan pronto como pueda."
          />

          <a className="btn btn--primary contact__mail" href="mailto:tu@correo.com">
            tu@correo.com
          </a>

          <ul className="contact__socials">
            {socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
