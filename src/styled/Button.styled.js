import styled from "styled-components"


export const Button = styled.button`
    background: ${({background}) => `${background}`};
    color: white;
    font-size: 1rem;
    padding: 5px 10px;
    border-radius: 3px;
    opacity: ${({running}) => running ? `1` : `0.5`};

    &:hover{
        cursor: ${({running}) => running ? `pointer` : `normal`};
    }
`
