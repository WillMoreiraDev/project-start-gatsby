import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    border: none;
    background: transparent;
  }
  img {
    display: block;
    max-width: 100%;
  }
  button {
      cursor: pointer;
      background-color: transparent;
  }
  .container {
    width: 100%;
    max-width: 1246px;
    margin: 0 auto;
    padding: 0px 15px;
  }
`;
 
export default GlobalStyle;