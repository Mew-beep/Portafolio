import SectionTitle from "../components/SectionTitle.jsx";
import "../styles/Projects.css";

const projects = [
  {
    title: "Proyecto uno",
    description:
      "Una breve descripción de qué hace tu proyecto, qué problema resuelve y qué aprendiste al construirlo.",
    tags: ["React", "CSS", "Vite"],
    emoji: "🌙",
    href: "#",
  },
  {
    title: "Proyecto dos",
    description:
      "Otro espacio para mostrar tu trabajo. Cambia este texto por la descripción real de tu proyecto.",
    tags: ["JavaScript", "API", "Diseño"],
    emoji: "🔮",
    href: "#",
  },
  {
    title: "Proyecto tres",
    description:
      "Cuenta el reto principal del proyecto y el resultado final. Puedes añadir enlaces al demo o al repositorio.",
    tags: ["HTML", "Figma", "Animaciones"],
    emoji: "🐈",
    href: "#",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Proyectos"
          title="Cosas que he creado"
          description="Una selección de trabajos donde puse en práctica lo que sé. Cada tarjeta es un espacio listo para tu contenido."
        />

        <div className="projects">
          {projects.map((project, index) => (
            <article key={project.title} className="project">
              <div className={`project__cover project__cover--${index + 1}`}>
                <span aria-hidden="true">{project.emoji}</span>
              </div>

              <div className="project__body">
                <h3 className="project__title">{project.title}</h3>
                <p className="project__description">{project.description}</p>

                <ul className="project__tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <a className="project__link" href={project.href}>
                  Ver más <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
