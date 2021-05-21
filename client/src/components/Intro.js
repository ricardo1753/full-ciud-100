import React from 'react'
import '../App.css'

const Intro = () => {
  return (
    <div className="wraper">
      <p className="pal1">
        Aquí están las 100 preguntas del exámen de Cívica (Historia y Gobierno) para el exámen de Naturalización.
      </p>
      <p className="pal2">
        El exámen de Cívica consiste en una prueba oral y el oficial de USCIS le rpeguntará al aspirante un máximo de 10 preguntas.
        <b>
          <br></br>El aplicante tiene que responder correctamente al menos 6 de las 10 preguntas para aprobar la sección de 
          Cívica del exámen de Naturalización.
          </b> 
      </p>
      <p className="pal3">
        Algunas respuestas del exámen pueden cambiar debido a elecciones o sustituciones. Mientras te preparas para la prueba,
        asegúrate de contar  con las respuestas actualizadas de estas preguntas. 
      </p>
      <p className="pal4">
        El oficial de USCIS que te examina <b>NO</b> aceptará ninguna respuesta incorrecta.
      </p>
    </div>
  )
}
export default Intro