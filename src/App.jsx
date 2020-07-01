import React from 'react';

import './App.css';

import Primeiro from './components/layout/Primeiro'
import ComParametro from './components/layout/ComParametro'
import ComFilhos from './components/layout/ComFilhos'
import Cards from './components/layout/Cards'
import Repeticao from './components/layout/Repeticao'

export default (props) => (
  <div className="App">
    <Cards titulo="#04 - Repeticao">
      <Repeticao></Repeticao>
    </Cards>
    <Cards titulo="#03 - Componente com Filhos">
      <ComFilhos>
        <ul>
          <li>Rafa</li>
          <li>Teus</li>
          <li>Japa</li>
          <li>Dan</li>
        </ul>
      </ComFilhos>
    </Cards>
    <Cards titulo="#02 - Componente com Parametro">
      <ComParametro titulo="Esse é o titulo"
        subtitulo="Esse é o subtituo" />
    </Cards>
    <Cards titulo="#01 - Primeiro Componente">
      <Primeiro />
    </Cards>
  </div>
)