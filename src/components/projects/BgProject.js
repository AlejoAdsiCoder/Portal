import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const BgProject = ({ bgImage, title, data }) => {

  const navigate = useNavigate();

  const Image = {
    backgroundImage: `url(${bgImage})`,
  }

  return (
    <article className='project'>
      <Link to={{ pathname: `/project/${title}` }} state={{ pj: data }}>
        <div className='project__img' style={Image}></div>
        <section className='project__title'>
          <h3>{`${title}`}</h3>
          <FontAwesomeIcon icon={faArrowRight} size="2x" />
        </section>
      </Link>
    </article>
  )
}

export default BgProject