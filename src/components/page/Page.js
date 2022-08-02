import styled from "styled-components"
import {SimpleTimer} from "../simpletimer/SimpleTimer"
import {Link, Route, Routes} from "react-router-dom"

const border = "1px solid rgba(0, 0, 0, 0.1);"
const Frame = styled.div`
    margin-top: 100px;
`
const Container = styled.div`
    border-bottom: ${border};
`
const Button = styled.button`
    padding: 10px 20px;
    border-radius: 3px 3px 0px 0px;
    font-weight: 800;
    font-size: 1.5rem;

    &:hover{
        background: rgba(0, 0, 0, 0.1);
    }
    > * {color: #43a2ab;}
`

export const Page = () => {
    return (
        <Frame>
            <Container>
                <Button><Link to="/">Simple Timer</Link></Button>
                <Button><Link to="/pomodoro">Pomodoro Timer</Link></Button>
                <Button><Link to="/stopwatch">Stopwatch</Link></Button>
            </Container>
            <Routes>
                <Route path="/" element={<SimpleTimer />} />
                <Route path="/pomodoro" />
                <Route path="/stopwatch" />
            </Routes>

        </Frame>
    )
}
