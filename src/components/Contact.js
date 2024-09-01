import React, { useRef, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          sectionRef.current.classList.add("show-title");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <h2>Contact Me</h2>
      <hr className="contact-hr" />
      <div className="contact-content">
        <p>If you like to get in touch, feel free to reach out via email</p>
      </div>
      <div className="contact-form-section">
        <form className="contact-form">
          <div className="form-group">
            <input type="text" name="name" placeholder="Name" required></input>
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              required
            ></input>
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
