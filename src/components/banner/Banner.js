import styled from "styled-components"
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import {GrDocumentText} from "react-icons/gr"

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background: #c0ecf0;
    padding: 15px 50px;
    font-size: 2rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
`

const ThinText = styled.span`

`

const IcoContainer = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    > * {
        &:hover{
            cursor: pointer;
            transform: scale(1.05);
        }
    }
`

const GitIco = styled(AiFillGithub)``
const LinkedIco = styled(AiFillLinkedin)``
const DocIco = styled(GrDocumentText)``

export const Banner = () => {
    return (
        <Container>
            <text>Multi Timer </text>
            <IcoContainer>
                <GitIco />
                <LinkedIco />
                <DocIco />
            </IcoContainer>
        </Container>
    )
}
