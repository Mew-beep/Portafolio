import SectionTitle from "../components/SectionTitle.jsx";
import "../styles/Skills.css";

const groups = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Herramientas",
    icon: "🧰",
    skills: ["Git", "GitHub", "Vite", "Figma"],
  },
  {
    title: "Aprendiendo",
    icon: "📚",
    skills: ["TypeScript", "Node.js", "Animaciones"],
  },
];

export default function Skills() {
  return (
    <section id="habilidades" className="section section--alt">
      <div className="container">
        <SectionTitle
          eyebrow="Habilidades"
          title="Mi caja de herramientas"
          description="Tecnologías y habilidades que uso para dar vida a mis ideas. Esta lista puede crecer contigo."
        />

        <div className="skills">
          {groups.map((group) => (
            <article key={group.title} className="skills__group">
              <h3 className="skills__title">
                <span aria-hidden="true">{group.icon}</span> {group.title}
              </h3>

              <ul className="skills__list">
                {group.skills.map((skill) => (
                  <li key={skill} className="skills__chip">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
