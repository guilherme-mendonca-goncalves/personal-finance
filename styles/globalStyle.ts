import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    border: none;
    box-sizing: border-box;
  }

  textarea:focus, input:focus {
    outline: none;
  }

  /*Efeito de quando passa o mouse em cima de um link*/
  a:hover {
    color: #08558B;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 10px;
  }

  h1 {
    font-weight: bold;
    font-size: 200%;
  }

  h2 {
    font-weight: bold;
    font-size: 150%;
  }

  input {
    background-color: gainsboro;
    border-bottom: 2px solid #323232;
    padding: 1px 14vh;
  }

  input:focus {
    border-bottom: 2px solid #08558B;
    background-color: #EFEFEF;
  }

  button {
    background-color: #EFEFEF;
    border-radius: 20px;
    box-shadow: 0 2px 10px #b8b8b8;
    color: #323232;
    cursor: pointer;
    font-size: 150%;
    height: 7vh;
    margin-top: 5px;
    width: 30%;
  }

  button:hover {
    background-color: #1B223C;
    color: white;
    transition: 0.5s;
  }
  .loginPage {
    background-color: gainsboro;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .loginContainer {
    display: grid;
    grid-template-columns: 50% 50%;
    height: 90%;
    width: 90%;
  }

  .loginAside {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loginMain {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 20px 0;
  }

  .loginForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: space-around;
    padding: 20px 0;
    gap: 15px 0;
  }

  .footerP {
    font-size: 6px;
  }
`
