import './index.css';
import React from 'react'
import ReactDom from 'react-dom'

import Primeiro from './components/Primeiro'
//import ComParametro from './components/ComParametro'
//import ComFilhos from './components/ComFilhos'
import Cards from './components/layout/Cards'

ReactDom.render(
    <div>
        <Cards titulo="Exercicio X">
            <Primeiro />
        </Cards>
        <Cards titulo="Exercicio X">
            Conteudo
        </Cards>
        {/* <ComFilhos>
            <ul>
                <li>Rafa</li>
                <li>Teus</li>
                <li>Japa</li>
                <li>Dan</li>
            </ul>
        </ComFilhos> */}
        {/* <Primeiro />
        <ComParametro titulo="Esse é o titulo"
            subtitulo="Esse é o subtituo" /> */}
    </div>,
    document.getElementById('root')
)