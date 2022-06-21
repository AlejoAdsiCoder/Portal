import React, { useEffect, useRef } from 'react';
import { Photo } from './Photo';
import Foto  from '../../assets/img/photo.jpeg';
import { Section } from './Section';
import Typed from 'typed.js';
import { Social } from '../socialnav';
import {Animated} from "react-animated-css";
import { Button } from './Button';

const Portada = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Html, CSS, JS", "React", "PHP", "MySql", "Drupal"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      
      typeSpeed: 40,
      backSpeed: 40,
      backDelay: 100,
      loop: true
    });

    return () => {
      typed.destroy();
    }
  }, [])

  return (
    <div>
        <Section>
            <div className='data font-face-pr'>
            <Animated animationIn="bounceInDown" isVisible={true}>
              <Photo src={Foto} alt='Foto-personal' />
            </Animated>
            <Animated animationIn="bounceInUp" isVisible={true}>
              <h1>{'<>'}Bienvenido, yo soy Alejandro Patiño Cardona{'</>'}</h1>
              <p>Desarrollador en {'<'}<span ref={el}></span>{'/>'}</p>
            </Animated>
            <Social />
            <Button className='play'>Conoceme</Button>
            </div>
        </Section>
    </div>
  )
}

export default Portada;
