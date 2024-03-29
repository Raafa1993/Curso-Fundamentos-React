import './Cards.css'
import React from 'react'

export default props =>
    <div className="Cards" style={{ borderColor: props.color || '#000' }}>
        <div className="Conteudo">
            {props.children}
        </div>
        <div className="Footer" style={{ backgroundColor: props.color || '#000' }}>
            {props.titulo}
        </div>
    </div>