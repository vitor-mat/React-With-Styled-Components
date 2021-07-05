import styled from 'styled-components';

import { corAside } from "./cores"

export const Aside = styled.aside`

    grid-column: 1;
    grid-row: 1 / 3;

    background-color: ${corAside};

    position: relative;

    overflow: hidden;

    display: flex;
    align-items: flex-end;

    flex-direction: column;

    #icon-controle-aside{
        position: absolute;
        width: 90%;
        left: -250px;
        top: -250px;

        transform: rotate(134.74deg);
    }


#icon-logo-aside{
    width: 441px;
    margin: 30vh 0 15vh 0;
}

#redes-sociais-div{
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 50px;

    img{
        cursor: pointer;
        width: 40px;
    }
}`;

/*

*/