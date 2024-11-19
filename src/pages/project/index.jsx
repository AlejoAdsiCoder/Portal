import React, { useEffect, useState } from 'react'
import { AboutContent } from '../../components/about/AboutContent'
import { Animated } from 'react-animated-css'
import { useLocation, useParams } from 'react-router-dom'
import ImageSlider from "react-simple-image-slider"

import screenlogin from '../../assets/img/screenlogin.png'
import screenuser from '../../assets/img/screenuser.png'
import screendetail from '../../assets/img/screendetail.png'
import screencalendar from '../../assets/img/screencalendar.png'
import screenreserva from '../../assets/img/screenreserva.png'

import screenaddcon from '../../assets/img/screenaddcon.png'
import screenscreeneditcon from '../../assets/img/screeneditcon.png'
import screenfiltercon from '../../assets/img/screenfiltercon.png'
import contactos from '../../assets/img/contactos.png'

import screenlogintf from '../../assets/img/screenlogintf.png'
import screensignuptf from '../../assets/img/screensignuptf.png'
import screentouchtf from '../../assets/img/screentouchtf.png'
import techfrenetic from '../../assets/img/techfrenetic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Social } from '../../components/socialnav'

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export const ProjectSelected = ({ title, BgImage }) => {

  const parentSection = {
    display: 'flex',
    width: '100%'
  }

  const { id } = useParams();

  const location = useLocation();

  const { pj } = location.state || {};

  const strTechs = pj?.Technologies

  const techs = strTechs ? strTechs.split(",") : [];

  const [images, setImages] = useState([]);

  const gesportImages = [
      screenlogin,
      screenuser,
      screendetail,
      screencalendar,
      screenreserva
  ]

  const contactsImages = [
    screenaddcon,
    screenfiltercon,
    screenscreeneditcon,
    contactos,
  ]

  const techfreneticImages = [
    techfrenetic,
    screenlogintf,
    screensignuptf,
    screentouchtf,
  ]

  const getImages = (id) => {
    switch(id) {         
      case "Gesport":
        return gesportImages 
      
      case "Contacts":
        return contactsImages 

      case "TechFrenetic":
        return techfreneticImages 
  
      default:
        return [];
    }
  }

  useEffect(() => {
    const fetchedImages = getImages(id);
    setImages(fetchedImages);
    console.log(images)
  }, [id]);
  
  return (
    <div>
      <AboutContent>
        <section style={parentSection} className='projects-info'>
        <Animated className='aboutme-projects' animationIn="bounceInDown" isVisible={true}>
          
            <h1>{`${ id }`}</h1>
            <p>{`${ pj?.Description }`}</p>

            <h3>Tecnologías</h3>
            <section className='aboutme-technologies'>
            {
              
              techs.map((item, index)=> (
                <div className='myskills' key={index}>
                  <i className={`devicon-${item}-plain`}></i>
                </div>
              ))
            }
            </section>
            <h3>Enlaces</h3>
            <section className='aboutme-technologies'>
              {
                pj.git &&
                  <div className='myskills'>
                    <a href={pj?.git} target="_blank" rel="noopener noreferrer">
                      <i className="devicon-github-plain"></i>
                    </a>
                  </div>
              }

              {
                pj.url &&
                  <div className='myskills'>
                    <a href={pj?.git} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGlobe} size="2x" />
                    </a>
                  </div>
              }
            </section>
            <h3>Capturas</h3>

            <div style={{ width: '100%', maxWidth: '100vw', overflow: 'hidden', padding: '0 10px', boxSizing: 'border-box' }}>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={true}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 3000 }}
                style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}
                breakpoints={{
                  450: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  720: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={typeof image === 'string' ? image : image.url}
                      alt={`Slide ${index}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

        </Animated>
        <Social />
        </section>
      </AboutContent>
    </div>
  )
}
