import { useState } from 'react'
import { styled } from 'styled-components'
import party from './assets/party.png'
import sad from './assets/sad.png'
import Rodape from './components/Rodape'
import Corpo from './components/Corpo/Corpo'

export default function App() {
  const cards = [
    { id: 0, question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { id: 1, question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { id: 2, question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { id: 3, question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { id: 4, question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { id: 5, question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { id: 6, question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    { id: 7, question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
  ];
  const [qtdPerguntasRespondidas, setQtdPerguntasRespondidas] = useState(0);
  const [estado, setEstado] = useState(['fechado', 'fechado', 'fechado', 'fechado', 'fechado', 'fechado', 'fechado', 'fechado'])
  const [respostas, setRespostas] = useState(['', '', '', '', '', '', '', ''])

  return (
    <Body>
      <Corpo cards={cards} estado={estado} setEstado={setEstado} qtdPerguntasRespondidas={qtdPerguntasRespondidas} setQtdPerguntasRespondidas={setQtdPerguntasRespondidas} respostas={respostas} setRespostas={setRespostas} />
      <Rodape qtdPerguntasRespondidas={qtdPerguntasRespondidas} />
    </Body>
  );
}

const Body = styled.div`
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  position: absolute;
  overflow-y: scroll;
`



