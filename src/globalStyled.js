import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
    }

    body {
        background-color: hsl(185, 75%, 39%);
        background-repeat: no-repeat;
        background-size: 1000px;
        background-position: 140% -125%;
    }
`;