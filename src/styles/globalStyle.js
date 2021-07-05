import { createGlobalStyle } from 'styled-components';

import { corBackground } from './cores';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-weight: 200;
    }

    body{
        background: ${corBackground}
    }
`