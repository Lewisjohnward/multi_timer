import {useState} from "react"
import styled from "styled-components"

const blue = "#43a2ab"
const red = "#e8063c"
const gray = "#000000"

const Display = styled.div`
    display: flex;
    width: 300px;
    margin-bottom: 30px;
`

const TimeDisplayContainer = styled.div`

    ${
        ({black}) => black ?
            `background: black; color: white;` 
            : 
            `background: white; color: black;`
    }
    padding: 5px 10px;
    border-radius: 3px;
    margin: 2px;
    font-size: 4rem;
`


const ButtonContainer = styled.div`
    display: flex;

     > * {
        margin-right: 5px;
     }
`
const Button = styled.button`
    padding: 5px 10px;
    background: ${({color}) => `${color}`};
    border-radius: 3px;
    color: white;

    &:hover {
        cursor: pointer;
    }
`

export const Timer = ({time, setTime, setRunning, running, resetTime}) => {
    const [reset, setReset] = useState(false)

    const handleReset = () => {
        resetTime()
        setReset(true)
    }

    const handleStart = () => {
        setTimeout(start, 1000)
    }

    const start = () => setRunning(true)


    const displayTime = (time) => {
        time = time < 0 ? 0 : time
        const mins = Math.floor(time / (60 * 10))
        const seconds = time - (mins * (60 * 10))
        const mins1 = Math.floor(mins / 10)
        const mins2 = mins - (mins1 * (10))
        const secs1 = Math.floor(seconds / (10 * 10))
        const secs2 = Math.floor((seconds - (secs1 * (10 * 10))) / 10)


        return (
            <>
                <TimeDisplayContainer black>
                    {mins1}
                </TimeDisplayContainer>
                <TimeDisplayContainer black>
                    {mins2}
                </TimeDisplayContainer>
                <TimeDisplayContainer>
                    :
                </TimeDisplayContainer>
                <TimeDisplayContainer black>
                    {secs1}
                </TimeDisplayContainer>
                <TimeDisplayContainer black>
                    {secs2}
                </TimeDisplayContainer>
            </>
        )}

    return (
        <>
            <Display>
                {displayTime(time)}
            </Display>
            <ButtonContainer>
                <Button color={blue} onClick={() => handleStart()}>
                    Start
                </Button>

                {
                    running ?
                        <Button color={red} onClick={() => setRunning(false)}>
                            Stop
                        </Button>
                        :
                        <Button color={red} onClick={() => handleReset()}>
                            Reset
                        </Button>
                }

            </ButtonContainer>
        </>
    )
}
