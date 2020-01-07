import ReactDom from 'react-dom'
import React from 'react'

import Pai from './Componentes/Pai'

const elements = document.getElementById('root')

ReactDom.render(
    <div>
        <Pai nome='Joao' sobrenome='Silva'></Pai>
    </div>
    , elements)
