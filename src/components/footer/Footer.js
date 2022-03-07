import "./css/style.css";

export default function Footer() {
  return (
    <footer className="footer --has-padding">
      <ul className="social-media-tab">
        <li>
          <a className="social-media-links" href="https://github.com/iHarryD">
            GitHub
          </a>
        </li>
        <li>
          <a
            className="social-media-links"
            href="https://www.linkedin.com/in/prashant-kumar-a97251195/"
          >
            LinkedIn
          </a>
        </li>
      </ul>
      <p className="portfolio-link">
        Developed by
        <a href="https://iharryd.github.io/portfolio/"> Harry</a>
      </p>
    </footer>
  );
}
