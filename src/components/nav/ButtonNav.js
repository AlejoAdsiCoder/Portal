import React, { useState } from 'react'
import Hamburger from 'hamburger-react'
import "./ButtonNav.css"

export const ButtonNav = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div>
        <Hamburger toggled={isOpen} toggle={setOpen} onToggle={toggled => {
          if (toggled) {
            <nav>
              <a href='#'>Home</a>
              <a href='#'>Quien soy</a>
              <a href='#'>Servicios</a>
              <a href='#'>Portafolio</a>
            </nav>
          }
        }} />
     </div>
  )
}
