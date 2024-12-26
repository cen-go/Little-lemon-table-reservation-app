import FooterLogo from "../assets/logo-image.jpg";
import SocialMediaIcons from "./SocialMediaIcons";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo">
          <img src={FooterLogo} alt="Little lemon logo" />
        </div>

        <div className="doormat-nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Reservations</a>
            </li>
            <li>
              <a href="/">Order Online</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <ul>
            <h3>Contact</h3>
            <li>
              <span>Address: </span> 3688 Willow St., Chicago, IL 60652
            </li>
            <li>
              <span>Email: </span> littlelemon@lemon.com
            </li>
            <li>
              <span>Tel: </span> +1-555-000-0000
            </li>
          </ul>
        </div>
        <SocialMediaIcons />
      </div>
    </footer>
  );
}
