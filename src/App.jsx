import { useState } from 'react'
import { styled } from 'styled-components'
import logo from './assets/logo.png'
import certo from './assets/icone_certo.png'
import erro from './assets/icone_erro.png'
import quase from './assets/icone_quase.png'
import party from './assets/party.png'
import sad from './assets/sad.png'
import play from './assets/seta_play.png'
import virar from './assets/seta_virar.png'

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
    <>
      <Corpo cards={cards} estado={estado} setEstado={setEstado} qtdPerguntasRespondidas={qtdPerguntasRespondidas} setQtdPerguntasRespondidas={setQtdPerguntasRespondidas} respostas={respostas} setRespostas={setRespostas} />
      <Rodape qtdPerguntasRespondidas={qtdPerguntasRespondidas} />
    </>
  );
}

function Corpo({ cards, estado, setEstado, qtdPerguntasRespondidas, setQtdPerguntasRespondidas, respostas, setRespostas }) {
  return (
    <div className='mid'>
      <div className='header'>
        <img src={logo} alt="" />
        <h1>ZapRecall</h1>
      </div>
      <div>
        {cards.map((cards) => (
          <Card cards={cards} estado={estado} setEstado={setEstado} qtdPerguntasRespondidas={qtdPerguntasRespondidas} setQtdPerguntasRespondidas={setQtdPerguntasRespondidas} respostas={respostas} setRespostas={setRespostas} />
        ))}
      </div>
    </div>
  );
}

function Card({ cards, estado, setEstado, qtdPerguntasRespondidas, setQtdPerguntasRespondidas, respostas, setRespostas }) {

  function aberto(cards) {
    let novoEstado = [...estado];
    novoEstado[cards.id] = 'aberto';
    setEstado(novoEstado);
  }

  function virado(cards) {
    let novoEstado = [...estado];
    novoEstado[cards.id] = 'virado';
    setEstado(novoEstado);
  }

  function somaQtdPerguntasRespondidas() {
    const soma = qtdPerguntasRespondidas + 1;
    setQtdPerguntasRespondidas(soma);
    console.log(soma);
  }

  function insereResposta(r, cards) {
    console.log('entro no insere', r);
    if (r === 'no') {
      let novaResposta = [...respostas];
      novaResposta[cards.id] = {icon: <img data-test='no-icon' src={erro} alt="" />, r: 'erro'};
      console.log(novaResposta);
      somaQtdPerguntasRespondidas();
      console.log(respostas);
      setRespostas(novaResposta);
    }
    if (r === 'partial') {
      let novaResposta = [...respostas];
      novaResposta[cards.id] = {icon: <img data-test='partial-icon' src={quase} alt="" />, r: 'partial'};
      console.log(novaResposta);
      somaQtdPerguntasRespondidas();
      setRespostas(novaResposta);
    }
    if (r === 'zap') {
      let novaResposta = [...respostas];
      novaResposta[cards.id] = {icon: <img data-test='zap-icon' src={certo} alt="" />, r: 'zap'};
      console.log(novaResposta);
      somaQtdPerguntasRespondidas();
      setRespostas(novaResposta);
    }
  }

  function concluido(r, cards) {
    let novoEstado = [...estado];
    novoEstado[cards.id] = 'concluido';
    somaQtdPerguntasRespondidas();
    insereResposta(r, cards);
    setEstado(novoEstado);
  }

  if (estado[cards.id] === 'fechado') {
    return (
      <>
        <div className={estado[cards.id]} data-test='flashcard-text' key={cards.id}>
          <p>Pergunta {cards.id + 1}</p>
          <img data-test='play-btn' onClick={() => aberto(cards)} src={play} alt="" />
        </div>
      </>)
  }

  if (estado[cards.id] === 'aberto') {
    return (
      <>
        <div className={estado[cards.id]} data-test='flashcard-text' key={cards.id}>
          <p>{cards.question}</p>
          <img data-test='turn-btn' onClick={() => virado(cards)} src={virar} alt="" />
        </div>
      </>)
  }

  if (estado[cards.id] === 'virado') {
    return (
      <>
        <div className={estado[cards.id]} data-test='flashcard-text' key={cards.id}>
          <p>{cards.answer}</p>
          <div className='botoes'>
            <button data-test='no-btn' onClick={() => concluido('no', cards)}>Não Lembrei</button>
            <button data-test='partial-btn' onClick={() => concluido('partial', cards)}>Quase não lembrei</button>
            <button data-test='zap-btn' onClick={() => concluido('zap', cards)}>Zap!</button>
          </div>
        </div>
      </>)
  }

  if (estado[cards.id] === 'concluido') {
    return (
      <>
        <div className={estado[cards.id]} data-test='flashcard-text' key={cards.id}>
          <p className={respostas[cards.id].r}>Pergunta {cards.id + 1}</p>
          {respostas[cards.id].icon}
        </div>
      </>)
  }
}

function Rodape({ qtdPerguntasRespondidas }) {
  return (
    <div className='footer' data-test='footer'>
      <p>{qtdPerguntasRespondidas}/8 CONCLUÍDOS</p>
    </div>
  );
}