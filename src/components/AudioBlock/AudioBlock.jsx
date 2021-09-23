import { hot } from 'react-hot-loader/root'
import React from 'react'
import { AudioBlockStyle, AudioRadioButton } from './AudioBlock.styles'
import { Play } from 'react-feather'
import DefaultImage from '../../assets/default.svg'

function AudioBlock(props) {
  const { id, song, artist, image, duration } = props
  return (
    <AudioRadioButton>
      <input type="radio" id={id} name="playlist" value={id} />
      <AudioBlockStyle>
        <img src={image ? image : DefaultImage} alt="Song album" />
        <div>
          <p className="song">{song}</p>
          <p className="artist">{artist}</p>
        </div>
        <p className="time">{duration}</p>
        <i>
          <Play size={40} />
        </i>
      </AudioBlockStyle>
    </AudioRadioButton>
  )
}

export default hot(AudioBlock)
