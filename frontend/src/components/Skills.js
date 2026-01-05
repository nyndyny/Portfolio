const skills = [
    "C/C++",
    "Java",
    "Python",
    "Golang",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Angular.js",
    "SQL",
    "Git",
    "Shell Script",
    "HTML/CSS"
];

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul className="skills">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
