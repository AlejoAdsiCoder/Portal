import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import linked from './../../assets/icons/linkedin.svg';
import fb from './../../assets/icons/facebook.svg';
import git from './../../assets/icons/github.svg';

import { Bar } from './Bar';

export const Social = () => {
  return (
    <div>
        <Bar>
            <nav className='pres__social'>
                <a href="https://www.linkedin.com/in/alejandro-pdev"><img src={linked} alt="linkedln" /></a>
                <a href="https://github.com/AlejoAdsiCoder"><img src={git} alt="Github" /></a>
                <a href="https://www.facebook.com/AlejoPatinoC/"><img src={fb} alt="Facebook" /></a>
                
            </nav>
        </Bar>
    </div>
  )
}
