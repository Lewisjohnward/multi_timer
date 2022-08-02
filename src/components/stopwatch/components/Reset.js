import styled from "styled-components" 
import {BsArrowRepeat} from "react-icons/bs"


const Container = styled.div`
    display: flex;
    background: gray;
    padding: 2px 4px;
    border-radius: 2px;

    &:hover{
        cursor: pointer;
    }

`
const ResetIco = styled(BsArrowRepeat)`
    font-size: 2rem;
    color: white;
    text-shadow: 2px 2px black;

`
export const Reset = ({handleReset}) => {
    return (
        <Container onClick={() => handleReset()}>
            <ResetIco />
        </Container>
    )
}
