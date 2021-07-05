import styled from 'styled-components';

export const Main = styled.main`
    grid-column: 2;
    grid-row: 2 / 3;

    width: 100%:
    heigth: 100%;

    padding-top: 100px; 

    display: flex;
    flex-direction: column;
    gap: 40px;

    #imagem-banner-main{
        width: 100%;
        height: 50%;
    }

    span{
        padding-left: 20px;
        width: 100%;
        font-size: 35px;
        margin-bottom: 10px;
    }

    section{
        width: 100%;

        display: flex;
        justify-content: center;
        gap: 50px;

        .mini-banner-main{
            width: 280px;
            height: 160px;
            border-radius: 14px;
            cursor: pointer;

            transition: width 0.5s, height .5s, opacity .5s;
        }

        .mini-banner-main:hover{
            width: 300px;
            height: 170px;

            opacity: 0.8
        }
    }
`;