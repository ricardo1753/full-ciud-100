import React from "react";
import Toca from "./Toca";

const Pregunta = (props) => {
  console.log("preg ", props.sonido);
  return (
    <div>
      <p className="pregunta">{props.fuente}</p>
      <Toca fuente={props.sonido}/>
    </div>
  );
};

export default Pregunta;
