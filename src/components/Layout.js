import React, { useState } from 'react'
import { Animated } from 'react-animated-css'
import { ButtonNav } from './nav/ButtonNav'
import video from './portada/bg.mp4'
import { Section } from './Section'
import Foto  from '../assets/img/photo.jpeg';
import { Me } from './portada/me/Me'
import { Button } from './portada/Button'
import { useNavigate } from 'react-router-dom'
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import HeaderMenu from './HeaderMenu'

export const Layout = ({children}) => {

  return (
    <div>
      <div className='container'>
        <video src={video} autoPlay loop muted></video>
        <ButtonNav />
        <HeaderMenu />
            
            {children}
            
      </div>  
    </div>
  )
}
