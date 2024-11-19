import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import linked from './../../assets/icons/linkedin.svg';
import fb from './../../assets/icons/facebook.svg';
import git from './../../assets/icons/github.svg';

import { Bar } from './Bar';
import { Facebook, Github, Linkedin, MessageCircle } from 'lucide-react';

export const Social = () => {

  const phoneNumber = '573113943383'; // Reemplaza con tu número en formato internacional
  const message = '¡Hola! Me gustaría obtener más información de tus servicios de desarrollo de software.'; // Mensaje predeterminado
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Bar className="pres">
        <nav className='pres__social'>
          <a href="https://www.linkedin.com/in/alejandro-pdev" target="_blank" rel="noopener noreferrer">
            <Linkedin size={48} color="#181111" />
          </a>
          <a href="https://github.com/AlejoAdsiCoder" target="_blank" rel="noopener noreferrer">
            <Github size={48} color="#181111" />
          </a>
          <a href="https://www.facebook.com/AlejoPatinoC/" target="_blank" rel="noopener noreferrer">
            <Facebook size={48} color="#181111" />
          </a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={48} color="#181111" />
          </a>
        </nav>
    </Bar>
  )
}
