import React, { useState } from 'react';
import { Home, User, Briefcase, Mail, MessageCircle } from 'lucide-react';
import "./HeaderMenu.css"
import { Link, useLocation } from 'react-router-dom';

const HeaderMenu = () => {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);

  const phoneNumber = '573113943383'; // Reemplaza con tu número
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  

  const menuItems = [
    { id: 'home', icon: <Home size={24} />, text: 'Inicio', path: '/' },
    { id: 'about', icon: <User size={24} />, text: 'Acerca de mí', path: '/about' },
    { id: 'portfolio', icon: <Briefcase size={24} />, text: 'Portafolio', path: '/projects' },
    { id: 'contact', icon: <MessageCircle size={24} />, text: 'Contacto' },
  ];

  return (
    <div className="header-container">
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
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
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
    </div>
  );
};

export default HeaderMenu;