const holidays = [
  { date: 'September 3, 2024', event: 'First Day of School', type: 'event' },
  { date: 'September 17, 2024', event: 'Ganesh Chaturthi – School Closed', type: 'holiday' },
  { date: 'October 12, 2024', event: 'Dussehra – School Closed', type: 'holiday' },
  { date: 'November 1, 2024', event: 'Diwali Break', type: 'holiday' },
  { date: 'November 15, 2024', event: 'Guru Nanak Jayanti – School Closed', type: 'holiday' },
  { date: 'December 23, 2024 – January 3, 2025', event: 'Winter Vacation', type: 'holiday' },
  { date: 'January 6, 2025', event: 'School Resumes', type: 'event' },
  { date: 'January 26, 2025', event: 'Republic Day – School Closed', type: 'holiday' },
  { date: 'March 14, 2025', event: 'Holi – School Closed', type: 'holiday' },
  { date: 'April 18, 2025', event: 'Good Friday – School Closed', type: 'holiday' },
  { date: 'May 1, 2025', event: 'May Day – School Closed', type: 'holiday' },
  { date: 'June 13, 2025', event: 'Last Day of School / Graduation', type: 'event' },
  { date: 'June 16 – Sep 1, 2025', event: 'Summer Break', type: 'holiday' },
];

const terms = [
  { label: 'Term 1', dates: 'Sep 3 – Nov 26, 2024', weeks: '12 weeks' },
  { label: 'Term 2', dates: 'Dec 2, 2024 – Mar 14, 2025', weeks: '14 weeks' },
  { label: 'Term 3', dates: 'Mar 24 – Jun 13, 2025', weeks: '12 weeks' },
];

const values = [
  { icon: '🌟', title: 'Excellence', desc: 'We hold ourselves to the highest academic and personal standards.' },
  { icon: '🤝', title: 'Respect', desc: 'Every student, teacher, and family member is treated with dignity.' },
  { icon: '🔍', title: 'Curiosity', desc: 'We ignite a love of learning that lasts a lifetime.' },
  { icon: '💪', title: 'Resilience', desc: 'Students learn to persevere and grow through challenges.' },
  { icon: '🌍', title: 'Community', desc: 'We are stronger together — school, family, and society.' },
  { icon: '🎨', title: 'Creativity', desc: 'Imagination and innovation are celebrated in every classroom.' },
];

export default function About() {
  return (
    <div className="page-about">
      {/* HERO */}
      <section className="inner-hero about-hero">
        <div className="hero-overlay"></div>
        <div className="inner-hero-content">
          <span className="section-eyebrow light">About Greenfield Academy</span>
          <h1>Our Mission &amp; Story</h1>
          <p>Building a foundation for lifelong learning, leadership, and character.</p>
        </div>
      </section>

      {/* MISSION */}
      <section className="section">
        <div className="section-container two-col reverse">
          <div className="mission-text">
            <span className="section-eyebrow">Who We Are</span>
            <h2 className="section-title">Our Mission</h2>
            <p>
              Greenfield Academy is a forward-thinking educational institution serving students
              in Grades 1 through 10. Founded on the belief that every child deserves a
              world-class education, we combine rigorous academics with social-emotional
              learning, arts, sports, and community involvement.
            </p>
            <p>
              Our teachers are more than educators — they are mentors, role models, and
              champions for every student. We tailor our instruction to meet each learner
              where they are and push them toward where they can be.
            </p>
            <p>
              We partner closely with families to ensure a consistent, supportive environment
              both at school and at home. Together, we build confident, compassionate, and
              curious learners ready to thrive in the 21st century.
            </p>
          </div>
          <div className="mission-visual">
            <div className="mission-card-grid">
              {['🎓 Founded 1998', '🏫 Modern Campus', '👨‍👩‍👧‍👦 Family Partnership', '🌐 Global Mindset'].map((item) => (
                <div key={item} className="mission-chip">{item}</div>
              ))}
              <div className="mission-quote">
                "Education is not the filling of a pail, but the lighting of a fire."
                <span>— W.B. Yeats</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section values-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-eyebrow">What We Stand For</span>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="value-card">
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACADEMIC CALENDAR */}
      <section className="section calendar-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-eyebrow">Academic Year 2024–2025</span>
            <h2 className="section-title">School Calendar</h2>
          </div>

          {/* Terms */}
          <div className="terms-grid">
            {terms.map((t) => (
              <div key={t.label} className="term-card">
                <h3 className="term-label">{t.label}</h3>
                <p className="term-dates">{t.dates}</p>
                <span className="term-weeks">{t.weeks}</span>
              </div>
            ))}
          </div>

          {/* Holiday Table */}
          <h3 className="sub-heading">Holidays &amp; Key Dates</h3>
          <div className="calendar-table-wrap">
            <table className="calendar-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Event</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {holidays.map((h) => (
                  <tr key={h.event} className={`row-${h.type}`}>
                    <td className="cal-date">{h.date}</td>
                    <td className="cal-event">{h.event}</td>
                    <td>
                      <span className={`badge badge-${h.type}`}>
                        {h.type === 'holiday' ? '🏖 Holiday' : '📅 Event'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
