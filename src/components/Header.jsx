import logoImg from "../assets/Logo .svg"
import Nav from "./Nav"

export default function Header() {
  return (
    <header className="container">
      <div className="header-logo">
        <img src={logoImg} alt="Little lemon logo" />
      </div>
      <Nav />
    </header>
  );
}