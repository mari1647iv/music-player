import React from "react";
import "./MusicPlayer.css";
import Header from "../../components/Header/Header";

function MusicPlayer() {
    return ( 
        <div className="player"> 
            <Header location="player"/>
            Hello, world! 
        </div>
    );
}

export default MusicPlayer;