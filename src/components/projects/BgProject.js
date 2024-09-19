import React from 'react'

const BgProject = ({bgImage, title}) => {

    const Image = {
        backgroundImage: `url(${bgImage})`,
        width: '50%',
        height: 366,
        backgroundSize: 'cover',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'self-end'
    }

  return (
        <section style={Image}>
          <p>{`${title}`}</p>
        </section>
  )
}

export default BgProject