import styled from "styled-components"
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import {GrDocumentText} from "react-icons/gr"
import {BsStopwatch} from "react-icons/bs"

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background: #c0ecf0;
    padding: 15px 50px;
    font-size: 2rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
`

const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    > * {
        margin-right: 20px;
    }
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

const Button = styled.button`
    font-size: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const GitIco = styled(AiFillGithub)``
const LinkedIco = styled(AiFillLinkedin)``
const DocIco = styled(GrDocumentText)``
const StopwatchIco = styled(BsStopwatch)``

export const Banner = () => {
    return (
        <Container>
            <Title>
                <text>Multi Timer </text>
                <StopwatchIco />
            </Title>
            <IcoContainer>
                <a href="http://www.github.com/Lewisjohnward" target="_blank">
                    <GitIco />
                </a>
                <Button>
                    <LinkedIco />
                </Button>
                <Button>
                    <DocIco />
                </Button>
            </IcoContainer>
        </Container>
    )
}
