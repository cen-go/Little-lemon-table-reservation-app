import { Link } from "react-router-dom";
import logoImg from "../assets/Logo .svg"
import Nav from "./Nav"

export default function Header() {
  return (
    <header className="container">
      <div className="header-logo">
        <Link to="/"><img src={logoImg} alt="Little lemon logo" /></Link>
      </div>
      <Nav />
    </header>
  );
}