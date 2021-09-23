import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    font-family: 'Roboto', 'Montserrat', sans-serif;
    text-decoration: none;
  }

  body {
    background-color: #2f2f2f;
    color: #cecece;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
