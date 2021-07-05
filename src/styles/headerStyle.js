import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    height: 100%;

    ul{
        display: flex;
        justify-content: flex-end;
        list-style: none;

        gap: 110px;

        margin: 20px;

        img{
            width: 45px;
            height: 45px;
        }

        li{
            height: 45px;
            cursor: point;

            font-size: 25px;
            line-height: 45px;
            font-weight: light;
        }
    }

`;