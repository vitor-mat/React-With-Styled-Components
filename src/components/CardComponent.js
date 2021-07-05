import { Card } from '../styles/cardStyle';

export function CardComponent(props){
    return(
        <Card>
            <img src={props.caminho} alt="imagem produto"/>
            <p>{`R$ ${props.preco}`}</p>
            <button>Comprar</button>
            <button>Salvar S2</button>
        </Card>
    )
}