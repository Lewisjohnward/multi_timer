import {useState, useEffect} from "react"
import styled from "styled-components"
import {useContext} from "react"
import {ThemeContext} from "styled-components"
import {renderTime} from "../../helpers/functions"
import {Laps} from "./components/Laps"
import {v4 as uuidv4} from "uuid"
import {HR} from "../../styled/HR.styled"
import randomColor from "randomcolor"
import {Button} from "../../styled/Button.styled.js"

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


const Text = styled.div`
    color: ${({theme}) => `${theme.orange};`}
    font-size: 1.5rem;
`

const MsSpan = styled.span`
    font-size: 1.2rem;
`

export const Stopwatch = () => {
    const [laps, setLaps] = useState([])

    return (
        <>
        <Text>Stopwatch</Text>
            <Display laps={laps} setLaps={setLaps} />
            <HR />
            <Text>Laps</Text>
            <Laps laps={laps} setLaps={setLaps} />
        </>
    )
}

const Display = ({laps, setLaps}) => {
    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(false)

    const themeContext = useContext(ThemeContext)

    const handleUpdateLaps = () => {
        if (!running) return
        const [hours, mins, secs, ms] = renderTime(time, timeoutSpeed)
        const lapObj = {
            id: uuidv4(),
            color: randomColor(),
            hours,
            mins,
            secs,
            ms
        }
        setLaps(prev => [...prev, lapObj])
    }

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

    const [hours, mins, secs, ms] = renderTime(time, timeoutSpeed)
    const timeStr = <>{hours}:{mins}:{secs}<MsSpan>{ms}</MsSpan></>

    return (
        <>
            <StopwatchContainer>
                {timeStr}
            </StopwatchContainer>
            <ButtonContainer>
                <Button 
                    running={!running}
                    background={themeContext.button.start_green} 
                    onClick={() => handleStart()}
                >
                    Start
                </Button>
                <Button 
                    running={running}
                    background={themeContext.button.stop_blue} 
                    onClick={() => handleStop()}
                >
                    Stop
                </Button>
                <Button 
                    running={time > 0}
                    background={themeContext.button.reset_red} 
                    onClick={() => handleReset()}
                >
                    Reset
                </Button>
                <Button 
                    running={running}
                    background={themeContext.orange} 
                    onClick={() => handleUpdateLaps()}
                >
                    Lap
                </Button>
            </ButtonContainer>
        </>
    )
}
