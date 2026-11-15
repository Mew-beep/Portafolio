import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          Hecho con <span aria-hidden="true">✦</span> y mucho café por{" "}
          <strong>Tu Nombre</strong>
        </p>
        <p className="footer__year">
          © {new Date().getFullYear()} · Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
