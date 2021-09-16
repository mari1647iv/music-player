import React from "react";
import "./Card.css";
import {Youtube} from "react-feather";
import DefaultImage from "../../assets/default.svg";
import WImage from "../../assets/W.svg";

function Card(props) {
    const {type, artist, image, shortDescription, description, location, city, date, time, youtubeLink, wikiLink, eventLink} = props;

    switch (type) {
        case "artist":
            return (
                <div className="artist-card">
                    <img src={image?image:DefaultImage} className="song-image" alt="Avatar" />
                        <div className="info-container">
                            <h2 className = "song-artist">{artist}</h2>
                            <p className = "short-description">{shortDescription}</p>
                            <p className = "description">{description}</p>
                            <a href={wikiLink} className="wiki-link"> <img src={WImage} alt="Wikipedia Logo"/> Wiki link </a>
                            <a href={youtubeLink} className="youtube-link"> <Youtube size={30} color="#CECECE"/> YouTube link </a>
                        </div>
                </div>
            );
        case "event":
            return (
                <a href={eventLink} className="card-link">
                    <div className="event-card">
                        <img src={image?image:DefaultImage} className="event-image" alt="Avatar" />
                        <div className="info-container">
                            <h2 className = "event-artist">{artist}</h2>
                            <p className = "event-location">{location}</p>
                            <p className = "event-city">{city}</p>
                            <p className = "event-date">{"Date: " + date}</p>
                            <p className = "event-time">{"Time: " + time}</p>
                            <p className = "event-link">See more</p>
                        </div>
                    </div>
                </a>
            );
        default:
            return (
                <div className="card">
                </div>
            );
    }

}

export default Card;