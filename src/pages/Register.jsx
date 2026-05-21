import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../utils/auth';

const grades = Array.from({ length: 10 }, (_, i) => `Grade ${i + 1}`);

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    password: '',
    confirm: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required.';
    if (!form.email.trim()) {
      e.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      e.email = 'Enter a valid email address.';
    }
    if (!form.phone.trim()) {
      e.phone = 'Phone number is required.';
    } else if (!/^\+?[\d\s\-().]{7,}$/.test(form.phone)) {
      e.phone = 'Enter a valid phone number.';
    }
    if (!form.grade) e.grade = 'Please select a grade.';
    if (!form.password) {
      e.password = 'Password is required.';
    } else if (form.password.length < 6) {
      e.password = 'Password must be at least 6 characters.';
    }
    if (!form.confirm) {
      e.confirm = 'Please confirm your password.';
    } else if (form.password !== form.confirm) {
      e.confirm = 'Passwords do not match.';
    }
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const result = registerUser({
        name: form.name,
        email: form.email,
        phone: form.phone,
        grade: form.grade,
        password: form.password,
      });
      setLoading(false);
      if (result.success) {
        navigate('/profile');
      } else {
        setErrors({ email: result.error });
      }
    }, 400);
  };

  return (
    <div className="auth-page register-page">
      <div className="auth-hero">
        <div className="auth-hero-overlay"></div>
        <div className="auth-hero-content">
          <div className="auth-school-name">🎓 Greenfield Academy</div>
          <h2>Join our community of<br />learners today.</h2>
          <ul className="auth-perks">
            <li>✅ Access course materials & schedules</li>
            <li>✅ View your personal academic profile</li>
            <li>✅ Stay updated on events & holidays</li>
            <li>✅ Connect with your teachers</li>
          </ul>
        </div>
      </div>

      <div className="auth-form-side">
        <div className="auth-form-container">
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-subtitle">
            Already registered?{' '}
            <Link to="/login" className="auth-link">Sign in →</Link>
          </p>

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="field-error">{errors.name}</span>}
              </div>

              <div className={`form-group ${errors.grade ? 'has-error' : ''}`}>
                <label htmlFor="grade">Grade Level</label>
                <select
                  id="grade"
                  name="grade"
                  value={form.grade}
                  onChange={handleChange}
                >
                  <option value="">Select grade…</option>
                  {grades.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
                {errors.grade && <span className="field-error">{errors.grade}</span>}
              </div>
            </div>

            <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="student@example.com"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>

            <div className={`form-group ${errors.phone ? 'has-error' : ''}`}>
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="(555) 000-0000"
                value={form.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="field-error">{errors.phone}</span>}
            </div>

            <div className="form-row">
              <div className={`form-group ${errors.password ? 'has-error' : ''}`}>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Min. 6 characters"
                  value={form.password}
                  onChange={handleChange}
                />
                {errors.password && <span className="field-error">{errors.password}</span>}
              </div>

              <div className={`form-group ${errors.confirm ? 'has-error' : ''}`}>
                <label htmlFor="confirm">Confirm Password</label>
                <input
                  id="confirm"
                  name="confirm"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Repeat password"
                  value={form.confirm}
                  onChange={handleChange}
                />
                {errors.confirm && <span className="field-error">{errors.confirm}</span>}
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-gold btn-full"
              disabled={loading}
            >
              {loading ? 'Creating account…' : 'Create Account →'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
