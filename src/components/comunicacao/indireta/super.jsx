import React, { useState } from 'react'
import Sub from './sub'

export default (props) => {

  const [texto, setTexto] = useState('Valor')
  const [num, setNum] = useState(0)

  function qunadoClicar(valorGerado, texto) {
    setNum(valorGerado)
    setTexto(texto)
  }

  return (
    <div>
      <h4>{texto}: {num}</h4>
      <Sub onClicar={qunadoClicar}></Sub>
    </div >
  );
};