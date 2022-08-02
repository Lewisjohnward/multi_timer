import {useState, useEffect} from "react"
import styled from "styled-components"
import {Timer} from "./components/Timer"

const orange = "#eb4934"
const blue = "#30b1cf"
const gray = "#f0f2f0"
const darkgray = "#d7dadb"
const black = "#6b6464"
const darkblack = "#524f4e"

const Container = styled.div`
    margin-top 25px;

    > * {
        margin-bottom: 25px;
    }

`

const Text = styled.div`
    color: ${({color}) => `${color};`}
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
    padding: 10px 5px;
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

    > *{
        background: ${black};
        padding: 8px 10px;
        margin: 0px 3px;
        border-radius: 3px;
        cursor: pointer;

        &:hover{
            background: ${darkblack};
        }
    }
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

export const SimpleTimer = () => {
    const [time, setTime] = useState(30)
    const [initTime, setInitTime] = useState(30)
    const [running, setRunning] = useState(false)

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
        setTime(d)
        setInitTime(d)
        setRunning(true)
    }

    const decrementTime = () => setTime(prev => prev - 1)
    const resetTime = () => setTime(initTime)

    useEffect(() => {
        console.log("use effect called")
        running && setTimeout(decrementTime, 1000)
        if(!time && running) {
            setRunning(false)
            setTimeout(resetTime, 1080)
        }
    }, [running, time])


    return (
            <Container>
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
                            {ringTimes().map(d => <div>{d}s</div>)}
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
            </Container>
    )
}
