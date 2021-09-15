import React from "react";
import "./Player.css";
import Header from "../../components/Header/Header";

function Player() {
    return ( 
        <div className="player"> 
            <Header location="player"/>
            Hello, world! 
        </div>
    );
}

export default Player;