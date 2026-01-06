export default function Hero() {
    return (
    <section className="hero">
        <h1 className="hero-name">Nandini Tripathi</h1>

        <h2 className="hero-title">
            Software Engineer
        </h2>

        <p className="hero-subtitle">
            Engineer with hands-on experience in full-stack development and AI/ML. Passionate about building
            scalable, high-impact systems.
        </p>

        <div className="hero-actions">
            <a href="./nandinis_resume.pdf" download="nandinis_resume.pdf" className="btn">
            Download CV
            </a>
            {/* <a
            href="https://github.com/nyndyny"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
            >
            GitHub
            </a> */}
        </div>
    </section>
    );
}
