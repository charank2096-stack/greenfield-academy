import { Link } from 'react-router-dom';

const features = [
  {
    icon: '📚',
    title: 'Rich Curriculum',
    desc: 'A balanced academic program spanning Grades 1–10, designed to challenge and inspire every learner.',
  },
  {
    icon: '👩‍🏫',
    title: 'Expert Teachers',
    desc: 'Dedicated educators with deep subject expertise who guide students toward their fullest potential.',
  },
  {
    icon: '🏆',
    title: 'Student Success',
    desc: 'Proven track record of academic excellence, community involvement, and character development.',
  },
  {
    icon: '🌱',
    title: 'Holistic Growth',
    desc: 'Arts, sports, music, and extracurriculars complement academics for well-rounded development.',
  },
];

const stats = [
  { value: '10', label: 'Grade Levels' },
  { value: '25+', label: 'Qualified Teachers' },
  { value: '500+', label: 'Students Enrolled' },
  { value: '15+', label: 'Subjects Offered' },
];

const announcements = [
  { date: 'Sep 3', title: 'School Year 2024–25 Begins', type: 'event' },
  { date: 'Sep 17', title: 'Ganesh Chaturthi – School Closed', type: 'holiday' },
  { date: 'Oct 12', title: 'Dussehra – School Closed', type: 'holiday' },
  { date: 'Nov 1', title: 'Diwali Break', type: 'holiday' },
  { date: 'Nov 15', title: 'Guru Nanak Jayanti – School Closed', type: 'holiday' },
  { date: 'Dec 23 – Jan 3', title: 'Winter Vacation', type: 'holiday' },
  { date: 'Jan 26', title: 'Republic Day – School Closed', type: 'holiday' },
  { date: 'Mar 14', title: 'Holi – School Closed', type: 'holiday' },
];

export default function Home() {
  return (
    <div className="page-home">
      {/* HERO */}
      <section className="hero home-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">Welcome to Greenfield Academy</div>
          <h1 className="hero-title">
            Where Every Student<br />
            <span className="hero-highlight">Discovers Their Best</span>
          </h1>
          <p className="hero-subtitle">
            A nurturing academic community for Grades 1–10, committed to excellence,
            curiosity, and character.
          </p>
          <div className="hero-actions">
            <Link to="/register" className="btn btn-gold btn-lg">Enroll Now</Link>
            <Link to="/about" className="btn btn-ghost btn-lg">Learn More</Link>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span>↓</span>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-bar">
        {stats.map((s) => (
          <div key={s.label} className="stat-item">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section className="section features-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-eyebrow">Why Greenfield</span>
            <h2 className="section-title">An Education That Lasts a Lifetime</h2>
            <p className="section-desc">
              We believe every child is capable of extraordinary things when given the right
              environment, guidance, and encouragement.
            </p>
          </div>
          <div className="features-grid">
            {features.map((f) => (
              <div key={f.title} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENTS */}
      <section className="section announcements-section">
        <div className="section-container two-col">
          <div className="announce-text">
            <span className="section-eyebrow">Stay Informed</span>
            <h2 className="section-title">Upcoming Events &amp; Holidays</h2>
            <p className="section-desc">
              Keep track of important school dates, holidays, and events. Full calendar
              available on our About Us page.
            </p>
            <Link to="/about" className="btn btn-navy">View Full Calendar</Link>
          </div>
          <div className="announce-list">
            {announcements.map((a) => (
              <div key={a.title} className={`announce-item ${a.type}`}>
                <span className="announce-date">{a.date}</span>
                <span className="announce-title">{a.title}</span>
                <span className={`announce-badge ${a.type}`}>
                  {a.type === 'holiday' ? '🏖 Holiday' : '📅 Event'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2>Ready to Join Our Community?</h2>
          <p>Create your student account and access coursework, teacher info, and more.</p>
          <div className="cta-actions">
            <Link to="/register" className="btn btn-gold btn-lg">Create Account</Link>
            <Link to="/contact" className="btn btn-ghost-white btn-lg">Get In Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
