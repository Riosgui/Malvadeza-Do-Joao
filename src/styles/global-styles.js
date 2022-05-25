import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Oswald', sans-serif;
  }

  html{
    font-size: 62.5%;
  }

  h1{
    font-size: ${theme.font.size.xhuge};
  }
  h2{
    font-size: ${theme.font.size.huge};
  }
  h3{
    font-size: ${theme.font.size.xxlarge};
  }
  h4{
    font-size: ${theme.font.size.xlarge};
  }
  h5{
    font-size: ${theme.font.size.large};
  }
  h6{
    font-size: ${theme.font.size.medium};
  }
  p{
    font-size: ${theme.font.size.small};
  }
`;
