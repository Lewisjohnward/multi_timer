import styled from "styled-components"
import {SimpleTimer} from "../simpletimer/SimpleTimer"
import {Pomodoro} from "../pomodoro/Pomodoro"
import {Link, Route, Routes, Navigate, useLocation} from "react-router-dom"
import {Stopwatch} from "../stopwatch/Stopwatch"

const border = "1px solid rgba(0, 0, 0, 0.1);"
const Frame = styled.div`
    margin-top: 30px;

`
const Container = styled.div`
    border-bottom: ${border};

`

const BodyContainer = styled.div`
    margin-top 25px;
    min-width: 1000px;

    > * {
        margin-bottom: 25px;
    }


    &:hover{
        cursor: default;
    }

`

const Button = styled.button`
    padding: 10px 20px;
    border-radius: 3px 3px 0px 0px;
    font-weight: 800;
    font-size: 1.5rem;
    border-bottom: 2px solid  ${({active}) => active ? "rgba(0, 0, 0, 0.2)" : "white"};

    &:hover{
        background: rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
    color: #43a2ab;
`

export const Page = () => {
    const pathname = useLocation().pathname

    return (
        <Frame>
            <Container>
                <Link to="/" ><Button active={pathname == "/"}>Simple Timer</Button></Link>
                <Link to="/pomodoro" ><Button active={pathname == "/pomodoro"}>Pomodoro Timer</Button></Link>
                <Link to="/stopwatch" ><Button active={pathname == "/stopwatch"}>Stopwatch</Button></Link>
            </Container>
            <BodyContainer>
                <Routes>
                    <Route path="/" element={<SimpleTimer />} />
                    <Route path="/pomodoro" element={<Pomodoro />}/>
                    <Route path="/stopwatch" element={<Stopwatch />}/>
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BodyContainer>
        </Frame>
    )
}
