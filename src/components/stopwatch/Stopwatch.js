import {useState, useEffect} from "react"
import styled from "styled-components"
import {useContext} from "react"
import {ThemeContext} from "styled-components"
import {renderTime} from "../../helpers/functions"

const StopwatchContainer = styled.div`
    box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.3);
    text-align: center;
    font-size: 4rem;
    padding: 40px 20px;
    background: ${({theme}) => theme.blue};
`

const ButtonContainer = styled.div`
    display: flex;
    width: 300px;

    > * {
        margin-right: 10px;
    }
`

const Button = styled.button`
    background: ${({background}) => `${background}`};
    color: white;
    font-size: 1rem;
    padding: 5px 10px;
    border-radius: 3px;

    &:hover{
        cursor: pointer;
    }
`

const Text = styled.div`
    color: ${({theme}) => `${theme.orange};`}
    font-size: 1.5rem;
`

export const Stopwatch = () => {
    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(false)


    const themeContext = useContext(ThemeContext)

    const handleStart = () => {
        setRunning(true)
    }

    const handleStop = () => {
        setRunning(false)
    }

    const handleReset = () => {
        setRunning(false)
        setTimeout(resetTime, 20)
    }

    const resetTime = () => {
        setTime(0)
    }

    const incrementTime = () => {
        setTime(prev => prev + 1)
    }

    const timeoutSpeed = 10

    useEffect(() => {
        running && setTimeout(incrementTime, timeoutSpeed)
    }, [running, time])

    const [hours, mins, secs, mj] = renderTime(time, timeoutSpeed)


    return (
        <>
        <Text>Stopwatch</Text>
        <StopwatchContainer>
            {hours}:{mins}:{secs}
        </StopwatchContainer>
            <ButtonContainer>
                <Button background={themeContext.button.start_green} onClick={() => handleStart()}>
                    Start
                </Button>
                <Button background={themeContext.button.stop_blue} onClick={() => handleStop()}>
                    Stop
                </Button>
                <Button background={themeContext.button.reset_red} onClick={() => handleReset()}>
                    Reset
                </Button>
            </ButtonContainer>
        </>
    )
}
