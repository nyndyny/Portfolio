const projects = [
  {
    title: "Movie Recommender System",
    period: "Jan 2024 – Apr 2024",
    tech: "Golang, Node.js, Angular, MySQL, AWS, Gemini LLM",
    bullets: [
      "Developed a web-based movie recommendation platform using content-based filtering, enhanced with Google Gemini LLM for personalized suggestions",
      "Built a responsive frontend using Angular (TypeScript) and a RESTful backend in Golang",
      "Integrated MySQL database hosted on AWS for scalable data storage and retrieval",
    ],
    github: "https://github.com/nyndyny/Movie-Recommender-System",
    demo: null,
  },
  {
    title: "Peer-to-Peer File Sharing System",
    period: "Aug 2023 – Dec 2023",
    tech: "Java, Networking, Distributed Systems",
    bullets: [
      "Implemented a multi-threaded, distributed peer-to-peer file sharing system in Java",
      "Designed a structured peer communication algorithm for fault-tolerant data transfer",
      "Achieved a 3× improvement in transmission speed over traditional file transfer models",
    ],
    github: "https://github.com/nyndyny/P2P-File-Sharing",
    demo: null,
  },
  {
    title: "Image-Based AQI Prediction",
    period: "Aug 2023 – Dec 2023",
    tech: "Python, Deep Learning, CNN, Transfer Learning",
    bullets: [
      "Built CNN-based models to predict AQI parameters and air quality categories from images",
      "Applied transfer learning techniques to improve performance",
      "Achieved 95.79% classification accuracy on the final model",
    ],
    github: "https://github.com/nyndyny/Image-Based-AQI-Prediction",
    demo: null,
  },
  {
    title: "Tic-Tac-Toe AI Agent",
    period: "Aug 2023 – Dec 2023",
    tech: "Python, Machine Learning, Neural Networks",
    bullets: [
      "Conducted comparative analysis of SVM, KNN, and ANN models for move and outcome prediction",
      "Engineered an ANN-based AI agent with ~95% accuracy",
      "Enabled near-perfect gameplay through optimized training and evaluation",
    ],
    github: null,
    demo: null,
  },
  {
    title: "Full Compiler Implementation",
    period: "Jan 2023 – Apr 2023",
    tech: "Java, JUnit",
    bullets: [
      "Implemented a custom Java compiler from scratch supporting 10+ token types and 25+ keywords",
      "Designed lexical analysis and grammar parsing components",
      "Validated correctness using 150+ JUnit test cases for scanner and parser modules",
    ],
    github: "https://github.com/nyndyny/Compiler-Implementation",
    demo: null,
  },
  {
    title: "ARM Emulator",
    period: "Jan 2022 – Apr 2022",
    tech: "C++, Assembly Language",
    bullets: [
      "Built an ARM emulator to translate machine language code to assembly language code scoping over 30+ ARM instruction opcodes",
      "Simulated a register based memory architecture to store respective data during each cycle",
    ],
    github: null,
    demo: null,
  },
  {
    title: "Delivery Simulator",
    period: "Aug 2021 – Dec 2021",
    tech: "C++",
    bullets: [
      "Built a delivery simulator to compute optimal delivery path in user-defined simulation environment",
      "Compared the performance of greedy algorithms like Dijkstra and Bellman-Ford",
      "Added features to calculate fuel consumption and cost, carbon emissions, and estimated delivery time",
    ],
    github: "https://github.com/nyndyny/Delivery-Simulator",
    demo: null,
  },
   {
    title: "Minesweeper Game",
    period: "Jan 2021 – Apr 2021",
    tech: "C++, SFML",
    bullets: [
      "Recreated the classic Minesweeper game with randomized or customizable board options",
      "Incorporated a cheat mode to help beginners to understand the game",
    ],
    github: "https://github.com/nyndyny/Minesweeper",
    demo: null,
  },
  {
    title: "Image Processor",
    period: "Jan 2021 – Apr 2021",
    tech: "C++",
    bullets: [
      "Designed and implemented an image editing application to create a similar program to Photoshop",
      "Processed .tga files to introduce image editing features such as collage, image overlay, gray-scale transformation",
    ],
    github: null,
    demo: null,
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((project, index) => (
          <div key={index} className="card project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className="project-period">{project.period}</span>
            </div>
            <p className="project-tech">{project.tech}</p>
            <ul>
              {project.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub →
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
