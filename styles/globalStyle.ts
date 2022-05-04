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
    background-color: gainsboro;
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
    padding: 0 10px;
    margin-bottom: 10px;
  }

  button:hover {
    background-color: #1B223C;
    color: white;
    transition: 0.5s;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .commonPage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .commonContainer {
    display: grid;
    grid-template-columns: 50% 50%;
    height: 90%;
    width: 90%;
  }

  .commonAside {
    max-height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .commonMain {
    max-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0;
  }

  .commonForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: space-around;
    padding: 10px 0;
    gap: 15px 0;
  }

  .footerP {
    font-size: 6px;
    display: flex;
    justify-content: center;
    padding-top: 10px;
  }

  .dashboardHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;;
  }

  .dashboarPage {
    background-color: gainsboro;
    height: 100vh;
  }

  .rTable{width: 100%; text-align: center;}
    .rTable thead{background: black; font-weight: bold; color:#fff;}
    .rTable tbody tr:nth-child(2n){background: #ccc;}
    .rTable th , .rTable td{padding: 7px 0;}
`
