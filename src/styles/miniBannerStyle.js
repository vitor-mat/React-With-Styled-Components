import styled from 'styled-components'

import { corPrincipal, corTerciaria, corNeutra, corSecundaria } from "./cores"


export const Card = styled.div`
    min-width: 290px;    
    max-height: 400px;

    border: 1px solid black;
    border-radius: 4px;

    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5%;

    cursor: pointer;

    background: white;

    &:hover{
        box-shadow: 1px 2px 10px ${corPrincipal};
    }

    img{
        width: 150px;
        height: 180px;
        margin-botton: 10px;
    }

    button{
        width: 90%;
        height: 15%;
        cursor: pointer;
        background: ${corTerciaria};
        color: white;
        border: none;
        border-radius: 5px;
    }

    button:active{
        border: 1px solid ${corPrincipal};
        color: ${corPrincipal};
    }

    button:hover{
        color: ${corSecundaria}
    }

    p{
        font-size: 23px;
        font-weight: bolder
    }
`