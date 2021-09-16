import React, { useState } from "react";
import "./Player.css";
import {Play, SkipBack, SkipForward, Repeat, Share2, Pause} from "react-feather";
import  DefaultImage from "../../assets/default.svg";
import { Link } from "react-router-dom";
import Button from "../Button/Button";


function Player(props) {
  const { size, song, artist, image, duration } = props;
  const [isPlaying, setIsPlaying] = useState(false);

  let current_time = "2:37";
  let progress = 100*(Number(current_time.split(':')[0])*60 + Number(current_time.split(':')[1]))/(Number(duration.split(':')[0])*60 + Number(duration.split(':')[1]));

  function playPause() {
    setIsPlaying(!isPlaying);
  }

  switch (size) {
    case "minimized":
      return (
          <div className="minimized-player">
            <div className="player-slider">
              <input type="range" defaultValue={progress} className="progress" />
              <div className="song-time">
                <span className="current-time">{current_time}</span>
                <span className="song-duration">{duration}</span>
              </div>
            </div>
            <div className="song-container">
              <div className="container">
                <img src={image?image:DefaultImage} className="minimized-player-image" alt="Song album"/>
                <Link to="/player"  className="minimized-player-info">
                  <p className="player-song">{song}</p>
                  <p className="player-artist">{artist}</p>
                </Link>
                <div className="controls">
                      <Button type="icon" children={<SkipBack size={44}/>} /> 
                      <Button type="icon" children={isPlaying?<Pause size={44} strokeWidth="1.8px"/>:<Play size={44}/>}/> 
                      <Button type="icon" children={<SkipForward size={44}/>}/> 
                </div>
              </div>
              <div className="container">
                <label>
                  <input type="checkbox" className="isRepeat"/>
                  <i><Repeat size={30} /></i>
                </label>
                <Button type="icon" children={<Share2 size={30}/>}/> 
              </div>
            </div>
          </div>
      );
    case "maximized":
      return (
          <div className="maximized-player">
              <img src={image?image:DefaultImage} className="maximized-player-image" alt="Song album"/>
              <div className="player-container">
                <div className="maximized-player-info">
                  <p className="player-song">{song}</p>
                  <p className="player-artist">{artist}</p>
                </div>
                <div className="buttons">
                  <div className="controls">
                        <Button type="icon" children={<SkipBack size={44}/>} /> 
                        <Button id="playButton" type="icon" children={isPlaying?<Pause size={44} strokeWidth="1.8px"/>:<Play size={44}/>} onClick={playPause}/> 
                        <Button type="icon" children={<SkipForward size={44}/>}/> 
                  </div>
                  <div className="container">
                    <label>
                      <input type="checkbox" className="isRepeat"/>
                      <i><Repeat size={30} /></i>
                    </label>
                    <Button type="icon" children={<Share2 size={30}/>}/> 
                  </div>
                </div>
                <div className="player-slider">
                  <input type="range" defaultValue={progress} className="progress" />
                  <span className="current-time">{current_time}</span>
                  <span className="song-duration">{duration}</span>
                </div>
              </div>
          </div>
      );
    default:
      break;
  }
}

export default Player;