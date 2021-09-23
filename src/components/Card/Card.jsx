import { hot } from 'react-hot-loader/root'
import React from 'react'
import { ArtistCardStyle, EventCardStyle } from './Card.styles'
import { Youtube } from 'react-feather'
import DefaultImage from '../../assets/default.svg'
import WImage from '../../assets/W.svg'

function Card(props) {
  const {
    type,
    artist,
    image,
    shortDescription,
    description,
    location,
    city,
    date,
    time,
    youtubeLink,
    wikiLink,
    eventLink
  } = props

  switch (type) {
    case 'artist':
      return (
        <ArtistCardStyle>
          <img src={image ? image : DefaultImage} alt="Avatar" />
          <div>
            <h2>{artist}</h2>
            <p>{shortDescription}</p>
            <p>{description}</p>
            <a href={wikiLink}>
              {' '}
              <img src={WImage} alt="Wikipedia Logo" /> Wiki link{' '}
            </a>
            <a href={youtubeLink}>
              {' '}
              <Youtube size={30} color="#CECECE" /> YouTube link{' '}
            </a>
          </div>
        </ArtistCardStyle>
      )
    case 'event':
      return (
        <a href={eventLink}>
          <EventCardStyle>
            <img src={image ? image : DefaultImage} alt="Avatar" />
            <div>
              <h2>{artist}</h2>
              <p className="location">{location + '\n' + city}</p>
              <p className="date-time">{'Date: ' + date + '\n' + 'Time: ' + time}</p>
              <p className="link">See more</p>
            </div>
          </EventCardStyle>
        </a>
      )
    default:
      return <div></div>
  }
}

export default hot(Card)
