import React from 'react'
import { Photo } from './Photo'
import './style.css';

export const Me = ({Foto}) => {
  return (
    <div>
        <Photo src={Foto} className="personal__photo" alt='Foto-personal' />
    </div>
  )
}
