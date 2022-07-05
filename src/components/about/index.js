import React from 'react'
import { Animated } from 'react-animated-css'
import { AboutContent } from './AboutContent'

export const AboutMe = () => {
  return (
    <div>
      <AboutContent>
        <section className='about-me'>
       <Animated animationIn="bounceInDown" isVisible={true}>
       <div className='data font-face-pr'>
         <h1>Sobre mi</h1>
          <p>
          Soy Tecnólogo en Análisis y Desarrollo de Sistemas de información del SENA con 3 años y 6 meses de experiencia en tecnologías y frameworks para desarrollo web. 
          Conocimiento en lenguajes frontend y backend: HTML, CSS, Javascript, JQuery, Sass, Bootstrap, Bulma, PHP, SQL. Site builder de CMS como Drupal, Joomla y Wordpress. Manejo de bases de datos MySQL.
          Buena comprensión de algoritmos para la programación con capacidad técnica e investigativa para la solución de requerimientos o desarrollo de funcionalidades con énfasis en Frontend (Lado del cliente). Gusto y capacidad de aprendizaje por las interfaces interactivas, funcionales y/o adaptables.
          Soy un autodidacta, el mundo de las tecnologías y la programación despertó mi interés desde temprana edad, empezando por aprender Linux para objetivos personales. Así mismo cuento con certificaciones en React, Angular, HTML CSS3 y Javascript. Manejo del idioma inglés certificado por el SENA.
          </p>
        </div>
       </Animated>
       </section>
       </AboutContent>
    </div>
  )
}
