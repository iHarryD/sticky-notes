import { Link } from "react-router-dom";

import "./css/style.css";

export default function Header() {
  return (
    <header>
      <nav className="navbar --horizontal-flex">
        <Link to="/" className="--bold-700">
          STICKY NOTES
        </Link>
        <button className="btn --primary-btn --has-hover-overlay">login</button>
      </nav>
    </header>
  );
}
