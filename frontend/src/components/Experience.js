export default function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="card">
        <h3>Software Engineering Intern</h3>
        <p>Technical Consulting & Research • Sep 2024 - July 2025</p>
        <ul>
          <li>Developed a secure full-stack web application using React and Python Flask, integrating Auth0 for authentication, token-based security, and role-based access control; deployed on Heroku for scalable cloud hosting</li>
          <li>Created a cross-platform mobile application with React Native, adapting and optimizing the existing web app for mobile users with a consistent UX and full feature parity</li>
          <li>Designed and implemented a scalable MongoDB backend on Azure for session management and user data, ensuring high availability and performance</li>
        </ul>
      </div>
      <div className="card">
        <h3>Software Engineering Intern</h3>
        <p>Tata Consultancy Services • Jul 2023 - Aug 2023</p>
        <ul>
          <li>Engineered Python web scraping script, extracting text from URLs and sub-URLS to generate JSON files, laying the foundation for LLM, reducing data pre-processing time by 15%</li>
          <li>Curated airline reviews, trained generative AI model for automated reports, enabling improved customer service</li>
          <li>Conducted sentiment analysis on 200+ audio and text-based hotel feedback entries, yielding actionable improvement insights for hotel management</li>
        </ul>
      </div>
    </section>
  );
}
