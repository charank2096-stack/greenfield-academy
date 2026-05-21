import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUser, clearCurrentUser, updatePassword } from '../utils/auth';

export default function Profile() {
  const [user, setUser] = useState(getCurrentUser());
  const [pwForm, setPwForm] = useState({ current: '', newPw: '', confirm: '' });
  const [pwErrors, setPwErrors] = useState({});
  const [pwSuccess, setPwSuccess] = useState('');
  const [activeTab, setActiveTab] = useState('details');
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthChange = () => {
      const u = getCurrentUser();
      setUser(u);
      if (!u) navigate('/login');
    };
    window.addEventListener('authChange', handleAuthChange);
    return () => window.removeEventListener('authChange', handleAuthChange);
  }, [navigate]);

  if (!user) {
    return (
      <div className="auth-gate">
        <div className="auth-gate-card">
          <div className="auth-gate-icon">🔒</div>
          <h2>Please Log In</h2>
          <p>You need to be signed in to view your profile.</p>
          <Link to="/login" className="btn btn-gold">Go to Login</Link>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    clearCurrentUser();
    navigate('/');
  };

  const handlePwChange = (e) => {
    setPwForm({ ...pwForm, [e.target.name]: e.target.value });
    setPwErrors({ ...pwErrors, [e.target.name]: '' });
    setPwSuccess('');
  };

  const handlePwSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!pwForm.current) errs.current = 'Enter your current password.';
    if (!pwForm.newPw) {
      errs.newPw = 'Enter a new password.';
    } else if (pwForm.newPw.length < 6) {
      errs.newPw = 'Password must be at least 6 characters.';
    }
    if (!pwForm.confirm) {
      errs.confirm = 'Please confirm your new password.';
    } else if (pwForm.newPw !== pwForm.confirm) {
      errs.confirm = 'Passwords do not match.';
    }
    if (Object.keys(errs).length > 0) {
      setPwErrors(errs);
      return;
    }

    const result = updatePassword(user.email, pwForm.current, pwForm.newPw);
    if (result.success) {
      setUser(getCurrentUser());
      setPwForm({ current: '', newPw: '', confirm: '' });
      setPwSuccess('Password updated successfully! ✅');
    } else {
      setPwErrors({ current: result.error });
    }
  };

  const joinDate = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'N/A';

  return (
    <div className="profile-page">
      {/* HERO */}
      <section className="profile-hero">
        <div className="profile-hero-overlay"></div>
        <div className="profile-hero-content">
          <div className="profile-avatar-lg">{user.name.charAt(0).toUpperCase()}</div>
          <h1 className="profile-name">{user.name}</h1>
          <div className="profile-meta">
            <span className="profile-grade-badge">{user.grade}</span>
            <span className="profile-joined">Member since {joinDate}</span>
          </div>
        </div>
      </section>

      {/* TABS */}
      <div className="profile-tabs-bar">
        <div className="profile-tabs">
          <button
            className={`profile-tab ${activeTab === 'details' ? 'active' : ''}`}
            onClick={() => setActiveTab('details')}
          >
            👤 My Details
          </button>
          <button
            className={`profile-tab ${activeTab === 'password' ? 'active' : ''}`}
            onClick={() => setActiveTab('password')}
          >
            🔑 Change Password
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="profile-content">
        {activeTab === 'details' && (
          <div className="profile-card">
            <h2>Personal Information</h2>
            <div className="profile-details-grid">
              <div className="detail-item">
                <span className="detail-icon">👤</span>
                <div>
                  <span className="detail-label">Full Name</span>
                  <span className="detail-value">{user.name}</span>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">✉️</span>
                <div>
                  <span className="detail-label">Email Address</span>
                  <span className="detail-value">{user.email}</span>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">📞</span>
                <div>
                  <span className="detail-label">Phone Number</span>
                  <span className="detail-value">{user.phone || '—'}</span>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">🎓</span>
                <div>
                  <span className="detail-label">Grade Level</span>
                  <span className="detail-value">{user.grade}</span>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">🪪</span>
                <div>
                  <span className="detail-label">Student ID</span>
                  <span className="detail-value">#{user.id?.slice(-6).toUpperCase() || 'N/A'}</span>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">📅</span>
                <div>
                  <span className="detail-label">Account Created</span>
                  <span className="detail-value">{joinDate}</span>
                </div>
              </div>
            </div>

            <div className="profile-actions">
              <Link to="/coursework" className="btn btn-navy">
                📚 View Coursework
              </Link>
              <button className="btn btn-outline-danger" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        )}

        {activeTab === 'password' && (
          <div className="profile-card">
            <h2>Change Password</h2>
            <p className="form-hint">
              Choose a strong password with at least 6 characters.
            </p>

            {pwSuccess && <div className="form-success">{pwSuccess}</div>}

            <form className="auth-form" onSubmit={handlePwSubmit} noValidate>
              <div className={`form-group ${pwErrors.current ? 'has-error' : ''}`}>
                <label htmlFor="current">Current Password</label>
                <input
                  id="current"
                  name="current"
                  type="password"
                  placeholder="Your current password"
                  value={pwForm.current}
                  onChange={handlePwChange}
                />
                {pwErrors.current && (
                  <span className="field-error">{pwErrors.current}</span>
                )}
              </div>

              <div className={`form-group ${pwErrors.newPw ? 'has-error' : ''}`}>
                <label htmlFor="newPw">New Password</label>
                <input
                  id="newPw"
                  name="newPw"
                  type="password"
                  placeholder="Min. 6 characters"
                  value={pwForm.newPw}
                  onChange={handlePwChange}
                />
                {pwErrors.newPw && (
                  <span className="field-error">{pwErrors.newPw}</span>
                )}
              </div>

              <div className={`form-group ${pwErrors.confirm ? 'has-error' : ''}`}>
                <label htmlFor="confirm">Confirm New Password</label>
                <input
                  id="confirm"
                  name="confirm"
                  type="password"
                  placeholder="Repeat new password"
                  value={pwForm.confirm}
                  onChange={handlePwChange}
                />
                {pwErrors.confirm && (
                  <span className="field-error">{pwErrors.confirm}</span>
                )}
              </div>

              <button type="submit" className="btn btn-gold">
                Update Password →
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
