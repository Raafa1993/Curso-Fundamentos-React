import React from 'react';

import './App.css';

import Primeiro from './components/layout/Primeiro'
import ComParametro from './components/layout/ComParametro'
import ComFilhos from './components/layout/ComFilhos'
import Cards from './components/layout/Cards'
import Repeticao from './components/layout/Repeticao'
import Condicional from './components/layout/Condicional'
import CondicionalComIf from './components/layout/CondicionalComIf'

export default (props) => (
  <div className="App">
    <Cards titulo="#06 - Condicional v2">
      <CondicionalComIf numero={10}></CondicionalComIf>
    </Cards>
    <Cards titulo="#05 - Condicional v1">
      <Condicional numero={5}></Condicional>
    </Cards>
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