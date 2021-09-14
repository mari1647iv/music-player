import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Main from "./routes/Main/Main";
import Player from "./routes/Player/Player";
import Events from "./routes/Events/Events";
import Components from "./routes/Components/Components";

function App() {
    return ( 
        <Router>
            <Route exact path="/">
                <Components />
            </Route>
            <Route path="/main">
                <Main />
            </Route>
            <Route path="/player">
                <Player />
            </Route>
            <Route path="/events">
                <Events />
            </Route>
            <Route path="/components">
                <Components />
            </Route>
        </Router>
    );
}

export default App;