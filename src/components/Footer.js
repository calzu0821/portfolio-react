import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const iconSize = "2x";

  return (
    <footer className="text-dark py-4">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Cristina Alzuri</p>
        <div className="footer-icons-container">
          <a
            href="https://github.com/calzu0821"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FontAwesomeIcon className="text-dark" icon={faGithub} size={iconSize} />
          </a>
          <a
            href="https://www.linkedin.com/in/cristina-alzuri-shrm-cp/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FontAwesomeIcon className="text-dark" icon={faLinkedin} size={iconSize} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;