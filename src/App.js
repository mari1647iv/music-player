import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Main from "./routes/Main/Main";
import Player from "./routes/Player/Player";
import Events from "./routes/Events/Events";

function App() {
    return ( 
        <Router>
            <Route exact path="/">
                <Main />
            </Route>
            <Route path="/player">
                <Player />
            </Route>
            <Route path="/events">
                <Events />
            </Route>
        </Router>
    );
}

export default App;