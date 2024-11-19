import React, { useState } from 'react';
import "./HeaderMenu.css"
import { Link, useLocation } from 'react-router-dom';
import { menuItems } from '../../MenuItems';
import { Animated } from 'react-animated-css';

const HeaderMenu = () => {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);

  /* const phoneNumber = '573113943383'; // Reemplaza con tu número
  const whatsappUrl = `https://wa.me/${phoneNumber}`; */

  const subject = "Solicitud de servicios de Desarrollo web"; // Cambia esto al asunto deseado
  const email = "alejop.9318@gmail.com"; // Cambia esto a tu dirección de correo
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  
  return (
    
    <div className="header-container">
      <Animated animationIn="jello" isVisible={true}>
      <nav className="nav-menu">
        {menuItems.map((item) => (
          <div key={item.id} className={`menu-item ${location.pathname === item.path ? 'active' : ''}`}>
            { item.path ? ( 
              <Link to={item.path}>
              <div className="icon-container">
                <div className="icon-button">
                  {item.icon}
                  <div className="tooltip">
                    {item.text}
                  </div>
                </div>
              </div>
              </Link>
              ) : (
                <a href={mailtoLink} target="_blank" rel="noopener noreferrer">
                  <div className="icon-container">
                    <div className="icon-button">
                      {item.icon}
                      <div className="tooltip">
                        {item.text}
                      </div>
                    </div>
                  </div>
                </a>
              )} 
          </div>
        ))}
      </nav>
      </Animated>
    </div>
    
  );
};

export default HeaderMenu;