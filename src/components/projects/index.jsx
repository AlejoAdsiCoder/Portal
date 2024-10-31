import React, { useState } from 'react'
import {db} from '../../firebase'
import { useEffect } from 'react'
import BgProject from './BgProject'
import screenlogin from '../../assets/img/screenlogin.png'
import techfrenetic from '../../assets/img/techfrenetic.png'
import contactos from '../../assets/img/contactos.png'
import { AboutContent } from '../about/AboutContent'
import { Animated } from 'react-animated-css'
import { useNavigate } from 'react-router-dom'
import './Projects.css'
import { Social } from '../socialnav'

export const Projects = () => {

    const parentSection = {
        display: 'flex',
        width: '100%'
    }

     const [projects, setprojects] = useState([]);

     const navigate = useNavigate();

     const items = async () => {
        const docs = [];
        db.collection("projects").get().then((querySnapshot) => {
            querySnapshot.forEach(doc => {
                docs.push({...doc.data(), id:doc.id})
                console.log(docs)
                setprojects(docs)
            });
        })
    }

    useEffect(() => {
        items() 
      }, []) 

  return (
    <div>
        <AboutContent>
            <section style={parentSection} className='projects-info'>
                <Animated animationIn="bounceInDown" className='aboutme-projects' isVisible={true}>
                    <h1 className='project__head'>Mis Proyectos</h1>
                    <section className='projects__content'>
                    {
                        projects.map((pj, index) => {
                            switch (pj.id) {
                                case "TechFrenetic":
                                    return <BgProject bgImage={techfrenetic} title={pj.id} data={pj} id={index} />
                                    
                                case "Gesport":
                                    return <BgProject bgImage={screenlogin} title={pj.id} data={pj} id={index} />

                                case "Contacts":
                                    return <BgProject bgImage={contactos} title={pj.id} data={pj} id={index} />
                                    
                                default:
                                    break;
                            }
                        })
                    }
                    </section>
                </Animated>
                <Social />
            </section>
        </AboutContent>
    </div>
  )
}
