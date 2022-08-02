import {useState, useEffect} from "react"
import styled from "styled-components"
import GlobalStyle from "./globalStyles"
import {Banner} from "./components/banner/Banner"
import {Footer} from "./components/footer/Footer"
import {Page} from "./components/page/Page"


const Container = styled.div`
    margin: 0px 400px;
`

const Feature = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    margin: 100px;
    height: 500px;

`

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Banner />
            <Container >
                <Page />
            </Container>
            <Footer />
        </>
    )
}

export default App
