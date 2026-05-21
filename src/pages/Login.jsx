import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../utils/auth';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError('Please enter your email and password.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const result = loginUser(form.email, form.password);
      setLoading(false);
      if (result.success) {
        navigate('/profile');
      } else {
        setError(result.error);
      }
    }, 400);
  };

  return (
    <div className="auth-page login-page">
      <div className="auth-hero">
        <div className="auth-hero-overlay"></div>
        <div className="auth-hero-content">
          <div className="auth-school-name">🎓 Greenfield Academy</div>
          <h2>Welcome back.<br />Sign in to continue.</h2>
        </div>
      </div>

      <div className="auth-form-side">
        <div className="auth-form-container">
          <h1 className="auth-title">Student Login</h1>
          <p className="auth-subtitle">
            New here?{' '}
            <Link to="/register" className="auth-link">Create an account →</Link>
          </p>

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            {error && <div className="form-error">{error}</div>}

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-gold btn-full"
              disabled={loading}
            >
              {loading ? 'Signing in…' : 'Sign In →'}
            </button>
          </form>

          <p className="auth-footer-text">
            Forgot your password? Visit your{' '}
            <Link to="/profile" className="auth-link">profile page</Link> to reset it.
          </p>
        </div>
      </div>
    </div>
  );
}
