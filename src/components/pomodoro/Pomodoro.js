import {useState, useContext} from "react"
import styled from "styled-components"
import {Sequence} from "./components/Sequence"
import {HR} from "../../styled/HR.styled"
import {PresetTimeContainer, PresetTime, SettingsContainer, OptionContainer, Option, RingTimeContainer, Slider, Dropdown, TimeSelectContainer} from "../../styled/Preset.styled.js"

const  blue = "#4d2f8f"
const green = "#27cf2d" 
const red = "#e8063c"

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
    background: ${({background}) => background};
    padding: 5px 10px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
`
const Text = styled.div`
    color: ${({theme}) => `${theme.orange};`}
    font-size: 1.5rem;
`

const ButtonContainer = styled.div`
    > * {
        margin-right: 25px;
    }
`

export const Pomodoro = () => {
    const [pomodoro, setPomodoro] = useState("1+3+1")
    const [sequence, setSequence] = useState([])
    const [running, setRunning] = useState(false)


    const validateInput = () => {
        //TODO
    }

    const handleInput = (e) => {
        setPomodoro(e.target.value)
    }

    const handleStartSequence = () => {
        const arr = pomodoro.split("+").map(d => d * 60)
        setSequence(arr)
        setRunning(true)
    }

    const handleStopSequence = () => {
        alert("handle stop")
    }

    const presetTimeArr = new Array(15).fill(0).map((d, i) => 30 + (i * 30))

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
            <ButtonContainer>
                <Button background={green} onClick={() => handleStartSequence()}>
                Start a sequence
                </Button>
                <Button background={red} onClick={() => handleStopSequence()}>
                Stop
                </Button>
            </ButtonContainer>
            <Sequence sequence={sequence} running={running} setRunning={setRunning}/>
            <HR />
            <Text>Add a sequence quickly using the shortcuts below</Text>
            <HR />
            <PresetTimeContainer>
            {presetTimeArr.map(d => <PresetTime>{d}</PresetTime>)}
            </PresetTimeContainer>
        </>
    )
}
