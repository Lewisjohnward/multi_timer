import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
   * {
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
        user-select: none;
   } 

    body{
        margin: 0;
    }

    input {
    all: unset;
    }
    
    button, h1,p {
        margin: 0;
        padding: 0;
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
