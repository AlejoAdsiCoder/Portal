import React, { useState } from 'react'
import { Animated } from 'react-animated-css'
import { AboutContent } from './AboutContent'
import {db} from '../../firebase'
import { useEffect } from 'react'
import ProgressBar from './ProgressBar'
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';
import { Section } from '../Section'

export const AboutMe = () => {

  const [skills, setskills] = useState([]);
  const [experiences, setexperiences] = useState([]);

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
          console.log(docs)
          setskills(docs)
        });
        
      })

      db.collection("timeline").get().then((querySnapshot) => {
        querySnapshot.forEach(xp => {
          xps.push({...xp.data(), id:xp.id})
          setexperiences(xps)
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
        <section className='about-me'>
       <Animated className='aboutme-info' animationIn="bounceInDown" isVisible={true}>
       <div className='data font-face-pr'>
         <h2>Sobre mi</h2>
          <p>
          Soy Tecnólogo en Análisis y Desarrollo de Sistemas de información del SENA con 3 años y 6 meses de experiencia en tecnologías y frameworks para desarrollo web. 
          Conocimiento en lenguajes frontend y backend: HTML, CSS, Javascript, JQuery, Sass, Bootstrap, Bulma, PHP, SQL. Site builder de CMS como Drupal, Joomla y Wordpress. Manejo de bases de datos MySQL.
          Buena comprensión de algoritmos para la programación con capacidad técnica e investigativa para la solución de requerimientos o desarrollo de funcionalidades con énfasis en Frontend (Lado del cliente). Gusto y capacidad de aprendizaje por las interfaces interactivas, funcionales y/o adaptables.
          Soy un autodidacta, el mundo de las tecnologías y la programación despertó mi interés desde temprana edad, empezando por aprender Linux para objetivos personales. Así mismo cuento con certificaciones en React, Angular, HTML CSS3 y Javascript. Manejo del idioma inglés certificado por el SENA.
          </p>
        </div>
       </Animated>
       
       <Animated className='aboutme__skill' animationIn="bounceInDown" isVisible={true}>
        <h2>Skills</h2>
          {
            skills.map((skill, index) => (
             <div className='myskills' key={index}>
                  <i className={`devicon-${skill.name}-plain colored`}></i>
                  <ProgressBar skill={skill.name} bgcolor={`#00bcd4`} progress={skill.percent} height={30} />
              </div>
            )) 
          }
       </Animated>

       <Animated className='aboutme__exp' animationIn="bounceInDown" isVisible={true}>
        <h2>Experiencias</h2>
        <div className="timeline">
          <div className="timeline-container">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-date-company">
                  <span>{exp.dates}</span><p>{exp.company}</p>
              </div>
              <div className="divider"></div>
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
       </Animated>


       <Animated animationIn="bounceInUp" isVisible={true}>
          <Button onClick={handleClick} className='play'>Mi portafolio</Button>
        </Animated>
       </section>
       </AboutContent>
    </div>
    </Section>
  )
}
