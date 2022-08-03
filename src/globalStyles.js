import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
   * {
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
   } 

    body{
        margin: 0;
    }

    input {
    all: unset;
    }
    
    button {
        border: none;
        background: none;
        font-size: 1rem;
    }

    a {
        text-decoration: none;
        color: black;
    }

`
export default GlobalStyle
