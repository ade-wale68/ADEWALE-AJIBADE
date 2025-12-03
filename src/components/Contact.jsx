import React, { useState } from "react";
import React from 'react';
import "../styles/Contact.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could send the data to an API or email service
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="contact-section">
      <h1>Contact Me</h1>
      <p>
        Have a project in mind or just want to say hello? Fill out the form below and I'll get back to you as soon as possible.
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
          <p>Phone: +234 000 000 0000</p>
          <p>Location: Lagos, Nigeria</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
          {submitted && <p className="success-msg">Thank you! Your message has been sent.</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
