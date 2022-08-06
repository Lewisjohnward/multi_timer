import {useState} from "react"
import styled from "styled-components"
import {Sequence} from "./components/Sequence"
import {HR} from "../../styled/HR.styled"

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
    box-shadow: 0px 1px 1px inset rgba(0, 0, 0, 0.3);
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
    const [sequence, setSequence] = useState([])

    const handleInput = (e) => {
        setPomodoro(e.target.value)
    }

    const handleStartSequence = () => {
        const arr = pomodoro.split("+")
        setSequence(arr)
    }

    return (
        <>
            <Text>Pomodoro Timer</Text>
            <Banner>
                To start 3 timers, where first timer runs for 1 minute, second starts when the first one is done and runs for 3 minutes and the third runs for 1 minute. Your input should be 1+3+1.
            </Banner>
            <Input 
                value={pomodoro}
                onFocus={() => setPomodoro("")}
                onChange={(e) => handleInput(e)}
            />
            <Button onClick={() => handleStartSequence()}>
                Start a sequence
            </Button>
            <Sequence sequence={sequence}/>
            <HR />
            <Text>Add a sequence quickly using the shortcuts below</Text>
            <HR />
        </>
    )
}
