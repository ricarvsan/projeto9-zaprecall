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
    { id: 6,question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    { id: 7, question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
  ];

  const [qtdPerguntasRespondidas, setQtdPerguntasRespondidas] = useState(0);
  const [respostas, setRespostas] = useState([]);
  const [perguntasRespondidas, setPerguntasRespondidas] = useState([]);

  function somaQtdPerguntasRespondidas() {
    const soma = qtdPerguntasRespondidas + 1;
    setQtdPerguntasRespondidas(soma);
    console.log(soma);
  }

  function insereResposta(resposta) {
    if (resposta === 'no') {
      let novaResposta = [...respostas, `<img data-test='no-icon' src={erro} alt="" />`];
      somaQtdPerguntasRespondidas();
      setRespostas(novaResposta);
    }
    if (resposta === 'partial') {
      let novaResposta = [...respostas, `<img data-test='partial-icon' src={quase} alt="" />`];
      somaQtdPerguntasRespondidas();
      setRespostas(novaResposta);
    }
    if (resposta === 'zap') {
      let novaResposta = [...respostas, `<img data-test='zap-icon' src={certo} alt="" />`];
      somaQtdPerguntasRespondidas();
      setRespostas(novaResposta);
    }
  }

  return (
    <Body>
      <Header>
        <img src={logo} alt="" />
        <h1>ZapRecall</h1>
      </Header>
      <Middle>
        <Flashcards cards={cards} />
        {/* {cards.map((cards, index) => (
          <Aberto data-test='flashcard-text' key={index}>
            <p>{cards.question}</p>
            <img data-test='turn-btn' onClick={() => ''} src={virar} alt="" />
          </Aberto>
        ))}
        {cards.map((cards, index) => (
          <Virado data-test='flashcard-text' key={index}>
            <p>{cards.answer}</p>
            <Botoes>
              <button data-test='no-btn' onClick={() => insereResposta('no')}>Não Lembrei</button>
              <button data-test='partial-btn' onClick={() => insereResposta('partial')}>Quase não lembrei</button>
              <button data-test='zap-btn' onClick={() => insereResposta('zap')}>Zap!</button>
            </Botoes>
          </Virado>
        ))}
        {cards.map((cards, index) => (
          <Concluido data-test='flashcard-text' key={index}>
            <p>Pergunta {index + 1}</p>
            <img data-test='play-btn' src={quase} alt="" />
          </Concluido>
        ))} */}
      </Middle>
      <Footer data-test='footer'>
        <p>{qtdPerguntasRespondidas}/8 CONCLUÍDOS</p>
      </Footer>
    </Body>
  )
}

function Flashcards(props) {
  return (
    <>
      {props.cards.map((cards, index) => (
        <Fechado data-test='flashcard-text' key={index}>
          <p>Pergunta {index + 1}</p>
          <img data-test='play-btn' onClick={() => abrirFlash()} src={play} alt="" />
        </Fechado>
      ))}
    </>
  );
}

const Body = styled.div`
width: 100%;
  position: absolute;
  overflow-y: scroll;
`;

const Fechado = styled.div`
  background-color: #FFFFFF;
  display: flex;
  width: 270px;
  height: 65px;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding: 0 15px;
  margin-bottom: 25px;
  p {
    font-family: Recursive;
    font-size: 16px;
    font-weight: 700;
  }
  img {
    width: 20px;
    height: 23px;
  }
  img:hover{
    cursor: pointer;
  }
`;

const Aberto = styled.div`
  width: 290px;
  height: 111px;
  background-color: #FFFFD4;
  padding: 20px 0 0 20px;
  position: relative;
  margin-bottom: 25px;
  border-radius: 5px;
  p {
    font-family: Recursive;
    font-size: 18px;
    font-weight: 400;
  }
  img {
    position: absolute;
    right: 5%;
    bottom: 10%;    
  }
  img:hover{
    cursor: pointer;
  }
`;

const Virado = styled.div`
  width: 270px;
  height: 111px;
  background-color: #FFFFD4;
  padding: 20px 20px 0 20px;
  position: relative;
  margin-bottom: 25px;
  border-radius: 5px;
  p {
    font-family: Recursive;
    font-size: 18px;
    font-weight: 400;
  }
  img {
    position: absolute;
    right: 5%;
    bottom: 10%;    
  }
  img:hover{
    cursor: pointer;
  }
`;

const Concluido = styled.div`
  background-color: #FFFFFF;
  display: flex;
  width: 270px;
  height: 65px;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding: 0 15px;
  margin-bottom: 25px;
  p {
    font-family: Recursive;
    font-size: 16px;
    font-weight: 700;
  }
  img {
    width: 23px;
    height: 23px;
  }
`;

const Botoes = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  button {
    width: 85px;
    height: 37px;
    font-family: Recursive;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    margin-right: 8px;
    border-radius: 5px;
    border: none;
    color: #FFFFFF;
  }
  button:nth-child(1) {
    background-color: #FF3030;
  }
  button:nth-child(2) {
    background-color: #FF922E;
  }
  button:nth-child(3) {
    background-color: #2FBE34;
  }
  button:hover{
    cursor: pointer;
  }
  position: absolute;
  bottom: 10px;
`;

const Header = styled.div`  
  background-color: #FB6B6B;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 42px 0;
  img {
    width: 52px;
    height: 60px;
    margin-right: 20px;
  }
  h1 {
  font-family: Righteous;
  font-size: 36px;
  font-weight: 400;
  color: #FFFFFF;
  }
`;

const Middle = styled.div`
  background-color: #FB6B6B;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: hidden;
  margin-bottom: 70px;
`;

const Footer = styled.div`
  background-color: #FFFFFF;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  position: fixed;
  bottom: 0;
  left: 0;
  p {
    font-family: Recursive;
    font-size: 18px;
    font-weight: 400;
  }
`;