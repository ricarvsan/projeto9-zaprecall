import logo from '../../assets/logo.png'
import { styled } from 'styled-components'
import Card from './Card';

export default function Corpo({ cards, estado, setEstado, qtdPerguntasRespondidas, setQtdPerguntasRespondidas, respostas, setRespostas }) {
    return (
        <Mid>
            <Header>
                <img src={logo} alt="" />
                <h1>ZapRecall</h1>
            </Header>
            <div>
                {cards.map((cards) => (
                    <Card key={cards.id} cards={cards} estado={estado} setEstado={setEstado} qtdPerguntasRespondidas={qtdPerguntasRespondidas} setQtdPerguntasRespondidas={setQtdPerguntasRespondidas} respostas={respostas} setRespostas={setRespostas} />
                ))}
            </div>
        </Mid>
    );
}

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
`

const Mid = styled.div`
  background-color: #FB6B6B;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: hidden;
  margin-bottom: 70px;
`