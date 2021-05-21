import React from "react";
import Pasaporte from '../img/USpassports.jpg'

const Presenta = () => {
  return (
    <div>
      <img src={Pasaporte} alt="US Passports" />
      <p className="etiq">
        Aquí están las 100 preguntas del exámen de Cívica (Historia y Gobierno)
        para el exámen de Naturalización.
      </p>
      <p className="etiq">
        El exámen de Cívica consiste en una prueba oral y el oficial de USCIS le
        preguntará al aspirante un máximo de 10 preguntas. El aplicante tiene
        que responder correctamente al menos 6 de las 10 preguntas para aprobar
        la sección de Cívica del exámen de Naturalización.
      </p>
      <p className="etiq">
        Algunas respuestas del exámen pueden cambiar debido a elecciones o
        sustituciones.
        <br /> Mientras te preparas para la prueba, asegúrate de contar con las
        respuestas actualizadas de estas preguntas.
        <br /> El oficial de USCIS que te examine <b>NO</b> aceptará ninguna
        respuesta incorrecta.
      </p>
    </div>
  );
};

export default Presenta;
