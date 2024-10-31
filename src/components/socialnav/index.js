import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import linked from './../../assets/icons/linkedin.svg';
import fb from './../../assets/icons/facebook.svg';
import git from './../../assets/icons/github.svg';

import { Bar } from './Bar';
import { Facebook, Github, Linkedin } from 'lucide-react';

export const Social = () => {
  return (
    <div>
        <Bar>
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
            </nav>
        </Bar>
    </div>
  )
}
