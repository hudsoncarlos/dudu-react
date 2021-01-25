import { React } from "react";

export default function ComParametro(props) {
  const status = props.nota >= 7 ? "Aprovado!" : "Reprovado!";
  //props.nota = Math.ceil(props.nota) - Vai gerar ERRO! Não é possível modificar uma props ela é somente leitura. A solução é processar em outro variável.
  return (
    <div>
      <h2>{props.titulo}</h2>
      <h3>{props.subtitulo}</h3>
      <p>
        O aluno <strong>{props.aluno}</strong> tirou nota{" "}
        <strong>{props.nota}</strong> em <strong>{props.materia}</strong> e está{" "}
        <strong>{status}</strong>
      </p>
    </div>
  );
}
