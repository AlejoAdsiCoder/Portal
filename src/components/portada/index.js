import React, { useEffect, useRef } from 'react';
import Foto  from '../../assets/img/photo2.jpeg';
import { Section } from './../Section';
import Typed from 'typed.js';
import { Social } from '../socialnav';
import {Animated} from "react-animated-css";
import { Button } from './Button';
import video from './bg.mp4';
import { useNavigate } from 'react-router-dom';
import { Me } from './me/Me';

const Portada = () => {

  const el = useRef(null);

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    if (e.target.value == "download") {

      fetch("HVAlejandro-11-24.pdf").then((response) => {
        response.blob().then((blob) => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);

          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "HVAlejandro.pdf";
          alink.click();
        });
      });
    } 

    else {
      navigate('/about');
    }
    
  }

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Html", "CSS", "Javascript", "React", "PHP", "MySql", "Drupal", "Angular", "C#"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      
      typeSpeed: 90,
      backSpeed: 80,
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
      <section className='main-content'>
      <video src={video} autoPlay loop muted></video> 
            
        <Animated animationIn="bounceInDown" isVisible={true}>
          {/* <CSSTransition in={move} timeout={200} classNames="my-node"> */}
            <Me Foto={Foto} />
          {/* </CSSTransition> */}
        </Animated>

        <Animated className='aboutme-main' animationIn="bounceInUp" isVisible={true}>
          <div className='data font-face-pr'>
            <h1><span className='aboutme-brackets'>{'<>'}</span>Bienvenido,<br /> soy <span className='aboutme-name'>Alejandro Patiño Cardona</span><span className='aboutme-brackets'>{'</>'}</span></h1>
            <p>Desarrollador en <span className='aboutme-code'>{'<'}<span ref={el}></span>{'/>'}</span></p>
          </div>
        </Animated>

          <Animated className='aboutme-buttons' animationIn="bounceInUp" isVisible={true}>
              <Button onClick={handleClick} value="download" className='download'>Descargar CV</Button>
              <Button onClick={handleClick} value="play" className='play'>Acerca de mí</Button>
        </Animated>
        <Social />
      </section> 
    </div>
    </Section>
  )
}

export default Portada;
