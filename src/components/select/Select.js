import {useState} from "react"
import styled from "styled-components"
import {IoTimerOutline} from "react-icons/io5"
import {RiTimerLine} from "react-icons/ri"


const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    width: 200px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
`

const IcoContainer = styled.div`
    display: flex;
    font-size: ${({hover}) => hover ? `1` : `2.5`}rem;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    cursor: pointer;
    text-align: center;
`
const TimerIco = styled(IoTimerOutline)`
`

const StopwatchIco = styled(RiTimerLine)`
`
export const Select = () => {

    return (
        <Container>
                <HoverFunctionality text={"Add timer"}>
                    <TimerIco />
                </HoverFunctionality>
            <HoverFunctionality text={"Add Stopwatch"}>
                <StopwatchIco />
            </HoverFunctionality>
        </Container>

    )
}

const HoverFunctionality = ({children, text}) => {
    const [hover, setHover] = useState(false)
    return (
        <IcoContainer 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            hover={hover}
        >
            {hover ? text : children}
        </IcoContainer>
    )
}
