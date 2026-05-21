import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="footer-logo">🎓 Greenfield Academy</span>
          <p>Nurturing minds. Building futures. Grades 1–10.</p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>School</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/coursework">Coursework</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>Account</h4>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/profile">My Profile</Link>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <span>123 Whitefield Main Road</span>
            <span>Bengaluru, Karnataka 560066</span>
            <span>info@greenfield.edu</span>
            <span>(955) 123-4567</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {year} Greenfield Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}
