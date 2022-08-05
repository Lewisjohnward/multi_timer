import {useState, useEffect} from "react"
import styled from "styled-components"

const Container = styled.div`
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
    margin-bottom: 15px;
    display: flex;
`

const Bar = styled.div`
    background: pink;
    width: 5px;
`
const Text = styled.text`
    padding: 10px 20px;
`

export const Sequence = () => {
    const sequence = "1+3+1".split("+")
    const [position, setPosition] = useState(0)
    const [count, setCount] = useState(0)
    const [running, setRunning] = useState(true)
    const [current, setCurrent] = useState()

    const incrementCount = () => setCount(prev => prev + 1)

    useEffect(() => {
        running && setTimeout(incrementCount, 1000)
    }, [count, running])



    return (
        <>
            {count}
            {position}
            {sequence.map((d, i ) => {

                return (
                    <Container>
                        <Bar />
                        <Text>
                            {(d * 60) - count}
                        </Text>
                    </Container>
                )
            })}
        </>
    )
}
