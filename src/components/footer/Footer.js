import styled from "styled-components"

const Container = styled.div`
    position: absolute;
    bottom: 0;
    min-width: 100%;
    box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1);
    background: ${({theme}) => theme.blue};
    text-align: center;
    padding: 2px;
    font-weight: 200;
`

const Text = styled.text``

export const Footer = () => {
    return (
        <Container>
            <Text>Wedge Web Design 2022. All rights reserved</Text>
        </Container>
    )
}
