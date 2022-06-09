import styled from "styled-components"


export const Container = styled.header`

    display: flex;
    justify-content: space-around;
    padding-top: 120px;


div{
    background-image: url("../../image/aviao.png");
    width: 451px;
    height: 217px;

}

.participante {
    z-index: 1;
}

@media screen and (max-width: 800px) {
    .cabecalho {
        padding-top: 60px;
        flex-direction: column;
        align-items: center;
    }

    .imagem-logo {
        background-image: url("/public/imagens/logo-pequeno.png");
        width: 235px;
        height: 199px;
    }
}

`;