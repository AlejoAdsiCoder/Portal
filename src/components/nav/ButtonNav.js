import React, { useRef, useState } from 'react'
import Hamburger from 'hamburger-react'
import "./ButtonNav.css"
import { menuItems } from '../../MenuItems';
import {useClickAway} from 'react-use'
import { Social } from '../socialnav';

export const ButtonNav = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="mobile-menu">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      {isOpen && (
        <div className="menu-container">
          <ul className="menu-list">
            {menuItems.map((route) => {

              return (
                <li key={route.text} className="menu-option">
                  <a
                    onClick={() => setOpen((prev) => !prev)}
                    className="menu-link"
                    href={route.path}
                  >
                    <span className="menu-title">{route.text}</span>
                    { route.icon }
                  </a>
                </li>
              );
            })}
          </ul>
          <Social />
        </div>
      )}
    </div>
  )
}
