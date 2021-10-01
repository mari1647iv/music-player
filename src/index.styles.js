import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    font-family: 'Roboto', 'Montserrat', sans-serif;
    text-decoration: none;
  }

  body {
    width: 100vw;
    background-color: #2f2f2f;
    color: #cecece;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
  }

  body::-webkit-scrollbar {
    width: 0.9em;
  }
  
  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: #191919;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  }
`
