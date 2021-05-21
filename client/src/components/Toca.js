import React from 'react'

function Toca(props) {
  console.log("toca ", props.fuente)
  return (
    <div>
      <audio preload="auto" key={props.fuente} autoPlay>
        <source
          src={props.fuente}
          type="audio/mpeg"
        ></source>
      </audio>
    </div>
  )
}

export default Toca