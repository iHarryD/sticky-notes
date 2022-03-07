import "./css/style.css";

export default function Header() {
  return (
    <header>
      <nav className="navbar --horizontal-flex">
        <div className="--bold-700">STICKY NOTES</div>
        <button className="btn --primary-btn --has-hover-overlay">login</button>
      </nav>
    </header>
  );
}
