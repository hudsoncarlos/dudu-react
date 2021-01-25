import { React } from "react";

export default (props) => {
    const {min, max} = props
    const sorteio = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min
    return(
        <div>
            <h2>Desafio, Sortear Um Número Aleatorio.</h2>
            <p>Valor Minimo: <strong>{min}</strong></p>
            <p>Valor Máximo: <strong>{max}</strong></p>
            <p>Valor Número Sorteado: <strong>{sorteio}</strong></p>
        </div>
    )  
};