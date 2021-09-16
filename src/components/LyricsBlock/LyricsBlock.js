import React from "react";
import "./LyricsBlock.css";

function LyricsBlock(props) {
    const { lyrics } = props;
    return (
        <div className="song-lyrics" >{lyrics}</div>
    );
}

export default LyricsBlock;