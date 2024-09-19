import React, { useState } from 'react'
import {db} from '../../firebase'
import { useEffect } from 'react'
import BgProject from './BgProject'
import screenlogin from '../../assets/img/screenlogin.png'
import { AboutContent } from '../about/AboutContent'
import { Animated } from 'react-animated-css'


export const Projects = () => {

    const parentSection = {
        display: 'flex',
        width: '100%'
    }

     const [projects, setprojects] = useState([]) 

     const items = async () => {
        const docs = [];
        db.collection("projects").get().then((querySnapshot) => {
            querySnapshot.forEach(doc => {
                docs.push({...doc.data(), id:doc.id})
                setprojects(docs)
                console.log(projects)
            });
        })
    }

    useEffect(() => {
        items()
      }, []) 

  return (
    <div>
        <AboutContent>
            <section style={parentSection} className='projects-info' >
                <Animated className='aboutme-projects' animationIn="bounceInDown" isVisible={true}>  
                    {
                        projects.map((pj, index) => (
                            
                            <BgProject bgImage={screenlogin} title={"Gesport"}>
                                <section>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae eius qui non molestias accusantium aliquam voluptate maxime quas in. Explicabo nisi quam libero quas ea voluptatibus molestiae! Ad, neque dolorem.
                                </section>
                            </BgProject>
                        ))
                    }
                </Animated>
            </section>
        </AboutContent>
    </div>
  )
}
