function Contact() {
  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <h2>Let's Work Together</h2>

      <p className="contact-subtitle">
        Have a project in mind? Let's discuss how we can help
        bring your ideas to life.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />

        <input type="email" placeholder="Your Email Address" />

        <textarea
          rows="6"
          placeholder="Tell us about your project..."
        ></textarea>

        <button type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;