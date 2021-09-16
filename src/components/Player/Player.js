import React from "react";
import "./Player.css";
import {Play, SkipBack, SkipForward, Repeat, Share2} from "react-feather";
import  DefaultImage from "../../assets/default.svg";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function Player(props) {
  const { size, id, song, artist, image, duration } = props;

  switch (size) {
    case "minimized":
      return (
          <div className="minimized-player">
            <div className="container">
              <img src={image?image:DefaultImage} className="minimized-player-image" alt="Song album"/>
              <Link to="/player"  className="minimized-player-info">
                <p className="player-song">{song}</p>
                <p className="player-artist">{artist}</p>
              </Link>
              <div className="controls">
                    <Button type="icon" children={<SkipBack size={44}/>} /> 
                    <Button type="icon" children={<Play size={44}/>}/> 
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
      );
      break;
    case "maximized":
      return (
          <div className="maximized-player">
              <img src={image?image:DefaultImage} className="maximized-player-image" alt="Song album"/>
              <div>
                <div className="maximized-player-info">
                  <p className="player-song">{song}</p>
                  <p className="player-artist">{artist}</p>
                </div>
                <div className="container">
                  <div className="controls">
                        <Button type="icon" children={<SkipBack size={44}/>} /> 
                        <Button type="icon" children={<Play size={44}/>}/> 
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
              </div>
          </div>
      );
      break;
    default:
      break;
  }
}

export default Player;