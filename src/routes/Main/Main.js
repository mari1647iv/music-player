import React from "react";
import "./Main.css";
import Header from "../../components/Header/Header";
import Player from "../../components/Player/Player";

function Main() {
    return ( 
        <div className="main-page"> 
            <Header location="main"/>
            <p>Hello, world!</p>
            <Player size="minimized" song="Here's some song" artist="Some strange artist" duration="3:40"/>
        </div>
    );
}

export default Main;