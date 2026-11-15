export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-title">
      <p className="section-title__eyebrow">{eyebrow}</p>
      <h2 className="section-title__title">{title}</h2>
      {description && (
        <p className="section-title__description">{description}</p>
      )}
    </div>
  );
}
