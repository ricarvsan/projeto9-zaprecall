import play from '../../assets/seta_play.png'
import virar from '../../assets/seta_virar.png'
import quase from '../../assets/icone_quase.png'
import erro from '../../assets/icone_erro.png'
import certo from '../../assets/icone_certo.png'

export default function Card({ cards, estado, setEstado, qtdPerguntasRespondidas, setQtdPerguntasRespondidas, respostas, setRespostas }) {

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
    }
  
    function insereResposta(r, cards) {
      if (r === 'no') {
        let novaResposta = [...respostas];
        novaResposta[cards.id] = {icon: <img data-test='no-icon' src={erro} alt="" />, r: 'erro'};
        somaQtdPerguntasRespondidas();
        setRespostas(novaResposta);
      }
      if (r === 'partial') {
        let novaResposta = [...respostas];
        novaResposta[cards.id] = {icon: <img data-test='partial-icon' src={quase} alt="" />, r: 'partial'};
        somaQtdPerguntasRespondidas();
        setRespostas(novaResposta);
      }
      if (r === 'zap') {
        let novaResposta = [...respostas];
        novaResposta[cards.id] = {icon: <img data-test='zap-icon' src={certo} alt="" />, r: 'zap'};
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
          <div className={estado[cards.id]} data-test='flashcard' key={cards.id}>
            <p data-test='flashcard-text'>Pergunta {cards.id + 1}</p>
            <img data-test='play-btn' onClick={() => aberto(cards)} src={play} alt="" />
          </div>
        </>)
    }
  
    if (estado[cards.id] === 'aberto') {
      return (
        <>
          <div className={estado[cards.id]} data-test='flashcard' key={cards.id}>
            <p data-test='flashcard-text'>{cards.question}</p>
            <img data-test='turn-btn' onClick={() => virado(cards)} src={virar} alt="" />
          </div>
        </>)
    }
  
    if (estado[cards.id] === 'virado') {
      return (
        <>
          <div className={estado[cards.id]} data-test='flashcard' key={cards.id}>
            <p data-test='flashcard-text'>{cards.answer}</p>
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
          <div className={estado[cards.id]} data-test='flashcard' key={cards.id}>
            <p data-test='flashcard-text' className={respostas[cards.id].r}>Pergunta {cards.id + 1}</p>
            {respostas[cards.id].icon}
          </div>
        </>)
    }
  }