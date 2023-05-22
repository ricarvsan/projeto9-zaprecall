import logo from '../../assets/logo.png'
import Card from './Card';

export default function Corpo({ cards, estado, setEstado, qtdPerguntasRespondidas, setQtdPerguntasRespondidas, respostas, setRespostas }) {
    return (
      <div className='mid'>
        <div className='header'>
          <img src={logo} alt="" />
          <h1>ZapRecall</h1>
        </div>
        <div>
          {cards.map((cards) => (
            <Card key={cards.id} cards={cards} estado={estado} setEstado={setEstado} qtdPerguntasRespondidas={qtdPerguntasRespondidas} setQtdPerguntasRespondidas={setQtdPerguntasRespondidas} respostas={respostas} setRespostas={setRespostas} />
          ))}
        </div>
      </div>
    );
  }