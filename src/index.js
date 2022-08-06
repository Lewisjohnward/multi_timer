import ReactDOM from "react-dom/client"
import App from "./App"
import {BrowserRouter as Router} from "react-router-dom"

const domContainer = document.getElementById('root');

const root = ReactDOM.createRoot(domContainer);

root.render(
    <Router>
        <App />
    </Router>
)
