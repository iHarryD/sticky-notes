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
        Developed with{" "}
        <svg
          className="brain-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M184 0C214.9 0 240 25.07 240 56V456C240 486.9 214.9 512 184 512C155.1 512 131.3 490.1 128.3 461.9C123.1 463.3 117.6 464 112 464C76.65 464 48 435.3 48 400C48 392.6 49.27 385.4 51.59 378.8C21.43 367.4 0 338.2 0 304C0 272.1 18.71 244.5 45.77 231.7C37.15 220.8 32 206.1 32 192C32 161.3 53.59 135.7 82.41 129.4C80.84 123.9 80 118 80 112C80 82.06 100.6 56.92 128.3 49.93C131.3 21.86 155.1 0 184 0zM383.7 49.93C411.4 56.92 432 82.06 432 112C432 118 431.2 123.9 429.6 129.4C458.4 135.7 480 161.3 480 192C480 206.1 474.9 220.8 466.2 231.7C493.3 244.5 512 272.1 512 304C512 338.2 490.6 367.4 460.4 378.8C462.7 385.4 464 392.6 464 400C464 435.3 435.3 464 400 464C394.4 464 388.9 463.3 383.7 461.9C380.7 490.1 356.9 512 328 512C297.1 512 272 486.9 272 456V56C272 25.07 297.1 0 328 0C356.9 0 380.7 21.86 383.7 49.93z" />
        </svg>{" "}
        by
        <a href="https://iharryd.github.io/portfolio/"> Harry</a>
      </p>
    </footer>
  );
}
