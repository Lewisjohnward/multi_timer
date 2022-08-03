import styled from "styled-components"


const Container = styled.div`
    position: fixed;
    bottom: 0;
    z-index: 99;
`

const ErrorContainer = styled.div`
    text-align: center;
    border: 1px solid #fc3003;
    border-radius: 3px 3px 0px 0px;
    background: #b5533e;
    padding: 3px 5px;
    margin-left: 100px;
    color: white;
    width: 150px;
    cursor: pointer;
`

export const Error = () => {
    return (
        <Container>
            <ErrorContainer>
                Report an issue!
            </ErrorContainer>
        </Container>

    )
}
