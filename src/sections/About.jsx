import SectionTitle from "../components/SectionTitle.jsx";
import "../styles/About.css";

const facts = [
  { label: "Formación", value: "Lic. en Multimedia y Animación Digital" },
  { label: "Ubicación", value: "Monterrey, México" },
  { label: "Enfoque", value: "Desarrollo web y aplicaciones" },
  { label: "Creativo", value: "Ilustración 2D y modelado 3D" },
];

export default function About() {
  return (
    <section id="sobre-mi" className="section section--alt">
      <div className="container">
        <SectionTitle title="Sobre mí..." />

        <div className="about">
          <div className="about__text">
            <p>
              ¡Hola! Soy <strong>Aracely</strong>, licenciada en Multimedia y
              Animación Digital. Me especializo en el desarrollo web y la
              creación de aplicaciones, combinando mis habilidades técnicas con
              una visión creativa. También tengo experiencia e interés en áreas
              como la ilustración 2D y el modelado 3D.
            </p>
            <p>
              Disfruto crear proyectos digitales, explorar distintas
              herramientas y encontrar soluciones que combinen funcionalidad y
              diseño. Me motiva seguir aprendiendo y ampliar mis habilidades en
              diferentes áreas del desarrollo y la creación digital.
            </p>
            
          </div>

          <ul className="about__facts">
            {facts.map((fact) => (
              <li key={fact.label} className="about__fact">
                <span className="about__fact-icon" aria-hidden="true">
                  {fact.icon}
                </span>
                <div>
                  <p className="about__fact-label">{fact.label}</p>
                  <p className="about__fact-value">{fact.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
