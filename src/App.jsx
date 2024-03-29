import "./App.css";
import { React } from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";

function App() {
  return (
    <div className="App">
      <h1>Dudu-React</h1>

      <div className="Cards">
        <Card titulo="#8 - Renderização Condicional" ordem={8} color="#982395">
          <ParOuImpar numero={new Date().getSeconds()} />
        </Card>

        <Card titulo="#7 - Repeticao (Desafio)" ordem={7} color="#DD5F32">
          <TabelaProdutos />
        </Card>

        <Card titulo="#6 - Repeticao" ordem={6} color="#3A9AD9">
          <ListaAlunos />
        </Card>

        <Card titulo="#5 - Componente com Filhos" ordem={5} color="#FF85CB">
          <Familia sobrenome="Neves Carlos">
            <FamiliaMembro nome="Hudson" />
            <FamiliaMembro nome="Gabriela" />
            <FamiliaMembro nome="Lara" />
          </Familia>
        </Card>

        <Card titulo="#4 - Exemplo de Card" ordem={4} color="#E94C6F">
          <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="#3 - Fragmentos" ordem={3} color="#F07818">
          <Fragmento />
        </Card>

        <Card titulo="#2 - Segundo Componente" ordem={2} color="#5A6A62">
          <ComParametro
            titulo="Situação do Aluno"
            aluno="Hudson Carlos"
            nota={9.3}
            materia="Entender as mulheres"
          ></ComParametro>

          <ComParametro
            titulo="Situação do Aluno"
            aluno="Gabriela Neves"
            nota={10}
            materia="Melhor Esposa"
          ></ComParametro>
        </Card>

        <Card titulo="#1 - Primeiro Componente" ordem={1} color="#542733">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
}

export default App;
