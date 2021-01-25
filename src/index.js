import ReactDOM from 'react-dom'
import React from 'react'

import './index.css'
// import Comp from './components/basicos/Primeiro'
// import ComParametro from './components/basicos/ComParametro'
// import Fragmento from './components/basicos/Fragmento'

import App from './App'

const tag = <title>Olá React!</title>
ReactDOM.render(
    // <div id="app">
    //     {tag}
    //     <Comp></Comp>
    //     <ComParametro
    //         titulo="Segundo Componente - Situação do Aluno"
    //         aluno="Hudson Carlos" nota={9.3} materia="Entender as mulheres">
    //     </ComParametro>
    //     <ComParametro
    //         titulo="Segundo Componente - Situação do Aluno"
    //         aluno="Gabriela Neves" nota={10} materia="Melhor Esposa">
    //     </ComParametro>
    //     <Fragmento></Fragmento>
    // </div>
    <App />
    ,
    document.getElementById('root')
)
