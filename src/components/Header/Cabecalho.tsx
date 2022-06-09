import { Container } from "./style";
import participante from "../../image/participante.png";
import logo from "../../image/logo.png";
const Cabecalho = () =>{
    return(
        <Container className="cabecalho">
            <div className="imagem-logo" role="img" aria-label='Logo do Sorteador'>
                <img src={logo} alt="Logo da aplição" />
            </div>
            <img className='participante' src={participante} alt="Participante com um presente na mão" />
        </Container>
    )
}

export default Cabecalho;