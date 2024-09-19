import React from 'react'

const  ProgressBar = ({bgcolor, progress}) => {
    const Parentdiv = {
        height: '12%',
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: '1.5em'
    }

    const Childdiv = {
        height: '12%',
        width: `${progress}%`,
        backgroundColor: 'black',
        /* backgroundColor: (() => {
            switch (bgcolor) {
                case "1": return "blue"
                case "2": return "green"
                case "3": return "red"
            }
        })(), */
       borderRadius:40,
        textAlign: 'right',
        flex: '1 30px',
    }

    const progresstext = {
        padding: 10,
        color: 'white',
        fontWeight: 900
      }

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  )
}

export default ProgressBar
