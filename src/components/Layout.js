import React from 'react'
import { ButtonNav } from './nav/ButtonNav'
import { Section } from './portada/Section'
import video from './portada/bg.mp4'

export const Layout = ({children}) => {
  return (
    <div>
        <video src={video} autoPlay loop muted></video>
        <ButtonNav />
            {children}
    </div>
  )
}
