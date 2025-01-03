import React, { useState } from 'react';
import {db} from '../../firebase';
import { useEffect } from 'react';
import BgProject from './BgProject';
import screenlogin from '../../assets/img/screenlogin.png';
import screenlogintf from '../../assets/img/screenlogintf.png';
import contactos from '../../assets/img/contactos.png';
import { AboutContent } from '../about/AboutContent';
import { Animated } from 'react-animated-css';
import { useNavigate } from 'react-router-dom';
import './Projects.css';
import { Social } from '../socialnav';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';

export const Projects = () => {

    const parentSection = {
        display: 'flex',
        width: '100%'
    }

     const [projects, setprojects] = useState([]);
     const [isLoading, setIsLoading] = useState(true);

     const navigate = useNavigate();

     const items = async () => {
        const docs = [];
        db.collection("projects").get().then((querySnapshot) => {
            querySnapshot.forEach(doc => {
                docs.push({...doc.data(), id:doc.id})
                setprojects(docs);
                setIsLoading(false);
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
                        projects.map((pj, index) => {
                            switch (pj.id) {
                                case "TechFrenetic":
                                    return <BgProject bgImage={screenlogintf} title={pj.id} data={pj} id={index} />
                                    
                                case "Gesport":
                                    return <BgProject bgImage={screenlogin} title={pj.id} data={pj} id={index} />

                                case "Contacts":
                                    return <BgProject bgImage={contactos} title={pj.id} data={pj} id={index} />
                                    
                                default:
                                    break;
                            }
                        }))
                    }
                    </section>
                </Animated>
                <Social />
            </section>
        </AboutContent>
    </div>
  )
}
