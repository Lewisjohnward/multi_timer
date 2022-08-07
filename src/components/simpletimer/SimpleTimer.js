import {useState, useEffect, useRef} from "react"
import styled from "styled-components"
import {Timer} from "./components/Timer"
import {Alarm} from "./components/Alarm"
import {PresetTimeContainer, PresetTime, SettingsContainer, OptionContainer, Option, RingTimeContainer, Slider, Dropdown, TimeSelectContainer} from "../../styled/Preset.styled.js"

const orange = "#eb4934"
const blue = "#30b1cf"

const Text = styled.div`
    color: ${({theme}) => `${theme.orange};`}
    font-size: 1.5rem;
`


export const SimpleTimer = () => {
    const [time, setTime] = useState(300)
    const [initTime, setInitTime] = useState(300)
    const [running, setRunning] = useState(false)
    const [ringTime, setRingTime] = useState(2)
    const [alarm, setAlarm] = useState("beep")
    const [slideValue, setSlideValue] = useState(25)

    const audioRef = useRef()

    const generateTimes = () => {
        const arr = new Array(30).fill(0).map((d, i) => 30 + (i * 30))
        arr.unshift(2)
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

    const handleVolumeSlider = (e) => {
        setSlideValue(e.target.value)
    }


    return (
        <>
            <Alarm time={time} ringTime={ringTime} alarm={alarm} volume={slideValue}/>
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
                    <Slider slideValue={slideValue} onChange={(e) => handleVolumeSlider(e)}/>
                </OptionContainer>
                <OptionContainer>
                    <Option>
                        Choose alarm sound
                    </Option>
                    <Dropdown onChange={(e) => setAlarm(e.target.value)}>
                        <option value="beep">Beep</option>
                        <option value="soft">Soft</option>
                    </Dropdown>
                </OptionContainer>
            </SettingsContainer>
        </>
    )
}
