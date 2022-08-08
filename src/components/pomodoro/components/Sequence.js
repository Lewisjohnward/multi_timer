import {useState, useEffect} from "react"
import styled from "styled-components"

const Container = styled.div`
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
    margin-bottom: 15px;
    display: ${({display}) => display ? "flex" : "none"};
`

const Bar = styled.div`
    background: pink;
    width: 5px;
`
const Text = styled.text`
    padding: 10px 20px;
`

export const Sequence = ({sequence, running, setRunning}) => {
    const [position, setPosition] = useState(0)
    const [count, setCount] = useState(0)
    const [current, setCurrent] = useState()

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


    return (
        <>
            {sequence.map((d, i ) => {
                const display = position <= i ? true : false
                return (
                    <Container display={display}>
                        <Bar />
                        <Text>
                            {position == i ? (d) - count : position < i ? d : 0}
                        </Text>
                    </Container>
                )
            })}
        </>
    )
}
