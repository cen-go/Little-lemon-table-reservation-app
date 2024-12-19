import FooterLogo from "../assets/logo-image.jpg"

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src={FooterLogo} alt="Little lemon logo" />
      </div>
      <div className="footer-menu">
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
            <li><span>Address:</span></li>
            <li><span>Email:</span></li>
            <li><span>Tel:</span></li>
          </ul>
        </div>
        <div className="social-media">
          <h3>Social Media Links</h3>
        </div>
      </div>
    </footer>
  );
}