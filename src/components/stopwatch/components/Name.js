import {useState} from "react"
import styled from "styled-components"


const Container = styled.div`
    display: flex;
`
const TextContainer = styled.input`
    padding: 1px 6px;

    &:hover{
        cursor: pointer;

        transform: scale(1.01);
    }
`


export const Name = ({name, setName, locked}) => {

    const handleClick = () => {
        setName("")
    }
    const handleBlur = () => {
        name == "" && setName("My stopwatch")
    }
    return (
        <Container >
            {
                locked ?
                    <TextContainer
                        value={name}
                    />
                    :
                    <TextContainer 
                        value={name}
                        onClick={handleClick}
                        onChange={e => setName(e.target.value)}
                        onBlur={handleBlur}
                    />
            }
        </Container>
    )
}
