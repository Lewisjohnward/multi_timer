import styled from "styled-components"
import {DeleteIco} from "../../../styled/Ico.styled.js"

const Container = styled.div`
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4);
    display: flex;
    border-left: 5px solid ${({background}) => background};
`
const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
`
const Text = styled.text`
    font-size: 1.5rem;
    margin-left: 10px;
`
const Button = styled.button`
    background: ${({theme}) => theme.button.reset_red};
    color: white;
    border-radius: 3px;
    padding: 4px 8px;

    &:hover{
        cursor: pointer;
   }
`

const MsSpan = styled.span`
    font-size: 0.8rem;
`


export const Laps = ({laps, setLaps}) => {

    const handleDelete = (d) => {
        setLaps(prev => prev.filter(a=> d.id != a.id))
    }
    const handleDeleteAll = () => {
        setLaps([])
    }

    return (
        <>
            {laps.length > 0 && <Button onClick={() => handleDeleteAll()}>Delete All</Button>}
            {laps.map(d => (
                <Container key={d.id} background={d.color}>
                    <TextContainer>
                        <Text>
                            {d.hours}:{d.mins}:{d.secs}:<MsSpan>{d.ms}</MsSpan>
                        </Text>
                        <DeleteIco onClick={() => handleDelete(d)}/>
                    </TextContainer>
                </Container>
            ))}
        </>
    )
}
