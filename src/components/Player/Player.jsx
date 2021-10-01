import { hot } from 'react-hot-loader/root'
import React, { useState } from 'react'
import { MinimizedPlayer, MaximizedPlayer, Slider, Container, Info } from './Player.styles.js'
import { Play, SkipBack, SkipForward, Repeat, Share2, Pause } from 'react-feather'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

function Player(props) {
  const { size, song, artist, image, duration } = props
  const path = `assets/playlist/${artist}-${song}.mp3`.replace(/\s/g, '')
  const [isPlaying, setIsPlaying] = useState(false)
  let audio = new Audio(path)
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

  function update() {
    setCurrent(audio.currentTime)
  }

  let updateInterval = setInterval(() => {
    update()
  }, 1000)

  function playPause() {
    setIsPlaying(!isPlaying)
    if (isPlaying) {
      audio.pause()
      clearInterval(updateInterval)
    } else {
      update()
      audio.play()
    }
  }

  function handleAudioNavigation() {
    audio.currentTime = progressBar.current.value
    setCurrent(audio.currentTime)
  }

  function switchToPrev() {
    audio = new Audio(path)
  }

  switch (size) {
    case 'minimized':
      return (
        <MinimizedPlayer>
          <Slider>
            <>
              {!!audio.duration && (
                <input
                  type="range"
                  ref={progressBar}
                  value={current}
                  min="0"
                  max={audio.duration}
                  onChange={handleAudioNavigation}
                />
              )}
              <div>
                <span>{formatTime(current)}</span>
                <span className="song-duration">
                  {audio.duration ? formatTime(audio.duration) : duration.replace(':', ' : ')}
                </span>
              </div>
            </>
          </Slider>
          <div>
            <Container className="container-grow">
              <img src={image ? image : 'assets/default.svg'} alt="Song album" />
              <Link to="/player">
                <Info className="player-info">
                  <p>{song}</p>
                  <p>{artist}</p>
                </Info>
              </Link>
              <div className="controls">
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
          <img src={image ? image : 'assets/default.svg'} alt="Song album" />
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
