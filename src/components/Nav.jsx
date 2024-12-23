import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="main-navigation">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Menu</Link>
        </li>
        <li>
          <NavLink
            to="/reservations"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Reservations
          </NavLink>
        </li>
        <li>
          <Link to="/">Order Online</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
