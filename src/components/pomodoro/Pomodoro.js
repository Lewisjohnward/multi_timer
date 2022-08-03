import {useState} from "react"
import styled from "styled-components"

const  blue = "#4d2f8f"
const green = "#27cf2d" 

const Banner = styled.div`
    background: ${blue};
    color: white;
    border-radius: 3px;
    padding: 14px 14px;
`

const Input = styled.input`
    display: block;
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 14px 14px;
    text-align: right;
`
const Button = styled.button`
    background: ${green};
    padding: 10px 14px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
`
const Text = styled.div`
    color: ${({theme}) => `${theme.orange};`}
    font-size: 1.5rem;
`

export const Pomodoro = () => {
    const [pomodoro, setPomodoro] = useState("1+3+1")
    return (
        <>
            <Text>Pomodoro Timer</Text>
            <Banner>
                To start 3 timers, where first timer runs for 1 minute, second starts when the first one is done and runs for 3 minutes and the third runs for 1 minute. Your input should be 1+3+1.
            </Banner>
            <Input 
                value={pomodoro}
            />
            <Button>
                Start a sequence
            </Button>
        </>
    )
}
