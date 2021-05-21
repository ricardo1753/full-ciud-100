import React from 'react'
import {datos} from '../datos.json'

function Listen() {
  const preguntas = datos.map(data => <>{data.pregunta}</>)
  return (
    <p>{preguntas[1]}</p>
  )
}

export default Listen
