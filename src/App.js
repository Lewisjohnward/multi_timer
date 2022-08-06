import {useState, useEffect} from "react"
import styled, {ThemeProvider} from "styled-components"
import GlobalStyle from "./globalStyles"
import {Banner} from "./components/banner/Banner"
import {Error} from "./components/error/Error"
import {Page} from "./components/page/Page"
import {Footer} from "./components/footer/Footer"


const theme = {
    blue: "#c0ecf0",
    orange: "#eb4934",
    button: {
        stop_blue: "#43a2ab",
        reset_red: "#e8063c",
        start_green: "#27cf2d" 
    }
}


const Container = styled.div`
    margin: 0px 400px;

    @media (max-width: 800px)
    {
        margin: 0px 100px;
    }

    @media (max-width: 500px)
    {
        margin: 0px 50px;
    }
`

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Banner />
                <Container >
                    <Page />
                </Container>
                <Error />
            <Footer />
        </ThemeProvider>
    )
}

export default App
