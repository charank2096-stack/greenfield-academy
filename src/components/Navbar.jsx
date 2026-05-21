import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { getCurrentUser, clearCurrentUser } from '../utils/auth';

export default function Navbar() {
  const [user, setUser] = useState(getCurrentUser());
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleAuthChange = () => setUser(getCurrentUser());
    window.addEventListener('authChange', handleAuthChange);
    return () => window.removeEventListener('authChange', handleAuthChange);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    clearCurrentUser();
    navigate('/');
  };

  const isActive = (path) =>
    location.pathname === path ? 'nav-link active' : 'nav-link';

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">🎓</span>
          <div className="logo-text">
            <span className="logo-name">Greenfield Academy</span>
            <span className="logo-tagline">Grades 1 – 10</span>
          </div>
        </Link>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/about" className={isActive('/about')}>About Us</Link>
          <Link to="/coursework" className={isActive('/coursework')}>Coursework</Link>
          <Link to="/contact" className={isActive('/contact')}>Contact</Link>

          <div className="nav-divider"></div>

          {user ? (
            <>
              <Link to="/profile" className={`nav-link profile-link ${location.pathname === '/profile' ? 'active' : ''}`}>
                <span className="profile-avatar">{user.name.charAt(0).toUpperCase()}</span>
                {user.name.split(' ')[0]}
              </Link>
              <button className="nav-btn btn-outline" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-btn btn-outline">Login</Link>
              <Link to="/register" className="nav-btn btn-solid">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
