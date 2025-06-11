// Footer.jsx
import React from 'react';
import './Footer.css';
import { Animated } from 'react-animated-css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-container">
      <Animated animationIn="jello" isVisible={true}>
        <div className="footer-content">
            <p className="copyright-text">
            &copy; {currentYear} Desarrollado y diseñado con 🤎 por Alejandro Patiño C. Todos los derechos reservados.
            </p>
        </div>
      </Animated>
    </footer>
    
  );
};

export default Footer;