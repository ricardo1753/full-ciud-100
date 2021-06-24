import React from "react";
import Toca from "./Toca";

const Pregunta = (props) => {
  console.log("preg ", props.sonido);
  return (
    <div className="container">
      <p className="pregunta container">{props.fuente}</p>
      <Toca fuente={props.sonido} />
    </div>
  );
};

export default Pregunta;
