export default function Rodape({ qtdPerguntasRespondidas }) {
    return (
      <div className='footer' data-test='footer'>
        <p>{qtdPerguntasRespondidas}/8 CONCLUÍDOS</p>
      </div>
    );
}