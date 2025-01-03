import React, { useState } from 'react'
import { Animated } from 'react-animated-css'
import { AboutContent } from './AboutContent'
import {db} from '../../firebase'
import { useEffect } from 'react'
import ProgressBar from './ProgressBar'
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';
import { Section } from '../Section'
import { Social } from '../socialnav'
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton'

export const AboutMe = () => {

  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/projects');
  }

    const Links = async () => {
      const docs = [];
      const xps = [];

      db.collection("skills").get().then((querySnapshot) => {
        
        querySnapshot.forEach(doc => {
          docs.push({...doc.data(), id:doc.id})
          setSkills(docs);
          setIsLoading(false);
        });
        
      })

      db.collection("timeline").get().then((querySnapshot) => {
        querySnapshot.forEach(xp => {
          xps.push({...xp.data(), id:xp.id})
          setExperiences(xps);
          setIsLoading(false);
        })
      })
    }

    useEffect(() => {
      Links()
    }, [])


  return (
    <Section>
    <div>
      <AboutContent>
       
       <Animated className='aboutme-info' animationIn="bounceInDown" animationOut="bounceOutUp" isVisible={true}>
       <div className='data font-face-pr'>
         <h2>Sobre mi</h2>
          <p>
          Soy Tecnólogo en Análisis y Desarrollo de Sistemas de información del SENA con 5 años de experiencia en el desarrollo web con
          mayor énfasis en el área del frontend incluyendo buenas prácticas de
          Maquetación y Javascript como también experiencia para la lógica de
          negocio en PHP y/o Node js, bases de datos para el backend y manejo de
          arquitectura Hexagonal y MVC para
          diversas tecnologías. Gusto y capacidad de aprendizaje por las nuevas herramientas y la innovación en la web, atención al detalle enfocando la calidad de los productos tecnológicos.
          Soy un autodidacta, el mundo de las tecnologías y la programación despertó mi interés desde temprana edad. Así mismo cuento con certificaciones en React, Angular, HTML CSS3 y Javascript.
          </p>
        </div>
       </Animated>
        <section className='about-me'>
       <Animated className='aboutme__skill' animationIn="bounceInLeft" animationOut="bounceOutLeft" isVisible={true}>
        <h2>Skills</h2>
          { isLoading ? (
            <div className="skills-skeleton-container">
              {[1,2,3,4].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <Skeleton 
                    circle 
                    width={40} 
                    height={40} 
                    style={{ marginRight: '10px' }} 
                  />
                  <Skeleton width={200} height={30} />
                </div>
              ))}
            </div>
          ) : (
              skills.map((skill, index) => (
              <div className='myskills' key={index}>
                    <i className={`devicon-${skill.name}-plain colored`}></i>
                    <ProgressBar skill={skill.name} bgcolor={`#00bcd4`} progress={skill.percent} height={30} />
                </div>
              )) 
            )
          }
       </Animated>

       <Animated className='aboutme__exp' animationIn="bounceInRight" animationOut="bounceOutRight" isVisible={true}>
        <h2>Experiencias</h2>
        <div className="timeline">
          <div className="timeline-container">
          { isLoading ? (
            <div className="skills-skeleton-container">
              {[1,2,3,4].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <Skeleton 
                    circle 
                    width={40} 
                    height={40} 
                    style={{ marginRight: '10px' }} 
                  />
                  <Skeleton width={200} height={30} />
                </div>
              ))}
            </div>
          ) : (
          experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-date-company">
                  <span>{exp.dates}</span><p>{exp.company}</p>
              </div>
              <div className="divider"></div>
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <p>{exp.description}</p>
                { exp.description2 && <p>{ exp.description2 }</p>}
              </div>
            </div> 
          )
          ))}
          </div>
        </div>
       </Animated>


       
       </section>
       <Animated animationIn="bounceInUp" animationOut="bounceOutUp" className="aboutme-btn" isVisible={true}>
          <Button onClick={handleClick} className='play download'>Mi portafolio</Button>
        </Animated>
       </AboutContent>
       <Social />
    </div>
    </Section>
  )
}
