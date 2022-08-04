import {useState, useEffect} from "react"
import styled from "styled-components"
import {Timer} from "./components/Timer"

const orange = "#eb4934"
const blue = "#30b1cf"
const gray = "#f0f2f0"
const darkgray = "#d7dadb"
const black = "#6b6464"
const darkblack = "#524f4e"

const Text = styled.div`
    color: ${({theme}) => `${theme.orange};`}
    font-size: 1.5rem;
`

const PresetTimeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 200px);
    grid-gap: 5px;
`
const PresetTime = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 5px 40px;
    background: ${gray};
    font-size: 0.9rem;

    &:hover{
        cursor: pointer;
        background: ${darkgray};
    }
`

const SettingsContainer = styled.div`
    background: ${gray};
    padding: 10px 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    
    > * {
        margin-bottom: 20px;
    }
  
`

const OptionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
`
const Option = styled.div`
`
const RingTimeContainer = styled.div`
    display: flex;
    color: white;
`
const Slider = styled.input.attrs({
    type: 'range',
    min: '0',
    max: '100',
})`
    height: 5px;
    background: ${blue};
`

const Dropdown = styled.select`
`
const TimeSelectContainer = styled.div`
        background: ${({background, theme}) => background ? theme.orange : `${black}`};
        padding: 8px 10px;
        margin: 0px 3px;
        border-radius: 3px;
        cursor: pointer;
        box-shadow: 0px 1px 4px inset rgba(0, 0, 0, 0.3);

        &:hover{
            background: ${darkblack};
        }
`

export const SimpleTimer = () => {
    const [time, setTime] = useState(300)
    const [initTime, setInitTime] = useState(300)
    const [running, setRunning] = useState(false)
    const [ringTime, setRingTime] = useState(2)

    const generateTimes = () => {
        const arr = new Array(30).fill(0).map((d, i) => 30 + (i * 30))
        return arr
    }
    const ringTimes = () => {
        const arr = new Array(4).fill(0).map((d, i) => { 
            if (i == 0) return 2
            else return i * 5
        })
        return arr
    }

    const renderTime = (d) => {
        const minutes = Math.floor(d / 60)
        const seconds = d - (minutes * 60)
        if (!minutes) return `${seconds}s`
        else return `${minutes}m ${seconds}s`
    }

    const handleTime = (d) => {
        if(!running) {
            setTime(d * 10)
            setInitTime(d * 10)
            handleStart()
        }
    }
    const handleStart = () => {
        setTimeout(start, 1000)
    }

    const start = () => setRunning(true)

    const decrementTime = () => setTime(prev => prev - 1)
    const resetTime = () => setTime(initTime)

    useEffect(() => {
        running && setTimeout(decrementTime, 100)
        if(!time && running) {
            setRunning(false)
            setTimeout(resetTime, 110)
        }
    }, [running, time])

    const handleSelectRingTime = (d) => {
        setRingTime(d)
    }


    return (
        <>
                <Text color={orange}>Simple countdown timer</Text>
                <Timer time={time} setTime={setTime} setRunning={setRunning} running={running} resetTime={resetTime}/>
                <Text color={blue}>Start a timer quickly</Text>
                <PresetTimeContainer>
                    {generateTimes().map(d => <PresetTime onClick={() => handleTime(d)}>{renderTime(d)}</PresetTime>)}
                </PresetTimeContainer>
                <SettingsContainer>
                    <Text color={orange}>Settings</Text>
                    <OptionContainer>
                        <Option>
                            How long should the alarm ring for
                        </Option>
                        <RingTimeContainer>
                            {ringTimes().map(d => <TimeSelectContainer background={ringTime == d ? true : false} onClick={() => handleSelectRingTime(d)}>{d}s</TimeSelectContainer>)}
                        </RingTimeContainer>
                    </OptionContainer>
                    <OptionContainer>
                        <Option>
                            How loud should the alarm be
                        </Option>
                        <Slider />
                    </OptionContainer>
                    <OptionContainer>
                        <Option>
                            Choose alarm sound
                        </Option>
                        <Dropdown>
                            <option value="1">Sharp</option>
                            <option value="2">Needle</option>
                            <option value="3">Blast</option>
                        </Dropdown>
                    </OptionContainer>

                </SettingsContainer>
            </>
    )
}
