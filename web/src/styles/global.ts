import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* A cada 1rem será considerado 10px */
  html {
    font-size: 62.5%;

    @media (max-width: 1080px) {
      font-size: 58%;
    }

    @media (max-width: 720px) {
      font-size: 54%;
    }

    @media (max-width: 425px) {
        font-size: 48%;
    }
  }

  body {
    color: #fff;
    background: #ebf2f5;
    -webkit-font-smoothing: antialiased;
  }

  body, input button, textarea {
    font: 600 18px Nunito, sans-serif;
  }

  button{
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

`;
