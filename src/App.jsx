import React from 'react';

import './App.css';

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Cards from './components/layout/Cards'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/pai'
import Super from './components/comunicacao/indireta/super'
import Input from './components/form/input'

export default (props) => (
  <div className="App">
    <Cards titulo="#09 - Input" color="#c68642 ">
      <Input></Input>
    </Cards>
    <Cards titulo="#08 - Comunicação Indireta" color="#3d1e6d">
      <Super></Super>
    </Cards>
    <Cards titulo="#07 - Comunicação Direta" color="#4f372d">
      <Pai sobrenome="Araujo"></Pai>
    </Cards>
    <Cards titulo="#06 - Condicional v2" color="#fe8a71">
      <CondicionalComIf numero={10}></CondicionalComIf>
    </Cards>
    <Cards titulo="#05 - Condicional v1" color="#f6cd61">
      <Condicional numero={5}></Condicional>
    </Cards>
    <Cards titulo="#04 - Repeticao" color="#3da4ab ">
      <Repeticao></Repeticao>
    </Cards>
    <Cards titulo="#03 - Componente com Filhos" color="#ee4035  ">
      <ComFilhos>
        <ul>
          <li>Rafa</li>
          <li>Teus</li>
          <li>Japa</li>
          <li>Dan</li>
        </ul>
      </ComFilhos>
    </Cards>
    <Cards titulo="#02 - Componente com Parametro" color="#1e1f26">
      <ComParametro titulo="Esse é o titulo"
        subtitulo="Esse é o subtituo" />
    </Cards>
    <Cards titulo="#01 - Primeiro Componente" color="#ff3377">
      <Primeiro />
    </Cards>
  </div>
)