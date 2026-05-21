import { useState } from 'react';

const subjects = [
  {
    id: 'math',
    name: 'Mathematics',
    icon: '🔢',
    grades: '1–10',
    description:
      'From number sense and basic arithmetic in early grades to algebra, geometry, and pre-calculus in upper grades. Students develop logical thinking and problem-solving skills.',
    topics: ['Arithmetic', 'Algebra', 'Geometry', 'Statistics', 'Pre-Calculus'],
    teachers: [
      { name: 'Mr. James Johnson', email: 'j.johnson@greenfield.edu', grades: 'Grades 1–5', avatar: 'JJ' },
      { name: 'Ms. Linda Chen', email: 'l.chen@greenfield.edu', grades: 'Grades 6–10', avatar: 'LC' },
    ],
  },
  {
    id: 'english',
    name: 'English Language Arts',
    icon: '📖',
    grades: '1–10',
    description:
      'Developing reading comprehension, creative and expository writing, grammar, vocabulary, and literature analysis across all grade levels.',
    topics: ['Reading', 'Writing', 'Grammar', 'Literature', 'Public Speaking'],
    teachers: [
      { name: 'Ms. Patricia Williams', email: 'p.williams@greenfield.edu', grades: 'Grades 1–5', avatar: 'PW' },
      { name: 'Mr. Robert Thompson', email: 'r.thompson@greenfield.edu', grades: 'Grades 6–10', avatar: 'RT' },
    ],
  },
  {
    id: 'science',
    name: 'Science',
    icon: '🔬',
    grades: '1–10',
    description:
      'Hands-on investigation of life science, earth science, physical science, and advanced biology and chemistry for upper grades.',
    topics: ['Life Science', 'Earth Science', 'Physics', 'Chemistry', 'Environmental Science'],
    teachers: [
      { name: 'Dr. Anita Patel', email: 'a.patel@greenfield.edu', grades: 'Grades 1–5', avatar: 'AP' },
      { name: 'Ms. Maria Rodriguez', email: 'm.rodriguez@greenfield.edu', grades: 'Grades 6–10', avatar: 'MR' },
    ],
  },
  {
    id: 'social',
    name: 'Social Studies',
    icon: '🌍',
    grades: '1–10',
    description:
      'Exploring history, geography, civics, economics, and world cultures. Students build an understanding of their community, nation, and the wider world.',
    topics: ['Local History', 'World Geography', 'Civics', 'Economics', 'World Cultures'],
    teachers: [
      { name: 'Mr. Kevin Davis', email: 'k.davis@greenfield.edu', grades: 'Grades 1–5', avatar: 'KD' },
      { name: 'Ms. Sarah Kim', email: 's.kim@greenfield.edu', grades: 'Grades 6–10', avatar: 'SK' },
    ],
  },
  {
    id: 'pe',
    name: 'Physical Education',
    icon: '⚽',
    grades: '1–10',
    description:
      'Building fitness, teamwork, sportsmanship, and healthy lifestyles through a wide range of physical activities, sports, and wellness education.',
    topics: ['Team Sports', 'Athletics', 'Gymnastics', 'Swimming', 'Health & Wellness'],
    teachers: [
      { name: 'Coach Carlos Martinez', email: 'c.martinez@greenfield.edu', grades: 'Grades 1–5', avatar: 'CM' },
      { name: 'Coach Diana Brown', email: 'd.brown@greenfield.edu', grades: 'Grades 6–10', avatar: 'DB' },
    ],
  },
  {
    id: 'art',
    name: 'Visual Art',
    icon: '🎨',
    grades: '1–10',
    description:
      'Nurturing creativity through drawing, painting, sculpture, mixed media, and art history. Students develop personal expression and visual communication skills.',
    topics: ['Drawing', 'Painting', 'Sculpture', 'Digital Art', 'Art History'],
    teachers: [
      { name: 'Ms. Emily Taylor', email: 'e.taylor@greenfield.edu', grades: 'Grades 1–5', avatar: 'ET' },
      { name: 'Mr. Brian Anderson', email: 'b.anderson@greenfield.edu', grades: 'Grades 6–10', avatar: 'BA' },
    ],
  },
  {
    id: 'music',
    name: 'Music',
    icon: '🎵',
    grades: '1–10',
    description:
      'A rich musical education encompassing singing, rhythm, music theory, instrument instruction, and ensemble performance for all grade levels.',
    topics: ['Music Theory', 'Choir', 'Instruments', 'Composition', 'Music History'],
    teachers: [
      { name: 'Ms. Angela Jackson', email: 'a.jackson@greenfield.edu', grades: 'Grades 1–5', avatar: 'AJ' },
      { name: 'Mr. David White', email: 'd.white@greenfield.edu', grades: 'Grades 6–10', avatar: 'DW' },
    ],
  },
  {
    id: 'cs',
    name: 'Computer Science',
    icon: '💻',
    grades: '3–10',
    description:
      'From digital literacy and block-based coding in lower grades to Python, web development, and data fundamentals in upper grades.',
    topics: ['Digital Literacy', 'Block Coding', 'Python', 'Web Design', 'Data & AI'],
    teachers: [
      { name: 'Mr. Michael Nguyen', email: 'm.nguyen@greenfield.edu', grades: 'Grades 3–7', avatar: 'MN' },
      { name: 'Ms. Lisa Garcia', email: 'l.garcia@greenfield.edu', grades: 'Grades 8–10', avatar: 'LG' },
    ],
  },
  {
    id: 'lang',
    name: 'Foreign Languages',
    icon: '🗣️',
    grades: '4–10',
    description:
      'Spanish and French language instruction building conversational fluency, cultural appreciation, and global communication skills.',
    topics: ['Spanish', 'French', 'Conversation', 'Grammar', 'Culture & Literature'],
    teachers: [
      { name: 'Ms. Isabella Lopez', email: 'i.lopez@greenfield.edu', grades: 'Spanish Gr. 4–10', avatar: 'IL' },
      { name: 'Mr. François Müller', email: 'f.muller@greenfield.edu', grades: 'French Gr. 4–10', avatar: 'FM' },
    ],
  },
  {
    id: 'library',
    name: 'Library & Research',
    icon: '📚',
    grades: '1–10',
    description:
      'Teaching information literacy, research skills, independent reading, and a love of books and storytelling through our extensive school library.',
    topics: ['Research Skills', 'Independent Reading', 'Storytelling', 'Media Literacy', 'Book Clubs'],
    teachers: [
      { name: 'Ms. Karen Harris', email: 'k.harris@greenfield.edu', grades: 'Grades 1–10', avatar: 'KH' },
    ],
  },
];

export default function Coursework() {
  const [activeSubject, setActiveSubject] = useState(subjects[0].id);
  const subject = subjects.find((s) => s.id === activeSubject);

  return (
    <div className="page-coursework">
      {/* HERO */}
      <section className="inner-hero coursework-hero">
        <div className="hero-overlay"></div>
        <div className="inner-hero-content">
          <span className="section-eyebrow light">Academic Programs</span>
          <h1>Coursework &amp; Subjects</h1>
          <p>Explore our comprehensive curriculum and meet the dedicated teachers behind each subject.</p>
        </div>
      </section>

      {/* SUBJECT BROWSER */}
      <section className="section">
        <div className="section-container">
          <div className="coursework-layout">
            {/* Sidebar */}
            <aside className="subject-sidebar">
              <h3 className="sidebar-title">Subjects</h3>
              {subjects.map((s) => (
                <button
                  key={s.id}
                  className={`subject-tab ${activeSubject === s.id ? 'active' : ''}`}
                  onClick={() => setActiveSubject(s.id)}
                >
                  <span className="subject-tab-icon">{s.icon}</span>
                  <span className="subject-tab-name">{s.name}</span>
                  <span className="subject-tab-grade">Gr. {s.grades}</span>
                </button>
              ))}
            </aside>

            {/* Detail Panel */}
            <div className="subject-detail" key={subject.id}>
              <div className="subject-header">
                <div className="subject-header-icon">{subject.icon}</div>
                <div>
                  <h2 className="subject-name">{subject.name}</h2>
                  <span className="subject-grade-tag">Grades {subject.grades}</span>
                </div>
              </div>

              <p className="subject-desc">{subject.description}</p>

              <div className="subject-topics">
                <h4>Topics Covered</h4>
                <div className="topic-chips">
                  {subject.topics.map((t) => (
                    <span key={t} className="topic-chip">{t}</span>
                  ))}
                </div>
              </div>

              <div className="subject-teachers">
                <h4>Teaching Team</h4>
                <div className="teacher-cards">
                  {subject.teachers.map((t) => (
                    <div key={t.name} className="teacher-card">
                      <div className="teacher-avatar">{t.avatar}</div>
                      <div className="teacher-info">
                        <strong>{t.name}</strong>
                        <span className="teacher-grades">{t.grades}</span>
                        <a href={`mailto:${t.email}`} className="teacher-email">
                          ✉ {t.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
