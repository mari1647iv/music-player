import React from "react";
import "./AudioBlock.css";
import {Play} from "react-feather";
import  DefaultImage from "../../assets/default.svg";


function AudioBlock(props) {
  const { id, song, artist, image, duration } = props;
  return (
    <label for={id} >
      <input type="radio" id={id} name="playlist" value={id} />
      <div className="audio-block">
          <img src={image?image:DefaultImage} className="image"/>
          <div className="info">
            <p className="song">{song}</p>
            <p className="artist">{artist}</p>
          </div>
          <p className="time">{duration}</p>
          <i><Play size={40}/></i>
      </div>
    </label>
  );
}

export default AudioBlock;