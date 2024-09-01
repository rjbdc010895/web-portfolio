import React from "react";
import "./SocialMedia.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const SocialMedia = () => {
  return (
    <section className="social-media-section">
      <div className="social-media-icons">
        <a
          href="https://www.facebook.com/robertjan.delacruz"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/rj.delacruz08/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/robert-jan-b-dela-cruz-029518100/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/rjbdc010895"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaGithub />
        </a>
      </div>
      <p className="copyright-text">ROBERT JAN B. DELA CRUZ © 2024</p>
    </section>
  );
};

export default SocialMedia;
