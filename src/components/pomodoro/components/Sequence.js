import {useState, useEffect} from "react"
import styled from "styled-components"
import {DeleteIco} from "../../../styled/Ico.styled.js"
import {renderTimeb} from "../../../helpers/functions"

const Button = styled.button`
    background: ${({theme}) => theme.button.reset_red};
    color: white;
    border-radius: 3px;
    padding: 4px 8px;

    &:hover{
        cursor: pointer;
   }
`
const Container = styled.div`
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
    margin-bottom: 15px;
    display: ${({dis}) => dis ? "flex" : "none"};
`

const Bar = styled.div`
    background: pink;
    width: 5px;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-right: 25px;
`

const Text = styled.p`
    padding: 10px 20px;
`

const SettingsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    > * {
        margin-right: 30px;
    }
`

export const Sequence = ({sequence, setSequence, running, setRunning}) => {
    const [position, setPosition] = useState(0)
    const [count, setCount] = useState(0)
    const [current, setCurrent] = useState()

    const [alarm, setAlarm] = useState(false)

    const incrementCount = () => setCount(prev => prev + 1)
    const zeroCount = () => setCount(0)

    const checkTimerEnd = () => {
        if (sequence[position] - count == 0) {
            setPosition(prev => prev + 1)
            setCount(0)
        }
    }

    const haveWeFinished = () => {
        if (position > sequence.length - 1){
            setRunning(false)
            setTimeout(zeroCount, 1000)
        }   
    }

    useEffect(() => {
        running && setTimeout(incrementCount, 1000)
        checkTimerEnd()
    }, [count, running])

    useEffect(() => {
        haveWeFinished()
    }, [position])

    const handleDelete = (id) => {
        const filteredArr = sequence.filter(a => a.id != id)
        setSequence(filteredArr)
        setRunning(false)
        setTimeout(zeroCount, 1100)
    }

    const handleDeleteAll = (id) => {
        setSequence([])
        setRunning(false)
        setTimeout(zeroCount, 1100)
    }

    const handleToggleBell = () => {
        setAlarm(prev => !prev)
    }


    return (
        <>
            <SettingsContainer>
                {
                    sequence.length > 0 &&
                        <Button onClick={() => handleDeleteAll()}>Delete all </Button>
                }
            </SettingsContainer>
            {sequence.map((d, i ) => {
                const display = position <= i ? true : false
                return (
                    <Container dis={display} key={d.id}>
                        <Bar />
                        <TextContainer>
                            <Text>
                                {renderTimeb(position == i ? (d.time) - count : position < i ? d.time : 0)}
                            </Text>
                            <DeleteIco onClick={() => handleDelete(d.id)}/>
                        </TextContainer>
                    </Container>
                )
            })}
        </>
    )
}
