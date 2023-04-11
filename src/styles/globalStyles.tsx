import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-family: 'Roboto', sans-serif;

    ${() => css`
      background: ${({ theme }) => theme.colors.background.primary};
      color: ${({ theme }) => theme.colors.foreground.primary};
    `}
  }
`;
