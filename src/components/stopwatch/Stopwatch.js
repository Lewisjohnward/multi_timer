import {useState, useEffect} from "react"
import styled from "styled-components"
import {AiOutlineCaretRight} from "react-icons/ai"
import {BsArrowsMove} from "react-icons/bs"
import {GiPadlock} from "react-icons/gi"
import {Name} from "./components/Name"
import {Reset} from "./components/Reset"


const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px 30px;
    background: white;
    //border: 1px solid black;
    //border-radius: 3px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`

const NameContainer = styled.div`
  
`

const PlayIco = styled(AiOutlineCaretRight)`
`

const TimeTextContainer = styled.div`
    background: white;
    border-radius: 5px;
    padding: 10px 50px;
`
const TimeText = styled.text`
    font-size: 2rem;
`

const ToggleDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1rem;
    border: 1px solid black;
    border-radius: 3px;
    padding: 2px 8px;
    width: 80px;

    &:hover{
        cursor: pointer;
    }

    background: ${({running}) => running ? `red` : `green`};
`

const ControlContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 140px;
`

const ResetContainer = styled.text`
`

const ToggleText = styled.text`
`

const MSecContainer = styled.span`
    font-size: 0.7rem;
`

const LockIco = styled(GiPadlock)`
    position: absolute;
    top: 4%;
    right: 2%;
    font-size: 1.6rem;
    border-radius: 2px;
    padding: 3px;
    box-shadow: ${({locked}) => locked ? `0px 0px 3px inset  rgba(0, 0, 0, 0.8)` : `0px 0px 3px rgba(0, 0, 0, 0.8)` };

    &:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
    &:active{
        transform: scale(1.1) translateY(1px);
        cursor: pointer;
    }
`

const ArrowIco = styled(BsArrowsMove)`

    &:hover{
        cursor: all-scroll;
        transform: scale(1.1);
    }
    &:active{
        cursor:all-scroll;
        transform: scale(1.3);
    }
    
`

export const Stopwatch = () => {
    const [running, setRunning] = useState(false)
    const [count, setCount] = useState(0)
    const [name, setName] = useState("My stopwatch")
    const [locked, setLocked] = useState(false)

    const toggleRunning = () => setRunning(prev => !prev)
    const incrementCount = () => setCount(prev => prev + 1)
    const resetCount = () => setCount(0)

    useEffect(() => {
        running && setTimeout(incrementCount, 10)
    }, [running, count])


    const handleReset = () => {
        setRunning(false)
        setTimeout(resetCount, 50)
    }
    const renderTime = (s) => {
        const multiplier = 100
        const hours = formatTime(Math.floor(s / (multiplier *60 * 60)))
        let rtime = s - (hours * 60 * 60* multiplier)
        const minutes = formatTime(Math.floor(rtime / (60 * multiplier)))
        rtime = rtime - minutes * 60 * multiplier
        const seconds = formatTime(Math.floor(rtime / (multiplier)))
        rtime = rtime - seconds * multiplier 
        const mseconds = formatTime(rtime)


        return <div>{hours} : {minutes} : {seconds}<MSecContainer>{mseconds}</MSecContainer></div>
    }

    const formatTime = (val) => {
        const temp = val < 10 ? "0" + val : val
        return temp
    }

    const checkLock = (fun) => {
        if(!locked) fun()
    }


    return (
        <Container>
            <ArrowIco />
            <LockIco 
                onClick={() => setLocked(prev => !prev)}
                locked={locked}/>
            <Name name={name} setName={setName} locked={locked} />
            <TimeTextContainer>
                <TimeText>
                    {renderTime(count)}
                </TimeText>
            </TimeTextContainer>
            <ControlContainer>
                <ToggleDiv onClick={() => checkLock(toggleRunning)} running={running}>
                    {
                        running ?
                            <ToggleText >Stop</ToggleText>
                            :
                            <ToggleText>Start</ToggleText>
                    }
                </ToggleDiv>
                <Reset handleReset={() => checkLock(handleReset)} />
            </ControlContainer>
        </Container>
    )
}
