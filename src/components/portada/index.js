import React, { useEffect, useRef } from 'react';
import Foto  from '../../assets/img/photo.jpeg';
import { Section } from './../Section';
import Typed from 'typed.js';
import { Social } from '../socialnav';
import {Animated} from "react-animated-css";
import { Button } from './Button';
import { ButtonNav } from '../nav/ButtonNav';
import video from './bg.mp4';
import { useNavigate } from 'react-router-dom';
import { Me } from './me/Me';

const Portada = () => {

  const el = useRef(null);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  }

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
    <Section>
    <div>
      {/* <video src={video} autoPlay loop muted></video>
      <ButtonNav />*/}        
            
            <Animated animationIn="bounceInDown" isVisible={true}>
              {/* <CSSTransition in={move} timeout={200} classNames="my-node"> */}
                <Me Foto={Foto} />
              {/* </CSSTransition> */}
            </Animated>
            <Animated animationIn="bounceInUp" isVisible={true}>
              <div className='data font-face-pr'>
                <h1>{'<>'}Bienvenido, yo soy Alejandro Patiño Cardona{'</>'}</h1>
                <p>Desarrollador en {'<'}<span ref={el}></span>{'/>'}</p>
              </div>
              
            </Animated>
              <Animated animationIn="bounceInUp" isVisible={true}>
                 <Button onClick={handleClick} className='play'>Conoceme</Button>
            </Animated>
            <Social />
    </div>
    </Section>
  )
}

export default Portada;
