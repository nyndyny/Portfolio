export default function Education() {
  return (
    <section id="education">
      <h2>Education</h2>

      <div className="card education-card">
        <div className="education-header">
          <h3>Bachelor of Science in Computer Science, minor in Mathematics</h3>
          <span className="education-period">Aug 2020 - May 2024</span>
        </div>

        <p className="education-school">University of Florida, Gainesville</p>

        <p className="education-details">
          GPA: 3.83/4.0
        </p>

        <p className="education-details">
          Relevant Coursework:
        </p>

        <ul>
          <li>Data Structures & Algorithms</li>
          <li>Distributed Systems</li>
          <li>Operating Systems</li>
          <li>Machine Learning</li>
          <li>Natural Language Processing</li>
          <li>Computer Networks</li>
          <li>Information & Database Systems</li>
          <li>Computer Organization & Architecture</li>
        </ul>
      </div>
    </section>
  );
}