import { createGlobalStyle } from 'styled-components';
import { bgBottomPattern } from './assets/bg-pattern-bottom.svg';

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
    }

    body {
        background-color: hsl(185, 75%, 39%);
        background-image: url(${bgBottomPattern});
        background-repeat: no-repeat;
        background-size: 1000px;
        background-position: 140% -125%;
    }
`;