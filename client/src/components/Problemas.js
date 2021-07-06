import React, { useState } from 'react';
import { datos } from '../datos.json'

const Problemas = () => {
  const [num, setNum] = useState(2);

  //cambiar el valor de num
  const cambiaNumero = (e) => {
    setNum(num + 1)
  }

  //preparar los incisos aleatoriamente
  let incisos = []
  let alea = 0
  while (incisos.length < 5) {
    //let numero = Math.random() * (datos.length - 0) + 0
    alea = Math.random() * (20 - 0) + 0
    alea = Math.floor(alea)
    if (!incisos.includes(alea)) {
      incisos.push(alea);
    }
  }
  console.log({ incisos: incisos });

  if (!incisos.includes(num)) {
    alea = Math.floor(Math.random() * (5 - 0) + 0)
    incisos[alea] = num
  }
  console.log({ num: num})
  console.log({ incisos: incisos });



  return (
    <div>
      <input type="radio" value={datos[incisos[0]]} />Pepe
      <button onClick={cambiaNumero}>Clic</button>
    </div>
  );

}
  





export default Problemas
