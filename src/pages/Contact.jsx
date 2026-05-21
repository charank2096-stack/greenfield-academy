import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      setError('Please fill in all fields before submitting.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const info = [
    { icon: '📍', label: 'Address', value: '123 Whitefield Main Road, Bengaluru, Karnataka, 560066' },
    { icon: '📞', label: 'Phone', value: '(955) 123-4567' },
    { icon: '📠', label: 'Fax', value: '(955) 123-4568' },
    { icon: '✉️', label: 'Email', value: 'info@greenfield.edu' },
    { icon: '🕐', label: 'Office Hours', value: 'Mon–Fri: 8:30 AM – 4:30 PM' },
    { icon: '🚌', label: 'Transport', value: 'School buses available — contact office' },
  ];

  const departments = [
    { dept: 'Admissions', email: 'admissions@greenfield.edu', phone: '(955) 123-4570' },
    { dept: 'Academics', email: 'academics@greenfield.edu', phone: '(955) 123-4571' },
    { dept: 'Counseling', email: 'counseling@greenfield.edu', phone: '(955) 123-4572' },
    { dept: 'Athletics', email: 'athletics@greenfield.edu', phone: '(955) 123-4573' },
  ];

  return (
    <div className="page-contact">
      {/* HERO */}
      <section className="inner-hero contact-hero">
        <div className="hero-overlay"></div>
        <div className="inner-hero-content">
          <span className="section-eyebrow light">Get In Touch</span>
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Reach out with questions, feedback, or to schedule a visit.</p>
        </div>
      </section>

      {/* INFO + FORM */}
      <section className="section">
        <div className="section-container two-col">
          {/* Info Column */}
          <div className="contact-info">
            <h2 className="section-title">School Information</h2>

            <div className="info-list">
              {info.map((i) => (
                <div key={i.label} className="info-item">
                  <span className="info-icon">{i.icon}</span>
                  <div>
                    <span className="info-label">{i.label}</span>
                    <span className="info-value">{i.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="dept-heading">Department Contacts</h3>
            <div className="dept-list">
              {departments.map((d) => (
                <div key={d.dept} className="dept-item">
                  <strong>{d.dept}</strong>
                  <a href={`mailto:${d.email}`}>{d.email}</a>
                  <span>{d.phone}</span>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="map-placeholder">
              <div className="map-inner">
                <span>🗺️</span>
                <p>123 Whitefield Main Road<br />Bengaluru, Karnataka 560066</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-navy btn-sm"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-wrap">
            <h2 className="section-title">Send Us a Message</h2>

            {submitted ? (
              <div className="success-box">
                <div className="success-icon">✅</div>
                <h3>Message Received!</h3>
                <p>
                  Thank you for reaching out. A member of our team will get back to
                  you within 1–2 business days.
                </p>
                <button className="btn btn-navy" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                {error && <div className="form-error">{error}</div>}

                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                  >
                    <option value="">Select a subject…</option>
                    <option value="admissions">Admissions Inquiry</option>
                    <option value="academics">Academic Questions</option>
                    <option value="transport">School Transport</option>
                    <option value="events">Events & Activities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Write your message here…"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-gold btn-full">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
