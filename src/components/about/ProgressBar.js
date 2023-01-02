import React from 'react'

const  ProgressBar = ({bgcolor, progress, height}) => {

    

    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 50
    }

    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: (() => {
            switch (bgcolor) {
                case "1": return "blue"
                case "2": return "green"
                case "3": return "red"
            }
        })(),
       borderRadius:40,
        textAlign: 'right',
        flex: '1 30px',
    }

    const progresstext = {
        padding: 10,
        color: 'black',
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
