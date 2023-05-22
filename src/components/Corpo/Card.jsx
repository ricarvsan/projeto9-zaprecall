import play from '../../assets/seta_play.png'
import virar from '../../assets/seta_virar.png'
import quase from '../../assets/icone_quase.png'
import erro from '../../assets/icone_erro.png'
import certo from '../../assets/icone_certo.png'
import { styled } from 'styled-components'

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
            novaResposta[cards.id] = { icon: <img data-test='no-icon' src={erro} alt="" />, r: 'erro' };
            somaQtdPerguntasRespondidas();
            setRespostas(novaResposta);
        }
        if (r === 'partial') {
            let novaResposta = [...respostas];
            novaResposta[cards.id] = { icon: <img data-test='partial-icon' src={quase} alt="" />, r: 'partial' };
            somaQtdPerguntasRespondidas();
            setRespostas(novaResposta);
        }
        if (r === 'zap') {
            let novaResposta = [...respostas];
            novaResposta[cards.id] = { icon: <img data-test='zap-icon' src={certo} alt="" />, r: 'zap' };
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
                <Fechado data-test='flashcard' key={cards.id}>
                    <p data-test='flashcard-text'>Pergunta {cards.id + 1}</p>
                    <img data-test='play-btn' onClick={() => aberto(cards)} src={play} alt="" />
                </Fechado>
            </>)
    }

    if (estado[cards.id] === 'aberto') {
        return (
            <>
                <Aberto data-test='flashcard' key={cards.id}>
                    <p data-test='flashcard-text'>{cards.question}</p>
                    <img data-test='turn-btn' onClick={() => virado(cards)} src={virar} alt="" />
                </Aberto>
            </>)
    }

    if (estado[cards.id] === 'virado') {
        return (
            <>
                <Virado data-test='flashcard' key={cards.id}>
                    <p data-test='flashcard-text'>{cards.answer}</p>
                    <Botoes>
                        <button data-test='no-btn' onClick={() => concluido('no', cards)}>Não Lembrei</button>
                        <button data-test='partial-btn' onClick={() => concluido('partial', cards)}>Quase não lembrei</button>
                        <button data-test='zap-btn' onClick={() => concluido('zap', cards)}>Zap!</button>
                    </Botoes>
                </Virado>
            </>)
    }

    if (estado[cards.id] === 'concluido') {
        return (
            <>
                <Concluido data-test='flashcard' key={cards.id}>
                    <p data-test='flashcard-text' className={respostas[cards.id].r}>Pergunta {cards.id + 1}</p>
                    {respostas[cards.id].icon}
                </Concluido>
            </>)
    }
}

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
    img:hover { 
    cursor: pointer;
    }
`

const Aberto = styled.div`
    width: 280px;
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
    img:hover {
    cursor: pointer;
    }
`
const Virado = styled.div`
    width: 260px;
    height: 145px;
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
`

const Botoes = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center; 
    position: absolute;
    bottom: 10px;
    button {
    width: 81px;
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
`
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
    p.erro {
    color: #FF3030;
    text-decoration: line-through;
    }
    p.partial {
    color: #FF922E;
    text-decoration: line-through;
    }
    p.zap {
    color: #2FBE34;
    text-decoration: line-through;
    }
    img {
    width: 23px;
    height: 23px;
    }
`