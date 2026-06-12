function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />

        <input type="email" placeholder="Your Email" />

        <textarea
          rows="5"
          placeholder="Tell us about your project"
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;