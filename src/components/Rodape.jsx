import { styled } from "styled-components";

export default function Rodape({ qtdPerguntasRespondidas }) {
    return (
      <Footer data-test='footer'>
        <p>{qtdPerguntasRespondidas}/8 CONCLUÍDOS</p>
      </Footer>
    );
}

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
`