import { hot } from 'react-hot-loader/root'
import React, { useState } from 'react'
import { MinimizedPlayer, MaximizedPlayer, Slider, Container, Info } from './Player.styles.js'
import { Play, SkipBack, SkipForward, Repeat, Share2, Pause } from 'react-feather'
import DefaultImage from '../../assets/default.svg'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import mp3 from '../../assets/playlist/song.mp3'

function Player(props) {
  const { size, song, artist, image } = props
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio, setAudio] = useState(new Audio(mp3))
  const [current, setCurrent] = useState(0)

  const progressBar = React.createRef()

  function formatTime(time) {
    let min = Math.floor(time / 60)
    let sec = Math.floor(time % 60)
    if (sec < 10) {
      sec = `0${sec}`
    }
    return `${min} : ${sec}`
  }

  let updateInterval

  function update() {
    updateInterval = setInterval(() => {
      setCurrent(audio.currentTime)
    }, 1000)
  }

  update()

  function playPause() {
    if (isPlaying) {
      audio.pause()
      clearInterval(updateInterval)
    } else {
      update()
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  function handleAudioNavigation() {
    audio.currentTime = progressBar.current.value
    setCurrent(audio.currentTime)
  }

  function switchToPrev() {
    setAudio(new Audio(mp3))
  }

  switch (size) {
    case 'minimized':
      return (
        <MinimizedPlayer>
          <Slider>
            {audio.duration ? (
              <>
                <input
                  type="range"
                  ref={progressBar}
                  value={current}
                  min="0"
                  max={audio.duration}
                  onChange={handleAudioNavigation}
                />
                <div>
                  <span>{formatTime(current)}</span>
                  <span className="song-duration">{audio.duration ? formatTime(audio.duration) : ''}</span>
                </div>
              </>
            ) : (
              ''
            )}
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
                  <SkipBack size={44} onClick={switchToPrev} />
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
              <input type="range" defaultValue={(100 * audio.currentTime) / audio.duration} />
              <span>{formatTime(audio.currentTime)}</span>
              <span className="song-duration">{formatTime(audio.duration)}</span>
            </Slider>
          </div>
        </MaximizedPlayer>
      )
    default:
      break
  }
}

export default hot(Player)
