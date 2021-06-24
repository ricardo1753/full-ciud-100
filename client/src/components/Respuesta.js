import React from 'react';
import Toca from './Toca';

const Respuesta = (props) => {
  console.log("resp ",props.sonido);
  return (
    <div>
      <p className="respuesta container">{props.fuente}</p>
      <Toca fuente = {props.sonido}/>
    </div>
  );
}

export default Respuesta;
