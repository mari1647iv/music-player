import { hot } from 'react-hot-loader/root'
import React, { useState } from 'react'
import { MinimizedPlayer, MaximizedPlayer, Slider, Container, Info } from './Player.styles.js'
import { Play, SkipBack, SkipForward, Repeat, Share2, Pause } from 'react-feather'
import DefaultImage from '../../assets/default.svg'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

function Player(props) {
  const { size, song, artist, image, duration } = props
  const [isPlaying, setIsPlaying] = useState(false)

  let current_time = '2:37'
  let progress =
    (100 * (Number(current_time.split(':')[0]) * 60 + Number(current_time.split(':')[1]))) /
    (Number(duration.split(':')[0]) * 60 + Number(duration.split(':')[1]))

  function playPause() {
    setIsPlaying(!isPlaying)
  }

  switch (size) {
    case 'minimized':
      return (
        <MinimizedPlayer>
          <Slider>
            <input type="range" defaultValue={progress} />
            <div>
              <span>{current_time}</span>
              <span className="song-duration">{duration}</span>
            </div>
          </Slider>
          <div>
            <Container>
              <img src={image ? image : DefaultImage} alt="Song album" />
              <Link to="/player">
                <Info className="player-info">
                  <p>{song}</p>
                  <p>{artist}</p>
                </Info>
              </Link>
              <div>
                <Button type="icon">
                  <SkipBack size={44} />
                </Button>
                <Button type="icon" onClick={playPause}>
                  {isPlaying ? <Pause size={44} strokeWidth="1.8px" /> : <Play size={44} />}
                </Button>
                <Button type="icon">
                  <SkipForward size={44} />
                </Button>
              </div>
            </Container>
            <Container>
              <label>
                <input type="checkbox" />
                <i>
                  <Repeat size={30} />
                </i>
              </label>
              <Button type="icon">
                <Share2 size={30} />
              </Button>
            </Container>
          </div>
        </MinimizedPlayer>
      )
    case 'maximized':
      return (
        <MaximizedPlayer>
          <img src={image ? image : DefaultImage} alt="Song album" />
          <div className="player-container">
            <Info className="player-info">
              <p>{song}</p>
              <p>{artist}</p>
            </Info>
            <div className="buttons">
              <div className="controls">
                <Button type="icon">
                  <SkipBack size={44} />
                </Button>
                <Button id="playButton" type="icon" onClick={playPause}>
                  {isPlaying ? <Pause size={44} strokeWidth="1.8px" /> : <Play size={44} />}
                </Button>
                <Button type="icon">
                  <SkipForward size={44} />
                </Button>
              </div>
              <Container>
                <label>
                  <input type="checkbox" />
                  <i>
                    <Repeat size={30} />
                  </i>
                </label>
                <Button type="icon">
                  <Share2 size={30} />
                </Button>
              </Container>
            </div>
            <Slider>
              <input type="range" defaultValue={progress} />
              <span>{current_time}</span>
              <span className="song-duration">{duration}</span>
            </Slider>
          </div>
        </MaximizedPlayer>
      )
    default:
      break
  }
}

export default hot(Player)
