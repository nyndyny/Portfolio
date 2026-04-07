export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-header">Contact Me</h2>
      <form
        className="contact-form"
        action="https://formspree.io/f/mbdlnjgp"
        method="POST"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}