import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
    background: #333333;

    text-align: center;
  }
`;
